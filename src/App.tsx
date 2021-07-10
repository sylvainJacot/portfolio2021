// import './App.css';
import GlobalStyle from './components/01-atoms/GlobalStyle';
import HeadItem from './components/01-atoms/HeadItem';
import NavBar from './components/03-organisms/NavBar/NavBar';
import HomePage from './components/05-pages/homepage/HomePage';
import Routes from './components/routes/routes';

function App() {

  setTimeout(console.log.bind(console, "%cDesigned and developed by Jacot Sylvain" ,
    "color: white; " +
    "background-color: #FA2A62; " +
    "border: 16px solid #FA2A6250;" +
    "font-weight: 800;" +
    "font-size: 16px"
));

  return (
    <>
      <GlobalStyle/>
      <HeadItem/>
      <NavBar/>
      <Routes/>

    </>
  );
}

export default App;
