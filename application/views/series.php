<!DOCTYPE html>
<html lang="es">
<head>
    <title>Mantenedor de Series</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>/css/bootstrap.min.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.10.1/themes/ui-darkness/jquery-ui.css" />
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>

    <script type="text/javascript" src="<?php echo base_url()?>js/funciones.js"></script>
</head>
<body> 
    <div class = "row">
        <div class = "col-sm-12">
            <h1>Mantenedor de Series</h1>
        </div>
        <div class = "col-sm-12">
            <table class = "table table-bordered table-striped">
                <thead>
                    <th>Nombre</th>
                    <th>Autor</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    <?php foreach($series as $fila){ ?>
                    <tr>
                        <td id="nombre<?=$fila->id?>"><?=$fila->nombre?></td>
                        <td id="autor<?=$fila->id?>"><?=$fila->autor?></td>
                        <td id="director<?=$fila->id?>"><?=$fila->director?></td>
                        <td id="anio<?=$fila->id?>"><?=$fila->anio?></td>
                        <td><input type="button" value="Eliminar" id="<?=$fila->id?>" class="btn btn-danger eliminar"> <input type="button" value="Editar" id="<?=$fila->id?>" class="btn btn-info editar"></td>
                    </tr>
                    <?php } ?>        
                </tbody>
            </table>
        </div>
        <div class = "col-sm-12">
            <input type="button" value="Añadir" id="<?=$fila->id?>" class="btn btn-success agregar">
        </div>
    </div>
</body>
</html>