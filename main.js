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