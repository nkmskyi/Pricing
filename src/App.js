import "./App.css"
import "./Components/Web.css"
import Nav from "./Components/Nav"
import Card from "./Components/Card"
import Table from "./Components/Table"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Card />
        <h2 className="h2table">Compare plans</h2>
        <Table />
        <Footer />
      </div>
    </div>
  )
}

export default App
