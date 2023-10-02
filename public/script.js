var errorMessage = document.querySelector('.err');
if(errorMessage.innerHTML !=''){
    errorMessage.classList.add('error');
}
setTimeout(function() {
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}, 5000);


