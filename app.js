var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = 'https://api.funtranslations.com/translate/minion.json';

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server try again after sometime")
}
function clickEventHandler(){

    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText //output
        
        })
        .catch(errorHandler);
 }
btnTranslate.addEventListener("click",  clickEventHandler);