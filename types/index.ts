import { MouseEventHandler } from "react";

export interface Button {
  text: string;
  type?: "button" | "submit";
  style?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
