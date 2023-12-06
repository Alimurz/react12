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
          <Cards
            image='https://play-lh.googleusercontent.com/b1-MIBjlMD9kvl0Okeglm9BL9ejRpOXMio303W0tiLb8Ul5WuVzBDoDKgGRcALOsCdw'
            title='Dropbox'
            downloads='594 downloads'
            discription='Dropbox — файловый хостинг компании Dropbox Inc., включающий персональное облачное хранилище, синхронизацию файлов и программу-клиент. Штаб-квартира компании расположена в Сан-Франциско.'
          />
          <Cards
            image='https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.12.svg'
            title='Medium Corporation'
            downloads='625 downloads'
            discription='Medium is an American online publishing platform developed by Evan Williams and launched in August 2012. It is owned by A Medium Corporation.'
            />
          <Cards
          image='https://luna1.co/dc739c.png'
            title='Slack'
            downloads='857 downloads'
            discription='Slack — корпоративный мессенджер. Запущен в тестовом режиме в августе 2013 года, публичный выпуск состоялся 12 февраля 2014 года.'
          />
        </div>
        <div className={styles['card-wrap']}>
          <Cards
          image='https://play-lh.googleusercontent.com/ACQqLgO-aRSvB-t4TOPtJBjH-KdUA3BUpcrk1LQv5CPrxtL0JaQKeCL1AhygE4kHqg'
            title='Lyft'
            downloads='406 downloads'
            discription='Lyft — Агрегатор такси, публичная компания из Сан-Франциско, позволяющая пользователям находить с помощью интернет-сайта или мобильного приложения водителей, сотрудничающих с сервисом, и готовых подвезти их за умеренную плату. Девиз Lyft: «your friend with a car».'
            />
          <Cards
            image='https://cdn-icons-png.flaticon.com/256/25/25231.png'
            title='GitHub'
            downloads='835 downloads'
            discription='GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Веб-сервис основан на системе контроля версий Git и разработан на Ruby on Rails и Erlang компанией GitHub, Inc.'
            />
          <Cards
          image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Font_Awesome_5_brands_squarespace.svg/1200px-Font_Awesome_5_brands_squarespace.svg.png'
            title='Dropbox'
            downloads='499 downloads'
            discription='Squarespace, Inc. is an American website building and hosting company which is based in New York City. It provides software as a service for website building and hosting, and allows users to use pre-built website templates and drag-and-drop elements to create and modify webpages.'
            />
        </div>
        <Pagination count={3} className={styles['pagination']} />
      </div>
    </div>
  );
}

export default App;
