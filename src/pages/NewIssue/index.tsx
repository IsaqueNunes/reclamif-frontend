import { NewIssueFormValidation } from '../../utils/validation';
import { FieldErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { NewIssueForm } from '../../utils/validation';

import axios from 'axios';
import styles from './new-issue.module.css'
import { Button } from '../../components/Button';
import { useAuth } from '../../utils/useAuth';
import Input from '../../components/Input';

export default function NewIssue() {
  const auth = useAuth();
  const { register, handleSubmit } = useForm<NewIssueForm>({
    resolver: yupResolver(NewIssueFormValidation),
  });

  const onSubmit = async (data: NewIssueForm) => {
    // const response = await axios.post('http://localhost:3000/issue', {
    //     headers: {
    //       Authorization: `Bearer ${auth?.user?.accessToken}`,
    //     },
    //     ...data
    // })
    const response = await axios.post('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${auth?.user}`,
      },
    })

    console.log(response.status)
  }

  const onErrorSubmit = (errors: FieldErrors<NewIssueForm>) => {
    console.log(errors)
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit, onErrorSubmit)}
        id={styles['new-issue-form']}
      >
        <Input
          label={
            <label htmlFor="title">Title:</label>
          }
          {...register("title")}
        />
        <Input
          label={
            <label htmlFor="description">Description:</label>
          }
          {...register("description")}
        />
        <Button type="submit" variation='solid'>Submit</Button>
      </form>
    </main>
  );
}
