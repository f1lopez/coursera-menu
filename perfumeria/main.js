angular.module("MyApp",[])

    .controller("simulador",function($scope){

                        var tplec = 0.15;
                        var npalf = 1.012;
                        var npcoc = 10.11;

                        $scope.tiemposistema
                        $scope.capacidad
                        $scope.motivacion
                        $scope.espacio
                        $scope.tipo
                        $scope.incentivo
                        $scope.tiempolectura
                        $scope.alfa
                        $scope.conocimiento
                        $scope.edad
                        $scope.contador=1;
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
                        $scope.contacto = false;

                        var y1 = "";
                        var x1 = "";
                        var y2 = "";
                        var x2 = "";
                        var y3 = "";
                        var x3 = "";
                        var y4 = "";
                        var x4 = "";
                        var y5 = "";
                        var x5 = "";

                        
                    $scope.total = function(){

                        var bandera10=parseFloat($scope.tiemposistema);
                        var bandera20=parseFloat($scope.capacidad);
                        var bandera30=parseFloat($scope.motivacion);
                        var bandera40=parseFloat($scope.tiempolectura);
                        var bandera50=parseFloat($scope.alfa);
                        var bandera60=parseFloat($scope.conocimiento);
                      
                        $scope.resultado1 = (((bandera30*bandera40)*bandera50)/bandera60).toFixed(2);

                    }

                     $scope.totalince = function(){

                        var bandera10=parseFloat($scope.tiemposistema);
                        var bandera20=parseFloat($scope.capacidad);
                        var bandera30=parseFloat($scope.motivacion);
                        var bandera40=parseFloat($scope.tiempolectura);
                        var bandera50=parseFloat($scope.alfa);
                        var bandera60=parseFloat($scope.conocimiento);
                      
                        $scope.resultado1 = (((bandera30+bandera40)*bandera50)/bandera60+0.2).toFixed(2);

                    }   

                    $scope.totalmenos = function(){

                        var bandera10=parseFloat($scope.tiemposistema);
                        var bandera20=parseFloat($scope.capacidad);
                        var bandera30=parseFloat($scope.motivacion);
                        var bandera40=parseFloat($scope.tiempolectura);
                        var bandera50=parseFloat($scope.alfa);
                        var bandera60=parseFloat($scope.conocimiento);
                      
                        $scope.resultado1 = (((bandera30+bandera40-0.9)*bandera50)/bandera60+0.2).toFixed(2);

                    }             

                    $scope.valores = function(){
                    
                        $scope.tiemposistema=1;
                        $scope.capacidad=10;
                        $scope.motivacion=1;
                        $scope.espacio
                        $scope.tipo
                        $scope.incentivo
                        $scope.tiempolectura=1;
                        $scope.alfa=35;
                        $scope.conocimiento=40;
                        $scope.edad 
                        
                    }

                    $scope.tiempomas = function(){


                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                        if (bandera2<69){

                            $scope.capacidad = (bandera2+0.3).toFixed(2);
                            
                        }
                        if (bandera2>70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  ((bandera3 + ((bandera1 * 0.04)/bandera2) )+0.01).toFixed(2);
                            
                        }
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }
                        $scope.tiemposistema = bandera1+1;
                        $scope.tiempolectura = (bandera4+tplec).toFixed(2);
                        $scope.alfa = (bandera5*npalf).toFixed(2);
                        $scope.conocimiento = ((bandera6*npcoc)/10).toFixed(2);

                        $scope.total();
                        
                    }

                    $scope.tiempomenos = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                        if (bandera2<69){

                            $scope.capacidad = (bandera2-0.3).toFixed(2);
                            
                        }
                        if (bandera2>70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  ((bandera3 - (((bandera1) * 0.04)/(bandera2)) )-0.01).toFixed(2);
                            
                        }
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }
                        $scope.tiemposistema = bandera1-1;
                        $scope.tiempolectura = (bandera4-tplec).toFixed(2);
                        $scope.alfa = (bandera5*2-(bandera5*npalf)).toFixed(2);
                        $scope.conocimiento = (bandera6*2-((bandera6*npcoc)/10)).toFixed(2);

                        $scope.total();
                        
                    }
                    
                    $scope.capacidadmas = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                        

                        if (bandera2<70){

                            $scope.capacidad = (bandera2+1).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }
                        
                        if (bandera3<100){

                            $scope.motivacion =  ((bandera3 + ((bandera1 * 0.04)/bandera2) )+0.01).toFixed(2);
                            
                        }
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }
                        
                        $scope.tiempolectura = (bandera4+tplec).toFixed(2);
                        $scope.alfa = (bandera5*npalf).toFixed(2);
                        $scope.conocimiento = ((bandera6*npcoc)/10).toFixed(2);

                        $scope.total();
                        
                    }

                    $scope.capacidadmenos = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                        

                        if (bandera2<70){

                            $scope.capacidad = (bandera2-1).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }
                        
                        if (bandera3<100){

                            $scope.motivacion =  ((bandera3 + ((bandera1 * 0.04)/bandera2) )+0.01).toFixed(2);
                            
                        }
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }
                        
                        $scope.tiempolectura = (bandera4+tplec).toFixed(2);
                        $scope.alfa = (bandera5*npalf).toFixed(2);
                        $scope.conocimiento = ((bandera6*npcoc)/10).toFixed(2);

                        $scope.total();
                        
                    }

                    $scope.motivacionmas = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                        

                        
                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 1).toFixed(2);
                            
                        }
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }

                        
                        
                        $scope.tiempolectura = (bandera4+tplec).toFixed(2);
                        $scope.alfa = (bandera5*npalf).toFixed(2);
                        $scope.conocimiento = ((bandera6*npcoc)/10).toFixed(2);

                        $scope.total();
                        
                    }

                    $scope.motivacionmenos = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                        

                        
                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 - 1).toFixed(2);
                            
                        }
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }

                        
                        
                        $scope.tiempolectura = ((bandera4-1)+tplec).toFixed(2);
                        $scope.alfa = ((bandera5-1)*npalf).toFixed(2);
                        $scope.conocimiento = (((bandera6-1)*npcoc)/10).toFixed(2);

                        $scope.total();
                         
                        
                    }
                    
                    $scope.tiempolecmas = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                                                
                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }                        
                        
                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+1).toFixed(2);
                            
                        }

                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }

                        $scope.alfa = (bandera5*npalf).toFixed(2);
                        $scope.conocimiento = ((bandera6*npcoc)/10).toFixed(2);

                        $scope.total();
                        
                    }

                    $scope.tiempolecmenos = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                                                
                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }                        
                        
                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4-1).toFixed(2);
                            
                        }

                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }

                        $scope.alfa = ((bandera5-1)*npalf).toFixed(2);
                        $scope.conocimiento = (((bandera6-1)*npcoc)/10).toFixed(2);

                        $scope.total(); 
                        
                    }

                    $scope.alfamas = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                                                
                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }

                        $scope.conocimiento = ((bandera6*npcoc)/10).toFixed(2);

                        $scope.total();
                        
                    }

                    $scope.alfamenos = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                                                
                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5-1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }

                        $scope.conocimiento = (((bandera6-1)*npcoc)/10).toFixed(2);

                        $scope.total();
                        
                    }

                    $scope.conocimientomas = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+1).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+1).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }


                        $scope.total();
                        
                    }

                    $scope.conocimientomenos = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);

                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2-1).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        
                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5-1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6-1).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }


                        $scope.total();
                        
                    }

                    $scope.edad = function(){
                    
                        $scope.resultado =  "restando" 
                        
                    }

                    $scope.incentivos = function(){

                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);


                        console.log($scope.incentivo)

                       if ($scope.incentivo=="1" || $scope.incentivo=="2"){

                        
                        $scope.tiemposistema = (bandera1+0.6).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+1).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 1.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec+0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+1).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }


                        $scope.totalince();

                       }

                       if ($scope.incentivo=="3") {

                        $scope.tiemposistema = (bandera1+0.2).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+0.4).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 0.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec-0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+0.1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+0.3).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }
                            $scope.totalmenos();

                       }
                        
                    }

                    $scope.tipolec = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);


                        console.log($scope.incentivo)

                       if ($scope.tipo=="1"){

                        
                        $scope.tiemposistema = (bandera1+0.6).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+1).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 1.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec+0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+1).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }


                        $scope.totalince();

                       }

                       if ($scope.tipo=="2") {

                        $scope.tiemposistema = (bandera1+0.2).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+0.4).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 0.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec-0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+0.1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+0.3).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }
                            $scope.totalmenos();

                       }

                       if ($scope.tipo=="3") {

                        $scope.tiemposistema = (bandera1+0.2).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+0.4).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 0.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec-0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+0.1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+0.3).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }
                            $scope.totalmenos();

                       }
                        
                    }

                    $scope.espaciolec = function(){
                    
                        var bandera1=parseFloat($scope.tiemposistema);
                        var bandera2=parseFloat($scope.capacidad);
                        var bandera3=parseFloat($scope.motivacion);
                        var bandera4=parseFloat($scope.tiempolectura);
                        var bandera5=parseFloat($scope.alfa);
                        var bandera6=parseFloat($scope.conocimiento);


                        if ($scope.espacio=="1"){

                        
                        $scope.tiemposistema = (bandera1+0.6).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+1).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 1.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec+0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+1).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }


                        $scope.totalince();

                       }

                       if ($scope.espacio=="2") {

                        $scope.tiemposistema = (bandera1+0.2).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+0.4).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 0.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec-0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+0.1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+0.3).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }
                            $scope.totalmenos();

                       }

                       if ($scope.espacio=="3") {

                        $scope.tiemposistema = (bandera1+0.2).toFixed(2);
                                                
                        if (bandera2<70){

                            $scope.capacidad = (bandera2+0.4).toFixed(2);
                            
                        }

                        if (bandera2>=70){

                            $scope.capacidad =  70;

                        }

                        if (bandera3<100){

                            $scope.motivacion =  (bandera3 + 0.3).toFixed(2);
                            
                        }

                        if (bandera3>=100){

                            $scope.motivacion =  100;

                        }    

                        if (bandera4<180){

                            $scope.tiempolectura = (bandera4+tplec-0.1).toFixed(2);

                        }
                        
                        if (bandera4>=180){

                            $scope.tiempolectura =  180;

                        }
                        
                        if (bandera5<65){

                            $scope.alfa =  (bandera5+0.1).toFixed(2);

                        }

                        if (bandera5>=65){

                            $scope.alfa =  65;

                        }
                        
                        if (bandera5<70){

                            $scope.conocimiento =  (bandera6+0.3).toFixed(2);

                        }

                        if (bandera5>=70){

                            $scope.conocimiento = 70;

                        }
                            $scope.totalmenos();

                       }
                        
                    }

                    $scope.graficar= function(){

                   
                            if($scope.contador==1){

                                x1 = parseFloat($scope.tiemposistema);
                                y1 = parseFloat($scope.resultado1);

                            }
                            if($scope.contador==2){

                                x2 = parseFloat($scope.tiemposistema);
                                y2 = parseFloat($scope.resultado1);

                            }
                            if($scope.contador==3){

                                x3 = parseFloat($scope.tiemposistema);
                                y3 = parseFloat($scope.resultado1);

                            }
                            if($scope.contador==4){

                                x4 = parseFloat($scope.tiemposistema);
                                y4 = parseFloat($scope.resultado1);

                            }
                            if($scope.contador==5){

                                x5 = parseFloat($scope.tiemposistema);
                                y5 = parseFloat($scope.resultado1);

                            }

                            $scope.contador=$scope.contador+1;

                         // line chart data

                        var buyerData = {
                            labels : [0,x1,x2,x3,x4,x5],
                            datasets : [
                            {
                                fillColor : "rgba(172,194,132,0.4)",
                                strokeColor : "#ACC26D",
                                pointColor : "#fff",
                                pointStrokeColor : "#9DB86D",
                                data : [0,y1,y2,y3,y4,y5]
                            }
                        ],options : {
                            responsive : true,
                        }
                        };

                        var buyers = document.getElementById('buyers').getContext('2d');
                        // draw line chart
                        new Chart(buyers).Line(buyerData);

       
                }
                $scope.tab_uno = function() {
                    console.log("quitar uno");
                    document.getElementById("tab_uno").classList.remove('active');
                    document.getElementById("tab_uno").classList.add('active');
                    document.getElementById("tab_dos").classList.remove('active');
                    document.getElementById("tab_tres").classList.remove('active');
                    document.getElementById("tab_cuatro").classList.remove('active');
                    document.getElementById("view-uno").style.display = "block";
                    document.getElementById("view-dos").style.display = "none";
                    document.getElementById("view-tres").style.display = "none";
                    document.getElementById("view-cuatro").style.display = "none";
                }
                $scope.tab_dos = function() {
                    console.log("quitar uno");
                    document.getElementById("tab_dos").classList.remove('active');
                    document.getElementById("tab_dos").classList.add('active');
                    document.getElementById("tab_uno").classList.remove('active');
                    document.getElementById("tab_tres").classList.remove('active');
                    document.getElementById("tab_cuatro").classList.remove('active');
                    document.getElementById("view-uno").style.display = "none";
                    document.getElementById("view-dos").style.display = "block";
                    document.getElementById("view-tres").style.display = "none";
                    document.getElementById("view-cuatro").style.display = "none";
                }
                $scope.tab_tres = function() {
                    console.log("quitar uno");
                    document.getElementById("tab_tres").classList.remove('active');
                    document.getElementById("tab_tres").classList.add('active');
                    document.getElementById("tab_dos").classList.remove('active');
                    document.getElementById("tab_uno").classList.remove('active');
                    document.getElementById("tab_cuatro").classList.remove('active');
                    document.getElementById("view-uno").style.display = "none";
                    document.getElementById("view-dos").style.display = "none";
                    document.getElementById("view-tres").style.display = "block";
                    document.getElementById("view-cuatro").style.display = "none";
                }
                $scope.tab_cuatro = function() {
                    console.log("quitar uno");
                    document.getElementById("tab_cuatro").classList.remove('active');
                    document.getElementById("tab_cuatro").classList.add('active');
                    document.getElementById("tab_dos").classList.remove('active');
                    document.getElementById("tab_tres").classList.remove('active');
                    document.getElementById("tab_uno").classList.remove('active');
                    document.getElementById("view-uno").style.display = "none";
                    document.getElementById("view-dos").style.display = "none";
                    document.getElementById("view-tres").style.display = "none";
                    document.getElementById("view-cuatro").style.display = "block";
                }
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
                $scope.flores = function (flor){
                    let existe = $scope.tipoFlores.indexOf( flor )
                    if (existe<0) {
                        $scope.tipoFlores.push(flor);
                    }else{
                        $scope.tipoFlores.splice( existe, 1 );
                    }
                }

                $scope.frutas = function (fruta){
                    let existe = $scope.tipoFrutas.indexOf( fruta )
                    if (existe<0) {
                        $scope.tipoFrutas.push(fruta);
                    }else{
                        $scope.tipoFrutas.splice( existe, 1 );
                    }
                }

                $scope.hierbas = function (hierba){
                    let existe = $scope.tipoHierbas.indexOf( hierba )
                    if (existe<0) {
                        $scope.tipoHierbas.push(hierba);                      
                    }else{
                        $scope.tipoHierbas.splice( existe, 1 );
                    }
                }

                $scope.diversos = function (diverso){
                    let existe = $scope.tipoDiversos.indexOf( diverso )
                    if (existe<0) {
                        $scope.tipoDiversos.push(diverso);                      
                    }else{
                        $scope.tipoDiversos.splice( existe, 1 );
                    }
                }

                $scope.procesar = function (){
                    $scope.solicitud = false;
                    let valorFragancia = $scope.fragancia > 0 ? 3000 : 0;
                    let valorEstilo = $scope.fragancia > 0 ? 3000 : 0;
                    $scope.totalPerfume = 10000 + 2000 + valorFragancia + ($scope.tipoFlores.length * 5000)
                    + ($scope.tipoFrutas.length * 5000) + ($scope.tipoHierbas.length * 5000) 
                    + ($scope.tipoDiversos.length * 5000) + valorEstilo;
                }

                $scope.regresar = function (){
                    $scope.solicitud = true;
                }

                $scope.finalizar = function (){
                    $scope.contacto = true;
                }

                $scope.enviar = function (){
                    $scope.nombre = '';
                    $scope.apellido = '';
                    $scope.correo = '';
                    $scope.celular = '';
                    document.getElementById("nombre").value = '';
                    document.getElementById("apellido").value = '';
                    document.getElementById("correo").value = '';
                    document.getElementById("celular").value = '';
                    document.getElementById("enviar").setAttribute("disabled","disabled");
                }

                $scope.regresarPedido = function (){
                    $scope.contacto = false;
                }
                
                       
        });

