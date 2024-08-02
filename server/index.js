const express=require('express');
const app=express();
const cors=require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose=require('mongoose');
const User=require('./models/LLP');

app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to match your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent
}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/project',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
            res.json({ token, user });
        } else {
            res.status(401).json('Invalid Credentials');
        }
    } catch (error) {
        console.error('Error in /login endpoint:', error);
        res.status(500).json('Internal Server Error');
    }
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, score: 0 });
        await user.save();
        res.status(201).send('User Registered');
    } catch (error) {
        console.error('Error in /register endpoint:', error);
        res.status(500).json('Internal Server Error');
    }
});

app.post('/updateScore', async (req, res) => {
    try {
        const { token, score } = req.body;
        const decoded = jwt.verify(token, 'your_jwt_secret');
        await User.updateOne({ _id: decoded.userId }, { score });
        res.json('Score Updated');
    } catch (error) {
        console.error('Error in /updateScore endpoint:', error);
        res.status(500).json('Internal Server Error');
    }
});

app.get('/getScore', async (req, res) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ score: user.score });
    } catch (error) {
        console.error('Error retrieving score:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(3002,()=>{console.log("Server Started at port 3002")});