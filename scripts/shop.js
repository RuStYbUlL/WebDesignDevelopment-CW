var num = document.getElementById("quantity").innerHTML;
var desc = document.getElementById("com").innerHTML;
var modal = document.getElementById("blackScreen");
    
function getVals(){
    switch(document.querySelector("[name=style]:checked").value){
        case "20":
            var bod = 20;
            var para = document.getElementById("tp");
            para.textContent += " 20";
            break;
        case "50":
          var bod = 50;
          var para = document.getElementById("tp");
          para.textContent += " 50";
          break;
        case "100":
          var bod = 100;
          var para = document.getElementById("tp");
          para.textContent += " 100";
          break;
        }
    
    switch(document.getElementById("bg").value){
        case "solid":
          var backg = 0;
          var para = document.getElementById("gb");
          para.textContent += "0";
          break;
        case "simple":
          var backg = 10;
          var para = document.getElementById("gb");
          para.textContent += "10";
          break;
        case "complexed":
          var backg = 50;
          var para = document.getElementById("gb");
          para.textContent += "50";
          break;
        }
        
    var num = document.getElementById("quantity").value
    var q = document.getElementById("qty");
    q.textContent += " " + num;
    
    var tot = (bod + backg) * num;
    var totall = document.getElementById("tota");
    totall.textContent += " " + tot;
    
    var n = document.getElementById("name").value;
    var na = document.getElementById("nam");
    na.textContent += " " + n;
    
    var e = document.getElementById("mail").value;
    var ma = document.getElementById("em");
    ma.textContent += " " + e;
    
    var desc = document.getElementById("com").value;
    var bdesc = document.getElementById("stuff");
    bdesc.textContent += " " + desc;
}
    
document.getElementById("newScreen").onclick = function() {
    var checked = document.querySelector("[name=style]:checked");
    var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!checked) {
        alert("You have not selected a Type!");
    } else if  (document.getElementById("quantity").value.length == 0) {
        alert("You have not chosen the number of characters!");
    } else if  (document.getElementById("name").value.length == 0) {
        alert("You have not entered your name!");
    } else if  (document.getElementById("mail").value.length == 0) {
        alert("You have not entered your E-mail!");
    } else{
        if (document.getElementById("mail").value.match(format)){
            modal.style.display = "block";
            getVals();
        } else {
            alert("Your E-mail format is incorrect!")
        }
    }
}
    
document.getElementById("close").onclick = function() {
    modal.style.display = "none";
    window.location.reload();  
    alert("Commission order compleate!");
}