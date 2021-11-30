let toDoList = JSON.parse(localStorage.getItem('ToDoList'))
let  array = new Array();
const ulList = document.querySelector("#list")
if (!toDoList) localStorage.setItem("ToDoList", (JSON.stringify([])));

$(document).keypress(function (e) {
    if (e.which == 13) {
        newElement()
    }});
function newElement(){
    ttm =  (document.querySelector("#task")).value 
    if (ttm.trim() === "") $('.error').toast('show');
    else if((document.querySelector("#task")).value){
        ttm =  (document.querySelector("#task")).value 

        document.querySelector("#task").value=""
        myStorage = window.localStorage;
        let dates = new Date
        let times=(`${dates.getDate()}.${dates.getMonth()}.${dates.getFullYear()} ${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}:${dates.getUTCMilliseconds()}`)
        let item=JSON.stringify({contents:`${ttm}`,time:`${times}`})
        toDoList = JSON.parse(localStorage.getItem('ToDoList'))
        array=toDoList
        array.push(JSON.parse(item)) 
        alss=JSON.parse(item)
        localStorage.setItem("ToDoList", JSON.stringify(array))
        addList(ttm,Object.keys(localStorage).length + 1)
        $('.success').toast('show');
    }else  $('.error').toast('show');
    resetRef()
}
function ref (){  
    toDoList = JSON.parse(localStorage.getItem('ToDoList'))
    toDoList.forEach(function(data,index){
        addList(data.contents,index)
    })
}
function resetRef(){
    while (ulList.hasChildNodes()) {
        ulList.removeChild(ulList.firstChild);
      }
    ref ()
}
function deletetodoList(id){
let att= toDoList.splice(id,1)
localStorage.setItem("ToDoList", JSON.stringify(toDoList))
resetRef()
}
function markF(id){
    const textS = document.getElementById(id)
    if(textS.style.color){
        textS.style.color="";
        textS.style.background ="";
        textS.style.textDecoration="";
    }else{
        textS.style.color="#1900E6";
        textS.style.background ="#7F6EFB";
        textS.style.textDecoration="line-through";
    }
}

function addList(addItem,ItemId){
    let  newItem = document.createElement("li")
    newItem.id=ItemId
    let  text = document.createElement("h5")
    text.id=ItemId
    text.onclick=function(){  markF(ItemId)};
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("close");
    const deleteButtonSpan = document.createElement("span");
    deleteButtonSpan.onclick=function(){  deletetodoList(ItemId)};
    deleteButtonSpan.ariaHidden="true"
    deleteButtonSpan.classList.add("close");
    deleteButtonSpan.innerText =   `X`; 
    deleteButtonSpan.id=ItemId
    let item =""
    if(addItem.contents) item= addItem.contents
    else item = addItem
    const consItem =  document.createTextNode(`${item} `)
    deleteButton.appendChild(deleteButtonSpan)
    newItem.appendChild(text)
    text.appendChild(consItem)
    newItem.appendChild(deleteButton)
    ulList.appendChild(newItem)
}

ref()