var userInput = document.getElementById('inputText');
var test = (function () {
var privateMsg = [];
var addToDom = function (userMsg) {
  privateMsg.unshift(userMsg);
  console.log('helo', privateMsg);
  document.getElementById("messageArea").innerHTML += `<div><p>${userInput.value}  <button type="button" id="button">Delete</button></p></div>`;
  }
  return {
        getMsg: function () {
            console.log('helo', privateMsg);
            var userMsg = document.getElementById('inputText').value;
            addToDom(userMsg)
            document.getElementById("clearButton").disabled = false;
        }

  }

}())


function showMessages (messages) {
  var time = new Date()
  var list = document.getElementById("messageArea");
  messages.forEach(function (message) {
  list.innerHTML += `<p>${message}  <button type="button" id="button">Delete</button></p>`;

    })
}

chatty.getJson(showMessages);
userInput.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13 && userInput.value !== "") {
        console.log('ive been pressed');
        console.log(test)
        test.getMsg();
        document.getElementById("inputText").value = "";
    }
})
