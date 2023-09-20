const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


   async function sendMessage (req, res){
    
    const { message } = req.body

   
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0,
      max_tokens: 14,
    });
    const reply = response.data.choices[0].text;
    
        console.log(reply)
        res.json({reply})
   
  }

  module.exports = {
    sendMessage
  }



