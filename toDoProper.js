let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector(".addbutton");


btn.addEventListener("click",function(){
    console.log(inp.value);

    let items = document.createElement("li");
    items.innerText = inp.value;

     let delbtn = document.createElement("button");
     delbtn.innerText = "DELETE";
     delbtn.classList.add("deletebutton");


    ul.appendChild(items);    // join th task with existing list of tasks

    items.appendChild(delbtn);  

    inp.value = "";     // to automatically erase the task after adding it
});



ul.addEventListener("click",function(event){
    //console.log(event.target);

    if(event.target.nodeName == "BUTTON"){

        let listItem = event.target.parentElement;
        listItem.remove();
    }
})