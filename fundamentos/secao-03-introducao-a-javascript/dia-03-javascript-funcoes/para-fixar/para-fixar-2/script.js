let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let clienteNovo;
let verificaCliente;


function adicionaCliente(clienteNovo) {
    if(typeof(clienteNovo) !== 'string') {
        return 'Erro. Digite um nome válido'; 
    } else {
       clientesTrybeBank.push(clienteNovo);
       return 'Olá, ' + clienteNovo;
    }
}

console.log(adicionaCliente('Lucas'));

function excluiCliente(verificaCliente) {
    if(clientesTrybeBank.includes(verificaCliente)) {
        clientesTrybeBank.pop(verificaCliente);
        return verificaCliente + ' excluído';
    } else {
        return 'Cliente não encontrado';
    }
}

console.log(excluiCliente('Lucas'));
console.log(clientesTrybeBank);