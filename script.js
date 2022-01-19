const menuBtn = document.querySelector('.header-menu-btn')

let menuOpen = false

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
        alert('is open')
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
        alert('is closed')
    }
})