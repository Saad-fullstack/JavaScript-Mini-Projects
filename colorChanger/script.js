const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    // console.log(button.id);

    button.addEventListener("click", function (changeColor) {
        if (button.id === 'grey') {
            body.style.backgroundColor = button.id
        }
        if (button.id === 'white') {
            body.style.backgroundColor = button.id
        }
        if (button.id === 'blue') {
            body.style.backgroundColor = button.id
        }
        if (button.id === 'yellow') {
            body.style.backgroundColor = button.id
        }
    })

})