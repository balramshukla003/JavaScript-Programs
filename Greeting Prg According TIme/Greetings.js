
function Greeting(){

    const T=document.getElementById("Time").value;

    const currentHour=parseInt(T);
    const H1=document.getElementById("Greeting");
    
    if (currentHour >=0 && currentHour <12 ) {
        H1.innerText="Good Morning"
    } else if (currentHour >=12 && currentHour <15 ) {
        H1.innerText="Good Afternoon";
    } else if(currentHour >=15 && currentHour <17){
        H1.innerText="Good Evening";
    } else{
        H1.innerText="Good Night";
    }
     
}