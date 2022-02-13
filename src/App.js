import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <header className="app-header">
          <Header title="Dashboard" />
        </header>
        <main className="app-main">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
