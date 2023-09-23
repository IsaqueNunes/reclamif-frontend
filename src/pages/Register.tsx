
import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormValidation } from "../utils/validation";
import type { RegisterForm } from "../utils/validation";
import axios from "axios";
import { Link } from "react-router-dom";

export function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>({
    resolver: yupResolver(RegisterFormValidation),

  });

  const onSubmit = async (data: RegisterForm) => {
    console.log(data);

    const response = await axios.post('http://localhost:3000/register', {
      ...data
    })

    console.log(response.status)
  };

  const onErrorSubmit = (errors: FieldErrors<RegisterForm>) => {
    console.log(errors);
  };

  return (
    <main>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit, onErrorSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name")}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          {...register("email")}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password")}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />

        <button type="submit">Registrar</button>
      </form>

      <p>
        Já tem uma conta? <Link to={'/login'}>Faça login</Link>
      </p>
    </main>
  );
}
