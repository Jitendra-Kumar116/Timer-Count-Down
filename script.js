const endDate = "15 November 2030 09:34:00 AM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

function clock(){
    const end = new Date(Date.parse(endDate));
    const now = new Date(); 
    // console.log(end);
    const diff = (end-now)/1000;
    console.log(diff);
    // covert into days
    if(diff<0)
        return;
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor(diff/3600)%24;
    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff)%60;

}
clock();

setInterval(()=>{
    clock();
},100);