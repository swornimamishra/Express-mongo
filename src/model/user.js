import mongoose from './index.js';

// Email validation function
const emailValidation = (value) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(value);
};

// Mobile validation function
const mobileValidation = (value) => {
    const re = /^\d{10}$/;
    return re.test(value);
};

// User schema definition
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: emailValidation,
            message: props => `${props.value} is not a valid email`,
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        validate: {
            validator: mobileValidation,
            message: props => `${props.value} is not a valid mobile number`,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now, // Using a function to get the current date/time
    },
    status: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        default: "user",
    },
    books: {
        type: [String], // Define array type more explicitly
        default: [],
    },
}, {
    versionKey: false,
    collection: 'users',
});

// Creating the user model
const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
