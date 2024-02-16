const button=document.querySelector('button');
const body=document.querySelector('body');
const sary=document.querySelector('img');
const p=document.querySelector('p');
const isDarkMode = localStorage.getItem('darkMode') === 'true';
console.log(localStorage.getItem('darkMode'));
button.addEventListener('click',()=>{
    if(button.innerText=="sombre")
    {
        body.classList.add('body_sombre');
        sary.classList.add('img_sombre');
        button.innerText="claire";
        localStorage.setItem('darkMode', 'true');
    }
    else{
        body.classList.remove('body_sombre');
        sary.classList.remove('img_sombre');
        button.innerText="sombre";
        localStorage.setItem('darkMode', 'false');
    }
})
if (isDarkMode) {
    body.classList.add('body_sombre');
    sary.classList.add('img_sombre');
    button.innerText = "claire";
} else {
    button.innerText = "sombre";
}