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
  IonLabel,
} from '@ionic/react';
import { PersistenceStorageService, usePersistenceHook } from '../modules/services/PersistenceStorageService'

import { playOutline } from 'ionicons/icons';
import './Tab1.css';
import {Session} from '../modules/models/Session';



const Tab1: React.FC = () => {

  let currentSession!: Session | null;
  
  var labelShowingCurrentSession;

  const [persistenceService] = usePersistenceHook(PersistenceStorageService);
  
  useIonViewWillEnter(async () => {

    currentSession  = await persistenceService.getOngoingSession();

    if(isSessionOngoing())
    {
      labelShowingCurrentSession = <IonLabel>Session Ongoing - from {currentSession?.startDate} to {currentSession?.endDate}. Total time: {currentSession?.duration}</IonLabel>
    }
    else
    {
      labelShowingCurrentSession = <IonLabel>No ongoing session. PLease start a new session.</IonLabel>
    }
  });

  function isSessionOngoing() : boolean {
    return currentSession !== undefined && currentSession !== null;
  }

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


        <div>
          {labelShowingCurrentSession}
        </div>
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
