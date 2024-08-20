import './App.css';
import ListItem from './components/ListItem/ListItem';
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <body className="App">
      <div className='Form-Container'>
        <h1 className='Text'>Terça-Feira, <span className='Text-Purple'>24</span> de Julho</h1>
        <SearchBar/>
        <ListItem/>
      </div>
    </body>
  );
}

export default App;
