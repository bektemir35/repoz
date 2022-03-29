
import './App.css';
import Header from './componets/Header';
import Nav from './componets/Navbar';
import Profiles from './componets/Profiles';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profiles />

    </div>
  );
}

export default App;
