//Typing a store
export type InputStore = {
  number: string;
  name: string;
  month: string;
  year: string;
  cvv: string;
};

//????
export const inputState = {
  number: "",
  name: "",
  month: "",
  year: "",
  cvv: ""
};

//Defining action types and actions
//constants
const Update_Number = "updateNumber";
type Update_Number = typeof Update_Number;
const Update_Name = "update_Name";
type Update_Name = typeof Update_Name;
const Update_Month = "update_Month";
type Update_Month = typeof Update_Month;
const Update_Year = "update_Year";
type Update_Year = typeof Update_Year;
const Update_CVV = "update_CVV";
type Update_CVV = typeof Update_CVV;

//define action interfaces
type UpdateNumberAction = {
  type: Update_Number;
  number: string;
};
type UpdateNameAction = {
  type: Update_Name;
  name: string;
};
type UpdateMonthAction = {
  type: Update_Month;
  month: string;
};
type UpdateYearAction = {
  type: Update_Year;
  year: string;
};
type UpdateCVVAction = {
  type: Update_CVV;
  cvv: string;
};

export type ActionTypes =
  | UpdateNumberAction
  | UpdateNameAction
  | UpdateMonthAction
  | UpdateYearAction
  | UpdateCVVAction;

export default function inputReducer(
  state = inputState,
  action: ActionTypes
): InputStore {
  debugger;

  switch (action.type) {
    case Update_Number:
      return { ...state, number: action.number };
    case Update_Name:
      return { ...state, name: action.name };
    case Update_Month:
      return { ...state, month: action.month };
    case Update_Year:
      return { ...state, year: action.year };
    case Update_CVV:
      return { ...state, cvv: action.cvv };
    default:
      return state;
  }
}
