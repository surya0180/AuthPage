import express from 'express'
import connectDB from './config/db.js';
import userRoute from './routes/api/users.js';
import authRoute from './routes/api/auth.js';
import profileRoute from './routes/api/profile.js';


const app = express();
connectDB()
app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send("API Running"))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/profile', profileRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));