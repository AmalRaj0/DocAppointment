
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import DocFetch1 from './components/DocFetch1';
import { Route, Routes } from 'react-router-dom';
import Docdetails from './components/Docdetails';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={ <DocFetch1/>}/>
      <Route path='/view/:id' element={ <Docdetails/>}/>
    
     </Routes>
    
     <Footer/>
    </div>
  );
}

export default App;
