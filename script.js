if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="mobile.css">'
} else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="style.css">'
}

import {
    initialCardsAlgor, text, verl, neverl, prav, btn, div, initialCards, issko
} from './constant.js';

let ver = 0
let never = 0
let random = 0
var numPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
function shuffle(numPool) {
    for (var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
    return numPool;
};

let cache
let a = shuffle(numPool);
let arr = []
function open() {
    arr = []
     issko.textContent = skoko + "/" + initialCards.length 
    document.querySelector('.button__container').innerHTML = ""

    div.classList.remove('disabled')
    btn.classList.add('disabled')

    random = a[0]

    a.splice(0, 1);
    initialCards.map((i) => {
        if (i.id == random) {
            text.textContent = i.text
            if (i.one) {
                let btn = document.createElement("button");
                btn.className = "onel btn";
                btn.innerHTML = i.one
                btn.id = 1
                btn.addEventListener('click', (event) => {
                    otvet(event, i.otvet)
                })
                document.querySelector('.button__container').appendChild(btn);
            }
            if (i.two) {
                let btn = document.createElement("button");
                btn.className = "twol btn";
                btn.innerHTML = i.two
                btn.id = 2
                btn.addEventListener('click', (event) => {
                    otvet(event, i.otvet)
                })
                document.querySelector('.button__container').appendChild(btn);
            }
            if (i.three) {
                let btn = document.createElement("button");
                btn.className = "threel btn";
                btn.innerHTML = i.three
                btn.id = 3
                btn.addEventListener('click', (event) => {
                    otvet(event, i.otvet)
                })
                document.querySelector('.button__container').appendChild(btn);
            }
            if (i.four) {
                let btn = document.createElement("button");
                btn.className = "fourl btn";
                btn.innerHTML = i.four
                btn.id = 4
                btn.addEventListener('click', (event) => {
                    otvet(event, i.otvet)
                })
                document.querySelector('.button__container').appendChild(btn);
            }
            if (i.five) {
                let btn = document.createElement("button");
                btn.className = "fivel btn";
                btn.innerHTML = i.five
                btn.id = 5
                btn.addEventListener('click', (event) => {
                    otvet(event, i.otvet)
                })
                document.querySelector('.button__container').appendChild(btn);
            }
            if (i.six) {
                let btn = document.createElement("button");
                btn.className = "sixl btn";
                btn.innerHTML = i.six
                btn.id = 6
                btn.addEventListener('click', (event) => {
                    otvet(event, i.otvet)
                })
                document.querySelector('.button__container').appendChild(btn);
            }

        }

    })
}
let skoko = 0;

btn.addEventListener('click', open)

function otvet(e, otvet) {

    arr.push(e.target.id)

        for (var i = 0; i < otvet.length; i++) {
            cache = otvet[i]
            for (var j = 0; j < arr.length; j++) {
                if (cache == arr[j]) {
                      document.getElementById(`${arr[j]}`).disabled = true;
                      document.getElementById(`${arr[j]}`).classList.add('green')
                    if (otvet.length == arr.length) {
                        
                        ver = ver + 1
                        verl.textContent = "правильных" + ' ' + ver

                        skoko = skoko + 1
                        if (skoko == 90) {
                            a = shuffle(numPool);
                        } else {

                            setTimeout(open, 500)

                        }
                    }
                } else {
                    otvet.map(i => {
                        document.getElementById(`${i}`).classList.add('green')
                    })
                    never = never + 1
                    document.getElementById(`${arr[j]}`).classList.add('red')

                    neverl.textContent =" не правильных" + ' ' + never 
                    skoko = skoko + 1
                    let btn = document.createElement("button");
                    btn.className = "btn neprav";
                    btn.innerHTML = "Далее"
                    btn.addEventListener('click', neprav)
                    document.querySelector('.button__container').appendChild(btn);


                }

            }
        }

    
}

function neprav() {
    if (skoko == 90) {
        a = shuffle(numPool);
    } else {

        open()

    }
}