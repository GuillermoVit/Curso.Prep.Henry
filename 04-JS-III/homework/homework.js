// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
 return array[array.length - 1]
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var guarda =[]
  for (var i=0 ;i<array.length;i++){
    guarda[i] = array[i]+1
  }
  array = guarda
  return array
  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0;i<array.length;i++){
   if( array[i] === elemento ){
     return true
   }
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for(i=0;i<numeros.length; i++) { 
   suma =suma+numeros[i]
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var cantidad= 0;
  var cantidad2 = 0;
  var promed = 0;
  for(i=0;i < resultadosTest.length;i++){
    cantidad = cantidad + 1
    suma = resultadosTest[i]
    if( Number.isInteger(suma)){
     cantidad2= cantidad2 + suma
    }
 
   }

 promed =  cantidad2 / cantidad

  return promed
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var grande = 0
  for(i = 0; i < numeros.length; i++) {
    if (numeros[i]>grande){grande = numeros[i]}
  }
  return grande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length == 0)
  return 0;
  
var resultado = 1;
for (var argument of arguments) {
  resultado *= argument;
}
return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0
  for(i = 0 ;i <arreglo.length;i++){
     if (arreglo[i] > 18){
       cantidad = cantidad + 1
     }
  }

 return cantidad
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 1:return "Es fin de semana"
    case 2:return "Es dia Laboral"
    case 3:return "Es dia Laboral"
    case 4:return "Es dia Laboral"
    case 5:return "Es dia Laboral"
    case 6:return "Es dia Laboral"
    case 7:return "Es fin de semana"
    default: return "Dias del 1 al 7"
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
n =  parseInt(String(n)[0])
return n == 9
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
 var todosIguales = 0
 var cant = 0
 for(i=0;i <arreglo.length;i++){
    if (todosIguales == arreglo[i]){return true }
  todosIguales = arreglo[i]
 }
 return false
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array2 =[]
 
  const buscar = array.find(element => element =="Enero")
  const buscar2 = array.find(element => element =="Marzo")
  const buscar3 = array.find(element => element =="Noviembre")
       if (buscar =="Enero" && buscar2 == "Marzo" && buscar3 =="Noviembre"){array2[0]="Marzo",array2[1]="Noviembre",array2[2]="Enero"}
    if(buscar != "Enero" || buscar2 !="Marzo" || buscar3 !="Noviembre" ) {return "No se encontraron los meses pedidos"
}
 else   return array2
    

  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array2 = []; 
  for(var i = 0; i < array.length-1; i++){
    if (  100 < array[i]){
     
       array2.push(array[i])
    }
  }
  return array2
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arraynumero =[];
  var suma = numero;
  for(var i = 0; i<10; i++){
    if (i === suma) return "Se interrumpió la ejecución";
    else {
      suma = suma + 2;
      arraynumero.push(suma);

    }
  }
  return arraynumero;
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arraynumero =[];
  var suma = numero;
  for(var i = 0; i<10; i++){
    if (i === 5) continue;
    else {
      suma = suma + 2;
      arraynumero.push(suma);

    }
  }
  return arraynumero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
