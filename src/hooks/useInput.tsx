import { useCallback, useReducer } from "react";

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

  const inputBackspace = useCallback(() => dispatch({ type: "BACKSPACE" }), []);
  const inputAdd = useCallback(
    (char: string) => dispatch({ type: "ADD", payload: char }),
    []
  );
  const inputDelete = useCallback(() => dispatch({ type: "DELETE" }), []);

  return { inputBackspace, inputAdd, inputDelete, input };
};

export default useInput;
