import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";

type inputType = "text" | "password" | "email";

interface ValidationRules {
    required?: RegisterOptions["required"];
    minLength?: RegisterOptions["minLength"];
    maxLength?: RegisterOptions["maxLength"];
    pattern?: RegisterOptions["pattern"];
}

export interface InputProps {
    type?: inputType;
    value?: string;
    placeholder?: string;
    id?: string;
    name: string;
    label?: string;
    autofocus?: boolean;
    onInput?: (value: string) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    validation?: ValidationRules;
}