

setInterval(deneme, 100);
setInterval(namepress, 100);
function deneme(){
    let date= new Date
    const hour =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const day=`${date.getDay()}:${date.getMonth()}:${date.getFullYear()}`
    const clock = document.getElementById("myClock");
    clock.innerHTML= day+ "  "+hour;

}

function namepress(){
    const inputname = document.getElementById("myName");
    let name = document.getElementById("nameff").value;
    
    inputname.innerHTML= name ? name : "Adınızı aşağıdan giriniz ";

}
