let generatePassword =()=>{
  let passwordLength = 8;
  let password = '';
  
  for(let i=0;i<passwordLength;i++){
    var chars ='0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomChar = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomChar,randomChar + 1);
  }
  document.querySelector('.container .password-box p').innerHTML = password;
} 

let copyPassword =()=>{
  let text = document.querySelector('.container .password-box p').innerHTML;        
  navigator.clipboard.writeText(text); 
}
