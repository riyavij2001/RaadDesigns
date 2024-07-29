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
    const otp = crypto.randomInt(100000, 999999).toString();
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
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
  <div style="font-family: Arial, sans-serif; color: #262425; background-color: #E0CCBE; padding: 20px; border-radius: 10px;">
    <h1 style="color: #262425; text-align: center;">Welcome to RaaD Designs!</h1>
    <p style="font-size: 16px;">We're excited to have you on board. To complete your registration, please verify your email address using the OTP below:</p>
    <div style="text-align: center; margin: 20px 0;">
      <h2 style="color: #262425; background-color: #E0CCBE; display: inline-block; padding: 10px 20px; border-radius: 5px;">${otp}</h2>
    </div>
    <p style="font-size: 16px;">This OTP will expire in 10 minutes, so use it soon to unlock a world of stylish possibilities.</p>
    <p style="font-size: 16px;">If you didn't request this, please ignore this email.</p>
    <p style="font-size: 16px;">Cheers,</p>
    <p style="font-size: 16px;"><strong>The RaaD Designs Team</strong></p>
  </div>
`;

    // Send the OTP to the user's email
    // await sendEmail(email, otp, html);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP Verification",
      // text: `Your OTP is: ${otp}`,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error sending email");
      }
      console.log("Email sent: " + info.response);
      res.status(201).send("Signup successful! Please verify your email.");
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

app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await SignUpUser.findOne({
      email,
      otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send("Invalid or expired OTP");
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.send("Email verified successfully");
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
});
const resetTokens = {};

app.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await SignUpUser.findOne({
      email,
    });

    if (!user) {
      return res.status(400).send("User with this email does not exists");
    }

    user.isVerified = true;

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpires = Date.now() + 60 * 60 * 1000;

    resetTokens[resetToken] = {
      token : resetToken,
      email,
      expires: resetTokenExpires,
    };

    // console.log("Generated reset token:", resetToken); // Debugging line
    // console.log("Reset tokens store:", resetTokens); // Debugging line
    // console.log("Res",resetTokens[token]);


    const resetLink = `http://localhost:5173/resetPassword?token=${resetToken}`;
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
    <div style="font-family: Arial, sans-serif; color: #262425; background-color: #E0CCBE; padding: 20px; border-radius: 10px;">
      <h1 style="color: #262425; text-align: center;">Reset Your Password</h1>
      <p style="font-size: 16px;">It happens to the best of us! To reset your password, please click the link below:</p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="${resetLink}" style="color: #fff; background-color: #262425; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
      </div>
      <p style="font-size: 16px;">If you didn’t request a password reset, you can safely ignore this email.</p>
      <p style="font-size: 16px;">Cheers,</p>
      <p style="font-size: 16px;"><strong>The RaaD Designs Team</strong></p>
    </div>
  `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "RaaD Designs Password Reset Request",
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error sending email");
      }
      console.log("Email sent: " + info.response);
      res
        .status(201)
        .send(
          "Password reset mail sent successful! Please reset your password"
        );
    });


    res.send("Verification link sent successfully");
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
});

app.post("/resetPassword", async (req, res) => {
  // Log the entire request body to check its structure
  // console.log("Request body received:", req.body);

  const { token, password } = req.body;

  // Log the extracted token and newPassword
  // console.log("Extracted token:", token);
  // console.log("Extracted newPassword:", password);

  try {
    // Validate token
    const tokenData = resetTokens[token];
    
    // console.log("Token received:", token); // Debugging line
    // console.log("Token data:", tokenData); // Debugging line

    if (!tokenData) {
      return res.status(400).send("Invalid or expired token: Token not found");
    }

    if (tokenData.expires < Date.now()) {
      delete resetTokens[token]; // Clean up expired token
      return res.status(400).send("Invalid or expired token: Token has expired");
    }

    // Find user by email
    const user = await SignUpUser.findOne({ email: tokenData.email });
    
    if (!user) {
      return res.status(400).send("User not found");
    }

    // Hash the new password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password
    user.password = hashedPassword;

    await user.save();

    // Clean up the token
    delete resetTokens[token];

    res.send("Password reset successfully");
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).send("Something went wrong");
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
