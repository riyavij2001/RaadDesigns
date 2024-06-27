const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

mongoose.connect('mongodb://localhost:27017/RaaDesigns', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const { signUpUser, loginUser } = require('./controllers/authController');

// Define the User schema
const UserSchema = new mongoose.Schema({
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
}, { timestamps: true });

const User = mongoose.model('RaaDesignsContactUs', UserSchema);
User.createIndexes();

// Define the LoginUser schema
const UserSchema1 = new mongoose.Schema({
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

UserSchema1.statics.signUpUser = async(email, password) => {
    const exists = await this.findOne({ email })

    if (exists){
        throw Error("Email already registered!")
    }
}

const LoginUser = mongoose.model('RaaDesignsLogin', UserSchema1);

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

// Define the routes
router.post('/login', loginUser);
router.post('/signUp', signUpUser);

app.use('/api/user', router);

app.listen(5000, () => {
    console.log("App listening at port 5000");
});

module.exports = {
    User,
    LoginUser
};
