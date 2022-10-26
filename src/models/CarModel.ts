import { model as creatModel, Schema } from 'mongoose'; 
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carsSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class Cars extends MongoModel<ICar> {
  constructor(model = creatModel('Cars', carsSchema)) {
    super(model);
  }
}

export default Cars;