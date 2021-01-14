export const GET_COMMENTS = 'GET_COMMENTS';
export const COMMENTS = 'COMMENTS';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';

export const getComments = () => ({
  type: GET_COMMENTS
});

export const commentsDatas = (datas) => ({
    type: COMMENTS,
    datas
  });

export const submitComment = () => ({
  type: SUBMIT_COMMENT
})