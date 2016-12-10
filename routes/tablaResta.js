function Tabla(limite,expresion,numero) {
	parseInt(limite);
	parseInt(numero);
	for (var i = 1;i<=limite; i++) {
		
		switch(expresion) {
    
    case "restar":
        console.log("la Resta de: "+numero+" - "+i+" = "+(numero-i));
        break;
   
    default:
         console.log("no ingreso funcion");
		} 
	
	};
	
}
var limite =10;
var expresion="restar";
var numero = 5;
Tabla(limite,expresion,numero);
