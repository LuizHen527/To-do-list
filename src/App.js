import { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import SearchBar from './components/SearchBar/SearchBar'
import NewTaskButton from './components/NewTaskButton/NewTaskButton';
import { NewTaskModal } from './components/NewTaskModal/NewTaskModal';

function App() {
  const [showNewTaskModal, setShowNewTaskModal] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [titleTask, setTitleTask] = useState;
  var list = [{ id: 1, title: "Começar a execução do projeto" },
              { id: 2, title: "Começar a execução do projeto" }];

  function onClick(params) {

  }

  return (
    <body className="App">
      <div className='Form-Container'>
        <h1 className='Text'>Terça-Feira, <span className='Text-Purple'>24</span> de Julho</h1>
        <SearchBar />
        <ListItem
          isDone={isDone}
          setIsDone={setIsDone}
        />
      </div>

      {
        list.forEach(element => {
          
          <ListItem
            title={element.title}
            isDone={isDone}
            setIsDone={setIsDone}
          />
        })
      }

      <NewTaskButton />
      <NewTaskModal
        onChange={(txt) => setTitleTask(txt)}
        visible={showNewTaskModal}
        titleTask={titleTask}
        onClick={onClick()}
      />
    </body>
  );
}

export default App;
