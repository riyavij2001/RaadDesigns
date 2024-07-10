const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/RaaDesigns", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the User schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    concern: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("RaaDesignsContactUs", UserSchema);
User.createIndexes();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("App is Working");
});

app.post("/contactUs", async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      res.send(req.body);
      console.log(result);
    } else {
      console.log("User data already submitted");
    }
  } catch (e) {
    res.send("Something Went Wrong");
  }
});

const router = express.Router();

// Define the SignUp schema
const UserSchema1 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: String,
  otpExpires: Date,
});

const SignUpUser = mongoose.model("RaaDesignsSignUp", UserSchema1);
SignUpUser.createIndexes();

app.post("/signUp", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await SignUpUser.findOne({ email });

    if (existingUser) {
      return res.status(409).send("Email already registered");
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const otp = crypto.randomBytes(3).toString('hex'); // Generate a 6-character OTP
    const otpExpires = Date.now() + 3600000; // 1 hour

    const newUser = new SignUpUser({
      name,
      email,
      password: passwordHash,
      otp,
      otpExpires,
    });

    const result = await newUser.save();

    // const token = jwt.sign(
    //   {
    //     id: result._id,
    //     email: result.email,
    //     name: result.name,
    //   },

    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: "2d",
    //   }
    // );

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent: ' + info.response);
      res.status(201).send('Signup successful! Please verify your email.');
    });

    // res.status(201).json({ token });
  } catch (e) {
    res.status(500).send("Something Went Wrong!");
  }
});

//Login

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await SignUpUser.findOne({ email });

    if (!existingUser) {
      return res.status(409).send("Email not registered");
    }

    const { _id: id, password: passwordHash, name } = existingUser;
    const isCorrect = await bcrypt.compare(password, passwordHash);

    if (isCorrect) {
      jwt.sign(
        { id, email, name },
        process.env.JWT_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) {
            res.status(500).json(err);
          }
          res.status(200).json({ token });
        }
      );
    } else {
      res.sendStatus(401);
    }
  } catch (e) {
    res.status(500).send("Something Went Wrong");
  }
});


app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await SignUpUser.findOne({
      email,
      otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send('Invalid or expired OTP');
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.send('Email verified successfully');
  } catch (error) {
    res.status(500).send('Something Went Wrong');
  }
});


const PORT = process.env.PORT || 5000;

app.use("/api/user", router);

app.listen(5000, () => {
  console.log("App listening at port 5000");
});

module.exports = {
  User,
  SignUpUser,
};

//To start server add in terminal "nodemon index.js"
