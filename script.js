if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="mobile.css">'
  } else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="style.css">'
}

import { initialCardsAlgor, text, onel, twol, threel, fourl,
    fivel,sixl,verl,neverl,prav,btn,div,
     } from './constant.js';
let otvetik
let otvetikl
let ver = 0
let never = 0
let random = 0
    var numPool = [1, 2, 3, 4, 5, 6, 7,8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33 ];
    function shuffle(numPool) {
        for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
        return numPool;
      };
      const addCartBtns = Array.from(document.querySelectorAll('.add-to-cart'))
function open(e) {
    addCartBtns.map((i)=> {
        i.classList.remove('disabled')
   })
    let a = shuffle(numPool);
    div.classList.remove('disabled')
     btn.classList.add('disabled')
     e.target.classList.remove('green')
     e.target.classList.remove('red')
   random = a[0]

   a.splice(0, 1);
    initialCardsAlgor.map((i) => {
        
        if (i.id == random) {

            text.textContent = i.text;
            onel.textContent = i.one;
            twol.textContent = i.two;
            if (i.three) {
              
                threel.textContent = i.three;
            }else {
                threel.classList.add('disabled')
             }
            if (i.four) {
                fourl.textContent = i.four;
            }else {
                fourl.classList.add('disabled')
             }

            if (i.five) {
                fivel.textContent = i.five;
            }
            else {
                fivel.classList.add('disabled')
             }
            if (i.six) {
                sixl.textContent = i.six;
            } else {
               sixl.classList.add('disabled')
            }
            
            otvetikl= i.otvet
            if (i.otvet == "one") {
                addCartBtns.map((i)=> {
                     i.addEventListener('click', (event) => {neverny(event)})
                })
                onel.addEventListener('click', (event) => {verny(event)})

                otvetik = i.one
            }
            if (i.otvet == "two") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                twol.addEventListener('click', (event) => {verny(event)})
                otvetik = i.two
            }
            if (i.otvet == "three") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                threel.addEventListener('click', (event) => {verny(event)})
                otvetik = i.three
            }
            if (i.otvet == "four") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                fourl.addEventListener('click', (event) => {verny(event)})
                otvetik = i.four
            }
            if (i.otvet == "five") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                fivel.addEventListener('click', (event) => {verny(event)})
                otvetik = i.four
            }
            if (i.otvet == "six") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                sixl.addEventListener('click', (event) => {verny(event)})
                otvetik = i.four
            }
            if(i.otvet == "one and five") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                onel.addEventListener('click', (event) => {neskolko(event)})
                fivel.addEventListener('click', (event) => {neskolko(event)})

                otvetik = i.one + '' + i.five
            }
            if(i.otvet == "two and five") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                twol.addEventListener('click', (event) => {neskolko(event)})
                threel.addEventListener('click',  (event) => {neverny(event)})

                fivel.addEventListener('click', (event) => {neskolko(event)})

                otvetik = i.one + '' + i.five
            }
            if(i.otvet == "one and three") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                onel.addEventListener('click', (event) => {neskolko(event)})
                threel.addEventListener('click',  (event) => {neskolko(event)})

                otvetik = i.one + '' + i.five
            }
            if(i.otvet == "three and four") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                threel.addEventListener('click',  (event) => {neskolko(event)})
                fourl.addEventListener('click', (event) => {neskolko(event)})

                otvetik = i.one + '' + i.five
            }
            if(i.otvet == "two and three") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                twol.addEventListener('click', (event) => {neskolko(event)})
                threel.addEventListener('click',  (event) => {neskolko(event)})

                otvetik = i.one + '' + i.five
            }
            if(i.otvet == "one and two and three") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                onel.addEventListener('click', (event) => {neskolko(event)})
                twol.addEventListener('click', (event) => {neskolko(event)})
                threel.addEventListener('click',  (event) => {neskolko(event)})

                otvetik = i.one + '' + i.five
            }
            if(i.otvet == "one and two and four") {
                addCartBtns.map((i)=> {
                    i.addEventListener('click', (event) => {neverny(event)})
               })
                onel.addEventListener('click', (event) => {neskolko(event)})
                twol.addEventListener('click', (event) => {neskolko(event)})
                fourl.addEventListener('click', (event) => {neskolko(event)})

                otvetik = i.one + '' + i.five
            }

            
        }

    })
}
let skoko = 0;

function neskolko(e) {
    e.target.classList.add('green')
}


function verny(e) {

    e.target.classList.add('green')
    prav.textContent = "OK"
    ver = ver + 1
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        verl.textContent = ver 
      } else {
        verl.textContent = 'правильных' + " " + ver 
    }
    

   addCartBtns.map((i)=> {
    i.removeEventListener('click', (event) => {neverny(event)})
    i.removeEventListener('click', (event) => {verny(event)})
})
    skoko = skoko + 1
    if(skoko == 33){
        onel.classList.add('disabled')
        twol.classList.add('disabled')
        threel.classList.add('disabled')
        fourl.classList.add('disabled')
        fivel.classList.add('disabled')
        sixl.classList.add('disabled')
    } else {
        
        
        setTimeout(() => {
            e.target.classList.remove('green')
            open(e)
        }
            , 50)
    }

}
function neverny(e) {

    e.target.classList.add('red')
    never = never + 1

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        prav.textContent = 'правильным было' + " " + otvetik 
        neverl.textContent = never
      } else {
        prav.textContent = 'правильным было' + " " + otvetik 
        neverl.textContent = 'неправильных' + " " + never
    }
    addCartBtns.map((i)=> {
        i.removeEventListener('click', (event) => {neverny(event)})
        i.removeEventListener('click', (event) => {verny(event)})
   })
    skoko = skoko + 1
    if(skoko == 33){
        addCartBtns.map((i)=> {
            i.classList.add('disabled')

       })
    } else {

        setTimeout(() => {
            e.target.classList.remove('red')
            open(e)
        }
            , 800)
    }

}

btn.addEventListener('click', open)

