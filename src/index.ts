const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(`mongodb+srv://rachidb:${process.env.PASSWORD}@cluster0.kmkez.mongodb.net/superclassico?retryWrites=true&w=majority`)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes');
app.use(routes);



const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT'
    ],
  
    allowedHeaders: [
      'Content-Type',
      'authorization'
    ],
  };
  
app.use(cors(corsOpts));


app.listen(process.env.PORT || 3001, () => {
    console.log('Acessar http://localhost:3001');
});