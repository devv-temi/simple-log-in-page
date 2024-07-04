const submitEl = document.getElementById('submit')
const forgotEl = document.querySelector('.forgot-password')

function anotherPage() {
    alert('Successful logged in!')
    window.open("website-clone-master/website-clone-master/finetuned.html");
}

submitEl.addEventListener('click', anotherPage)

forgotEl.addEventListener('click', function(){
    alert('Wrong password or ID!')
})  