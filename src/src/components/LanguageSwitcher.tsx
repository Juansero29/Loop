import './LanguageSwitcher.css';
import { IonLabel, IonItem, IonSelectOption, IonSelect, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { Language } from '../i18n/Language';


const LanguageSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation();


    function changeLanguage(e: string) {
        i18n.changeLanguage(e);
    }

    return (
        <div>
            <IonGrid>
                <IonRow >

                    <IonLabel class="language-label">{t('Language')}</IonLabel>

                    <IonCol class="ion-justify-content-end" size-md="6" offset-md="3">
                        <IonSelect class="ion-text-end" value={Language} placeholder={t('Select A Language')} okText={t('OK')} cancelText={t('Cancel')} onIonChange={e => changeLanguage(e.detail.value)}>
                            <IonSelectOption value='fr'>Français</IonSelectOption>
                            <IonSelectOption value="en">English</IonSelectOption>
                        </IonSelect>
                    </IonCol>

                </IonRow>

                <IonRow class="ion-justify-content-center">
                    <IonLabel class="current-language-label">{t('Current language is English')}</IonLabel>
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default LanguageSwitcher;