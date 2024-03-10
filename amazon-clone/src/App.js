import React , {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51NObWfAhCyzZOfpjJ8t2yJP5VKR0SF8Dae2R0qlqrJtxJXNOehHbkXwZ90PSdhlmhIydxDm4sOvAn4YMwQbX3mMP00n9of3jsi');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  },[]);

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
        <Route path="/orders" element={[
          <Header />,
            <Orders />,
          ]}/>
          <Route path="/login" element={[
            <Login />,
          ]}/>
          <Route path="/checkout" element={[
          <Header />, 
          <Checkout/>
          ]}/>
          <Route path="/payment" element={[
          <Header />, 
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
          
          ]}/>
          <Route path="/" element={[
          <Header />, 
          <Home />
          ]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

