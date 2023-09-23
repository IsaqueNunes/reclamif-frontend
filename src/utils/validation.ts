import * as yup from 'yup'

export const NewIssueFormValidation = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
})

export type NewIssueForm = yup.InferType<typeof NewIssueFormValidation>

export const RegisterFormValidation = yup.object().shape({
    name: yup.string().required('First name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
})

export type RegisterForm = yup.InferType<typeof RegisterFormValidation>

export const LoginFormValidation = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
})

export type LoginForm = yup.InferType<typeof LoginFormValidation>
