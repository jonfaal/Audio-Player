var music = document.querySelector('#player');
var agulha = document.querySelector('#agulha');
var vinil = document.querySelector('#vinil');
var intervaloVinil;
var intervaloAgulha;
let rot = 0;
let ang = 0;
var state = "stop";



function play(){
    if(ang == 0){
        ang = 12;
    }
    
    agulha.style = "transform: rotate("+ang+"deg)"; 
    let passoAgulha = music.duration / 44;

    function tocar(){
        music.play();
        intervaloAgulha = setInterval(function(){
            ang += 0.5;
            agulha.style = "transform: rotate("+ang+"deg)"; 
    
            if(ang == 34){
    
                ang = 40; 
                setTimeout(stop, 3000)
            }
    
            console.log(ang)
        }, passoAgulha*1000);
    }

    if(state !== "play"){
        
        if(state == "stop"){
            setTimeout(tocar, 1000);
        }else{
            tocar();
        }

        intervaloVinil = setInterval(function (){
            rot ++
            vinil.style = "transform: rotate("+rot+"deg)"; 
        }, 1);

        state = "play";
    }



}


function pause(){
    state = "pause";
    music.pause();
    clearInterval(intervaloVinil);
    clearInterval(intervaloAgulha);
    rot += 10;
    vinil.style = "transition: 1s; transform: rotate("+rot+"deg)"; 
    
}

function stop(){
    state = "stop";
    music.pause()
    music.currentTime = 0;

    agulha.style = "transform: rotate(0deg)"; 

    clearInterval(intervaloVinil);
    clearInterval(intervaloAgulha);
    ang = 0
    vinil.style = "transition: 0s; transform: rotate("+ang+"deg)"; 
}
