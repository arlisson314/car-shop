import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog'
import Cars from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId, carMockList } from '../../mocks/carMock';

describe('Car Service', () => {
	const carModel = new Cars();
	const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
  });

  after(() => {
		sinon.restore()
	});

  describe('Create Car', () => {
    it('Sucess Create', async () => {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockWithId)
    });

    it('Failure', async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });
});
