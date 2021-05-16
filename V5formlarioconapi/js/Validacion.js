function validacion()
      {
          nom= document.getElementById('nombre').value;
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

          if (em == null || em.length==0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(em)){
            alert("La dirección de email es incorrecta.");
            document.datos.em.focus();
            return false;
            }

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
function CambiarMayusculas()
      {
          var a = document.getElementById('nombre');
          a.value = a.value.toUpperCase();
      }
function CambiarMayusculas2()
      {
          var a = document.getElementById('email');
          a.value = a.value.toUpperCase();
      } 