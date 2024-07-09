const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/RaaDesigns", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const { signUpUser, loginUser } = require('./controllers/authController');

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

    const newUser = new SignUpUser({
      name,
      email,
      password: passwordHash,
    });

    const result = await newUser.save();

    const token = jwt.sign(
      {
        id: result._id,
        email: result.email,
        name: result.name,
      },

      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );
    res.status(201).json({ token });
  } catch (e) {
    res.status(500).send("Something Went Wrong");
  }
});

const PORT = process.env.PORT || 5000;

//     let result = await user.save();
//     result = result.toObject();
//     if (result) {
//         delete result.password;
//         res.send(req.body);
//         console.log(result);
//     } else {
//         console.log("User data already submitted");
//     }
// } catch (e) {
//     res.send("Something Went Wrong");
// }

// Define the routes
// router.post('/login', loginUser);
// router.post('/signUp', signUpUser);

app.use("/api/user", router);

app.listen(5000, () => {
  console.log("App listening at port 5000");
});

module.exports = {
  User,
  SignUpUser,
};

//To start server add in terminal "nodemon index.js"
