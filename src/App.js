import './App.css';
import Footer from './Components/Footer/Footer';
import Foot from './Components/Footer/foot';
import Navbar from './Components/Header/Navbar';
import Text from './Components/Mainprops/Text';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Text/>
      <Footer/>
      <Foot/>
    </div>
  );
}

export default App;
