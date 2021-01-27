var music = document.querySelector('#player');
var agulha = document.querySelector('#agulha');
var vinil = document.querySelector('#vinil');
var intervaloVinil;
var intervaloAgulha;
let rot = 0;
let ang = 0;


function play(){
    music.play()

    if(ang == 0){
    ang = 12;
    }
    
    agulha.style = "transform: rotate("+ang+"deg)"; 
    
    intervaloAgulha = setInterval(function (){
        ang ++
        agulha.style = "transform: rotate("+ang+"deg)"; 
    }, 2000);

    intervaloVinil = setInterval(function (){
        rot ++
        vinil.style = "transform: rotate("+rot+"deg)"; 

        console.log(music.duration)
    }, 1);
}



function pause(){
    music.pause();
    clearInterval(intervaloVinil);
    intervaloVinil = null
    clearInterval(intervaloAgulha);
    rot += 10;
    vinil.style = "transition: 1s; transform: rotate("+rot+"deg)"; 
    
    console.log(rot)
}

function stop(){
    music.pause()
    music.currentTime = 0;

    agulha.style = "transform: rotate(0deg)"; 


    clearInterval(intervaloVinil);
    clearInterval(intervaloAgulha);
    vinil.style = "transition: 0s; transform: rotate(0deg)"; 
    console.log('stop')
}
