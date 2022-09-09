const textInput=document.querySelector("#txt-input")
const btnTranslate=document.querySelector("#btn-translate")
const output=document.querySelector("#output")

var URL="https://api.funtranslations.com/translate/minion.json"

function getTransaltionURL(text){
    return URL+ "?"+ "text=" + text 
}

function erorrhandler(erorr){
    console.log("erorr occured",erorr);
    alert("something went wrong please try again after some time ")
}

function clickHandler(){
    var  inputText=textInput.value;

    fetch(getTransaltionURL(inputText))
        .then(response=>response.json())
        .then(json=>{
            let translatedText=json.contents.translated;
            output.innerText=translatedText;
        })
        .catch(erorrhandler)
};

btnTranslate.addEventListener("click",clickHandler);