
let url="dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("stand").each(function(){
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="procurado">Stand</p> <img class="foto"src="'+ $(this).find("id").text() +'.jpg"><p class="vivo"></p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("").text()+'<\p> <p class="rec"> <img class="berrys" src="simbolo.png">'+ $(this).find("jojo").text()+' </p><p> '+ $(this).find("status").text()+'</p></a> <\div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })

   


    var url_string = window.location.href;
    var url1 = new URL(url_string);
    var id = parseInt(url1.searchParams.get("id"));

    $.ajax(url)
    .done(function(xml){
            $(xml).find("stand").each(function(){
                var pos = parseInt($(this).find("id").text())
                if(id == pos){
                $("#individual").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="procurado">Stand</p> <img class="foto"src="'+ $(this).find("id").text() +'.jpg"><p class="vivo"></p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("").text()+'<\p> <p class="rec"> <img class="berrys" src="simbolo.png">'+ $(this).find("jojo").text()+' </p><p>'+ $(this).find("status").text()+'</p></a> <\div>');
                $("#usuario").append('<div class="card">Usuário '+ $(this).find("usuario").text() +' <img class="foto"src=" <\div>');
                $("#habilidades").append('<div class="card">Habilidades '+ $(this).find("habilidades").text());
                }
            });
        
    })      
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })