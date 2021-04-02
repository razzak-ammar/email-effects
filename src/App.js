import {useState} from 'react'
import Header from './components/Header.js'
import EmailUI from './components/EmailUI'
import './App.css'

const App = () => {

	const [currentEmail, setCurrentEmail] = useState({});
	const [abColor, setAbColor] = useState(false);

	return (
		<main class={abColor ? 'ab-color' : 'normal'}>
		<Header />
		<br/>
		<button onClick={() => setAbColor(!abColor)} className="btn btn-primary ml-10 btn-ab">Obnoxious Colors</button>
		<EmailUI currentEmail={currentEmail} setCurrentEmail={setCurrentEmail} />
		</main>
	)
}

export default App

