const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config(); 
const router = require('./routes/route'); 
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

app.use('/recipe', router); 


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
