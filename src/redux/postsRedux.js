//selectors
export const getPostsById = ({ posts }, postId ) => posts.find((post) => post.id === postId)
export const getAllPosts = ({ posts }) => posts;
//actions
const createActionName = actionName => `app/posts/${actionName}`;
const GENERATE_POSTS = createActionName('GENERATE_POSTS');
const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creators
export const generatePosts = payload => ({ type: GENERATE_POSTS, payload,});
export const removeCard = payload => ({ type: REMOVE_CARD, payload,});
const postsRecuder = (statePart = [], action) => {
  switch (action.type) {
    case GENERATE_POSTS:
      return [...statePart, ...action.payload];
    case REMOVE_CARD:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsRecuder;
