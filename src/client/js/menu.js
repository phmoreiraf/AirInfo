const idUser = sessionStorage.getItem('usuarioLogado')

document.addEventListener('DOMContentLoaded', async () => {
  try {
    
    let dadoBruto = await fetch('http://localhost:8000/usuario')
    let dados = await dadoBruto.json()
    let display = ''
    const user = dados.find(element => element.id == idUser);
    console.log(user)
    if (user.userType) {
      display += `
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a href="/src/client/index.html">
                    <img src="/src/client/IMG/AIRINFO.png" type="png" class="imagem">
                  </a>
                  <div class=" navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/html/cad_passagem.html">Cadastrar Viagem</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/html/bagagem.html">Bagagens</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/html/attBagagem.html">Atualizar bagagem</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/html/indicadores.html">Indicadores</a>
                      </li>
                    </ul>
                    <a onclick="redirecionar()" class="cadastro">Perfil</a>
                  </div>
                </div>
              </nav>`
    }
    else {
      display += `
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a href="/src/client/index.html">
                    <img src="/src/client/IMG/AIRINFO.png" type="png" class="imagem">
                  </a>
                  <div class=" navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/index.html">Voos</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/html/checkin.html">Check-In</a>
                      </li>
                    </ul>
                    <a onclick="redirecionar()" class="cadastro">Perfil</a>
                  </div>
                </div>
              </nav>`
    }
    document.getElementById('cabecalho').innerHTML = display
    
  } catch (erro) {
    let display = ''
    display += `
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a href="/src/client/index.html">
                    <img src="/src/client/IMG/AIRINFO.png" type="png" class="imagem">
                  </a>
                  <div class=" navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/index.html">Voos</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/src/client/html/checkin.html">Check-In</a>
                      </li>
                    </ul>
                    <a onclick="redirecionar()" class="cadastro">Login</a>
                  </div>
                </div>
              </nav>`
    document.getElementById('cabecalho').innerHTML = display
    console.log(erro)
  }
})

function redirecionar() {
  if (idUser) {
    window.location.href = '/src/client/html/perfil.html';
  } else {
    window.location.href = '/src/client/html/login.html';
  }
}