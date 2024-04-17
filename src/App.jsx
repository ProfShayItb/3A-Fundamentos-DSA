import Propriedade from "./components/Propriedade"
import Modelo from "./components/modelo/Modelo"
import './App.css'


function App() {

  return (
    <main className="cards">
      <Modelo titulo="Propriedade">
        <Propriedade titulo="Propriedade" subtitulo="aula 10/04" />

      </Modelo>

      <Modelo titulo="Propriedade">
        <Propriedade titulo="Hoje é quarta-feira" subtitulo="Dia 10/04" />
      </Modelo>


      <Modelo>
        <Propriedade titulo="3º ano A" subtitulo="Melhores do ITB" />
      </Modelo>
    </main>
  )
}

export default App
