import styles from './App.module.scss'
import Header from './Components/Header';
import Input from './Components/Input';
import Cards from './Components/Cards/index';
import { Pagination } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className={styles['container']}>
        <Header></Header>
        <Input></Input>
        <div className={styles['card-wrap']}>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className={styles['card-wrap']}>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Pagination count={3} className={styles['pagination']}/>
      </div>
    </div>
  );
}

export default App;
