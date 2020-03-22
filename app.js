$(document).ready( function () {
    let userName = sessionStorage.getItem('userName')
    //comprobamos si el existe la session storage, si no existe indica que no ha iniciado session aun por ende se redirecciona nuevamente al login

    if(userName) {

        $('#title').text(userName)
    }else {
        window.location = 'login.html';
    }
})

function confirmarCierre() {
    //le doy un tiempo a la funcion cerrar sesion para que el usuario tenga un tiempo para confirmar, sino lo hizo en el tiempo se cerrara la sesion automaticamente
    
    var cerrar = setTimeout(cerrarSesion,5000);//5 segs de prueba
    let result = confirm('Su Sesión Expirara, presione OK para prolongar la Sesión 60 segundos')
    if(result) {

        clearTimeout(cerrar); //elimino el tiempo a la funcion cerrarSesion
        clearTimeout(temp); //elimino el tiempo a la funcion confirmarCierre
        temp = setTimeout(confirmarCierre, 5000); //y aca le doy un nuevo tiempo a la funcion confirmarCierre (5 segs)
        alert('Su sesión ha sido prolongada 60 segundos')
    }else{
        cerrarSesion();
    }
    
}

function cerrarSesion() {
    
    sessionStorage.clear()
    alert('Session cerrada')
    window.location = 'login.html';
    

}

// se llamará a la función que confirmar Cierre después de 10 segundos
var temp = setTimeout(confirmarCierre, 10000);

// hacemos que al pulsar en los botones de Alertify no se propaguen los eventos
$("body").on("click", ".ajs-button", function(e) {
  e.stopPropagation();
});

// cuando se detecte actividad en cualquier parte de la app
$( document ).on('click keyup keypress keydown blur change', function(e) {
    // borrar el temporizador de la funcion confirmarCierre
    clearTimeout(temp);
    // y volver a iniciarlo con 10segs
    temp = setTimeout(confirmarCierre,10000);
    
});