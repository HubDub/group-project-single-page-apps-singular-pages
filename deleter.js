var deleter = (function () {
document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  if (event.target.id === "button") {
    console.log("You clicked on the page-title element");
    event.target.parentElement.remove();
}
  if (event.target.id === "clearButton") {
    console.log("You clicked big button");
    document.getElementById("messageArea").innerHTML = '';
    document.getElementById("clearButton").disabled = true;
}
})
}(deleter || {}))
