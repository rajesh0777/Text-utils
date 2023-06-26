
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {   
  return (
    <>
      
<Navbar title="React"/>
<div className="container my-3">
<TextForm  heading="Write the text here"/>
</div>

 
    </>
   
  );
 
}

export default App;
