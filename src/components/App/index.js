// == Import npm
import React from 'react';

// == Import
import Comments from '../../containers/Comments';
import PdfViewer from '../../containers/PdfViewer';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Comments /> 
    <PdfViewer /> 
  </div>
);

// == Export
export default App;
