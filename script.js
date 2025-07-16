const EndDate = new Date("15 july, 2025 5:10:0").getTime();
const startDate = new Date().getTime();

let x = function updateTimer(){
    const now = new Date().getTime();
    const covered = now - startDate;
    const pending = EndDate - now;

    const days = Math.floor(pending/(24*60*60*1000));
    const hrs = Math.floor(pending%(24*60*60*1000)/(60*60*1000));
    const mins = Math.floor(pending%(60*60*1000)/(60*1000));
    const secs = Math.floor(pending%(60*1000)/(1000));

    
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;

    const total = EndDate - startDate;
    const per = (covered/total)*100;
    document.querySelector(".progressBar").style.width = per + "%";  
    
    if(pending<0){
        clearInterval(x);
        document.querySelector(".timerBlock").innerHTML = "Expired";
        document.querySelector(".progressBar").style.width = "100%";
    }
   
}
setInterval(x,1000)