
import './App.css';
import axios from 'axios';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '00cc4b4770c22d9316433c56df5c5eae',
};

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
