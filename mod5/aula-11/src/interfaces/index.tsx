import { ChangeEvent } from "react";

type InputType = "text" | "password";
export interface InputProps {
    type: InputType;
    value: string;
    placeholder: string;
    id: string;
    name: string;
    label: string;
    required: boolean;
    onInput: (value: string) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }