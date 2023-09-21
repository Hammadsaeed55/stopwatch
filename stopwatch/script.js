var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
timer = true;
stopwatch();
}

function stop(){
timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";

}
function stopwatch(){
    if(timer == true){
        count = count+1;

        if(count == 100){
            sec = sec+1;
            count = 0;
        }
        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0
        }
        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var countstring = count;
         
        if(hr < 10){
            hrstring = "0" + hrstring;
        }
            
        if(min < 10){
            minstring = "0" + minstring;
        }
            
        if(sec < 10){
            secstring = "0" + secstring;
        }
            
        if(count < 10){
            countstring = "0" + countstring;
        }
        
        

        
        document.getElementById('hr').innerHTML = hrstring;
        document.getElementById('min').innerHTML = minstring;
        document.getElementById('sec').innerHTML = secstring;
        document.getElementById('count').innerHTML = countstring;
        setTimeout("stopwatch()" ,10);
    }
}

// var hr=0,min=0,sec=0,count=0,timer=!1;function start(){timer=!0,stopwatch()}function stop(){timer=!1}function reset(){timer=!1,hr=0,min=0,sec=0,count=0,document.getElementById("hr").innerHTML="00",document.getElementById("min").innerHTML="00",document.getElementById("sec").innerHTML="00",document.getElementById("count").innerHTML="00"}function stopwatch(){if(!0==timer){100==(count+=1)&&(sec+=1,count=0),60==sec&&(min+=1,sec=0),60==min&&(hr+=1,min=0,sec=0);var e=hr,n=min,t=sec,$=count;hr<10&&(e="0"+e),min<10&&(n="0"+n),sec<10&&(t="0"+t),count<10&&($="0"+$),document.getElementById("hr").innerHTML=e,document.getElementById("min").innerHTML=n,document.getElementById("sec").innerHTML=t,document.getElementById("count").innerHTML=$,setTimeout("stopwatch()",10)}}