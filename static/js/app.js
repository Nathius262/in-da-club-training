import {Header} from "./components/Header.js"
import {footer} from "./components/Footer.js"

let header = document.querySelector('#header')
let footerEl = document.querySelector('footer')
let head = document.querySelector('head')




try {
    header.insertAdjacentHTML("afterbegin", Header())
    footerEl.insertAdjacentHTML("afterbegin", footer())
    let y_top_objectEl = document.querySelectorAll('.scroll-y-top-el')
    let y_down_objectEl = document.querySelectorAll('.scroll-down-top-el')
    let x_top_objectEl = document.querySelectorAll('.scroll-x-top-el')
    let x_down_objectEl = document.querySelectorAll('.scroll-x-down-el')

    objectEl(y_top_objectEl, 'Y', '+')
    objectEl(y_down_objectEl, 'Y', '-')
    objectEl(x_top_objectEl, 'X', '+')
    objectEl(x_down_objectEl, 'X', '-')
} catch (TypeError) {
    
}


head.insertAdjacentHTML('afterbegin', `
    <link rel="icon" href="static/img/logo.png">
    <title>InDaClubTraining</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap" rel="stylesheet"> 

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css" integrity="sha512-siarrzI1u3pCqFG2LEzi87McrBmq6Tp7juVsdmGY1Dr8Saw+ZBAzDzrGwX3vgxX1NkioYNCFOVC0GpDPss10zQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/brands.min.css" integrity="sha512-W/zrbCncQnky/EzL+/AYwTtosvrM+YG/V6piQLSe2HuKS6cmbw89kjYkp3tWFn1dkWV7L1ruvJyKbLz73Vlgfg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link href="static/css/theme.css" rel="stylesheet">

    <link href="static/css/style.css" rel="stylesheet">
    <link href="static/css/main.css" rel="stylesheet">
`)



function objectEl(elementClass, axis, sign){
    for (let element of elementClass){
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    element.style.transform = `translate${axis}(0)`
                }else{
                    element.style.transform = `translate${axis}(${sign}50%)`
                }
            })
        })
        
        observer.observe(element)
    }
    
}