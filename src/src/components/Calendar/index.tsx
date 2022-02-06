import {
  useEffect,
  useState,
  useCallback
} from 'react';
import {
  IonGrid,
  IonRow,
  IonIcon
} from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import moment, { Moment } from 'moment';

import { getDaysForMonth } from 'utils/date';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const [days, setDays] = useState<Array<Moment>>();

  useEffect(() => {
    setDays(getDaysForMonth(currentDate))
  }, [currentDate]);

  const previousMonth = useCallback(() => {
    setCurrentDate(moment(currentDate).subtract(1, 'months'));
  }, [currentDate]);

  const nextMonth = useCallback(() => {
    setCurrentDate(moment(currentDate).add(1, 'months'));
  }, [currentDate]);

  return (
    <IonGrid>
      <IonIcon icon={arrowBackOutline} onClick={previousMonth} />
      <p>{`Month ${currentDate.format('MM')}`}</p>
      <p>{`Year ${currentDate.format('YYYY')}`}</p>
      <IonRow>
        {days?.map(day => {
          return (
            <span>{day.format('D')}</span>
          );
        })}
      </IonRow>
      <IonIcon icon={arrowForwardOutline} onClick={nextMonth} />
    </IonGrid>
  );
};

export default Calendar;
