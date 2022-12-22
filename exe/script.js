if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="../mobile.css">'
} else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="../style.css">'
}

import {
    initialCardsAlgor, text, verl, neverl, prav, div, initialCards, issko
} from './constant.js';

let ver = 0
let never = 0
let random = 0
var numPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
function shuffle(numPool) {
    for (var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
    return numPool;
};


let a = shuffle(numPool);
let arr = []
let isskol = 0
function open() {
    isskol = isskol + 1
    arr = []
    issko.textContent = isskol + "/" + initialCards.length
    document.querySelector('.button__container').innerHTML = ""

    div.classList.remove('disabled')

    var otveto = [1, 2, 3, 4, 5, 6]
    function otvetodd(otveto) {
        for (var j, x, i = otveto.length; i; j = parseInt(Math.random() * i), x = otveto[--i], otveto[i] = otveto[j], otveto[j] = x);
        return otveto;
    };
    let b = shuffle(otveto);

    random = a[0]

    a.splice(0, 1);
    initialCards.map((i) => {

        if (i.id == random) {
            text.textContent = i.text
            b.map(b => {

                if (b == 1) {
                    if (i.one) {
                        let btn = document.createElement("button");
                        btn.className = "onel btn";
                        btn.innerHTML = i.one
                        btn.id = 1
                        btn.index = 1
                        btn.addEventListener('click', (event) => {
                            otvet(event, i.otvet)
                        })
                        document.querySelector('.button__container').appendChild(btn);
                    }

                }
                if (b == 2) {
                    if (i.two) {
                        let btn = document.createElement("button");
                        btn.className = "twol btn";
                        btn.innerHTML = i.two
                        btn.id = 2
                        btn.index = 2
                        btn.addEventListener('click', (event) => {
                            otvet(event, i.otvet)
                        })
                        document.querySelector('.button__container').appendChild(btn);
                    }

                }
                if (b == 3) {
                    if (i.three) {
                        let btn = document.createElement("button");
                        btn.className = "threel btn";
                        btn.innerHTML = i.three
                        btn.id = 3
                        btn.index = 3
                        btn.addEventListener('click', (event) => {
                            otvet(event, i.otvet)
                        })
                        document.querySelector('.button__container').appendChild(btn);
                    }

                }
                if (b == 4) {
                    if (i.four) {
                        let btn = document.createElement("button");
                        btn.className = "fourl btn";
                        btn.innerHTML = i.four
                        btn.id = 4
                        btn.index = 4
                        btn.addEventListener('click', (event) => {
                            otvet(event, i.otvet)
                        })
                        document.querySelector('.button__container').appendChild(btn);
                    }

                }
                if (b == 5) {
                    if (i.five) {
                        let btn = document.createElement("button");
                        btn.className = "fivel btn";
                        btn.innerHTML = i.five
                        btn.id = 5
                        btn.index = 5
                        btn.addEventListener('click', (event) => {
                            otvet(event, i.otvet)
                        })
                        document.querySelector('.button__container').appendChild(btn);
                    }

                }
                if (b == 6) {
                    if (i.six) {
                        let btn = document.createElement("button");
                        btn.className = "sixl btn";
                        btn.innerHTML = i.six
                        btn.id = 6
                        btn.index = 6
                        btn.addEventListener('click', (event) => {
                            otvet(event, i.otvet)
                        })
                        document.querySelector('.button__container').appendChild(btn);
                    }

                }
            })


        }

    })
}
let skoko = 0;

function otvet(e, otvet) {

    arr.push(e.target.index)
    e.target.classList.add('green')
    e.target.disabled = true
    if (arr.length == otvet.length) {
        const addCartBtns = Array.from(document.querySelectorAll('.btn'))

        arr.sort(function (a, b) {
            return a - b;
        });
        if (JSON.stringify(arr) == JSON.stringify(otvet)) {
            addCartBtns.map((i) => {
                i.disabled = true;
            })
            skoko = skoko + 1
            if (skoko == 90) {
                vse()
            } else {
                ver = ver + 1
                verl.textContent = "правильных" + ' ' + ver
                let btn = document.createElement("button");
                btn.className = "btn neprav";
                btn.innerHTML = "Далее"
                btn.addEventListener('click', neprav)
                document.querySelector('.button__container').appendChild(btn);

            }
        } else {
            addCartBtns.map((i) => {
                i.disabled = true;
                i.classList.add('red')
            })
            setTimeout(() => {

                otvet.map(i => {
                    document.getElementById(`${i}`).classList.remove('red')
                    document.getElementById(`${i}`).classList.add('green')

                })

                skoko = skoko + 1
                let btn = document.createElement("button");
                btn.className = "btn neprav";
                btn.innerHTML = "Далее"
                btn.addEventListener('click', neprav)
                document.querySelector('.button__container').appendChild(btn);
                never = never + 1
                neverl.textContent = " не правильных" + ' ' + never
            }, 200)
        }

    }



}


function neprav() {
    if (skoko == 90) {
        vse()
    } else {

        open()

    }
}



function vse() {

    const ochenka = document.querySelector('.ocenka')
    document.querySelector('.itog').classList.remove('disabled')
    div.classList.add('disabled')
    if (ver < 45) {
        ochenka.textContent = '2'
        ochenka.classList.add('redl')
    }
    if (ver > 45) {
        ochenka.textContent = '3'
        ochenka.classList.add('orangel')
    }
    if (ver > 75) {
        ochenka.textContent = '4'
        ochenka.classList.add('postgreenl')
    }
    if (ver > 84) {
        ochenka.textContent = '5'
        ochenka.classList.add('greenl')
    }
}


open()