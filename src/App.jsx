import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'
import Header from './components/Header/Header'

function App() {

  const [itens, setItens] = useState([])

  async function carregarDadosApi() {

    const response = await fetch("https://rickandmortyapi.com/api/character/")

    const json = await response.json()

    const results = json.results

    setItens(results)
  }

  useEffect(function () {
    carregarDadosApi()
  }, [])

  return (
    <>
      <Header/>
      <div className="card-list">
        {itens.map(function (item, index) {
          return <Card item={item} key={`card_char_${index}`}/>
        })}
      </div>
    </>
  )
}

export default App