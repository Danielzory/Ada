import { FC } from "react";
import Input from "../../Componentes/Input";
import { Link } from "react-router-dom";
import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { IoPlanet } from "react-icons/io5";
import './signUp.css'

const SignUp: FC = () => {
  const methods = useForm();
  const { watch } = methods;
  const onSubmit = (data: any) => {
    window.localStorage.setItem('@auth', JSON.stringify(data));
    window.alert('Usuario cadastrado com sucesso!')
  };

  return (
    <div className="form-container">
      <div className="login-header">
        <div className="logo">
        <IoPlanet />
        </div>
        <h2>Login</h2>
      </div>

      <div className="login-container">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div>
              <Input
                type="email"
                name="email"
                autofocus
                label="E-mail"
                validation={{
                  required: "E-mail obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "E-mail inválido",
                  },
                }}
              />
            </div>

            <div>
              <Input
                type="password"
                name="senha"
                label="Senha"
                validation={{
                  required: "Senha obrigatória",
                  minLength: {value: 8, message:"A senha deve ter no mínimo 8 caracteres"}
                }}
              />
            </div>
            <div>
                <Input
                  type="password"
                  name="confirmeSenha"
                  label="Confirme a Senha"
                  validation={{
                    minLength: { value: 8, message: "Mínimo 8 caracteres" },
                    validate: (value: FieldValues) => //Arrumar antes de entregar
                      String(value) === watch("senha") ||
                      "As senhas não coincidem",
                  }}
                />
              </div>

            <div>
              <button
                type="submit" className="register-button">Register</button>
            </div>
          </form>
        </FormProvider>
        <Link to={'/'}>Voltar</Link>

      </div>
    </div>
  );
};

export default SignUp;