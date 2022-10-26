import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carMock, carMockWithId, carMockList } from '../../mocks/carMock';
import Cars from '../../../models/CarModel';
import { ErrorTypes } from '../../../errors/catalog'

describe('Car Model', () => {
  const carModel = new Cars();
  
  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId),
    sinon.stub(Model, 'find').resolves(carMockList),
    sinon.stub(Model, 'findOne').resolves(carMockWithId),
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId),
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId)
  });

  after(() => { sinon.restore() });

  describe('creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    })
  });

  describe('searching all cars', () => {
    it ('successfully found', async () => {
    const allcarsFound = await carModel.read();
    expect(allcarsFound).to.be.deep.equal(carMockList)
    });
  });

  describe('searching a cars', () => {
		it('successfully found', async () => {
			const carsFound = await carModel.readOne(carMockWithId._id);
			expect(carsFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('COMED!ANT3');
			} catch (error: any) {
				expect(error.message).to.be.equal(ErrorTypes.InvalidMongoId);
			}
		});
	});

  describe('searching and update cars', () => {
		it('successfully update', async () => {
			const carUpdate= await carModel.update(carMockWithId._id, carMock);
			expect(carUpdate).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('COMED!ANT3');
			} catch (error: any) {
				expect(error.message).to.be.equal(ErrorTypes.InvalidMongoId);
			}
		});
	});

  describe('searching and deleting cars', () => {
		it('successfully deleting', async () => {
			const carDelete= await carModel.delete(carMockWithId._id);
			expect(carDelete).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('COMED!ANT3');
			} catch (error: any) {
				expect(error.message).to.be.equal(ErrorTypes.InvalidMongoId);
			}
		});
	});

});