import { configureStore } from "@reduxjs/toolkit";
import { partOneReducer } from "./PartOne/reducer";
import {partTwoReducer} from "./PartTwo/reducer";
import {partThreeReducer} from "./PartThree/reducer";
export const store = configureStore({
  reducer: {
    part_one: partOneReducer,
    part_two: partTwoReducer,
    part_three: partThreeReducer
  },
});
