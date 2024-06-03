let slider = document.querySelector('.slider')
let counter = document.querySelector('p')

let list = document.querySelector('ul')

let prevBtn = document.querySelector('.prevBtn')
let nextBtn = document.querySelector('.nextBtn')
let forward = 0
let backward = 0


let main = `width:300px;height:200px;filter:brightness(120%);position:relative;;top:-80px;`
let sub = `width:200px;height:150px;filter:brightness(50%);position:relative; top:0px;`

const next = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>'


const previous = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`
counter.innerText = `${2}`


nextBtn.innerHTML = next
prevBtn.innerHTML = previous






function focus() {

    let images = document.querySelectorAll('img')


    images.forEach(img => {

        img.style = `width:300px`

    })
    images[forward].style = sub
    images[forward + 1].style = main
    images[forward + 2].style = sub

}


let i = 1
let loadImage = () => {

    let clip = new Image()
    if (i <= continents.length) {

        clip.src = `./images/imae${i}.jpg`
            //     slider.style = ` background: url(${t}.jpeg) `
        i++

    } else {
        focus()
        return
    }


    list.appendChild(clip)
    setTimeout(loadImage, 50)


}

// loadImage()

function prevImage() {
    let images = document.querySelectorAll('.slide')
    if (backward >= 1) {
        backward += -1
        counter.innerText = `${backward+2}`
        list.style = `left: -${backward*33}vw;`
        images.forEach(img => {

                img.style = `width:33vw`

            })
            // document.body.style = `  background: url(images/imae${backward+2}.jpg) no-repeat center center fixed;
            // background-size: cover;`


        images[backward + 1].style = main


        images[backward].style = sub
        images[backward + 2].style = sub



        console.log(backward);

        forward = backward


    }

}

function nextImage() {
    let images = document.querySelectorAll('.slide')
    let limit = images.length
    forward++
    counter.innerText = `${forward+2}`


    if (forward < limit - 2) {
        document.body.style = `  background: url(images/imae${forward+2}.jpg) no-repeat center center fixed;
        background-size: cover;`
        list.style = `left: -${forward*33}vw;`
        images.forEach(img => {

            img.style = `width:33vw`
        })
        backward = forward
        images[forward].style = sub
        images[forward + 1].style = main

        images[forward + 2].style = sub


    }
}









// let v = 0

// let gallery = document.querySelectorAll('img')

// function fade() {
//     let view = .05 * v

//     if (view <= 1) {
//         let length = gallery.length
//         console.log(length);
//         gallery.style = `opacity:${ 1- view};`
//         v++


//     }




// }

// let e = 0


var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 10;




countdownNumberEl.style = "position:relative;color:white;font-size:25px; "
let circle = document.querySelector('circle')
    // circle.style = ` animation: countdown 10s linear infinite forwards;`



let k = 1

function loadCircle(radius, time) {


    let circumference = (2 * (22 / 7) * radius)
        // let circumference = 250
    let section = circumference / time
    let offset = section * k
    offset = circumference - offset / 1000
    console.log(circumference);
    console.log(offset);
    // setInterval(function() {
    //     countdown = --countdown <= 0 ? 10 : countdown;

    //     countdownNumberEl.textContent = countdown;
    // }, 1000);

    function plt() {
        if (k < time * 10) {
            let offset = section * k
            offset = circumference - offset / 10
            console.log(k);
            console.log(offset);
            //     countdown = --countdown <= 0 ? 10 : countdown;


            circle.style = `   display:none;stroke-dasharray: ${circumference}; stroke-dashoffset: ${-offset}px;stroke: rgb(7, 7, 7);`
            k++
            countdownNumberEl.textContent = Math.floor(countdown - k / 10)
            setTimeout(plt, 100)



        } else {
            circle.style = `  display:nonestroke-dashoffset: ${0}px;stroke:transparent;`
            k = 1
            countdownNumberEl.textContent = 10

            setTimeout(plt, 1000)





        }
    }

    plt()










}





nextBtn.addEventListener('click', () => {

    nextImage();

})


// document.body.style = ` background:url(./images/imae${backward+1}.jpg)`

prevBtn.addEventListener('click', () => {
    prevImage()




})
setInterval(() => {
    if (forward < 37) {
        nextImage()


    } else {
        forward = 0
    }
}, 3000)


loadCircle(50, 10)