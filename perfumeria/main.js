angular.module("MyApp",[])

    .controller("simulador",function($scope){

        /*
        *Inicialización de variables
        */
        $scope.intensidad = 1;
        $scope.tipoIntensidad = 'ligero';
        $scope.tipoFlores = [];
        $scope.tipoFrutas = [];
        $scope.tipoHierbas = [];
        $scope.tipoDiversos = [];
        $scope.sexo = 1;
        $scope.solicitud = true;
        $scope.estilo = 0;
        $scope.fragancia = 0;
        $scope.totalPerfume = 0;
        $scope.nombre = '';
        $scope.apellido = '';
        $scope.correo = '';
        $scope.celular = '';
        $scope.contacto = true;
        $scope.catalogo = true;
        $scope.perfume = '';
        $scope.mensaje='';
        $scope.nombrePerfume = '';
        $scope.valorPerfume = '';
        $scope.frascos = false;

        /*
        * Función para activar la tab y la view 1
        */                       
        $scope.tab_uno = function() {
            document.getElementById("tab_uno").classList.remove('active');
            document.getElementById("tab_uno").classList.add('active');
            document.getElementById("tab_dos").classList.remove('active');
            document.getElementById("tab_tres").classList.remove('active');
            document.getElementById("tab_cuatro").classList.remove('active');
            document.getElementById("view-uno").style.display = "block";
            document.getElementById("view-dos").style.display = "none";
            document.getElementById("view-tres").style.display = "none";
            document.getElementById("view-cuatro").style.display = "none";
            $scope.mensaje = '';
        }
        /*
        * Función para activar la tab y la view 2
        */
        $scope.tab_dos = function() {
            document.getElementById("tab_dos").classList.remove('active');
            document.getElementById("tab_dos").classList.add('active');
            document.getElementById("tab_uno").classList.remove('active');
            document.getElementById("tab_tres").classList.remove('active');
            document.getElementById("tab_cuatro").classList.remove('active');
            document.getElementById("view-uno").style.display = "none";
            document.getElementById("view-dos").style.display = "block";
            document.getElementById("view-tres").style.display = "none";
            document.getElementById("view-cuatro").style.display = "none";
            $scope.mensaje = '';
        }
        /*
        * Función para activar la tab y la view 3
        */
        $scope.tab_tres = function() {
            document.getElementById("tab_tres").classList.remove('active');
            document.getElementById("tab_tres").classList.add('active');
            document.getElementById("tab_dos").classList.remove('active');
            document.getElementById("tab_uno").classList.remove('active');
            document.getElementById("tab_cuatro").classList.remove('active');
            document.getElementById("view-uno").style.display = "none";
            document.getElementById("view-dos").style.display = "none";
            document.getElementById("view-tres").style.display = "block";
            document.getElementById("view-cuatro").style.display = "none";
            $scope.mensaje = '';
        }
        /*
        * Función para activar la tab y la view 4
        */
        $scope.tab_cuatro = function() {
            document.getElementById("tab_cuatro").classList.remove('active');
            document.getElementById("tab_cuatro").classList.add('active');
            document.getElementById("tab_dos").classList.remove('active');
            document.getElementById("tab_tres").classList.remove('active');
            document.getElementById("tab_uno").classList.remove('active');
            document.getElementById("view-uno").style.display = "none";
            document.getElementById("view-dos").style.display = "none";
            document.getElementById("view-tres").style.display = "none";
            document.getElementById("view-cuatro").style.display = "block";
            $scope.mensaje = '';
        }
        /*
        * Función para identicar la intensidad que elige el cliente con botón +
        */
        $scope.intensidadMas = function () {
            $scope.intensidad = $scope.intensidad > 4 ? 5 : $scope.intensidad + 1; 
            switch ($scope.intensidad) {
                case 1:
                    $scope.tipoIntensidad = 'Ligero';
                    break;
                case 2:
                    $scope.tipoIntensidad = 'Fresco';
                    break;
                case 3:
                    $scope.tipoIntensidad = 'Medio';
                    break;
                case 4:
                    $scope.tipoIntensidad = 'Fuerte';
                    break;
                case 5:
                    $scope.tipoIntensidad = 'Intenso';
                    break;
            }

        }
        /*
        * Función para identicar la intensidad que elige el cliente con botón -
        */
        $scope.intensidadMenos = function () {
            $scope.intensidad = $scope.intensidad < 2 ? 1 : $scope.intensidad - 1; 
            switch ($scope.intensidad) {
                case 1:
                    $scope.tipoIntensidad = 'Ligero';
                    break;
                case 2:
                    $scope.tipoIntensidad = 'Fresco';
                    break;
                case 3:
                    $scope.tipoIntensidad = 'Medio';
                    break;
                case 4:
                    $scope.tipoIntensidad = 'Fuerte';
                    break;
                case 5:
                    $scope.tipoIntensidad = 'Intenso';
                    break;
            }
        }
        /*
        * Función para identicar los aromas de flores que elige el cliente
        */
        $scope.flores = function (flor){
            let existe = $scope.tipoFlores.indexOf( flor )
            if (existe<0) {
                $scope.tipoFlores.push(flor);
            }else{
                $scope.tipoFlores.splice( existe, 1 );
            }
        }
        /*
        * Función para identicar los aromas de frutas que elige el cliente
        */
        $scope.frutas = function (fruta){
            let existe = $scope.tipoFrutas.indexOf( fruta )
            if (existe<0) {
                $scope.tipoFrutas.push(fruta);
            }else{
                $scope.tipoFrutas.splice( existe, 1 );
            }
        }
        /*
        * Función para identicar los aromas de hierbas que elige el cliente
        */
        $scope.hierbas = function (hierba){
            let existe = $scope.tipoHierbas.indexOf( hierba )
            if (existe<0) {
                $scope.tipoHierbas.push(hierba);                      
            }else{
                $scope.tipoHierbas.splice( existe, 1 );
            }
        }
        /*
        * Función para identicar los aromas diversos que elige el cliente
        */
        $scope.diversos = function (diverso){
            let existe = $scope.tipoDiversos.indexOf( diverso )
            if (existe<0) {
                $scope.tipoDiversos.push(diverso);                      
            }else{
                $scope.tipoDiversos.splice( existe, 1 );
            }
        }
        /*
        * Función que calcula el valor del perfume con sus ingredientes
        */
        $scope.procesar = function (){
            $scope.solicitud = false;
            $scope.contacto = false;
            $scope.frascos = true;
        }
        $scope.regresarFrascos = function (){
            $scope.frascos = false;
            $scope.contacto = true;
            $scope.solicitud = true;
        }
        /*
        * Función que oculta el panel de total del perfume y muestra los ingredientes
        */
        $scope.regresar = function (){
            $scope.frascos = true;
            $scope.contacto = false;
            $scope.mensaje = '';
        }
        /*
        * Función que muestra el formulario de contacto y oculta el valor total del perfume
        */
        $scope.finalizar = function (){
            $scope.frascos = false;
            $scope.contacto = false;
            $scope.finalPerfume = true;
            $scope.mensaje = '';
        }
        $scope.frasco = function (nombre, valor){
            $scope.nombrePerfume = nombre;
            $scope.valorPerfume = valor;
            $scope.finalPerfume = false;
            $scope.frascos = false;
            $scope.contacto = true;
            let valorFragancia = $scope.fragancia > 0 ? 3000 : 0;
            let valorEstilo = $scope.fragancia > 0 ? 3000 : 0;
            $scope.totalPerfume = 10000 + 2000 + valorFragancia + ($scope.tipoFlores.length * 5000)
            + ($scope.tipoFrutas.length * 5000) + ($scope.tipoHierbas.length * 5000) 
            + ($scope.tipoDiversos.length * 5000) + valorEstilo + $scope.valorPerfume;
        }
        /*
        * Función que limpia el formulario de contacto
        */
        $scope.enviar = function (){
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let correo = document.getElementById("correo").value;
            let celular = document.getElementById("celular").value;
            if (nombre.length > 0 && apellido.length > 0 && correo.length > 0 && celular.length > 0){
                document.getElementById("nombre").value = '';
                document.getElementById("apellido").value = '';
                document.getElementById("correo").value = '';
                document.getElementById("celular").value = '';
                document.getElementById("enviar").setAttribute("disabled","disabled");
                $scope.mensaje = 'Formulario enviado con exito';
            } else {
                $scope.mensaje = 'Se deben llenar todos los campos';
            }
        }
        /*
        * Función que regresa del formulario de registro al de total del perfume
        */
        $scope.regresarPedido = function (){
            $scope.finalPerfume = false;
            $scope.contacto = true;
            $scope.mensaje = '';
        }
        /*
        * Función que limpia el registro del formulario de cliente en catalogo
        */
        $scope.enviarCompra = function (){
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let correo = document.getElementById("correo").value;
            let celular = document.getElementById("celular").value;
            if (nombre.length > 0 && apellido.length > 0 && correo.length > 0 && celular.length > 0){
                document.getElementById("nombre").value = '';
                document.getElementById("apellido").value = '';
                document.getElementById("correo").value = '';
                document.getElementById("celular").value = '';
                document.getElementById("enviarCompra").setAttribute("disabled","disabled");
                $scope.mensaje = 'Formulario enviado con exito';
            } else {
                $scope.mensaje = 'Se deben llenar todos los campos';
            }
        }
        /*
        * Función que oculta el formulario de registro  y muestra el catalogo
        */
        $scope.regresarCatalogo = function (){
            $scope.catalogo = true;
            $scope.mensaje = '';
        }
        /*
        * Función que oculta el catalogo y muestra el formulario de registro
        */
        $scope.comprar = function(perfume) {
            $scope.perfume = perfume;
            $scope.catalogo = false;
            $scope.mensaje = '';
        }
    });

