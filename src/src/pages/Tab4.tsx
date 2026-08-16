import { IonContent, IonHeader, IonPage, IonItem, IonTitle, IonToolbar, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { t } from 'i18next';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('Settings')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('Settings')}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <LanguageSwitcher />
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
