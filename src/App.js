import logo from './logo.svg';
import './App.css';
import './components/Hello';
import Hello from './components/Hello';
import Title from './components/welcome';

function App() {
  return (
    <div className="App">
      <Hello name = "Nick" superhero="Nick Fury"/>
      <Title/>
    </div>
  );
}

export default App;
