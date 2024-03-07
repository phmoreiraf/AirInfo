/*function getImput() {
    const localizador = document.getElementById('inputLocalizador').value
    const cpf = document.getElementById('inputCPF').value
    const nome = document.getElementById('inputNome').value
    const sobrenome = document.getElementById('inputSobrenome').value
    const id_passagem = document.getElementById('inputPoltrona').value
}*/

async function CheckIn(e) {
    e.preventDefault();
    console.log(e.target.localizador.value)
    console.log(e.target.cpf.value)
    console.log(e.target.nome.value)
    console.log(e.target.sobrenome.value)
    console.log(e.target.id_passagem.value)
    console.log(e.target.CheckRealizado.value)
    try {
        const response = await fetch('http://localhost:8000/checkin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                localizador: e.target.localizador.value,
                cpf: e.target.cpf.value,
                nome: e.target.nome.value,
                sobrenome: e.target.sobrenome.value,
                id_passagem: e.target.id_passagem.value,
                CheckRealizado: e.target.CheckRealizado.value,
            })
        });
        const dados = await response.json();
        console.log(dados);
    } catch (erro) {
        console.log(erro);
    }
}
