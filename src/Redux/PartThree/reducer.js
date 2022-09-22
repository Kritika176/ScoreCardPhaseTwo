import { PART_THREE_DATA } from "./action";
const initState = {
  name: "Attendance",
  wd: null,
  dp:null
};

export const partThreeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PART_THREE_DATA:
      return {
        ...state,
        wd: payload.wd,
        dp:payload.dp,
      };

    default:
      return state;
  }
};
