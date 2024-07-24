import produceData from "../mockData/produce.json";
const POPULATE = "produce/populate";
const LIKE_PRODUCT = "produce/likeAProduct";
export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const likeAProductAction = (id) => {
  return {
    type: LIKE_PRODUCT,
    payload: id,
  };
};

export const getAllProduce = (state) => Object.values(state.produce);

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
      const newState = {};
      for (const produce of action.produce) {
        newState[produce.id] = produce;
      }
      return newState;
    }
    case LIKE_PRODUCT: {
      const newState = { ...state };
      const id = action.payload;
      newState[id].liked = !newState[id].liked;
      return newState;
    }
    default:
      return state;
  }
}
