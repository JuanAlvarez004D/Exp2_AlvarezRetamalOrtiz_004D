function validacion()
      {
          nom= document.getElementById('nombre').value;
          //ed = document.getElementById('edad').value;
          em= document.getElementById('email').value;
          ubicacion = document.getElementById('opciones').selectedIndex;
          fono = document.getElementById('telefono').value;
          men= document.getElementById('comentarios').value;

          if(nom == null || nom.length==0 || /^\s+$/.test(nom))
          {
              alert('Error.. debe ingresar un nombre');
              document.getElementById('nombre').value="";
              document.datos.nom.focus();
              return false;
          }

          document.getElementById('email').addEventListener('input', function() {
            campo = event.target;
            valido = document.getElementById('emailOK');
                
            emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            //Se muestra un texto a modo de ejemplo, luego va a ser un icono
            if (emailRegex.test(campo.value)) {
              valido.innerText = true;
            } else {
              valido.innerText = false;
            }
        });
          

          if(!(/^\d{9}$/.test(fono)) )
          {
              alert('Error...debe ingresar un teléfono válido');
              document.getElementById('telefono').value="";
              document.datos.fono.focus();
              return false;
          }    

          if (ubicacion == null || ubicacion == 0)
          {
              alert('Seleccione un asunto');
              document.datos.opciones.focus();
              return false;
          }

          if(men == null || men.length==0 || /^\s+$/.test(men))
          {
              alert('Error.. debe agregar un mensaje');
              document.getElementById('comentarios').value="";
              document.datos.men.focus();
              return false;
          }

          return true;      
          
      }