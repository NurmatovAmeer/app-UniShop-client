let messages = []
let selectIndex = -1

function addMessage() {
    let messagE = document.getElementById("meSSage").value;

    document.getElementById("meSSage").value = "";

    let newMessage ={
        message: messagE
    }

    if(selectIndex > 0){
        messages[selectIndex] = newMessage
        selectIndex = -1
    } else{
        messages.push(newMessage)
    }
    drawPage()
}

function drawPage(){
    let result = "";
    for (let i = 0; i < messages.length; i++){
       result +=
           "<div class='card mt-3'>" +
           "<p class='mt-3' >You:</p>" +
           "<p class='mt-0' ><b>"+ messages[i].message +"</b></p>" +
           "</div>"
   }
   document.getElementById("result").innerHTML = result;
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13){
        addMessage()
    } 
 });
 