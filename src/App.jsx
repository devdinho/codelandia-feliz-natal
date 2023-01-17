import "./App.css";
import Header from "./components/Header";
import HeaderContainer from "./components/HeaderContainer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header>
        <NavBar />
        <HeaderContainer />
      </Header>
      <Main />
      <Footer />
    </div>
  )
}

export default App
