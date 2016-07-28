var chatty = (function () {
    var messages = []
    return {
        getJson: function (callback) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "messages.json");
            xhr.addEventListener("load", function(evt) {
                messages = JSON.parse(evt.target.responseText);
                console.log('hey', messages);
                callback(messages);
            })
        xhr.send()
        }
    }
}())
