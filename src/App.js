import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Main from './pages/Main';
import Search from './component/Search';
import Mainvideos from './component/Mainvideos';
import Movielist from './component/Movielist';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';

const composen = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;
const store = createStore(rootReducer, composen(applyMiddleware(thunk)))

function App() {
  return (
    <>
      <GlobalStyle/>
      <Main/>
      <Search/>
      <Mainvideos/>
      <Provider store={store}>
        <Movielist/>
      </Provider>
    </>
  );
}

export default App;
