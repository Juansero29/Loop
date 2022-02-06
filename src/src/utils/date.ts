import moment, { Moment } from 'moment';

export const getDaysForMonth = (currentDate: Moment): Array<Moment> => {
    let daysInMonth = currentDate.daysInMonth();
    const days = [];

    while(daysInMonth) {
        const current = moment(`${currentDate.format('YYYY-MM')}-${daysInMonth}`, "YYYY-MM-DD");
        days.unshift(current);
        daysInMonth--;
    }

    return days;
}