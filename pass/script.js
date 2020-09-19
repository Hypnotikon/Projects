const messageIn = document.querySelector(".messageIn");
const messageOut = document.querySelector(".messageOut");
const sendBtn = document.querySelector(".sendBtn");

sendBtn.addEventListener("click", sendM);

function sendM(){
    let content = messageIn.value;
    if(content===""){
        alert("enter valid value")
    }
    else{
    messageOut.innerHTML = content;
}
}