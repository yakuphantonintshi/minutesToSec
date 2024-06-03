document.querySelector('.output').addEventListener('click' , () =>{
    let minutes = +document.querySelector('#mins').value
    let output = document.querySelector('#results')
    output.innerText = (`${minutes} minutes is equal to ${minutes * 60} seconds`)
})