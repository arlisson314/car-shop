import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _cars: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._cars = model;
  }

  public async create(obj:unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
  
    return this._cars.create(parsed.data);
  }

  public async read(): Promise<ICar[]> {
    return this._cars.read();
  }
}

export default CarService;