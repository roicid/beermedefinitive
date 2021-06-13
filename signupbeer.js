let form = document.getElementById("formBeer");
let userName = document.getElementById("name");
let email =document.getElementById("email")
let password = document.getElementById("password");
let confirmpassword =document.getElementById("repeat-password");

let loginbutton = document.getElementById("login");
let signupBotton = document.getElementById("signup-button");
let formWrapper = document.getElementById("form-wrapper");

// parse transforma todos los strings en objetos !! 
let usersDB = JSON.parse(localStorage.getItem("users")); 

signupBotton.addEventListener("click", function(evento) {
    evento.preventDefault() ;  // para que continue la pagina 
    deleteErrors() ; // es la funcion que vasmos a acrear despues
    
    if (checkValidUser()){
        
        createUser(userName.value,email.value,password.value)
      
        window.location.href="index.html"
    }
})
// funcion para chekear 
function checkValidUser(){
    
         let signupValidator = new SignUpValidator (userName.value , email.value,password.value,confirmpassword.value)

         let usersDB =  JSON.parse(localStorage.getItem("users"));
         let validUser = true ; 
         if (!signupValidator.checkUsername()){
             signupValidator.errorCreator("por favor introduzca un username valido", userName);
             validUser = false ;
             
         } if (!signupValidator.checkEmail()){
             signupValidator.errorCreator("por favor intruduzca un mail vaildo! " , email )
             validUser = false ;
         }if (!signupValidator.checkPassword()){
             signupValidator.errorCreator("por favor introduzca un password mayor a 6 caracteres",password)
             validUser = false ;
            }if (!signupValidator.checkRepeatPassword()) {
                signupValidator.errorCreator("el password no coincide con el anterior " ,confirmpassword )
                validUser = false;
            }if (!signupValidator.checkEmailInDB(usersDB)){
                signupValidator.errorCreator("este mail ya existe ", email)
                validUser = false;
            }
                return validUser; 
         }

         function deleteErrors (){
            let errors = [...document.querySelectorAll(".error")]
            console.log(errors)
            errors ? errors.forEach(error => error.remove()) : null;// NO ME HAGAS NADA , NULL

            
        }
        function createUser(name , email,password){
            const newUser = new User (name , email ,password)
            if (usersDB) {
                usersDB.push( newUser)
                
            }
            else {
                usersDB = [newUser];
            }
        localStorage.setItem("users",JSON.stringify(usersDB))
        localStorage.setItem("currentUser" , JSON.stringify(newUser))
    }
         




