let hh=document.getElementById('hh');
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');
let secDot=document.querySelector(".sec_dot");
let minDot=document.querySelector(".min_dot");
let hrDot=document.querySelector(".hr_dot");
let hr= document.getElementById('hr');
let mn= document.getElementById('mn');
let sc= document.getElementById('sc');

let hour= new Date().getHours();
let minute= new Date().getMinutes();
let second= new Date().getSeconds();

//12 hour clock
hh.style.strokeDashoffset= 510 - (510*hour)/12;
//60 minutes per hours
mm.style.strokeDashoffset= 630 - (630*minute)/60;
//60 seconds per minute
ss.style.strokeDashoffset= 710 - (710*second)/60;

setInterval(()=>{
    let hour= new Date().getHours();
    let minute= new Date().getMinutes();
    let second= new Date().getSeconds();

    //12 hour clock
    hh.style.strokeDashoffset= 480 + (480*hour)/12;
    //60 minutes per hours
    mm.style.strokeDashoffset= 630 - (630*minute)/60;
    //60 seconds per minute
    ss.style.strokeDashoffset= 760 - (760*second)/60;

    secDot.style.transform=`rotateZ(${second*6}deg)`
    minDot.style.transform=`rotateZ(${minute*6}deg)`
    hrDot.style.transform=`rotateZ(${hour*30}deg)`

    hr.style.transform=`rotateZ(${hour*30}deg)`
    mn.style.transform=`rotateZ(${minute*6}deg)`
    sc.style.transform=`rotateZ(${second*6}deg)`
});