const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes')

const app = express();


app.use((req,res,next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.originalUrl}`)
    next();
})


app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/bookdb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB connection error:", err.message));




app.use('/books',bookRoutes);

app.get('/',(req,res) => {
    res.send('book management API is running');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server listening on http://localhost:${PORT}`);

})

