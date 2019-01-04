
$( "form" ).submit(function( event ) {

           var email = $("input#vr1").val();
           var pass = $("input#vr2").val();         
          

          $.ajax({
                url: "../mod-server/mod-intra.php",
                type: "POST",
                data: {
                    email:email,
                    pass: pass       
                },
                cache: false,
                dataType :'json',
                success: function(resp) {
                   
                   switch(resp.status){

                    case 200:
                         // Success message
                         $('#success').html("<div class='alert alert-danger'>");
                         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                         $('#success > .alert-danger').append("<strong>"+resp.ms+ "</strong>");
                         $('#success > .alert-danger').append('</div>');
                         //clear all fields
                         $('#form').trigger("reset");

                    break;

                    case 210:
                         // Success message

                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-success')
                            .append("<strong>"+resp.ms+"</strong>");
                        $('#success > .alert-success')
                            .append('</div>');
                            //clear all fields
                        $('#form').trigger("reset");//evento trigger ejecuta funcion reset

                        if (resp.redirect)
                        {
                            // data.redirect contains the string URL to redirect to
                            window.location.href = resp.redirect;     
                        }
                    break;
                   }

                },
                error: function() {
                    // Fail message errores que vienen del servidor
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Disculpa " + email+ ",Error en el servidor");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
          })

        
  event.preventDefault();
});
