import { FC } from "react";
import { InputProps } from "./types";
import { useFormContext } from "react-hook-form";
import './input.css'

const Input: FC<InputProps> = (props) => {
  const {
    type = "text",
    name,
    id,
    autofocus = false,
    label,
    validation,
  } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={id}
        className="label"
      >
        {label}
      </label>
      <div>
        <input
          {...register(name as string, validation)}
          id={id}
          type={type}
          autoFocus={autofocus}
          className="input"
        />
        {errors[name] && (
          <small className="error-msg">
            {errors[name]?.message as string}
          </small>
        )}
      </div>
    </div>
  );
};

export default Input;