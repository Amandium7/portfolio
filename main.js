//.portfoliobodyimage1, .portfoliobodyimage2, .portfoliobodyimage3, .portfoliobodyimage4 

let image2 = document.getElementById('test')

let brightness1 = function (){
    image2.style.filter='brightness(.5)';
    }

image2.addEventListener('mouseover', brightness1)

let image3 = document.getElementById('test')

let brightness2 = function (){
    image3.style.filter='brightness(1)';
    }

image3.addEventListener('mouseout', brightness2)


let image4 = document.querySelector('main')

let brightness3 = function (){
    image4.style.opacity='.5';
    }

image4.addEventListener('mousedown', brightness3)

let image5 = document.querySelector('main')

let brightness4 = function (){
    image5.style.opacity='1';
    }

image5.addEventListener('mouseup', brightness4)