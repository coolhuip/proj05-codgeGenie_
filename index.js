const { Configuration, OpenAIApi } = require("openai")
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()
const configuration = new Configuration({
    organization: "org-7kecyLp6TEHOTgU54CUfQ78M",
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)


const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body
    console.log(message)
    // const completion = await openai.createChatCompletion(
    //     {
    //         model: "gpt-3.5-turbo",
    //         messages: [
    //             {"role": "system", 
    //              "content": "You are a helpful assistant."
    //             },
    //             {role: "user",
    //              content: "How's it going?"
    //             }
    //         ],
    //         max_tokens: 2,
    //         temperature: 0.9,
    //     }
    // )
    // console.log(completion.data.choices[0].message)
    res.json({
        data: response.data
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

