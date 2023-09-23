import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

import Hero from '../../assets/hero.svg';

import styles from './home.module.css';
import { useAuth } from '../../utils/useAuth';

export default function Home() {
  const navigate = useNavigate();
  const user = useAuth();

  if (user) {
    console.log(user)
  }

  const handleNewIssue = () => {
    navigate('/new-issue');
  };

  const handleViewIssues = () => {
    navigate('/issues');
  };

  return (
    <main id='home' className={styles['main-home']}>
      <div className="home-description">
        <h2>Seu lugar para fazer reclamações</h2>
        <p>Tem alguma reclamação ou sugestão sobre o IF?</p>
        <div className={styles["buttons"]}>
          <Button
            type='button'
            variation='outline'
            onClick={handleNewIssue}
          >
            Nova Reclamação
          </Button>
          <Button
            type='button'
            variation='solid'
            onClick={handleViewIssues}
          >
            Visualizar Reclamações
          </Button>
        </div>
      </div>
      <img src={Hero} alt="Bug Fixing" id={styles.hero} />
    </main>
  );
}
