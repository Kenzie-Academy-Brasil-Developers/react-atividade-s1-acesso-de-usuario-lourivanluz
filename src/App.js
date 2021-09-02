import { useState } from "react";
import "./App.css";
import { RestrictedPage } from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "lourivan";

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          login={login}
          logout={logout}
        />
      </header>
    </div>
  );
}

export default App;
