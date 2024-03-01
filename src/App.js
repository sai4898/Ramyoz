import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Middle from './Middle';
import Down from './Down';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Middle/>
      <Down />
      <Footer />
    </div>
  )
}

export default App