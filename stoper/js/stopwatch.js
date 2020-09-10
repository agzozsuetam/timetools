var st = document.getElementById("starter");
var res = document.getElementById("reset");

var h = 0;
var m = 0;
var s = 0;
var ms = 0;
var interval = null;
//var al = new Audio("Alarma.mp3");
//var check = 0;

st.onclick = function(){
    if(st.innerHTML=="START"){
        interval = window.setInterval(timeLoop, 10);
        st.innerHTML = "STOP";
    }else{
        window.clearInterval(interval);
        st.innerHTML = "START";
    };
};

res.onclick = function(){
    h=0;
    m=0;
    s=0;
    ms=0;
    display();
};

function timeLoop(){
    if(ms<99){
        ms++;
    }else if(s<59){
        ms = ms-99;
        s++;
    }else if(m<59){
        s = s-60;
        m++;
    }else{
        m = m-60;
        h++;
    };
    display();
};

function display(){
    document.getElementById("hour").innerHTML = h>9 ? h : "0"+h;
    document.getElementById("minute").innerHTML = m>9 ? m : "0"+m;
    document.getElementById("second").innerHTML = s>9 ? s : "0"+s;
    document.getElementById("milisecond").innerHTML = ms>9 ? ms : "0"+ms;
};

//window.setInterval(timeLoop, 1000);