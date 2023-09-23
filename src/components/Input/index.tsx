import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <div className={styles['input-container']}>
      <label className={styles['label']}>{label}</label>
      <input className={styles['input']}
        {...rest}
      />
    </div>
  );
}
