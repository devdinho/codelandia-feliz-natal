import "./App.css";
import Header from "./components/Header";
import HeaderContainer from "./components/HeaderContainer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header>
        <NavBar />
        <HeaderContainer />
      </Header>
      <Main />
    </div>
  )
}

export default App
