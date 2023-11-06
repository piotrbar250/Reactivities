import './App.css'
import DuckItem from './DuckItem'
import { ducks } from './demo'

function App() {
  return (
    <div>
      <h1>Reactivites</h1>
      {ducks.map(duck => (
        <DuckItem key={duck.name} duck = {duck}/>
      ))}
    </div>
  )
}

export default App
