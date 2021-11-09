import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div clssName="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="App-footer">
          <i className="fab fa-github github-icon"></i>{" "}
          <a
            href="https://github.com/PasqualCarstens/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Pasqual Carstens
        </footer>
      </div>
    </div>
  );
}
