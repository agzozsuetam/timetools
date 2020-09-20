var h = 0;
var m = 0;

var pH = document.getElementById("plusHr");
var mH = document.getElementById("minusHr");
var pM = document.getElementById("plusMin");
var mM = document.getElementById("minusMin");
var set = document.getElementById("setter");

var ring = new Audio("sound.mp3")

var interval = null;

pH.onclick = function(){
    if(h<23){
        h++;
    }else{
        h=0;
    };
    display();
}

mH.onclick = function(){
    if(h>0){
        h--;
    }else{
        h=23;
    };
    display();
}

pM.onclick = function(){
    if(m<59){
        m++;
    }else{
        m=0;
    };
    display();
}

mM.onclick = function(){
    if(m>0){
        m--;
    }else{
        m=59;
    };
    display();
}

set.onclick = function(){
    if(set.innerHTML=="SET"){
        interval = window.setInterval(loop, 1000);
        set.innerHTML = "CANCEL";
        set.style.background = "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,128,0,1) 39%, rgba(255,76,76,1) 100%)";
        console.log("uzbrojony");
    }else if(set.innerHTML=="CANCEL"){
        window.clearInterval(interval);
        set.innerHTML = "SET";
        set.style.background = "linear-gradient(90deg, rgba(0,155,255,1) 0%, rgba(29,231,222,1) 39%, rgba(0,212,255,1) 100%)";
        ring.pause();
        console.log("rozbrojony");
    }
}

function loop(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if(hour==h&&minute==m&&set.innerHTML=="CANCEL"){
        ring.play();
    };
}

function display(){
    document.getElementById("hour").innerHTML = h>9 ? h : "0"+h;
    document.getElementById("minute").innerHTML = m>9 ? m : "0"+m;
};
