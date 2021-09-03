
// asignacion de variables.
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var turno = document.getElementById("turno");
var limpiar = document.getElementById("limpiar");
var ganador=false;


// fin asignacion de variables. 

let turnito = Math.floor(Math.random()*10);

function juego(){
    
    
    if (ganador==false){
        
           if(turnito%2===0){    //eventos (comienzo del sistema de turnos):
            
                turno.textContent = "Juegan X"

                uno.onclick = function(e){
                    if(uno.textContent==""){
                        uno.textContent= uno.textContent + "x";
                        turnito = turnito + 1;
                        condicionesGanarX()
                        juego();  
                        }
                    else {
                        alert("esta celda ya esta ocupada");
                        }
                };
                dos.onclick = function(e){
                    if(dos.textContent==""){
                        dos.textContent= dos.textContent + "x";
                        turnito++;
                        condicionesGanarX();  
                        juego();
                        }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
                tres.onclick = function(e){
                    if(tres.textContent==""){
                        tres.textContent= tres.textContent + "x";
                        turnito++;
                        condicionesGanarX()
                        juego();
                        }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
                cuatro.onclick = function(e){
                    if(cuatro.textContent==""){
                        cuatro.textContent= cuatro.textContent + "x";
                        turnito++;
                        condicionesGanarX()
                        juego();
                        }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
                cinco.onclick = function(e){
                    if(cinco.textContent==""){
                        cinco.textContent= cinco.textContent + "x";
                        turnito++;
                        condicionesGanarX()
                        juego();
                        }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
                seis.onclick = function(e){
                    if(seis.textContent==""){
                        seis.textContent= seis.textContent + "x";
                        turnito++;
                        condicionesGanarX()
                        juego();
                    }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
                siete.onclick = function(e){
                    if(siete.textContent==""){
                        siete.textContent= siete.textContent + "x";
                        turnito++;
                        condicionesGanarX()
                        juego();
                    }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
                ocho.onclick = function(e){
                    if(ocho.textContent==""){
                        ocho.textContent= ocho.textContent + "x";
                        turnito++;
                        condicionesGanarX()
                        juego();
                    }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
                nueve.onclick = function(e){
                    if(nueve.textContent==""){
                        nueve.textContent= nueve.textContent + "x";
                        turnito++;
                        condicionesGanarX()
                        juego();
                    }
                    else {
                        alert("esta celda ya esta ocupada");
                    }
                };
            }

        else{ //sistema de turnos):
            turno.textContent =" Juegan O"
            
            uno.onclick = function(e){
                if(uno.textContent==""){
                    uno.textContent= uno.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            dos.onclick = function(e){
                if(dos.textContent==""){
                    dos.textContent= dos.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            tres.onclick = function(e){
                if(tres.textContent==""){
                    tres.textContent= tres.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
               
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            cuatro.onclick = function(e){
                if(cuatro.textContent==""){
                    cuatro.textContent= cuatro.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            cinco.onclick = function(e){
                if(cinco.textContent==""){
                    cinco.textContent= cinco.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            seis.onclick = function(e){
                if(seis.textContent==""){
                    seis.textContent= seis.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            siete.onclick = function(e){
                if(siete.textContent==""){
                    siete.textContent= siete.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            ocho.onclick = function(e){
                if(ocho.textContent==""){
                    ocho.textContent= ocho.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
            nueve.onclick = function(e){
                if(nueve.textContent==""){
                    nueve.textContent= nueve.textContent + "o";
                    turnito++;
                    condicionesGanarO();
                    juego();
                
                }
                else {
                    alert("esta celda ya esta ocupada");
                }
            };
        
        }
    }
   
    else{
        preguntarJugarDeNuevo= prompt("Quieres jugar otra vez? Si/No ")
        if (preguntarJugarDeNuevo=="si" || preguntarJugarDeNuevo=="SI" || preguntarJugarDeNuevo=="Si" || preguntarJugarDeNuevo=="sI"){
            juegoNuevo();
            }
        else{
            alert("Muchas gracias por jugar."); 
        }
    
    }
    
    limpiar.onclick = function(e){
        confirmacionLimpiar = prompt("Quieres reiniciar el juego? Si/No ");
        if (confirmacionLimpiar=="si" || confirmacionLimpiar=="sI" || confirmacionLimpiar=="Si" || confirmacionLimpiar== "SI"){
            juegoNuevo();   
        }
    }    
} // fin juego();



   







function condicionesGanarX(){
        
        if (uno.textContent=="x" && dos.textContent=="x" && tres.textContent=="x") {
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        }
        
        else if (cuatro.textContent=="x" && cuatro.textContent==cinco.textContent && cuatro.textContent==seis.textContent ){
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        }
    
        else if (siete.textContent=="x" && siete.textContent==ocho.textContent && siete.textContent==nueve.textContent ){
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        }   
        ////barras horizontales   
        
        
        ////barras verticales  

        else if (uno.textContent=="x" && uno.textContent==cuatro.textContent && uno.textContent==siete.textContent ){
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        }    
        else if (dos.textContent=="x" && dos.textContent==cinco.textContent && dos.textContent==ocho.textContent ){
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        } 
        else if (tres.textContent=="x" && tres.textContent==seis.textContent && tres.textContent==nueve.textContent ){
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        }    
        ////barras verticales
        
        
        ////barras diagonales

        else if (uno.textContent=="x" && uno.textContent==cinco.textContent && uno.textContent==nueve.textContent ){
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        }    
        else if (tres.textContent=="x" && tres.textContent==cinco.textContent && tres.textContent==siete.textContent ){
            ganador=true;
            alert("Ganan las X");
            turno.textContent = "Las X ganaron."
        } 
             
    ///barras diagonales
    else{
        ganador=false;
   }
   
    }; // fin condicionesGanarX  


    function condicionesGanarO(){

        ////barras horizontales
       if (uno.textContent=="o" && uno.textContent==dos.textContent && uno.textContent==tres.textContent){
        ganador=true;
        alert("Ganan las O"); 
        turno.textContent = "Las O ganaron."   
    }
        
       else if (cuatro.textContent=="o" && cuatro.textContent==cinco.textContent && cuatro.textContent==seis.textContent ){
        ganador=true;
        alert("Ganan las O"); 
        turno.textContent = "Las O ganaron." 
    }
       
        else if (siete.textContent=="o" && siete.textContent==ocho.textContent && siete.textContent==nueve.textContent ){
            ganador=true;
            alert("Ganan las O"); 
            turno.textContent = "Las O ganaron." 
        }
        ////barras horizontales   
        
        
        ////barras verticales  
    
        else if (uno.textContent=="o" && uno.textContent==cuatro.textContent && uno.textContent==siete.textContent ){
            ganador=true;
            alert("Ganan las O"); 
            turno.textContent = "Las O ganaron." 
        }
    
        else if (dos.textContent=="o" && dos.textContent==cinco.textContent && dos.textContent==ocho.textContent ){
            ganador=true;
            alert("Ganan las O"); 
            turno.textContent = "Las O ganaron." 
        }
         
        else if (tres.textContent=="o" && tres.textContent==seis.textContent && tres.textContent==nueve.textContent ){
            ganador=true;
            alert("Ganan las O"); 
            turno.textContent = "Las O ganaron." 
        }
    
        ////barras verticales
        
        
        ////barras diagonales
    
        else if (uno.textContent=="o" && uno.textContent==cinco.textContent && uno.textContent==nueve.textContent ){
            ganador= true
            alert("Ganan las O");  
            turno.textContent = "Las O ganaron."
        }
        else if (tres.textContent=="o" && tres.textContent==cinco.textContent && tres.textContent==siete.textContent ){
            ganador= true
            alert("Ganan las O"); 
            turno.textContent = "Las O ganaron." 
        }  
                               
        ///barras diagonales
        else{
            ganador=false;
        }
            
    
    };  /// fin condicionesGanarO
    

function juegoNuevo(){
    uno.textContent = "";
    dos.textContent = "";
    tres.textContent = "";
    cuatro.textContent = "";
    cinco.textContent = "";
    seis.textContent = "";
    siete.textContent = "";
    ocho.textContent = "";
    nueve.textContent = "";
    turnito = Math.floor(Math.random()*10);
    ganador= false;
    juego();

}



juego();



    




