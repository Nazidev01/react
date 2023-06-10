import './App.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Index from "./components/Index";
import Metric from "./components/Metric";
import Plan from "./components/Plan";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Index/>
        <Metric/>
        <Plan/>
    </div>
  );
}

export default App;
