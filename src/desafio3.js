class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    attack(){
        let ataque;

        if(this.tipo === "mago"){
            ataque = "magia";
        }
        else if (this.tipo === "guerreiro"){
            ataque = "uma espada";
        }
        else if (this.tipo === "monge"){
            ataque = "artes marciais";
        }else{
            ataque = "usando uma shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)

    }
}

    mago = new hero ("joao", 21, "mago");
    guerreiro = new hero ("felipe", 21, "guerreiro");
    monge = new hero ("rogerio", 21, "monge");
    ninja = new hero ("naruto", 21, "ninja");
   
    mago.attack();
    guerreiro.attack();
    monge.attack();
    ninja.attack();
