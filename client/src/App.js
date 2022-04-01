import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
