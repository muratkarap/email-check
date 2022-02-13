let email = document.getElementById("email");
let control=document.getElementById("button");
let result=document.getElementById("demo");

control.addEventListener("click",()=>{
    let mail=email.value; 
    if (mail.toLowerCase()==mail && mail.includes("@") && mail.includes(".") && 
    (mail.indexOf(".")+4==mail.length||mail.indexOf(".")+3==mail.length)){
        result.innerText="approved"
    } else{
        result.innerText="Not approved"
    }

})


