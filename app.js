var inputText = document.querySelector("#input");
var translateButton = document.querySelector("#translate-button");
var outputText = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/valyrian.json";

function editURL(text) {
    return url + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured: ", error);
    alert("Can't reach server. Try again later");
}

function onClickListener() {
    var textInput = inputText.value;

    fetch(editURL(textInput))
        .then(response => response.json)
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })

        .catch(errorHandler)
}

translateButton.addEventListener("click", onClickListener);

