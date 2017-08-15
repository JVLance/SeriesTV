$(document).ready(function () {
    //edito datos de la serie
    $(".editar").on('click', function () {
 
        var id = $(this).attr('id');
        var nombre = $("#nombre" + id).html();
        var autor = $("#autor" + id).html();
        var director = $("#director" + id).html();
        var anio = $("#anio" + id).html();
        $("<div class='edit_modal'><form name='edit' id='edit' method='post' action='http://localhost/PruebaCodeIgniter/index.php/series/multi_serie'>"+
            "<div class='respuesta'></div><label>Nombre</label><input type='text' name='nombre' class='form-control' value='"+nombre+"' id='nombre' /><br/>"+
            "<input type='hidden' name='id' class='form-control' id='id' value="+id+">"+
            "<label>Autor</label><input type='text' name='autor' class='form-control' value='"+autor+"' id='autor' /><br/>"+
            "<label>Director</label><input type='text' name='director' class='form-control' value='"+director+"' id='director' /><br/>"+
            "<label>Año</label><input type='text' name='anio' class='form-control' value='"+anio+"' id='anio' /><br/>"+
            "</form></div>").dialog({
 
                resizable:false,
                title:'Editar Serie.',
                height:300,
                width:450,
                modal:true,
                buttons:{
                    
                    "Editar":function () {
                        $.ajax({
                            url : $('#edit').attr("action"),
                            type : $('#edit').attr("method"),
                            data : $('#edit').serialize(),
 
                            success:function (data) {
 
                                var obj = JSON.parse(data);
 
                                if(obj.respuesta == 'error')
                                {
                                    
                                        alert(obj.nombre + ' ' + obj.autor + ' ' + obj.director + ' ' + obj.anio);
                                        return false;
 
                                }else{
 
                                    $('.edit_modal').dialog("close");
 
                                    $("<div class='edit_modal'>La serie de TV fué editada correctamente</div>").dialog({
 
                                        resizable:false,
                                        title:'Serie editado.',
                                        height:200,
                                        width:450,
                                        modal:true
 
                                    });
 
                                    setTimeout(function() {
                                        window.location.href = "http://localhost/PruebaCodeIgniter/index.php/series";
                                    }, 2000);
 
                                }
 
                            }, error:function (error) {
                                $('.edit_modal').dialog("close");
                                $("<div class='edit_modal'>Ha ocurrido un error!</div>").dialog({
                                    resizable:false,
                                    title:'Error editando!.',
                                    height:200,
                                    width:450,
                                    modal:true
                                });
                            }
 
                        });
                        return false;
                    },
                    Cancelar:function () {
                        $(this).dialog("close");
                    }
                }
            });
    });
 
    //eliminamos datos de la serie
    $(".eliminar").on('click', function () {
 
        var id = $(this).attr('id');
        var nombre = $("#nombre" + id).html();
        var autor = $("#autor" + id).html();
        var director = $("#director" + id).html();
        var anio = $("#anio" + id).html();

        $("<div class='delete_modal'>¿Está seguro que deseas eliminar la serie " + nombre + "?</div>").dialog({
 
            resizable:false,
            title:'Eliminar la serie ' + nombre + '.',
            height:200,
            width:450,
            modal:true,
            buttons:{
 
                "Eliminar":function () {
                    $.ajax({
                        type:'POST',
                        url:'http://localhost/PruebaCodeIgniter/index.php/series/delete_serie',
                        async: true,
                        data: { id : id },
                        complete:function () {
                            $('.delete_modal').dialog("close");
                            $("<div class='delete_modal'>La serie " + nombre + " fué eliminada correctamente</div>").dialog({
                                resizable:false,
                                title:'Serie eliminada.',
                                height:200,
                                width:450,
                                modal:true
                            });
 
                            setTimeout(function() {
                                window.location.href = "http://localhost/PruebaCodeIgniter/index.php/series";
                            }, 2000);
 
                        }, error:function (error) {
 
                            $('.delete_modal').dialog("close");
                            $("<div class='delete_modal'>Ha ocurrido un error!</div>").dialog({
                                resizable:false,
                                title:'Error eliminando la serie!.',
                                height:200,
                                width:550,
                                modal:true
 
                            });
 
                        }
 
                    });
                    return false;
                },
                Cancelar:function () {
                    $(this).dialog("close");
                }
            }
        });
    });
 
    //añado series nuevas
    $(".agregar").on('click', function () {
 
        var id = $(this).attr('id');
 
        var nombre = $("#nombre" + id).html();
        var autor = $("#autor" + id).html();
        var director = $("#director" + id).html();
        var anio = $("#anio" + id).html();

        $("<div class='insert_modal'><form name='insert' id='insert' method='post' action='http://localhost/PruebaCodeIgniter/index.php/series/multi_serie'>"+
           "<div class='respuesta'></div><label>Nombre</label><input type='text' name='nombre' class='form-control' value='"+nombre+"' id='nombre' /><br/>"+
           "<label>Autor</label><input type='text' name='autor' class='form-control' value='"+autor+"' id='autor' /><br/>"+
            "<label>Director</label><input type='text' name='director' class='form-control' value='"+director+"' id='director' /><br/>"+
            "<label>Año</label><input type='text' name='anio' class='form-control' value='"+anio+"' id='anio' /><br/>"+
            "</form></div>").dialog({
 
            resizable:false,
            title:'Añadir nueva serie.',
            height:300,
            width:450,
            modal:true,
            buttons:{
 
                "Insertar":function () {
                    $.ajax({
                        url : $('#insert').attr("action"),
                        type : $('#insert').attr("method"),
                        data : $('#insert').serialize(),
 
                        success:function (data) {
 
                            var obj = JSON.parse(data);
 
                            if(obj.respuesta == 'error')
                            {
                                
                                if (obj.encontrado == true){
                                    alert('Error: Ya existe una serie llamada ' + obj.nombre);
                                }else{
                                    alert(obj.nombre + ' ' + obj.autor + ' ' + obj.director + ' ' + obj.anio);
                                }
                                return false;
 
                             }else{
 
                                $('.insert_modal').dialog("close");
                                $("<div class='insert_modal'>La serie fué añadida correctamente</div>").dialog({
                                    resizable:false,
                                    title:'Serie añadida.',
                                    height:200,
                                    width:450,
                                    modal:true
                                });
                                setTimeout(function() {
                                    window.location.href = "http://localhost/PruebaCodeIgniter/index.php/series";
                                }, 2000);
                            }
 
                        }, error:function (error) {
                            $('.insert_modal').dialog("close");
                            $("<div class='insert_modal'>Ha ocurrido un error!</div>").dialog({
                                resizable:false,
                                title:'Error añadiendo!.',
                                height:200,
                                width:450,
                                modal:true
                            });
                        }
                    });
                    return false;
                },
                Cancelar:function () {
                    $(this).dialog("close");
                }
            }
        });
    });
});