// console.log("hello");
const name = document.getElementById('name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gphone = document.getElementById('gphone');
// console.log(name,last_name,email,phone);
name.addEventListener('blur', ()=>{
console.log('name is blured')
//starts name validation
let regex = /^[a-zA-Z]([0-9a-zA-Z])/;
let str = name.value;
console.log(regex , str);
if (regex.test(str)){
console.log('it matched');
name.classList.remove('is-invalid');
validname=true;
}
else{
console.log('no matched');
name.classList.add('is-invalid');
}
})
last_name.addEventListener('blur', ()=>{
console.log('last_name is blured');
let regex = /^[a-zA-Z]([0-9a-zA-Z])/;
let str = last_name.value;
console.log(regex , str);
if (regex.test(str)){
console.log('it matched');
last_name.classList.remove('is-invalid');
validname=true;
}
else{
console.log('no matched');
last_name.classList.add('is-invalid');
}
})
// email validation
email.addEventListener('blur', ()=>{
console.log('email is blured')
// email validation starts
let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
let str = email.value;
console.log(regex , str);
if (regex.test(str)){
console.log('it matched');
email.classList.remove('is-invalid');
validemail=true;
}
else{
console.log('no matched');
email.classList.add('is-invalid');
}
})
// phone validation
phone.addEventListener('blur', ()=>{
console.log('phone is blured')
// phone validation starts
let regex = /^([0-9]){10}$/;
let str = phone.value;
console.log(regex , str);
if (regex.test(str)){
console.log('it matched');
phone.classList.remove('is-invalid');
validphone=true;
}
else{
console.log('no matched');
phone.classList.add('is-invalid');
}
})