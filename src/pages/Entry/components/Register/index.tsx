<<<<<<< Updated upstream

import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormValidation } from "../../../../utils/validation";
import type { RegisterForm } from "../../../../utils/validation";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './register.module.css'

export default function Register() {
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
    <form onSubmit={handleSubmit(onSubmit, onErrorSubmit)}>
      <div className={styles["input-container"]}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name")}
        />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          {...register("email")}
        />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password")}
        />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
      </div>

      <p>
        Já tem uma conta? <Link to={'/login'}>Faça login</Link>
      </p>

      <button type="submit">Registrar</button>
    </form>
  );
}
=======

import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormValidation } from "../../../../utils/validation";
import type { RegisterForm } from "../../../../utils/validation";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './register.module.css'

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
    <form
      onSubmit={handleSubmit(onSubmit, onErrorSubmit)}
      id={styles["register-form"]}
    >
      <div className={styles["input-container"]}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name")}
        />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          {...register("email")}
        />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password")}
        />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
      </div>

      <p>
        Já tem uma conta? <Link to={'/login'}>Faça login</Link>
      </p>
      <button type="submit">Registrar</button>
    </form>
  );
}
>>>>>>> Stashed changes
