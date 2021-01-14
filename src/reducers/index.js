import { combineReducers } from 'redux';
import comments from './comments';
import pdfViewer from './pdfViewer';

export default combineReducers({
    comments,
    pdfViewer
});
