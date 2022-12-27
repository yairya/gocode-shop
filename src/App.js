import './App.css';
import appData from "./data/AppData"
import FirstPage from "./components/FirstPage/FirstPage"

function App() {
  return (
    <div className="App">
      <FirstPage appData={appData}/>
    </div>
  );
}

export default App;
