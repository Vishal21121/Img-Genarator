// express initialization
const express = require('express')
// using dotenv package
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors())
const { Configuration, OpenAIApi } = require("openai");



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// api route
app.post('/api/image',async (req,res)=>{
    const {prompt} = req.body
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
    console.log(response.data.data[0].url)
    res.status(200).json({success:true,data:response.data.data[0].url})
    
})

app.listen(5000,()=>{
    console.log("listening at port 5000")
})
