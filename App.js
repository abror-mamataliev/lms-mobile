import React from "react";
import MyApp from "./MyApp";


import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  
 return (
   <>
    <Provider store={store}>
      <MyApp />
    </Provider>
    </>
 )
 
}
