import SpinningReactLogo from './components/SpinningReactLogo/SpinningReactLogo';
import Base from './components/Base/Base'
import './App.css';

function App() {
  return (
    <div className="App">
        <Base 
			content={<SpinningReactLogo></SpinningReactLogo>}
			title="Sagar Saxena"
		></Base>
    </div>
  );
}

export default App;
