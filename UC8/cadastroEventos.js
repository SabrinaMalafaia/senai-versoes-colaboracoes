// Autora: Sabrina Malafaia.
// Algoritmo cadastro para eventos.
let palestrantes = ["Palestrante Z ","Palestrante J ","Palestrante S ","Palestrante A "];
let participantes = ["Participante 1 ","Participante 2 ","Participante 3 ","Participante 4 "];
let quantidade = (palestrantes.length + participantes.length);

let dia = prompt("Informe a data do evento?\nNo padrão: dd/mm/aaaa");
dia = dia.split("/");
dia = new Date(dia[2], dia[1], dia[0]); //AAAA/MM/DD

if (dia <= new Date()){
    alert("Cadastro não permitido, data inválida.");
} else {
    let idade = prompt ("Informe sua idade?");
    if (idade <= 18){
        alert("Cadastro não permitido, idade inválida.");
    } else {
        palestrantes.sort(function(a,b) {
            if (a < b){
                return -1;
            } else {
                return true;
            }
        });
        
        alert(palestrantes);
        
        if (quantidade <= 100){
            alert("Cadastro concluído com sucesso!");
        } else {
            alert("Cadastro não permitido! Limite excedido.");
        }
    }
}