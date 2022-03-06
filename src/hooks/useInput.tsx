import { useReducer } from "react";

const reducer = (
  state: string,
  action: { type: "BACKSPACE" | "DELETE" } | { type: "ADD"; payload: string }
) => {
  switch (action.type) {
    case "BACKSPACE":
      return state.slice(0, -1);
    case "ADD":
      if (state.length >= 6) return state;
      return state + action.payload.toUpperCase();
    case "DELETE":
      return "";
    default:
      return state;
  }
};

const useInput = () => {
  const [input, dispatch] = useReducer(reducer, "");

  const inputBackspace = () => dispatch({ type: "BACKSPACE" });
  const inputAdd = (char: string) => dispatch({ type: "ADD", payload: char });
  const inputDelete = () => dispatch({ type: "DELETE" });

  return { inputBackspace, inputAdd, inputDelete, input };
};

export default useInput;
