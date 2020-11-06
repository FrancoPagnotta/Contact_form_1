function contacto() {
    var nombre = document.getElementById("nombre_id").value;
    var apellido = document.getElementById("apellido_id").value;
    var dni = document.getElementById("dni_id").value;
    var email = document.getElementById("email_id").value;
    var telefono = document.getElementById("telefono_id").value;
    var franquicia = document.getElementById("franquicia_id").value;
    
    if (nombre ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios" 
    /* innerHTML es para elementos que no son de formularios*/ 
    }
    
    if (apellido ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios"
    }

    if (dni ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios"
    }

    if (email ==""){
        document.getElementById("mensaje_alerta").innerHTML ="*Todos los campos son obligatorios"
    }

    if (telefono ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios"
    }

    if (franquicia ==""){
        document.getElementById ("mensaje_alerta").innerHTML = "Todos los campos son obligatorios"
    }
    
    console.log (nombre, apellido, dni, email, telefono);
}
