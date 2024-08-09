let userName =document.getElementById(`name`)
let email =document.getElementById(`email`)
let password =document.getElementById(`password`)
let BtnLogin =document.getElementById(`Btnlogin`)
let user =[]


BtnLogin.addEventListener(`click`,function(){
    
    if(validationName()== true && validationEmail()== true && validationPassword()){
        let userData ={
            userName:userName.value, 
            email:email.value, 
            password:password.value, 
        }
        user.push(userData)
        // console.log(user);
        localStorage.setItem(`data`,JSON.stringify(user))
        document.getElementById(`error`).innerHTML =``
        window.open(`home.html`,`_self`)
    }
})


function validationName(){
    let regx = /^\w{3,8}$/
    if(regx.test(userName.value)==true){
        return true
    }
    else{
        document.getElementById(`error`).innerHTML= `<div class="alert alert-danger"> Name Invalid...!</div>`
    }
}

function validationEmail(){
    let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(regx.test(email.value)==true){
        return true
    }
    else{
        document.getElementById(`error`).innerHTML= `<div class="alert alert-danger"> Email Invalid...!</div>`
    }
}

function validationPassword(){
    let regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regx.test(password.value)==true){
        return true
    }
    else{
        document.getElementById(`error`).innerHTML= `<div class="alert alert-danger"> Password Invalid...!</div>`
    }
}
