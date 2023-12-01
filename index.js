let totalsecends;
let id;

function start(){
    totalsecends=
    Number(document.getElementById("hours").value) * 3600 +
    Number(document.getElementById("minutes").value) * 60 +
    Number(document.getElementById("secends").value);
    
    
    if(totalsecends <= 0)
    
    {
        alert("please enter a valid time");
    return
}

                
id = setInterval(updateTimer,1000);

}

function updateTimer(){
    if(totalsecends <=0){
        clearInterval(id);
        alert(" time is up ");
        return
    }
    
    let hours= Math.floor(totalsecends/3600);
    let minutes= Math.floor((totalsecends %3600)/60);
    let secends=totalsecends % 60;
    
    
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("secends").value = secends;
    

    totalsecends--
}


function pause(){

    clearInterval(id);

}

function reset(){
    clearInterval(id);
    hours.value=0;
    minutes.value=0;
    secends.value=0;
}
