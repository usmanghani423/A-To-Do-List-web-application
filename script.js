
let inputBox=document.querySelector("#inputbox");
let listen=document.querySelector("#list");

function addTask(){
    if(inputBox.value==''){
        alert("Please add some lists!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        li.style.display="flex";
        li.style.justifyContent="space-between";
        li.style.alignItem="center";
        li.style.paddingRight="20px";

        listen.append(li);
        let cross=document.createElement("img");
        cross.src="aserts/svg/cross-svgrepo-com.svg";
        cross.style.width="20px";
        cross.style.height="20px";
        li.appendChild(cross);
    }
    inputBox.value="";
    

}
listen.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG")
    {
        e.target.parentElement.remove();
    }
});

