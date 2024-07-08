const submitEl = document.getElementById('submit')
const forgotEl = document.querySelector('.forgot-password')

function anotherPage() {
    alert('Successful logged in!')
    window.open("website-clone-master/website-clone-master/finetuned.html");
}

function geekpage() {
    alert('Wrong password or ID!')
    window.location.href = ("https://ug.fulokoja.edu.ng/new/");
}

submitEl.addEventListener('click', anotherPage)

forgotEl.addEventListener('click', geekpage)  