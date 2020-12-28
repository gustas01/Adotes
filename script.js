const racas = ["Afegão Hound","Affenpinscher","Airedale Terrier","Akita","American Staffordshire Terrier","Basenji","Basset Hound","Beagle","Beagle Harrier","Bearded Collie","Bedlington Terrier","Bichon Frisé","Bloodhound","Bobtail","Boiadeiro Australiano","Boiadeiro Bernês","Border Collie","Border Terrier","Borzoi","Boston Terrier","Boxer","Buldogue Francês","Buldogue Inglês","Bull Terrier","Bulmastife","Cairn Terrier","Cane Corso","Cão de Água Português","Cão de Crista Chinês","Cavalier King Charles Spaniel","Chesapeake Bay Retriever","Chihuahua",
"Chow Chow","Cocker Spaniel Americano","Cocker Spaniel Inglês","Collie","Coton de Tuléar","Dachshund","Dálmata","Dandie Dinmont Terrier","Dobermann","Dogo Argentino","Dogue Alemão","Fila Brasileiro", "Pelo Duro", "Pelo Liso","Foxhound Inglês","Galgo Escocês","Galgo Irlandês","Golden Retriever","Grande Boiadeiro Suiço","Greyhound","Grifo da Bélgica","Husky Siberiano","Jack Russell Terrier","King Charles","Komondor","Labradoodle","Labrador Retriever","Lakeland Terrier","Leonberger","Lhasa Apso","Lulu da Pomerânia","Malamute do Alasca","Maltês",
"Mastife","Mastim Napolitano","Mastim Tibetano","Norfolk Terrier","Norwich Terrier","Papillon","Pastor Alemão","Pastor Australiano","Pinscher Miniatura","PitBull","Poodle","Pug","Rottweiler","Sem Raça", "ShihTzu","Silky Terrier","Skye Terrier","Staffordshire Bull Terrier","Terra Nova","Terrier Escocês","Tosa","Vira-lata","Weimaraner","Cardigan","Pembroke","West Highland White Terrier","Whippet","Xoloitzcuintli","Yorkshire Terrier"]

const tamanhos = ["pequeno", "normal", "grande"]

let temRaca
let pessoa = []
let animal = []

class Local{
    constructor(rua, bairro, CEP, cidade, estado){
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.cep = CEP
    }
}


class Animal extends Local{
    constructor(cor, tamanho, raca, filhote = false){
        super(cidade, estado)
        this.cor = cor
        this.tamanho = tamanho
        this.raca = raca
        this.filhote = filhote

    }
    get cor(){
        return this.cor
    }

    get raca(){
        return this.raca
    }

    set raca(raca){
        for(let r of racas)
            if(raca === r)
            temRaca = true
        
        if (temRaca)
            this.raca = raca
    }

    get tamanho(){
        return this.tamanho
    }
    set tamanho(tam){
        for(let t of tamanhos)
            if(tam === t)
            this.tamanho = tamanho
        
    }
}

class Pessoa extends Local{
    constructor(nome, cpf, telefone, rua, numero, bairro, cidade, estado, cep){
        super(rua, numero, bairro, cidade, estado, cep)
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
    }
}

function cadastrarPessoa(){
    pessoa.push({
        nome: document.querySelector("#nomeCadastro").value,
        cpf: document.querySelector("#cpfCadastro").value,
        telefone: document.querySelector("#telefoneCadastro").value,
        rua: document.querySelector("#ruaCadastro").value,
        numero: document.querySelector("#numeroCadastro").value,
        bairro: document.querySelector("#bairroCadastro").value,
        cidade: document.querySelector("#cidadeCadastro").value,
        estado: document.querySelector("#estadoCadastro").value,
        cep: document.querySelector("#cepCadastro").value
    })
    alert("Usuário cadastrado com sucesso!")
    // console.log("chamando função do botão")

}


function cadastrarAnimal(){
    animal.push({
        titulo: document.querySelector("#animalTitulo").value,
        cachorro: document.querySelector("#cachorro").checked,
        gato: document.querySelector("#gato").checked,
        domestico: document.querySelector("#domestico").checked,
        deRua: document.querySelector("#deRua").checked,
        filhote: document.querySelector("#filhote").checked,
        descricaoAnimal: document.querySelector("#animalDescricao").value,
        descricaoAnimalQualquer: document.querySelector("#animalDescricaoQualquer").value,
        local: document.querySelector("#animalLocal").value
    })
    alert("Animal cadastrado com sucesso!")
    // console.log("chamando função do botão")

}

// console.log(pessoa)


