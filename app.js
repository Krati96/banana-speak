console.log("Hi! I am Krati.")
// alert("Welcone to VanillaJs !!")

// var userName= prompt("Tell your User Name")

// var message = "Welcome " + userName + "! You are great!!";

// alert(message);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outCome = document.querySelector("#output");

const url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return url +"?text= " + text;
}

function errorHandler(error){
    console.log("error Occured! ",error);
    alert("Something went wrong! Please try again later."+ "\n"+ error);
}

// outCome.innerText ="Krati varshney" //statically given value into textbox

// console.log(btnTranslate)
// var count=0;
function clickEventHandler(){
    // outCome.innerText = "Translated: HIhIhHihih " + txtInput.value ; //get outcome statically
    // console.log(txtInput)
    var inputText =txtInput.value; //taking Input
    fetch(getTranslationURL(inputText))
    .then(res => res.json())
    .then(json => {
        var translatedText =json.contents.translated;
        outCome.innerText = translatedText;
        console.log(json.contents.translated)
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickEventHandler);


