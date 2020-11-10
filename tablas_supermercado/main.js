angular.module("MyApp",[])

    .controller("simulador",function($scope){

        /*
        *Inicialización de variables
        */
        $scope.idProductoComprado  = 0;
        $scope.tipoIntensidad = 'ligero';
        $scope.tipoFlores = [];
        $scope.facturas = [];
        $scope.productoComprado = [];
        $scope.valorSubFactura = 0;
        $scope.valorIva = 0;
        $scope.numFactura = 100;
        $scope.valorFactura = 0;
        $scope.descripcionProducto = '';
        $scope.valorProducto = '';
        $scope.nombreProducto = '';
        $scope.referenciaProducto = '';
        $scope.ciudadSelect = '';
        $scope.sexoSelect = '';
        $scope.correoCliente = '';
        $scope.telefonoCliente = '';
        $scope.documentoCliente='';
        $scope.apellidoCliente = '';
        $scope.nombreCliente = '';

        $scope.tipoSexo = [{id:"1", nombre:"Mujer"}, {id:"2", nombre:"Hombre"}];

        $scope.clientes = [{id:"1", nombre:"Wendy", apellido:"Torres", documento:"1032416819", correo:"wendy@gmail.com", celular:"3100000001", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 1, nombre: "Bogotá"}},
            {id:"2", nombre:"Ana", apellido:"Perez", documento:"1025639874", correo:"ana@gmail.com", celular:"3100000002", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 2, nombre: "Medellín"}},
            {id:"3", nombre:"Juan", apellido:"Medina", documento:"1235698145", correo:"juan@gmail.com", celular:"3100000003", sexo:{id:"2", nombre:"Hombre"}, ciudad:{id: 3, nombre: "Cali"}},
            {id:"4", nombre:"Daniela", apellido:"Briceño", documento:"85169817", correo:"daniela@gmail.com", celular:"3100000004", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 4, nombre: "Barranquilla"}},
            {id:"5", nombre:"Marcela", apellido:"Higuera", documento:"75289152", correo:"marcela@gmail.com", celular:"3100000005", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 5, nombre: "Cartagena"}},
            {id:"6", nombre:"David", apellido:"Ramirez", documento:"96354120", correo:"david@gmail.com", celular:"3100000006", sexo:{id:"2", nombre:"Hombre"}, ciudad:{id: 6, nombre: "Santa Marta"}},
            {id:"7", nombre:"Camila", apellido:"Briñez", documento:"68123859", correo:"camila@gmail.com", celular:"3100000007", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 9, nombre: "Ibague"}},
            {id:"8", nombre:"Fernando", apellido:"Gomez", documento:"1025854964", correo:"fernando@gmail.com", celular:"3100000008", sexo:{id:"2", nombre:"Hombre"}, ciudad:{id: 10, nombre: "Manizales"}},
            {id:"9", nombre:"Andres", apellido:"Goyes", documento:"49874236", correo:"andres@gmail.com", celular:"3100000009", sexo:{id:"2", nombre:"Hombre"}, ciudad:{id: 1, nombre: "Bogotá"}},
            {id:"10", nombre:"Angela", apellido:"Contreras", documento:"125943785", correo:"angela@gmail.com", celular:"3100000010", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 1, nombre: "Bogotá"}},
            {id:"11", nombre:"Sandra", apellido:"Gil", documento:"39427863", correo:"sandra@gmail.com", celular:"3100000011", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 1, nombre: "Bogotá"}},
            {id:"12", nombre:"Catalina", apellido:"Guzman", documento:"74567459", correo:"catalina@gmail.com", celular:"3100000012", sexo:{id:"1", nombre:"Mujer"}, ciudad:{id: 1, nombre: "Bogotá"}}
        ];

        $scope.tipoCiudad = [{id: 1, nombre: "Bogotá"},
            {id: 2, nombre: "Medellín"},
            {id: 3, nombre: "Cali"},
            {id: 4, nombre: "Barranquilla"},
            {id: 5, nombre: "Cartagena"},
            {id: 6, nombre: "Santa Marta"},
            {id: 7, nombre: "Villavicencio"},
            {id: 8, nombre: "Cucuta"},
            {id: 9, nombre: "Ibague"},
            {id: 10, nombre: "Manizales"}
        ];

        $scope.productos =[
            {id: 1, referencia: '101', nombre: 'Arroz', valor:'2500', descripcion:'Grano que puede acompañar muchas comidas de los platos colombianos.'},
            {id: 2, referencia: '102', nombre: 'Pasta', valor:'3000', descripcion:'Alimento saludable, muy versátil y fácil de preparar.'},
            {id: 3, referencia: '103', nombre: 'Lenteja', valor:'2100', descripcion:'La lenteja es un alimento con una alta concentración de nutrientes.'},
            {id: 4, referencia: '104', nombre: 'Fríjol', valor:'2200', descripcion:'El frijol es una leguminosa que constituye una rica fuente de proteínas e hidratos de carbono, además es abundante en vitaminas del complejo B'},
            {id: 5, referencia: '105', nombre: 'Leche', valor:'3200', descripcion:'La leche de vaca es un producto lacteo con el que se pueden realizar varias bebidas frías o calientes.'}
        ]

        $scope.facturas = [
            {
                ciudad: {id: 3, nombre: "Cali"},
                cliente: {
                    id: "2", 
                    nombre: "Ana", 
                    apellido: "Perez", 
                    documento: "1025639874", 
                    correo:"ana@gmail.com", 
                    ciudad: {id: 2, nombre: "Medellín"}, 
                    sexo: {id: "1", nombre: "Mujer"}
                },
                productos: [{
                    cantidad: 10,
                    descripcion: "Alimento saludable, muy versátil y fácil de preparar.",
                    id: 1,
                    iva: 5700,
                    nombre: "Pasta",
                    referencia: "102",
                    valor: "3000",
                    valorConIva: 35700,
                    valorTotal: 30000
                },{
                    cantidad: 50,
                    descripcion: "El frijol es una leguminosa que constituye una rica fuente de proteínas e hidratos de carbono, además es abundante en vitaminas del complejo B",
                    id: 2,
                    iva: 20900,
                    nombre: "Fríjol",
                    referencia: "104",
                    valor: "2200",
                    valorConIva: 130900,
                    valorTotal: 110000,
                }],
                id: 1,
                iva: 26600,
                numero: 100,
                subTotal: 140000,
                super: "Super Mercado Valentina",
                valorTotal: 166600
            }
        ];

        /*
        * Función para activar la tab y la view 1
        */                       
        $scope.tab_uno = function(id) {
            for (var i = 1; i <= 6; i++){
                if(i==id){
                    document.getElementById("tab_"+id).classList.remove('active');
                    document.getElementById("tab_"+id).classList.add('active');
                    document.getElementById("view-"+id).style.display = "block";
                } else {
                    document.getElementById("tab_"+i).classList.remove('active');
                    document.getElementById("view-"+i).style.display = "none";
                }
            }
            $scope.mensaje = '';
        }

        $scope.registrarCliente = function () {
            $scope.mensaje = '';
            if( $scope.nombreCliente.length > 0 && $scope.apellidoCliente.length > 0 && $scope.documentoCliente > 0){
                $scope.clientes.push({id: $scope.clientes.length +1,
                    nombre: $scope.nombreCliente, 
                    apellido:$scope.apellidoCliente, 
                    documento:$scope.documentoCliente,
                    correo: $scope.correoCliente,
                    celular: $scope.telefonoCliente,
                    sexo: $scope.sexoSelect,
                    ciudad: $scope.ciudadSelect
                });
                $scope.mensaje = 'Cliente registrado con éxito';
                $scope.nombreCliente = '';
                $scope.apellidoCliente = '';
                $scope.documentoCliente = '';
            } else {
                $scope.mensaje = 'Debe llenar todos los campos';
            }
        }

        $scope.registrarProducto = function (){
            $scope.mensaje = '';
            if( $scope.referenciaProducto.length > 0 && $scope.nombreProducto.length > 0 && $scope.valorProducto > 0 && $scope.descripcionProducto.length > 0){
                $scope.productos.push({id: $scope.productos.length +1,
                    referencia: $scope.referenciaProducto, 
                    nombre:$scope.nombreProducto, 
                    valor:$scope.valorProducto,
                    descripcion: $scope.descripcionProducto
                });
                $scope.mensaje = 'Producto registrado con éxito';
                $scope.referenciaProducto = '';
                $scope.nombreProducto = '';
                $scope.valorProducto = '';
                $scope.descripcionProducto = '';
            } else {
                $scope.mensaje = 'Debe llenar todos los campos';
            }
        }

        $scope.agregarProducto = function (){
            if($scope.cantidadCompra>0 ){
                $scope.idProductoComprado += 1;
                $scope.productoComprado.push({
                    id:$scope.idProductoComprado,
                    referencia: $scope.productoSelect.referencia, 
                    nombre:$scope.productoSelect.nombre, 
                    valor:$scope.productoSelect.valor,
                    descripcion: $scope.productoSelect.descripcion,
                    cantidad: $scope.cantidadCompra,
                    iva: ($scope.productoSelect.valor * 0.19) * $scope.cantidadCompra,
                    valorTotal: $scope.cantidadCompra * $scope.productoSelect.valor,
                    valorConIva: (($scope.productoSelect.valor * 0.19) * $scope.cantidadCompra)+($scope.cantidadCompra * $scope.productoSelect.valor)
                });
                $scope.valorFactura = 0;
                $scope.valorSubFactura = 0;
                $scope.productoSelect = [];
                $scope.valorIva = 0;
                for(var i = 0; i<$scope.productoComprado.length; i++){
                    $scope.valorIva += $scope.productoComprado[i].iva;
                    $scope.valorSubFactura += $scope.productoComprado[i].valorTotal;
                    $scope.valorFactura += $scope.productoComprado[i].valorTotal + $scope.productoComprado[i].iva;
                }
                $scope.cantidadCompra = '';
            }
            
        }

        $scope.quitarProducto = function (id, valor, iva, subtotal){
            for(var i = 0; i<$scope.productoComprado.length; i++){
                if($scope.productoComprado[i].id == id){
                    $scope.productoComprado.splice( i, 1 );
                }
            }
            $scope.valorFactura -= valor;
            $scope.valorIva -= iva;
            $scope.valorSubFactura -= subtotal;
        }

        $scope.registrarFactura = function(){
            $scope.numFactura += 1;
            $scope.facturas.push({
                id:$scope.facturas.length+1,
                numero:$scope.numFactura,
                super:'Super Mercado Valentina',
                productos: $scope.productoComprado, 
                cliente:$scope.clienteSelectCompra,
                ciudad:$scope.ciudadSelectCompra,
                iva: $scope.valorIva,
                subTotal: $scope.valorSubFactura,
                valorTotal: $scope.valorFactura,
            });
            $scope.mensaje = 'Factura registrada con éxito';
        }
    });

