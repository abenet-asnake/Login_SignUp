// import express 
const express = require('express');
const dotenv = require('dotenv').config();
const app=express();
const port=process.env.PORT_NUMBER || 3000;
app.listen(port,()=>{
    console.log(`Server is listening on http://localhost: ${port}`);
});
