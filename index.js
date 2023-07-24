let hh=document.getElementById('hh');
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');

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
    hh.style.strokeDashoffset= 510 - (510*hour)/12;
    //60 minutes per hours
    mm.style.strokeDashoffset= 630 - (630*minute)/60;
    //60 seconds per minute
    ss.style.strokeDashoffset= 710 - (710*second)/60;
});