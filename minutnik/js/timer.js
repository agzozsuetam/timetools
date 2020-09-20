var plusTen = document.getElementById("ten");
var plusTwenty = document.getElementById("twenty");
var plusThirty = document.getElementById("thirty");
var plusForty = document.getElementById("forty");
var plusFifty = document.getElementById("fifty");
var plusSixty = document.getElementById("sixty");
var stopAl = document.getElementById("stop");
var pre1 = document.getElementById("pre1");
var interval = null;
var presets = [1,2,3,4,5];
var names = ["one", "two", "three", "four", "five"];
var preCounter = 1;
var Adder = null;

var h = 0;
var m = 0;
var s = 0;
var al = new Audio("Alarm.mp3");
var check = 0;

var preHr2 = null;
var preHr3 = null;
var preHr4 = null;
var preHr5 = null;
var preMin2 = null;
var preMin3 = null;
var preMin4 = null;
var preMin5 = null;
var preSec2 = null;
var preSec3 = null;
var preSec4 = null;
var preSec5 = null;
//UWAGA INFO!!!!
//Problem do zdebugowania jest następujący - przyciski start na dodanych presetach nie działają tak jak powinny. Jest to spowodowane tym, że preCounter rośnie kiedy dodajemy preset, a przycisk bierze preCounter dopiero jak się go kliknie (i np działa dla zupełni innego presetu niż powinien). Prawdopodobnie można to rozwiązać za pomocą konstruktora i prototypów.

plusTen.onclick = function(){
    if(!interval){
        interval = window.setInterval(timeLoop, 1000);
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
    if(!interval){
        interval = window.setInterval(timeLoop, 1000);
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
    if(!interval){
        interval = window.setInterval(timeLoop, 1000);
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
    if(!interval){
        interval = window.setInterval(timeLoop, 1000);
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
    if(!interval){
        interval = window.setInterval(timeLoop, 1000);
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
    if(!interval){
        interval = window.setInterval(timeLoop, 1000);
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
};

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
        window.clearInterval(interval);
        interval = null;
    };
    display();
};

function display(){
    document.getElementById("hour").innerHTML = h>9 ? h : "0"+h;
    document.getElementById("minute").innerHTML = m>9 ? m : "0"+m;
    document.getElementById("second").innerHTML = s>9 ? s : "0"+s;
};

pre1.onclick = function(){
    h = document.getElementById("preHr1").value*1;
    m = document.getElementById("preMin1").value*1;
    s = document.getElementById("preSec1").value*1;
    
    if(!interval){
        interval = window.setInterval(timeLoop, 1000);
    };
    display();
    check = 1;
};


addPre.onclick = function(){
    if(preCounter<presets.length-1){
        let preset = document.getElementById("preset"+presets[preCounter-1])
        let newPreset = preset.cloneNode(true);
        newPreset.id = "preset"+presets[preCounter];
        preset.after(newPreset);
        
        newPreset.children[0].lastElementChild.id = "preHr"+presets[preCounter];
        newPreset.children[1].lastElementChild.id = "preMin"+presets[preCounter];
        newPreset.children[2].lastElementChild.id = "preSec"+presets[preCounter];
        newPreset.children[3].id = "pre"+presets[preCounter];
        newPreset.children[3].onclick = function(){
            h = document.getElementById("preHr"+newPreset.id.slice(-1)).value*1;
            m = document.getElementById("preMin"+newPreset.id.slice(-1)).value*1;
            s = document.getElementById("preSec"+newPreset.id.slice(-1)).value*1;
        
            if(!interval){
                interval = window.setInterval(timeLoop, 1000);
            };
            display();
            check = 1;
        }
        preCounter++;
    }else{
        let preset = document.getElementById("preset"+presets[preCounter-1])
        let newPreset = preset.cloneNode(true);
        newPreset.id = "preset"+presets[preCounter];
        preset.after(newPreset);
        
        newPreset.children[0].lastElementChild.id = "preHr"+presets[preCounter];
        newPreset.children[1].lastElementChild.id = "preMin"+presets[preCounter];
        newPreset.children[2].lastElementChild.id = "preSec"+presets[preCounter];
        newPreset.children[3].id = "pre"+presets[preCounter];
        newPreset.children[3].onclick = function(){
            h = document.getElementById("preHr"+newPreset.id.slice(-1)).value*1;
            m = document.getElementById("preMin"+newPreset.id.slice(-1)).value*1;
            s = document.getElementById("preSec"+newPreset.id.slice(-1)).value*1;
            
            if(!interval){
                interval = window.setInterval(timeLoop, 1000);
            };
            display();
            check = 1;
        }
        
        let delAdd = document.getElementById("addPre");
        delAdd.parentNode.removeChild(delAdd);
    }
};

