var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

var wm = document.getElementById('w_minuts');//25
var ws = document.getElementById('w_seconds');//0

var bm = document.getElementById('b_minuts');//5
var bs = document.getElementById('b_seconds');//0





// store a reference to a timer variable

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(Timer, 1000)
    }else{
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})








//start timer function
function Timer(){
    //Work timer Contdown
    if(ws.innerText != 0){
        ws.innerText--;
    }else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break timer Contdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        }else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Interment counter by one full cycle completed
    if(wm.innerText==0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";
        bm.innerText = 5;
        bs.innerText = "00";
        document.getElementById('counter').innerText++;
    }
}

//stop timer function
function stopInterval(){
    clearInterval(startTimer)
}