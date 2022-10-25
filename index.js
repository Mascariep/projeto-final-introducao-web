//Albuns transformados em objetos

let album1 = {
    pais: "QATAR",
    ano : 2022,
    marca: "Panini",
    figurinhas: 670,
    temEstoque: true,
    preco: 750,
    html: document.getElementById("copa2022")
};

let album2 = {
    pais : "RÚSSIA",   
    ano : 2018,    
    marca : "PANINI",
    figurinhas : 670,
    temEstoque : true,
    preco : 250,
    html: document.getElementById("copa2018")
};

let album3 = {
    pais: "BRASIL",   
    ano: 2014,
    marca : "PANINI",
    figurinhas : 640,
    temEstoque : true,
    preco : 250,
    html: document.getElementById("copa2014")
};

let album4 = {
    pais: "ÁFRICA",   
    ano: 2010,
    marca : "Adidas",
    figurinhas : 638,
    temEstoque : true,
    preco : 400,
    html: document.getElementById("copa2010")
};


 //Adicionando objetos ao array verificando booleanos


let meusObjetos = [];              

if(album1.temEstoque){
    meusObjetos.push(album1)
} else{
    alert(`O produto ${album1.nome} está em falta no estoque!`)
};

if(album2.temEstoque){
    meusObjetos.push(album2)
} else{
    alert(`O produto ${album2.nome} está em falta no estoque!`)
};

if(album3.temEstoque){
    meusObjetos.push(album3)
} else{
    alert(`O produto ${album3.nome} está em falta no estoque!`)
};

if(album4.temEstoque){
    meusObjetos.push(album4)
} else{
    alert(`O produto ${album4.nome} está em falta no estoque!`)
};

//calculando a média dos preços dos albuns

function calcularMedia () {
    let numAlbuns = meusObjetos.length;
    let soma = 0;

    for(let elementos of meusObjetos) {
        soma += elementos.preco
    }
    return soma / numAlbuns
}
console.log("A média de preço entre os produtos é", calcularMedia());


//relatório dos objetos adicionados

function relatorioObjeto (arrayObjeto) {
    for(i in arrayObjeto) {
        console.log(`Produto ${Number(i)+1} :`, arrayObjeto[i]);
    }
}
console.log(`Segue relatório dos ${meusObjetos.length} produtos que você possui em estoque, segue o relatório dos mesmos:`)
relatorioObjeto(meusObjetos); //Atualizando Relatório dos produtos

//buscando um albuns dentro da lista através de função

function buscarItens (arrayObj, string) {
    let busca = document.getElementById("pais");
    string = busca.value

    let container = document.getElementById("componentes");

    if(!string) {
        return alert("Faça uma busca válida. Digite o nome do país!")
    }

    for(objeto of arrayObj){
        if(objeto.pais === string){
            return container.innerHTML = objeto.html.innerHTML
        }
    }
    return alert(`Seu produto ${string} não foi encontrado!`)
} 
