let button = document.querySelector('.btn')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author');
quotes = ['Learning gives creativity Creativity leads to thinking Thinking provides knowledge Knowledge makes you great.',

    'I am not handsome but I can give my hand to someone who need help...Because beauty is required in heart not in face.',
    'You have to dream before your dreams can come true.',
    'Excellence is a continuous process and not an accident.',
    'If you want to shine like a sun, first burn like a sun'

]

button.addEventListener('click', function () {
    console.log("clicked");
    // Math.random() * MAXIMUM LIMIT
    let random = Math.floor(Math.random() * quotes.length)
    console.log(random);
    quote.innerHTML = quotes[random];

})

// https://developer.mozilla.org/en-US/play -->refer this website for ccs animation in js
const animation = [
    { transform: " scale(1.5)" },
    { transform: " scale(1)" },
];

const time = {
    duration: 1000,
    iterations: 1,
};

const newspaper = document.querySelector(".btn");

newspaper.addEventListener("click", () => {
    quote.animate(animation, time);
    author.animate(animation, time);
});

//counter js code
let plus=document.querySelector('#increament');
let minus=document.querySelector('#decreament');
let counter=document.querySelector('.counter');
let count=0;

plus.addEventListener('click',()=>{
    console.log("increament");
    count++;
    counter.innerHTML=count;
})


minus.addEventListener('click',()=>{
    console.log("increament");
    count--;
    counter.innerHTML=count;
})


// js code for form-validation

let username = document.getElementById('username');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let form = document.getElementById('form');
let error=document.getElementById('error');

function validateName(){
    let user = username.value;
    let reg= /(^[a-zA-Z]$)/
    if(user === '') return "UserName cannot be empty"
    else if(reg.test(user)) "Enter valid username";
    else return "";
}

function validateEmail(){
    let Useremail=email.value;
    let reg=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(reg.test(String(Useremail))) return "";
    else return "Incorrect Email Format";
}

function validatePassword(){
    let password=pass.value;
    if(password.length<5 || password.length>10) return "password length should be less than 5 and greater than 10"
    else return "";
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e);
    console.log("clicked submit");
    console.log(username.value);
    console.log(email.value);
    console.log(pass.value)

    let a=validateName();
    let b=validateEmail();
    let c=validatePassword();
    error.innerText=a+"\n"+b+"\n"+c;

})


