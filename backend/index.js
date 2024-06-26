const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/RaaDesigns', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
// Schema for users of app
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
});
const User = mongoose.model('RaaDesignsContactUs', UserSchema);
User.createIndexes();
 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("App is Working");
});
 
app.post("/contactUs", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User data already submitted");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(5000);