import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;
  
  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_Id: string): Promise<T | null> {
    if (!isValidObjectId(_Id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findById({ _Id });
  }

  public async update(_Id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_Id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndUpdate(_Id, { ...obj } as UpdateQuery<T>);
  }

  public async delete(_Id: string): Promise<T | null> {
    if (!isValidObjectId(_Id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete({ _Id });
  }
}

export default MongoModel;