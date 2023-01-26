import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='Color-box'>Robin's Egg Blue</div>
			<div className='Color-box2'>Sour Lemon</div>
			{/* <div className='Color-box3'>Orangeville</div> */}
			<div className='Color-box4'>Mint Leaf</div>
			{/* <div className='Color-box5'>Chi-Gong</div> */}
			<div className='Color-box6'>Green Darner Tail</div>

			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
