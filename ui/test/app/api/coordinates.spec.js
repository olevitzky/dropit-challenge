import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import env from '../../../src/environments/env';
import coordinatesApi from '../../../src/app/api/coordinates';
import nock from 'nock';

chai.should();
chai.use(chaiAsPromised);

describe('Coordinates Api', () => {
  describe('latestCoordinates', () => {
    const coordinate = {
      id: 1,
      lat: "123123123123",
      lng: "asdasdasdas"
    }

    it('should return a successful promise with the latest coordinate', () => {
      nock(`${env.TRACKING_SERVER_URL}`)
        .get('/latest')
        .reply(200, coordinate);

      let promise = coordinatesApi.latestCoordinates();
      return Promise.all([
          promise.should.be.fulfilled,
          promise.should.eventually.have.deep.property('data.lat', coordinate.lat)
      ]);
    })
  });
});