import React, { useState } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import { BrowserRouter as Router, Route, Link,
Routes } from 'react-router-dom';


function App() {
const [count, setCount] = useState(0);
const [name, setName] = useState('');

return (
<Router>
<div className="App">
<header className="App-header"><nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link>
</nav>
<Routes>
<Route path="/" element={
<div>
<WelcomeMessage
name={name} />
<p>Hier können Sie Docker und React gemeinsam erkunden.</p>
<form>
<input
type="text"
placeholder="Geben Sie Ihren Namen ein"value={name}onChange={(e) => setName(e.target.value)}/>
</form>

<p>Hallo, {name}!</p>
<p>Button wurde
{count} mal geklickt.</p>
<button onClick
={() => setCount(count + 1)}>
Klicken Sie
mich
</button>
</div>
} />

<Route path="/about" element={
<div>
<h2>Über diese App</h2>
<p>Diese App wurde entwickelt, um Docker und React zu lernen.
</p>
</div>
} />
</Routes>
</header>

Docker-Explorationsaufgabe mit einer React-App 9

</div>
</Router>
);
}
export default App;