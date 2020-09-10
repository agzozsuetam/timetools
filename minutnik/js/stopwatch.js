var plusTen = document.getElementById("ten");
var plusTwenty = document.getElementById("twenty");
var plusThirty = document.getElementById("thirty");
var plusForty = document.getElementById("forty");
var plusFifty = document.getElementById("fifty");
var plusSixty = document.getElementById("sixty");
var stopAl = document.getElementById("stop");

var h = 0;
var m = 0;
var s = 0;
var al = new Audio("Alarma.mp3");
var check = 0;



plusTen.onclick = function(){
    if(h==0&&m===0&&s==0){
        window.setInterval(timeLoop, 1000);
    };
    if(s<50){
        s = s+10;
    } else if(m<59){
        m = m+1;
        s = s-50;
    } else{
        h++;
        m = m-59;
    };
    check = 1;
    display();
};

plusTwenty.onclick = function(){
    if(h==0&&m===0&&s==0){
        window.setInterval(timeLoop, 1000);
    };
     if(s<40){
        s = s+20;
    } else if(m<59){
        m = m+1;
        s = s-40;
    } else{
        h++;
        m = m-59;
    };
    check = 1;
    display();    
};

plusThirty.onclick = function(){
    if(h==0&&m===0&&s==0){
        window.setInterval(timeLoop, 1000);
    };
     if(s<30){
        s = s+30;
    } else if(m<59){
        m = m+1;
        s = s-30;
    } else{
        h++;
        m = m-59;
    };
    check = 1;
    display();
};

plusForty.onclick = function(){
    if(h==0&&m===0&&s==0){
        window.setInterval(timeLoop, 1000);
    };
     if(s<20){
        s = s+40;
    } else if(m<59){
        m = m+1;
        s = s-20;
    } else{
        h++;
        m = m-59;
    };
    check = 1;
    display();
};

plusFifty.onclick = function(){
    if(h==0&&m===0&&s==0){
        window.setInterval(timeLoop, 1000);
    };
     if(s<10){
        s = s+50;
    } else if(m<59){
        m = m+1;
        s = s-10;
    } else{
        h++;
        m = m-59;
    };
    check = 1;
    display();
};

plusSixty.onclick = function(){
    if(h==0&&m===0&&s==0){
        window.setInterval(timeLoop, 1000);
    };
    if(m<59){
        m = m+1;
    } else {
        h++;
        m = m-59;
    };
    check = 1;
    display();
};

stopAl.onclick = function(){
    al.pause();
    check = 0;
}

function timeLoop(){
    if(s>0){
        s--;
    }else if(m>0){
        m--;
        s = s+59;
    }else if(h>0){
        h--;
        m = m+59;
        s = s+59;
    }else if(check){
        al.play();
    };
    display();
}

function display(){
    document.getElementById("hour").innerHTML = h>9 ? h : "0"+h;
    document.getElementById("minute").innerHTML = m>9 ? m : "0"+m;
    document.getElementById("second").innerHTML = s>9 ? s : "0"+s;
}

//window.setInterval(timeLoop, 1000);