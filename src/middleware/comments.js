// import axios from 'axios';
import { GET_COMMENTS, commentsDatas, SUBMIT_COMMENT } from '../actions/comments';

// Temp fetch of datas
import datas from "../../datas/comments.json";

const comments = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMENTS: {

        store.dispatch(commentsDatas(datas.comments));

    //   store.dispatch(waitingDatas(true));

    //   axios.get(`${adressIp}/api/news/${indexNews}`)
    //     .then((response) => {
    //       store.dispatch(newsFromApi(response.data));
    //       store.dispatch(toggleNews());
    //       store.dispatch(waitingDatas(false));
    //     })
    //     .catch((error) => console.log(error))
    //     .finally();
      break;
    }
    case SUBMIT_COMMENT: {
        // SEND COMMENT TO DATABASE
    }
    default:
      next(action);
  }
};

export default comments;
