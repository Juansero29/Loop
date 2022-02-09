import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  useIonViewWillEnter,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { PersistenceStorageService, usePersistenceHook } from '../modules/services/PersistenceStorageService'

import { camera, trash, close, playOutline } from 'ionicons/icons';
import './Tab1.css';
import { useObservable } from '@mindspace-io/utils';
import {Session} from '../modules/models/Session';



const Tab1: React.FC = () => {

  let currentSession!: Session | undefined;
  const [persistenceService] = usePersistenceHook(PersistenceStorageService);
  
  useIonViewWillEnter(async () => {
    currentSession  = await persistenceService.findSessionById('1');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Today</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{currentSession?.startDate}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton >
            <IonIcon icon={playOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
