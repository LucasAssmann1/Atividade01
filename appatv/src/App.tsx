import './App.css'
import Mensagem from './components/Mensagem'
import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'
import Topo from './components/Topo'
import Meio from './components/Meio'
import Base from './components/Base'

function executarAcao() {
  console.log('Função chamada com sucesso.')
}

function renderizarMensagem() {
  return <p>Texto gerado por uma função de renderização.</p>
}

function App() {
  const nome = "Ana"
  const anoNascimento = 2005

  return (
    <div>

      {/* Desenvolvimento do topo da página */}
      <div>
        <Topo/>

        <h1>Meu primeiro app React</h1>
        <p>Olá, meu nome é {nome} e nasci em {anoNascimento}.</p>
        <Mensagem/>
        <Cabecalho/>
      </div>

      {/* Desenvolvimento do conteúdo da página */}
      <div>
        <Meio/>

        <Conteudo/>
        <button onClick={() => alert('Você clicou no botão!')}>Mostrar Alerta</button>
        <button onClick={executarAcao}>Executar Ação</button>
        {renderizarMensagem()}
      </div>
      
      {/* Desenvolvimento do Fim da página */}
      <div>
        <Base/>
        <Rodape/>
      </div>

    </div>
    
    
  )
}

export default App