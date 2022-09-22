import { PART_ONE_DATA } from "./action";
import { EDIT_FORM_ONE } from "./action";
import {NEWDATA} from "./action";
import {INDEX} from "./action";
const initState = {
  name: "Scholastic Areas",
  subjects: [],
  editValues: {},
  index:4,
  newData:[]
};

export const partOneReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PART_ONE_DATA:
      return {
        ...state,
        subjects: [...payload],
      };

    case EDIT_FORM_ONE:
      return {
        ...state,
        editValues: payload
      };
     
    case INDEX :
      return{
        ...state,
       index :payload
      }
    case NEWDATA : 
    return{
       ...state,
       newData : payload
    }
    default:
      return state;
  }
};
