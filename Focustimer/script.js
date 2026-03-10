let time = 25 * 60;
let interval = null;
let focus = true;

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const mode = document.getElementById("mode");

function updateDisplay(){
let m = Math.floor(time / 60);
let s = time % 60;

minutes.textContent = m;
seconds.textContent = s < 10 ? "0" + s : s;
}

document.getElementById("start").onclick = function(){

if(interval) return;

interval = setInterval(() => {

time--;
updateDisplay();

if(time <= 0){

clearInterval(interval);
interval = null;

if(focus){
alert("Focus session complete! Take a break.");
time = 5 * 60;
mode.textContent = "Break Time";
}else{
alert("Break finished! Back to focus.");
time = 25 * 60;
mode.textContent = "Focus Time";
}

focus = !focus;
updateDisplay();

}

},1000);

};

document.getElementById("pause").onclick = function(){
clearInterval(interval);
interval = null;
};

document.getElementById("reset").onclick = function(){
clearInterval(interval);
interval = null;
time = 25 * 60;
focus = true;
mode.textContent = "Focus Time";
updateDisplay();
};

updateDisplay();
