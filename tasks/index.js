import { CronJob } from 'cron';
import moment from 'moment';
import models from '../models';

const job = new CronJob('0 0 */1 * * *', () => {
  models.Booking.destroy({
    where: {
      date: {
        [models.Sequelize.Op.lt]: moment().toDate(),
      },
    },
  });
});

job.start();
