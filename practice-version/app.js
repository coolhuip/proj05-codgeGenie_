const submitButton = document.querySelector('#submit')      // id
const outputElement = document.querySelector('#output')     // id
const inputElement = document.querySelector('input')        // tag
const buttonElement = document.querySelector('button')      // tag
const historyElement = document.querySelector('.history')   // class


function changeInput(val) {
    const inputElement = document.querySelector('input')
    inputElement.val = val
}

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
        if (data.choices[0].message.content && inputElement.value) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click', changeInput(pElement.textContent))
            historyElement.append(pElement)
        }
    } catch (e) {
        console.error(e)
    }
}

function clearInput() {
    inputElement.value = ''
}

function main() {
    submitButton.addEventListener('click', getMessage)
    buttonElement.addEventListener('click', clearInput)
}


// Client Code
main()
