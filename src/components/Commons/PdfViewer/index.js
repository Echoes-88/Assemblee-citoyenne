import React from 'react';

import '../style.scss';


const PdfViewer = ({pdfFile}) => {

    return (
        <>
    <iframe src={pdfFile} width="100%" height="500px">
    </iframe>
        </>
    )
}

  // == Export
  export default PdfViewer;
  