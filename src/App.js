import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BurgerMenu from './components/Menu/Menu'
import Home from './components/Home/Home'

function App() {
  return (
    <main className='App'>
      <BurgerMenu />
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
