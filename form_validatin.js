// console.log("hello");
const name = document.getElementById('name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname = false;
let validlast_name = false;
let validemail = false;
let validphone = false;
// $('#fail').hide();
// $('#success').hide();

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
validname = false;
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
validlast_name=true;
}
else{
console.log('no matched');
last_name.classList.add('is-invalid');
validlast_name = false;
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
validemail = false;
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
validphone=false;
}
})


let submit = document.getElementById('submit');
submit.addEventListener('click' , (e)=>{
	e.preventDefault();
	if (validname && validlast_name && validemail && validphone)
	{
		let success = document.getElementById('success');
		success.classList.add('show');
		// fail.classList.remove('show');
		// $('#fail').alert('close');
		$('#fail').hide();
		$('#success').show();


	}
	else
	{
		let fail = document.getElementById('fail');
		fail.classList.add('show');
		// success.classList.remove('show');
		// success.alert('close');
		// $('#success').alert('close');
		$('#success').hide();
		$('#fail').hide();


	}



	
})