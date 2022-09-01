
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var oupPut=document.querySelector("#ouput")

 var serverURL= "https://api.funtranslations.com/translate/"

 function getTranslationURL(text){
    return serverURL + "?" + "text" + text
 }

 function errorHandler(error){
    console.log("error occuered",error);
    alert(" somethung went wrong");
 }

function clickHandler(){
    var inputText=txtInput.Value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedURL=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",clickHandler)


