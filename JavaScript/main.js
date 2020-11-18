function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
    
}

function redirecionar(){
    window.open("https://github.com/RuanGalvao?tab=overview&from=2020-10-01&to=2020-10-31")
    //window.location.href = "https://github.com/RuanGalvao?tab=overview&from=2020-10-01&to=2020-10-31";
}

function trocar(element){
    element.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(element){
    element.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function load() {
    alert("Pagina Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}




/*

function soma(n1, n2){
    return n1 + n2;
}



function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else {
        validar=false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());



var count;
for(count=0; count <= 5; count ++){
    alert(count);
}

var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}




/*
var idade = prompt("Qual sua idade")
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}



var frutas = [{nome:"maça", cor:"vermelha"},{nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);




//var lista = ["maça", "pera", "laranja"];
//lista.push("uva")
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
*/



//var nome = "Ruan José";
//var idade = 27;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil");
