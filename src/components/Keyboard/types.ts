import { ColorType } from "../../hooks/useWordle";

export type KeysType =
  | "ENTER"
  | "<--" // backspace
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export interface StateType {
  A: ColorType;
  B: ColorType;
  C: ColorType;
  D: ColorType;
  E: ColorType;
  F: ColorType;
  G: ColorType;
  H: ColorType;
  I: ColorType;
  J: ColorType;
  K: ColorType;
  L: ColorType;
  M: ColorType;
  N: ColorType;
  O: ColorType;
  P: ColorType;
  Q: ColorType;
  R: ColorType;
  S: ColorType;
  T: ColorType;
  U: ColorType;
  V: ColorType;
  W: ColorType;
  X: ColorType;
  Y: ColorType;
  Z: ColorType;
}
