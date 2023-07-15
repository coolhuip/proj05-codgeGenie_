const submitButton = document.querySelector('#submit')      // id
const outputElement = document.querySelector('#output')     // id
const inputElement = document.querySelector('input')        // tag
const historyElement = document.querySelector('.history')   // class


async function getMessage() {
    console.log('clicked')

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user",
                "content": inputElement.value
            }],
            max_tokens: 100
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outputElement.textContent = data.choices[0].message.content
        console.log()
        if (data.choices[0].message.content) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            historyElement.append(pElement)
        }
    } catch (e) {
        console.error(e)
    }
}

submitButton.addEventListener('click', getMessage)
