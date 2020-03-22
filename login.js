//valores por default para el usuario
let userName    = 'admin';
let pass        = 'admin';
//--------------


$(document).ready( function () {
    $('#txtUserName').focus();
})


$('#login').click( (e) => {
    
    //se captura los valores de los input del login y se almacena en variables
    let userNameInput   = $('#txtUserName').val()
    let passInput       = $('#txtPass').val()
    
    //se combrueba si los valores de los input son iguales a los valores por default del usuario
    if(userNameInput == userName && passInput == pass) {

        //se crea la session storoge del usuario
        sessionStorage.setItem('userName' , userNameInput)

        //se redirecciona al index.html 
        window.location = 'index.html';
    }
    else{
        
        alert('Usuario o contraseña incorrecta.')
    }
} )