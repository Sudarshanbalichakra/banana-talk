
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outPutDiv=document.querySelector("#output")

 var serverURL= "https://api.funtranslations.com/translate/pirate.json"

 function getTranslationURL(text){
    return serverURL + "?" + "text" + text
 }

 function errorHandler(error){
    console.log("error occuered",error);
    alert(" somethung went wrong");
 }

function clickHandler(input){
    var inputText=txtInput.Value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json=> {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
             })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click",clickHandler)


