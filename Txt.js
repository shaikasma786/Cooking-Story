let speech=new SpeechSynthesisUtterance();
document.querySelector("button").addEventListener('click',()=>{
    speech.text=document.querySelector("h4").value;
    window.speechSynthesis.speak(speech)
});