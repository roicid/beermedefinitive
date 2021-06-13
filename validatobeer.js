'use strict' 

class Validator {
    constructor(userName, email, password){
this.userName = userName
this.email = email
this.password = password 


}

checkUsername ()  {
return this.userName ? true : false ; 

}
//regex  es para validar el mail . 
checkEmail () {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email) ? true : false 
}
checkPassword () {
     if (!this.password) {
         return false
     }else if (this.password.length < 6) {
     return false }
     else { 
         return true 
     }
}
errorCreator(message , location ) {
     let div = document.createElement("div");
     div.setAttribute("class" , "error")
     div.innerHTML= message;
     form.append(div , location )

}   
deleteErrors(){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}
}    


class SignUpValidator extends Validator {
    constructor (userName,mail,password,repeatPassword){
    super(userName , mail, password)
    this.repeatPassword = repeatPassword

}

checkEmailInDB (usersDB) { 
    let userExist = true ; 
    if (!usersDB) {
        return true ; 
    } else {
        usersDB.forEach(user => {
            if (user.email === this.email) {
                userExist = false ; 
            }
        }
            )

    }return userExist
}

checkRepeatPassword() {
    console.log(this.password)
    console.log(this.repeatPassword)
    if (this.password === this.repeatPassword){
        return true ;
    }
    else {
        return false ; 
    }
}
}


class LoginValidator extends Validator {
    constructor () {
        super () ;
     
    }

 checkEmailInDB(string){
     if (!usersDB) {

    return false 
     }else {
         usersDB.forEach(user => {
             if (user.email = string ){
                 return true 
             }
         })
     }
 }
    
}

