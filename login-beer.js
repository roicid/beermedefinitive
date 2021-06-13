'use strict'

let logMail = document.getElementById("inputmail")
let logPass = document.getElementById("inputpass")
let buttonLog = document.getElementById("buttoninput")
let usersDB =  JSON.parse(localStorage.getItem("users"));
let mensajesi =  document.getElementById("mensajeb")
let mensajerror = document.getElementById("mensajerror")
buttonLog.addEventListener("click", function (evento) {
    evento.preventDefault();
    //deleteErrors();
  
let usuarioActual = new Validaciones(logMail.value ,logPass.value)


    if (usuarioActual.checkEmailInDB()){
                window.location.href = "index.html"
    }else{
     let newp =  document.createElement("h5")
     
     newp.innerHTML= " Please Sign Up "
     mensajerror.appendChild(newp)
    }


})

class Validaciones {
    constructor(email, password) {
        this.email = email
        this.password = password
    }


/*
    checkPassword() {
        if (!this.password) {
            return false;

        } else if (this.password.length < 6) {
            return false
        } else {
            return true
        }
    }
    */
    checkEmailInDB() {
        let userInDB = false;
        if (!usersDB) {
            userInDB = false;
        } else {
            usersDB.forEach(user => {
                if (user.email === this.email && user.password === this.password) {
                    userInDB = true;
                    localStorage.setItem("currentUser", JSON.stringify(user))
                }
               // 
               // window.location.href = "index.html"
            });

        }
        return userInDB
    }

}  
// hago una variable para traeerme el usuario actual en el js linkeado al index,  si hay un usuario actual mostrar el name 
// si hay algo loguear el stirng + name .  
// almacenar en variables los inputs de nuestros html 

// chequear si el mail es valido , que tenga mas de 6 caracteres la password hacer las validaciones 

/*checkEmail () {
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
*/
// que este en la base  de datos 

// mostrar en el html que el usuario ya existe y mensaje de bienvenida 