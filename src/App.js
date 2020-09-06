import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/Store'
import Main from './router'

function App() {
  return (
   <Provider store={store}>
     <Main />
   </Provider>
  // <div>
  //   <Main />
  // </div>
  );
}

export default App;
