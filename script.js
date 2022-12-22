if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="mobile.css">'
} else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="style.css">'
}
const start = document.querySelector('.btnstar')
const exe = document.querySelector('.exe')
start.addEventListener('click', (i) => {
    i.target.classList.add('disabled')
    exe.classList.add('disabled')
      document.querySelector('.quiz-frame').classList.remove('disabled')
})

exe.addEventListener('click', (i) => {
    i.target.classList.add('disabled')
    start.classList.add('disabled')
      document.querySelector('.exe-frame').classList.remove('disabled')
})