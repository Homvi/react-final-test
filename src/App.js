import './App.css'
import {useState, useEffect} from "react";
import LoadingMask from "./components/LoadingMask"
import Hotel from './components/Hotel';
const App = () => {

  const [myData, setMyData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/api/hotels")
      .then(response => response.json())
      .then(data => {
        setMyData(data)
        setLoaded(true)
      })
  }, [])
  console.log(myData);


  return (
    <div className="App">

      <h1>Hotels</h1>
      {!isLoaded && <LoadingMask />}
      {isLoaded && <Hotel data={myData} />}
    </div>
  )
}

export default App
