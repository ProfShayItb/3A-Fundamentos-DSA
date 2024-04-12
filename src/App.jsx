import Propriedade from "./components/Propriedade"
import Modelo from "./components/modelo/Modelo"


function App() {

  return (
    <>
      <Modelo titulo="Propriedade">
        <Propriedade titulo="Propriedade" subtitulo="aula 10/04" />

      </Modelo>

      <Modelo titulo="Propriedade">
        <Propriedade titulo="Hoje é quarta-feira" subtitulo="Dia 10/04" />
      </Modelo>


      <Modelo>
        <Propriedade titulo="3º ano A" subtitulo="Melhores do ITB" />
      </Modelo>
    </>
  )
}

export default App
