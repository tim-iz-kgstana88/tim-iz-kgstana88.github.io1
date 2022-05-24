let homeBtn = document.querySelector('.homeBtn');
homeBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior : 'smooth'
    })
})