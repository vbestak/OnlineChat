
var getMessages = setInterval(refresh, 1000);
var user;

while(!user){
  user = prompt("Please enter your username!");
  document.getElementById("userName").innerHTML = user;
}

function displayMessages(message) {
  var x = document.getElementById("poruke");
  x.innerHTML += message;
}

document.getElementById("sendButton").onclick = function() {
  if(document.getElementById("userMessage").value === "") return;
  var mesg = document.getElementById("userMessage");
  displayMessages("<p> me: " +mesg.value + "</p>");
  sendMessage(mesg.value);
  mesg.value = "";
};

document.getElementById("userMessage").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("sendButton").click();
  }
});


function sendMessage(mesg) {
  var xhttp = new XMLHttpRequest();
  var date = new Date();
  var formatedDate =
    date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  xhttp.open(
    "GET",
    "src/storeMessage.php?message=" +
      mesg +
      "&user=" +
      user +
      "&time=" +
      formatedDate,
    true
  );
  xhttp.send();
}

function refresh() {
  var xhttp = new XMLHttpRequest();
  var d = new Date();

  var date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();

  var time = d.getHours() + ":" + d.getMinutes() + ":" + (d.getSeconds()-1)  ;

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      if(this.responseText === "") return;
      displayMessages(this.responseText);
      let poruke = document.getElementById("poruke");
      poruke.scrollIntoView(false);
    }
  };

  xhttp.open(
    "POST",
    "src/getMessages.php",
    true
  );

  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("date=" + date +"&time=" + time + "&user=" + user);
}
