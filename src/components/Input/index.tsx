import { ReactNode, forwardRef } from 'react';
import styles from './input.module.css'

type InputProps = {
  label?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }: InputProps, ref) => (
  <div className={styles['input-container']}>
    {label}
    <input ref={ref} className={styles['input']}
      {...props}
    />
  </div>
));

export default Input;
