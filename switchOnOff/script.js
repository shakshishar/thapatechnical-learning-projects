const lighton=document.getElementById('btnon');
const lightoff=document.getElementById('btnoff');
const image=document.getElementById('myImage');
function buttonon() {
    image.src='images/lighton.png';
}
function buttonoff(){
    image.src='images/lightoff.png';
}
lighton.addEventListener('click',buttonon);
lightoff.addEventListener('click',buttonoff);
