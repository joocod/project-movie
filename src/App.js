import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Main from './pages/Main';
import Search from './component/Search';
import Mainvideos from './component/Mainvideos';
import Movielist from './component/Movielist';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Main/>
      <Search/>
      <Mainvideos/>
      <Movielist/>
    </>
  );
}

export default App;
