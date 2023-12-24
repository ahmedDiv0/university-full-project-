const writ = document.getElementById('writing');

const writing = 'Contact Us';

let xx = 1 ;

let speed = 200;

writeText()
function writeText(){
    writ.innerText = writing.slice(0,xx)
    xx++
    if(xx > writing.length){
        xx = 1
    }
    setTimeout(writeText , speed)
}


