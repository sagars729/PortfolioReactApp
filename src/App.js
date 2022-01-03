import Base from './components/Base/Base'
import Landing from './components/Landing/Landing'
import './App.css';

function App() {
  return (
    <div className="App">
        <Base 
			content={<Landing></Landing>}
			title="Sagar Saxena"
		></Base>
    </div>
  );
}

export default App;
