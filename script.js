if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="mobile.css">'
  } else {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="style.css">'
}

import { initialCardsAlgor, text, verl,neverl,prav,btn,div,
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
function open() {
    document.querySelector('.button__container').innerHTML = ""
    let a = shuffle(numPool);
    div.classList.remove('disabled')
     btn.classList.add('disabled')

   random = a[0]

   a.splice(0, 1);
    initialCardsAlgor.map((i) => {
        addCartBtns.map((i)=> {
            i.classList.remove('disabled')
       })
        if (i.id == random) {
            text.textContent = i.text
            if(i.one) {
                let btn = document.createElement("button");
                btn.className = "onel btn";
                btn.innerHTML = i.one
                btn.id = 1
                
                document.querySelector('.button__container').appendChild(btn);
            }
            if(i.two) {
                let btn = document.createElement("button");
                btn.className = "twol btn";
                btn.innerHTML =i.two
                btn.id = 2
                
                document.querySelector('.button__container').appendChild(btn);
            }
            if(i.three) {
                let btn = document.createElement("button");
                btn.className = "threel btn";
                btn.innerHTML = i.three
                btn.id = 3
                
                document.querySelector('.button__container').appendChild(btn);
            }
            if(i.four) {
                let btn = document.createElement("button");
                btn.className = "fourl btn";
                btn.innerHTML = i.four
                btn.id = 4
                
                document.querySelector('.button__container').appendChild(btn);
            }
            if(i.five) {
                let btn = document.createElement("button");
                btn.className = "fivel btn";
                btn.innerHTML = i.five
                btn.id = 5
                
                document.querySelector('.button__container').appendChild(btn);
            }
            if(i.six) {
                let btn = document.createElement("button");
                btn.className = "sixl btn";
                btn.innerHTML = i.six
                btn.id = 6
                
                document.querySelector('.button__container').appendChild(btn);
            }
            const onel = document.querySelector('.onel')
            const twol = document.querySelector('.twol')
const threel = document.querySelector('.threel')
const fourl = document.querySelector('.fourl')
const fivel = document.querySelector('.fivel')
const sixl = document.querySelector('.sixl')
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
               console.log(twol)
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
let arr = []
function neskolko(e) {
    let skokotv = 0
    e.target.classList.add('green')
    if(otvetikl == "one and five") {
        let arrotvet = [1, 5]
     arr.push(e.target.id)
     
     for(var i = 0; i<arrotvet; i++){
        cache = arrotvet.innerHTML;
        for(var j = 0; j<arr; j++){
            if(cache == arr[j].innerHTML){
                skokotv = skokotv + 1
                console.log(skokotv)
                if(skokotv == 2){
                    open()
                }
            }
            
         }

     }
    }
    if(otvetikl == "two and five") {
        let arrotvet = [2, 5]
        arr.push(e.target.id)
       
        
        for(var i = 0; i<arrotvet; i++){
            cache = arrotvet.innerHTML;
            for(var j = 0; j<arr; j++){
                if(cache == arr[j].innerHTML){
                    skokotv = skokotv + 1
                    console.log(skokotv)
                    if(skokotv == 2){
                        open()
                    }
                }
                
             }
            }

    }
    if(otvetikl == "one and three") {
        let arrotvet = [1, 3]
        arr.push(e.target.id)
        
       
             for(var i = 0; i<arrotvet; i++){
        cache = arrotvet.innerHTML;
        for(var j = 0; j<arr; j++){
            if(cache == arr[j].innerHTML){
                skokotv = skokotv + 1
                console.log(skokotv)
                
                if(skokotv == 2){
                    open()
                }
            }
        }
         }

    }
    if(otvetikl == "three and four") {
        let arrotvet = [3, 4]
        arr.push(e.target.id)
       
        
             for(var i = 0; i<arrotvet; i++){
        cache = arrotvet.innerHTML;
        for(var j = 0; j<arr; j++){
            if(cache == arr[j].innerHTML){
                skokotv = skokotv + 1
                console.log(skokotv)
                if(skokotv == 2){
                    open()
                }
            }

        }
         }

    }
    if(otvetikl == "two and three") {
        let arrotvet = [2, 3]
        arr.push(e.target.id)
        
       
             for(var i = 0; i<arrotvet; i++){
        cache = arrotvet.innerHTML;
        for(var j = 0; j<arr; j++){
            if(cache == arr[j].innerHTML){
                skokotv = skokotv + 1
                console.log(skokotv)
                if(skokotv == 2){
                    open()
                }
            }
            
         }

    }
    if(otvetikl == "one and two and three") {
        let arrotvet = [1, 2, 3]
        arr.push(e.target.id)
        
       
             for(var i = 0; i<arrotvet; i++){
        cache = arrotvet.innerHTML;
        for(var j = 0; j<arr; j++){
            if(cache == arr[j].innerHTML){
                skokotv = skokotv + 1
                console.log(skokotv)
                if(skokotv == 3){
                    open()
                }
            }
            
         }
        }

    }
    if(otvetikl == "one and two and four") {
        let arrotvet = [1, 2, 4]
        arr.push(e.target.id)
       
             for(var i = 0; i<arrotvet; i++){
        cache = arrotvet.innerHTML;
        for(var j = 0; j<arr; j++){
            if(cache == arr[j].innerHTML){
                skokotv = skokotv + 1
                console.log(skokotv)
                if(skokotv == 3){
                    open()
                }
            }
            
         }
        }

    }
}
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
            open()
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
            open()
        }
            , 800)
    }

}

btn.addEventListener('click', open)
    
