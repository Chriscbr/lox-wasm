import { useState } from 'react';
import './App.css';
import init, { run_code } from "lox-wasm";

const helloworld = `// You can edit this code!
// Click here and start typing.

print "Hello world!";`
const fibonacci = `var a = 0;
var temp;

for (var b = 1; a < 10000; b = temp + b) {
  print a;
  temp = a;
  a = b;
}`;

function App() {
  const [code, setCode] = useState(helloworld);
  const [output, setOutput] = useState("");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const runCode = () => {
    setOutput("");
    init().then(() => {
      setOutput(run_code(code));
    })
  };

  const handleExampleChange = (event) => {
    console.log("hi");
    switch (event.target.value) {
      case "helloworld":
        setCode(helloworld);
        break;
      case "fibonacci":
        setCode(fibonacci);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lox</h1>
      </header>
      <textarea className="Code" value={code} onChange={handleCodeChange}></textarea>
      <textarea className="Output" value={output} readOnly></textarea>
      <select className="Examples" onChange={handleExampleChange}>
        <option value="helloworld">Hello, World!</option>
        <option value="fibonacci">Fibonacci</option>
        <option value="empty">Empty</option>
      </select>
      <button className="Run" onClick={() => runCode(code)}>Run</button>
      <a className="github-button" href="https://github.com/Chriscbr/lox-wasm" data-size="large" data-show-count="true" aria-label="Star Chriscbr/lox-wasm on GitHub">Star</a>
    </div>
  );
}

export default App;
