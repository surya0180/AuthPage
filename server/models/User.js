import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    }, 
    lastname: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', UserSchema)
export default User