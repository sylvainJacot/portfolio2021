// import './App.css';
import GlobalStyle from './components/01-atoms/GlobalStyle';
import HeadItem from './components/01-atoms/HeadItem';
import NavBar from './components/03-organisms/NavBar/NavBar';
import GlobalProvider from './components/data/contexts/global/GlobalProvider';
import Routes from './components/routes/routes';

function App() {

  setTimeout(console.log.bind(console, "%cDesigned and developed by Jacot Sylvain" ,
    "color: white; " +
    "background-color: #FA2A62; " +
    "border: 16px solid #FA2A6250;" +
    "font-weight: 800;" +
    "font-size: .75rem" +
    "line-height: 1.25rem"
));

  return (
    <>
      <GlobalProvider/>
      <GlobalStyle/>
      <HeadItem/>
      <NavBar/>
      <Routes/>
    </>
  );
}

export default App;
