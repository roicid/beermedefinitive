let currentUserDB= JSON.parse(localStorage.getItem("currentUser"))

if (currentUserDB.user){
    document.getElementById("mensajeb").innerText = ` ${currentUserDB.user}`
    deleteErrors();
}else {
    document.getElementById("mensajerror").innerText = ` the user does not exist  , pls sign up ! `

}


