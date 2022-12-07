
import './App.css';
import {Routes,Route} from "react-router-dom"
import Counter from "./components/Counter"
import Page from "./components/Page"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Counter />}></Route>
<Route path="/page" element={<Page/>}></Route>
       
      
      </Routes>
    </div>
  );
}

export default App;
