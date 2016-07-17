import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import env from '../../../src/environments/env';
import logsApi from '../../../src/app/api/logs';
import nock from 'nock';

chai.should();
chai.use(chaiAsPromised);

describe('Logs Api', () => {
  describe('latestLogMessage', () => {
    const log = {
      id: 1,
      severity: "low",
      content: "test"
    }

    it('should return a successful promise with the latest log', () => {
      nock(`${env.LOGS_SERVER_URL}`)
        .get('/latest')
        .reply(200, log);

      let promise = logsApi.latestLogMessage();
      return Promise.all([
          promise.should.be.fulfilled,
          promise.should.eventually.have.deep.property('data.id', log.id)
      ]);
    })
  });

  describe('getAllLogs', () => {
    const logs = [
      {
        id: 1,
        severity: "low",
        content: "test"
      },
      {
        id: 2,
        severity: "high",
        content: "test"
      }
    ];

    it('should return a successful promise with all the log', () => {
      nock(`${env.LOGS_SERVER_URL}`)
        .get('/logs')
        .reply(200, {logMessages: logs});

      let promise = logsApi.getAllLogs();
      return Promise.all([
          promise.should.be.fulfilled,
          promise.should.eventually.have.deep.property('data.logMessages[0].id', logs[0].id)
      ]);
    })
  })
});