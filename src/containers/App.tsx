import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import store from '../redux/store'
import { Provider } from 'react-redux'
import './App.css';

const App = () =>  {

  return (
   <Provider store={store}>
      <Router>
        <div className="App">
          up and running
       </div>
      </Router>
   </Provider>
  );
}


export default App;