import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Main from './pages/Main';
import Search from './component/Search';
import Mainvideos from './component/Mainvideos';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Main/>
      <Search/>
      <Mainvideos/>
    </>
  );
}

export default App;
