let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let stringEncontrada = false;
let clienteEncontrado = false;
let indexCliente;

function verificaString(cliente) {
    if (typeof(cliente) === 'string') {
        stringEncontrada = true;
        return stringEncontrada;
    } else {
        return 'O parâmetro passado deve ser do tipo "string"!';
    }
}

console.log(verificaString('Ada'));

function verificaCliente(cliente) {
    if (clientesTrybeBank.includes(cliente)) {
        clienteEncontrado = true;
        return clienteEncontrado;
    } else {
        return 'Cliente não encontrado';
    }
}

console.log(verificaCliente('Ada'));

function verificaIndex(cliente) {
    if (clienteEncontrado) { 
        indexCliente = clientesTrybeBank.indexOf(cliente);
        return indexCliente;
    }
}

console.log(verificaIndex('Ada'));


function removeCliente(cliente) {
    if (stringEncontrada == true && clienteEncontrado == true) {
                clientesTrybeBank.splice(indexCliente, 1);
                return 'Cliente excluída(o) com sucesso.';
            }
        };

console.log(removeCliente('Ada'));
console.log(clientesTrybeBank);
