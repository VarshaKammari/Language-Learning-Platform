//to run node server type "npm run dev" in terminal

const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const User=require('./models/User');

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/full-mern-stack-video', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.post('/api/register',async(req,res)=>{
    console.log('Received request for /api/register:', req.body);
   try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        });
        res.json({status:'ok'})
   }catch(err){
    console.error('Error registering user:', err);
        res.json({status:'error'})
   }
   
});

app.post('/api/login', async (req,res)=>{
    console.log('Received request for /api/login:', req.body); // Log the request body
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (user) {
            return res.json({
                status: 'ok',
                user: true,
            });
        } else {
            return res.json({
                status: 'error',
                user: false,
            });
        }
    } catch (err) {
        console.error('Error logging in user:', err);
        res.json({ status: 'error', user: false });
    }
});

app.get('/api/quote',async (req,res)=>{
    const email=req.query.email;
    try{       
        const user=await User.findOne(
           {email:email}
        );
        if(user){
            res.json({status:'ok',quote:user.quote});
        }else{
            res.json({status:'error',error:'user not found'});
        }
    }catch(error){
        console.log(error)
        res.json({status:'error',error:'server error'})
    }
})

app.post('/api/quote/update',async (req,res)=>{
    const email=req.body.email;
    try{
        const user=await User.findOneAndUpdate(
           {email:email},
           {$set:{quote:req.body.quote}},
           {new:true}
        );
        if (user) {
            return res.json({ status: 'ok' ,quote:user.quote});
        } else {
            res.json({ status: 'error', error: 'user not found' });
        }
    }catch(error){
        console.log(error)
        res.json({status:'error',error:'server error'})
    }
})

app.listen(1337,()=>{
    console.log("Server started on port 1337");
});

