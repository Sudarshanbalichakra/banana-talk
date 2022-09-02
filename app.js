const textInput=document.querySelector("#txt-input")
const btnTranslate=document.querySelector("#btn-translate")
const output=document.querySelector("#output")

var URL="https://api.funtranslations.com/translate/minion.json";

function getTransaltionURL(text){
    return URL+ "?"+ "text=" + text 
}

function clickHandler(){
    var inputText=textInput.value;

            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText //output
        
        .then(response=>response.json())
        .then(json=>{
            let translatedText=json.contents.translated;
            output.innerText=translatedText;
        })
};

btnTranslate.addEventListener("click",clickHandler);