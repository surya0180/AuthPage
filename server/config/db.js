import mongoose from 'mongoose'
import config from 'config'

const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error, " Failed connecting mongoDB")
        process.exit(1)
    }
}

export default connectDB