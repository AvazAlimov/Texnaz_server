import { CronJob } from 'cron';
import moment from 'moment';
import { exec } from 'child_process';
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

const backup = new CronJob(process.env.BACKUP_DELAY || '0 0 */1 * * *', () => {
  const user = process.env.DB_USERNAME;
  const password = process.env.DB_DB_PASSWORD || '';
  const database = process.env.DB_DATABASE;
  const filename = (new Date()).toISOString().substring(0, 16).replace(':', '');
  const folder = process.env.BACKUP_FOLDER || 'backup';
  const command = `cd ${folder} && mysqldump -u ${user} -p${password} ${database} > ${filename}.sql`;
  console.log(command);
  exec(command);
  console.log((new Date()).toLocaleTimeString());
});

job.start();
backup.start();
