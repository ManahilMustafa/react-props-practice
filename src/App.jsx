import Usercard from "./components/Usercard"
import './App.css'
import lovepic from './assets/lovepic.jpg'
import maha from './assets/download.jpeg'
import mahi from './assets/download1.jpeg'


function App() {

  return (
    <div className="container">
      <Usercard name="Manahil" image={lovepic} />
      <Usercard name="Maha" image={maha}/>
      <Usercard name="Mahi" image={mahi}/>
    </div>
  )
}

export default App
 