import {Provider} from "react-redux"
import store from './redux/store';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomeContainer from "./components/Home/HomeContainer";
function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContainer/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
