import './App.css';
import GlobalStyle from './components/01-atoms/GlobalStyle';
import HeadItem from './components/01-atoms/HeadItem';
import NavBar from './components/03-organisms/NavBar/NavBar';
import HomePage from './components/05-pages/homepage/HomePage';

function App() {
  return (
    <>
      <GlobalStyle/>
      <HeadItem/>
      <NavBar/>
      <HomePage/>
    </>
  );
}

export default App;
