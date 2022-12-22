if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="mobile.css">'
} else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="style.css">'
}

document.querySelector('.start').addEventListener('click', (i) => {
    i.target.classList.add('disabled')
      document.querySelector('.quiz-frame').classList.remove('disabled')
})