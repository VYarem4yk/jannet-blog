let initialState = {
  curentText: "",
  curentTextId: "11",
  textsNames: [],
};

const textsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TEXT: {
      return {
        ...state,
        curentText: action.curentText,
      };
    }

    case SET_TEXTS_NAMES: {
      return { ...state, textsNames: action.textsNames };
    }
    case SELECT_TEXT: {
      return {
        ...state,
        curentTextId: action.curentTextId,
      };
    }
    default:
      return state;
  }
};

const SHOW_TEXT = "SHOW_TEXT";
const SELECT_TEXT = "SELECT_TEXT";
const SET_TEXTS_NAMES = "SET_TEXTS_NAMES";

export const selectTextAC = (curentTextId) => ({
  type: SELECT_TEXT,
  curentTextId: curentTextId,
});

export const showTextAC = (curentText) => ({
  type: SHOW_TEXT,
  curentText: curentText,
});
export const setTextsNamesAC = (textsNames) => ({
  type: SET_TEXTS_NAMES,
  textsNames: textsNames,
});
export default textsReducer;
