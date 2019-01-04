
$(document).on("ready",function(){
    
//ocultar boton
$("#btn-editar").hide();
$("#btn-agregar").hide();
$("#editar").hide();
$("#eliminar").hide();
$("#publicar").hide();
    

//-----------------Declaracion variables--------------------------

cod="";  
set_public =new Date().toJSON().slice(0,10);

    
//------------------button---editar------------------------------
    

$("#editar").on("click",function(e)
    {
    e.preventDefault();
    if(cod!="")
    {
        $("#btn-editar").show();
        $("#btn-agregar").hide();
        //pasando parametro funcion
        sts="buscar"
        search(sts,cod)
        
    }else{
        Materialize.toast('Por favor selecione la nota que desea editar', 4000);
    }
    });

$("#crud-editar").on("click",function(e)
   {
    e.preventDefault();
    var accion="edit";
 
    validacion(accion);
   })

    
    
//-----------------------------------------------button---agregar-------------------------------------------    
$("#agregar").on("click",function()
    {
        $("#btn-agregar").show();
        $("#btn-editar").hide();
  
    });


$("#crud-agregar").on("click",function(e)
    {
        e.preventDefault();
        var accion="agr";
        validacion(accion);   
    })
//--------------publicar----------------------
$("#publicar").on("click",function(e)
    {
        e.preventDefault();
        var sts="publicar"; 
        public(sts,cod) 
    })
//--------------eliminar-----------
$("#eliminar").on("click",function(e)
    {
        e.preventDefault();
        var sts="eliminar"; 
        eliminar(sts,cod) 
    })
//---------------------------------validacion----------------------
function validacion(accion) 
{
  vr1=$('input:text[name=titulo]').val()
  vr2=$('input:text[name=descripcion]').val()
  vr3=$('input:text[name=escrito]').val()

 
    if($.trim(vr1) == "") 
    {
        var msn="Titulo",dt=1;
        
       mensaje(msn,dt);      
    }
    else if($.trim(vr2) =="") {
        var msn="Descripcion",dt=1;
        mensaje(msn,dt);      

    }
    else if($.trim(vr3) =="") 
    {
        var msn="Publicado por",dt=1;
        mensaje(msn,dt);     

    }
    else 
    {

        switch (accion) 
         {
          case "agr":
              var sts="agregar";   
              add(sts); 
               
          break;
          case "edit":
                 
                var sts="edit"; 
                edit(sts,cod);
          break;
        
         }
    }
}

//-------------------------------funciones----------------------------------------- 
    
//-funcion mensaje

function mensaje(msn,dt)
{
    
    if(dt==1)
    {
        Materialize.toast('Por favor llene el campo '+msn+'', 4000); 

    }else if(dt==070){
        Materialize.toast(msn, 4000);
    }else{
        Materialize.toast(msn, 4000);
        $('#form').each (function(){
            this.reset();
        });
    }
    
}
//-funcion selecion de card
$("#divnotasof").on('click','a',function(e)
    {
    e.preventDefault();				
    //obtengo el codigo attr data de la etiqueta a
    cod=$(this).attr("data-codigo");    
    if(cod!="")
        {   
           console.log(cod)
           $("#editar").show("slow");
           $("#eliminar").show("slow");
             $("#publicar").show("slow");
           
        }
});    


//----------------------------funciones crud-------------------------------------------------
    
function add(sts)
{

     $.ajax({
                url: "../mod-server/mod-notas.php",
                type: "POST",
                data: {
                    sts:sts,
                    set_not_t:vr1,
                    set_not_d:vr2,
                    set_not_e:vr3
                },
                cache: false,
                dataType :'json',
                success: function(resp) 
                {
                   if(resp.not_cod==080){
                    var msn=("Nota agregada con exito"),dt=0;    
                    mensaje(msn,dt);
                   }else{
                    var msn=("Problema al agregada la Nota"),dt=0;    
                    mensaje(msn,dt);
                   }
                },
                error: function() {
                    // Fail message errores que vienen del servidor
                  var msn=("Problemas con el server"),dt=0;    
                   mensaje(msn,dt);
                },
          })   
}    
//---------------------------buscar------------------------------
    function search(sts,cod)
{

     $.ajax({
                url: "../mod-server/mod-notas.php",
                type: "POST",
                data: {
                    sts:sts,
                    set_not_c:cod,
                   
                },
                cache: false,
                dataType :'json',
                success: function(resp) 
                {
                    if(resp.not_cod!=040)
                       {

                       console.log(resp)
                                //declaracion de las variables	
                                var get_not_t=resp.not_titulo; 
                                var get_not_e =resp.not_descripcion;
                                var get_not_d =resp.not_escrito;
                           
                            $('input:text[name=titulo]').val(get_not_t)
                            
                            $('input:text[name=descripcion]').val(get_not_e)
                            
                            $('input:text[name=escrito]').val(get_not_d)
                            
                            alert(get_not_t)
                            //llamado de la funcion mensaje
                            
                            
                    
                           var msn=("Ahora puede editar la nota"),dt=070;    
                mensaje(msn,dt);
                    }else{
                        var msn=("Nota no existe"),dt=0;    
                        mensaje(msn,dt);
                       }
                },
                error: function() {
                    // Fail message errores que vienen del servidor
                  var msn=("Problemas con el server"),dt=0;    
                   mensaje(msn,dt);
                },
          })   
}    
 
//---------------------------------------editar---------------------------
function edit(sts,cod)
{

     $.ajax({
                url: "../mod-server/mod-notas.php",
                type: "POST",
                data: {
                    sts:sts,
                    set_not_t:vr1,
                    set_not_d:vr2,
                    set_not_e:vr3,
                    set_not_c:cod,
                },
                cache: false,
                dataType :'json',
                success: function(resp) 
                {
                   if(resp.not_cod==080){
                    var msn=("Nota editada con exito"),dt=0;    
                    mensaje(msn,dt);
                   }else{
                    var msn=("Problema al editar la Nota"),dt=0;    
                    mensaje(msn,dt);
                   }
                },
                error: function() {
                    // Fail message errores que vienen del servidor
                  var msn=("Problemas con el server"),dt=0;    
                   mensaje(msn,dt);
                },
          })   
}   

//--------------------------------------    

//function publicar(){}
function public(sts,cod)
{

     $.ajax({
                url: "../mod-server/mod-notas.php",
                type: "POST",
                data: {
                    sts:sts,
                    set_not_p:set_public,
                    set_not_c:cod,
                },
                cache: false,
                dataType :'json',
                success: function(resp) 
                {
                   if(resp.not_cod==080){
                    var msn=("Nota publicada con exito"),dt=0;    
                    mensaje(msn,dt);
                   }else{
                    var msn=("Problema al publicar la Nota"),dt=0;    
                    mensaje(msn,dt);
                   }
                },
                error: function() {
                    // Fail message errores que vienen del servidor
                  var msn=("Problemas con el server"),dt=0;    
                   mensaje(msn,dt);
                },
          })   
}   

//function eliminar(){}
function eliminar(sts,cod)
{

     $.ajax({
                url: "../mod-server/mod-notas.php",
                type: "POST",
                data: {
                    sts:sts,
                    set_not_c:cod,
                },
                cache: false,
                dataType :'json',
                success: function(resp) 
                {
                   if(resp.not_cod==080){
                    var msn=("Nota eliminada con exito"),dt=0;    
                    mensaje(msn,dt);
                   }else{
                    var msn=("Problema al eliminar la Nota"),dt=0;    
                    mensaje(msn,dt);
                   }
                },
                error: function() {
                    // Fail message errores que vienen del servidor
                  var msn=("Problemas con el server"),dt=0;    
                   mensaje(msn,dt);
                },
          })   
}  
  
})

