import { PART_TWO_DATA } from "./action";
const initState = {
  name: "Co-Scholastic Areas",
  subjects: [],
};

export const partTwoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PART_TWO_DATA:
      return {
        ...state,
        subjects: [...state.subjects, payload],
      };
    default:
      return state;
  }
};
