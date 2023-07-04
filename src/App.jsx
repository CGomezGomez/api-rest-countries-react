import { useState } from 'react';
import { GlobalStyles } from "./styles/GlobalStyles";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
	
      <GlobalStyles darkMode={darkMode} />
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />

    </>
  );
};

export default App;