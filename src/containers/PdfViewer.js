import { connect } from 'react-redux';
import PdfViewer from '../components/Commons/PdfViewer';

const mapStateToProps = (state) => ({
    pdfFile: state.pdfViewer.pdfFile,
  });
  
  const mapDispatchToProps = () => ({

  });

export default connect(mapStateToProps, mapDispatchToProps)(PdfViewer);
