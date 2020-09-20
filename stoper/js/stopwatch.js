var st = document.getElementById("starter");
var res = document.getElementById("reset");
//
var h = 0;
var m = 0;
var s = 0;
var ms = 0;
var interval = null;
var intervalTO = null;
//
var setHour = null;
var setMinute = null;
var setSecond = null;
var al = new Audio("Interval.mp3");
var check = 0;
//
var timeOutSecond = null;
var timeOutMinute = null;
var timeOutHour = null;

starter.onclick = function(){
    if(starter.innerHTML=="START"){
        interval = window.setInterval(timeLoop, 10);
        starter.innerHTML = "STOP";
    }else{
        window.clearInterval(interval);
        starter.innerHTML = "START";
    };
};

reset.onclick = function(){
    h=0;
    m=0;
    s=0;
    ms=0;
    check=0;
    display();
};

tOSet.onclick = function(){
    timeOutSecond = document.getElementById("timeOutS").value*1;
    timeOutMinute = document.getElementById("timeOutM").value*1;
    timeOutHour = document.getElementById("timeOutH").value*1;
    
    if(tOSet.innerHTML=="SET"){
        if(timeOutSecond>0 || timeOutMinute>0 || timeOutHour>0){
            tOSet.innerHTML = "CANCEL";
            tOSet.style.background = "red";
            intervalTO = window.setInterval(tOTimer, 1000);
        }else{
            alert("Please, set a time in order to start time out");
        };
    }else{
        tOSet.innerHTML = "SET";
        tOSet.style.background = "aqua";
        window.clearInterval(intervalTO)
    };
};

tOTimer = function(){
    if(timeOutSecond>0){
        timeOutSecond--;
    }else if(timeOutMinute>0){
        timeOutSecond+=60;
        timeOutMinute--;
    }else if(timeOutHour>0){
        timeOutMinute+=60;
        timeOutHour--;
    }else if(timeOutSecond==0 && timeOutMinute==0 && timeOutHour==0){
        window.clearInterval(intervalTO)
        interval = window.setInterval(timeLoop, 10);
        starter.innerHTML = "STOP";
        tOSet.innerHTML = "SET";
        tOSet.style.background = "aqua";
    };
    h = timeOutHour;
    m = timeOutMinute;
    s = timeOutSecond;
    display();
};

intSet.onclick = function(){
    intHour = document.getElementById("intH").value*1;
    intMinute = document.getElementById("intM").value*1;
    intSecond = document.getElementById("intS").value*1;
    
    if(intSet.innerHTML=="SET"){
        intSet.innerHTML = "CANCEL";
        intSet.style.background = "red";
    }else{
        intSet.innerHTML = "SET";
        intSet.style.background = "aqua";
    };    
};

setting.onclick = function(){
    setHour = document.getElementById("setH").value*1;
    setMinute = document.getElementById("setM").value*1;
    setSecond = document.getElementById("setS").value*1;
    
    if(setting.innerHTML=="SET"){
        setting.innerHTML = "CANCEL";
        setting.style.background = "red";
    }else{
        setting.innerHTML = "SET";
        setting.style.background = "aqua";
    };    
};

function timeLoop(){
    if(ms<99){
        ms++;
    }else if(s<59){
        ms = ms-99;
        s++;
        check++;
    }else if(m<59){
        s = s-60;
        m++;
    }else{
        m = m-60;
        h++;
    };
    setCheck();
    intCheck();
    display();

};

function setCheck(){
    if(setSecond==s && setMinute==m && setHour==h && setting.innerHTML=="CANCEL"){
        al.play();
        setting.innerHTML = "SET";
        setting.style.background = "aqua";
    }else if(check==1){
        al.pause()
    };
}

function intCheck(){
    if(intSet.innerHTML=="CANCEL" && (intSecond+intMinute*60+intHour*3600)<=check){
        check = 0;
        al.play();
        console.log("działa")
    }else if(check==1){
        al.pause();
    };
}

function display(){
    document.getElementById("hour").innerHTML = h>9 ? h : "0"+h;
    document.getElementById("minute").innerHTML = m>9 ? m : "0"+m;
    document.getElementById("second").innerHTML = s>9 ? s : "0"+s;
    document.getElementById("milisecond").innerHTML = ms>9 ? ms : "0"+ms;
};
