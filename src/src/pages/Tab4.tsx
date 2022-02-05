import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

    <IonItem>
      <IonSelect >
        <IonSelectOption value="en">English</IonSelectOption>
        <IonSelectOption value="es">Spanish</IonSelectOption>
        <IonSelectOption value="fr">French</IonSelectOption>
      </IonSelect>
    </IonItem>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 4 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
