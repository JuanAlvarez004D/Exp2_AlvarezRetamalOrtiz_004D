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

          /*if (em.length!=0 || /^@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(em)){
            alert("La dirección está incompleta");
            document.datos.em.focus();
            return false;
          } else {
            return true;
          }*/

        
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