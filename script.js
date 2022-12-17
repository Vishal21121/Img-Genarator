let text;
document.getElementById('text').addEventListener('input', (e) => {
    text = e.target.value;
})

const request = async function () {
    const response = await fetch('http://localhost:5000/api/image', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "prompt": text
        })
    })
    let val = await response.json();
    document.getElementById('img').setAttribute('src', val.data)
}

document.addEventListener('keyup', (e) => {
    if (e.code == 'Enter') {
        document.getElementById('img').setAttribute('src', 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')
        request()
    }
})

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('img').setAttribute('src', 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')
    request()
})