//control
//light

let controls = document.getElementById('control');
let lights = document.getElementById('light');

let lightsControl = false; // het licht moet eerst uit zijn
//volgende functie om licht aan te doen

function switchLight (){
if (!lightsControl){
    lights_control=true; //werkt nog niet
    controls.src="img/control_on.png";
    lights.src="img/light_on.png"
}else{
    lights_control=false; //werkt nog niet
    controls.src="img/control_off.png";
    lights.src="img/light_off.png"
}
}

controls.addEventListener("click",switchLight);