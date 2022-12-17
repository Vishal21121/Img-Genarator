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

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    if(!text){
        console.log("hello")
        document.getElementById('alert').classList.toggle('invisible')
        setTimeout(()=>{
            document.getElementById('alert').classList.toggle('invisible')
        },5000)
    }else{
        document.getElementById('img').setAttribute('src', 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')
        request()
    }
})


