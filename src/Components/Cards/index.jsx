import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dropbox from '../assets/images/php4xalw3-logo.png';
import styles from "./styles.module.scss"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';

const Cards = () => {
  return(
            <Card className={styles["card"]}>
      <CardMedia
        className={styles['image-drop']}
        image={Dropbox}
        title="dropbox"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dropbox
        </Typography>
        <Typography variant="body1" color="text.primary">
        Dropbox — файловый хостинг компании Dropbox Inc., включающий персональное облачное хранилище, синхронизацию файлов и программу-клиент. Штаб-квартира компании расположена в Сан-Франциско.
        </Typography>
        <div className={styles["additional"]}>
        <Typography variant="body2" color='text.secondary'><AccessTimeFilledIcon /> 2hr ago</Typography>
        <Typography variant="body2" color='text.secondary'><FileDownloadSharpIcon/> 594 Downloads</Typography>
      </div>
      </CardContent>
      
    </Card>
  )
  
}
export default Cards;