//Texto
var textoA = "comillas dobles";
var textoB = 'comillas sencillas';
var textoC = "Texto con comillas 'simples' dentro de comillas dobles";

    console.log(textoA);
    console.log(textoB);
    console.log(textoC);

    var x="2", y="2.2";
        document.write(x+y+" "+typeof(x+y));
        document.write('<br>');
        document.write(x*y+" "+typeof(x*y));
        
        //Numerico
        var a=10, b=2;
            console.log (a + b);
            console.log (a - b);
            console.log (a * b);
            console.log (a % b);
            console.log (a / b);

            console.log (1 + a++);
            console.log (a);
            console.log (1 + ++b);

                //Boolean
                var t = true, f = false;
                    console.log (t && f); //falso
                    console.log (t || f); //verdadero
                    console.log (t == f); //falso
                    console.log (t != f); //verdadero

                    //listas
                    var nombre = "Laura";
                    var lista = ["Avalos", 28, nombre, true];
                        console.log (lista [1]);
                        console.log (lista.length);
                        console.log (lista [lista.length-1]);

                        //objeto o true
                        var nombre = "laura";
                        var lista = ["Avalos", 28, nombre, true]; 
                        console.log(lista[0]);
                        console.log(lista.length);
                        console.log(lista[lista.length-1]);

                            //Objeto o tuple
                            var persona = {
                                nombre: "Laura",
                                apellido: "Avalos",
                                aficiones: ["css", "html", "JavaScript"],
                                inscrito: true,
                            }
                                console.log(persona.nombre); //Laura
                                console.log(persona.aficiones[1]); //html
                                console.log(persona.aficiones[persona.aficiones.length-1]); //JavaScript



