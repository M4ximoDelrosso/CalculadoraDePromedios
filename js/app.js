
console.log("Hola mundo");

const n = parseInt(prompt("Ingrese la cantidad de alumnos en el curso"));

if(n==0 || n== "" || isNaN(n)){
    alert("Ingrese una cantidad valida");
}else{
    let cantAlum = alert(n + " alumnos");
}

for(let i=1; i < n+1 ; i++){
    let nombre = prompt("Ingrese el nombre del alumno");
    let apellido = prompt("Ingrese el apellido del alumno");

    
    let nota1 = parseInt(prompt ("Ingrese la nota del primer trimestre"));

    if(nota1==0 || nota1== "" || isNaN(nota1) || nota1>10){
        alert("Ingrese una nota valida");
    }else{
        alert("La primer nota ingresada es: " + nota1);
    }

    let nota2 = parseInt(prompt ("Ingrese la nota del segundo trimestre"));

    if(nota2==0 || nota2== "" || isNaN(nota2) || nota2>10){
        alert("Ingrese una nota valida");
    }else{
        alert("La segunda nota ingresada es " + nota2);
    }

    let nota3 = parseInt(prompt ("Ingrese la nota del tercer trimestre"));

    if(nota3==0 || nota3== "" || isNaN(nota3) || nota3>10){
        alert("Ingrese una nota valida");
    }else{
        alert("La tercer nota ingresada es: " + nota3);
    }

    let notaFinal = 0;

    function suma(nota1, nota2, nota3){
        notaFinal = (nota1 + nota2 + nota3)/3;
        return notaFinal;
    }
    suma(nota1, nota2, nota3);
    alert("La nota final de " + nombre  + " " + apellido + " es " + suma(nota1, nota2, nota3));
}

// let promeTotal = (notaFinal/n);
// alert("El promedio de las notas finales del curso es: " + promeTotal);
