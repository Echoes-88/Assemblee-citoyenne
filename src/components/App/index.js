// == Import npm
import React from 'react';

// == Import
import Comments from '../../containers/Comments';
import PdfViewer from '../../containers/PdfViewer';
import Header from '../../components/Header';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header /> 
    <Comments /> 
    <PdfViewer /> 
  </div>
);

// == Export
export default App;
