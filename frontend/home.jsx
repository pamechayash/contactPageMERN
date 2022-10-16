import { useLocation } from "react-router-dom"
import "./home.css"
export default function Home(state){
const location=useLocation()
console.log(location.state.name)
    return <div className="back">
        <div className="Contentcontainer">
  <h1>{location.state.name}</h1>
  <h4>{location.state.email}</h4>
  <h2>{location.state.subject}</h2>
  <h3>{location.state.message}</h3>

  <h5>Q.{location.state.query}</h5>



        </div>


    </div>
}