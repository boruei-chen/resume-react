import moment from 'moment';

const calculateRangeDate = (startDate: string, endDate: string) => {
  const momentStartDate = startDate ? moment(startDate) : moment();
  const momentEndDate = endDate ? moment(endDate) : moment();
  const diff = momentEndDate.diff(momentStartDate, 'months');
  const years = Math.floor(diff / 12);
  const months = diff % 12;
  return `${years} 年 ${months} 個月`;
};

export default {
  calculateRangeDate
};
