export const PART_ONE_DATA = "PART_ONE_DATA";
export const EDIT_FORM_ONE = "EDIT_FORM_ONE";
export const INDEX = "INDEX";
export const NEWDATA = "NEWDATA"
export const getPartOneData = (payload) => ({
  type : PART_ONE_DATA,
  payload
})

export const editFormOne = (payload) => ({
  type:EDIT_FORM_ONE,
  payload
});

export const getIndex = (payload) => ({
  type:INDEX,
  payload
});

export const getNewData = (payload) => ({
  type : NEWDATA,
  payload
}
)