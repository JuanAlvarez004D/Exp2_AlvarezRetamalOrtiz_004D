function validacion_registro()
      {
        
        em = document.getElementById('email').value;
        nom= document.getElementById('nombre').value;
        nickna= document.getElementById('nick').value;
        password = document.getElementById("pwd").value;
        password2 = document.getElementById("pwd2").value;

        if (em == null || em.length==0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(em)){
        alert("La dirección de email es incorrecta.");
        document.datos.em.focus();
        return false;
        }     
        if(nom == null || nom.length==0 || /^\s+$/.test(nom))
          {
              alert('Error.. debe ingresar un nombre');
              document.getElementById('nombre').value="";
              document.datos.nom.focus();
              return false;
          }

          if(nickna == null || nickna.length==0 || /^\s+$/.test(nickna))
          {
              alert('Error.. debe ingresar un nombre de usuario');
              document.getElementById('nick').value="";
              document.datos.nickna.focus();
              return false;
          }  

          var espacios = false;
          var cont = 0;

          while (!espacios && (cont < password.length)) {
            if (password.charAt(cont) == " ")
              espacios = true;
            cont++;
          }
            
          if (espacios) {
            alert ("La contraseña no puede contener espacios en blanco");
            if (password.length == 0){
              document.datos.password.focus();
            }
            else{
              document.datos.password2.focus();
            }
            
            return false;
          }

          if (password.length == 0 || password2.length == 0) {
            alert("Los campos de la contraseña no pueden quedar vacios");
            if (password.length == 0){
              document.datos.password.focus();
            }
            else{
              document.datos.password2.focus();
            }
            return false;
          }

          if (password != password2) {
            alert("Las contraseñas deben de coincidir");
            if (password.length == 0){
              document.datos.password.focus();
            }
            else{
              document.datos.password2.focus();
            }
            return false;
          } 

          return true;      
          
      }
function validacion_ini_se(){
      nickna_se= document.getElementById('nick_se').value;
      password_se = document.getElementById("pwd_se").value;

      if(nickna_se == null || nickna_se.length==0 || /^\s+$/.test(nickna_se))
          {
              alert('Error.. debe ingresar un nombre de usuario');
              document.getElementById('nick_se').value="";
              document.datos.nickna_se.focus();
              return false;
          } 

          var espacios = false;
          var cont = 0;

          while (!espacios && (cont < password_se.length)) {
            if (password_se.charAt(cont) == " ")
              espacios = true;
            cont++;
          }
            
        if (espacios) {
          alert ("La contraseña no puede contener espacios en blanco");
              document.datos.password_se.focus();
            return false;
          }

        if (password_se == 0) {
          alert("La contraseña no puede quedar vacía");
          document.datos.password_se.focus();
          return false
        }

      return true;
}
function CambiaColor(a)
    {
        a.style.background = 'silver';
    }
function CambiarMayusculas()
    {
        var a = document.getElementById('email');
        a.value = a.value.toUpperCase();
    }
function CambiarMayusculas2()
    {
        var a = document.getElementById('nombre');
        a.value = a.value.toUpperCase();
    }    
function CambiarMayusculas3()
    {
        var a = document.getElementById('nick');
        a.value = a.value.toUpperCase();
    }
function CambiarMayusculas4()
    {
        var a = document.getElementById('nick_se');
        a.value = a.value.toUpperCase();
    }