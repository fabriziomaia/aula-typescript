//Exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor: string;
}
const meuCarro: Carro = {
    marca: "McLaren",
    modelo: "GTS",
    ano: 2025,
    motor: "V8"
};
console.log(meuCarro);



//Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (a, b) => a * b;
console.log(multiplicar(6, 2)); // 12
console.log(multiplicar(7, 3)); // 21




//Exercício 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
  console.log(inverterArray([1, 2, 3, 4])); // [4, 3, 2, 1]
  console.log(inverterArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]




//Exercício 4
interface Repositorio<T> {
    save(dado: T): void;
    obterTodos(): T[];
}

interface User {
    nome: string;
    email: string;
}
  
class UserRepository implements Repositorio<User> {
    private usuarios: User[] = [];
  
    save(dado: User): void {
        this.usuarios.push(dado);
    }
  
    obterTodos(): User[] {
        return this.usuarios;
    }
}
  
const repo = new UserRepository();
repo.save({ nome: "fabrizio", email: "fabrizio@email.com" });
repo.save({ nome: "Type", email: "type@email.com" });
console.log(repo.obterTodos());




//Exercício 5
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log("Resposta do servidor:", resposta);
  } else if (resposta === true) {
    console.log("Operação efetivada com sucesso!");
  } else {
    console.log("Ops, operação não efetivada.");
  }
}

processarResposta("Dados recebidos.");
processarResposta(true);
processarResposta(false);




//Exercício 6
interface Estudante {
    nome: string;
    curso: string;
}
  
interface Trabalhador {
    empresa: string;
    cargo: string;
}
type EstudanteTrabalhador = Estudante & Trabalhador;
const pessoa: EstudanteTrabalhador = {
    nome: "Fabrizio",
    curso: "Engenharia de Software",
    empresa: "Google",
    cargo: "Desenvolvedor Web Pleno"
};
  
console.log(pessoa);
  