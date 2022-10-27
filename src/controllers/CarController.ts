import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _Service: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const createCar = await this._Service.create(req.body);
    return res.status(201).json(createCar);
  }

  public async read(_req: Request, res: Response) {
    const carList = await this._Service.read();
    return res.status(200).json(carList);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._Service.readOne(id);
    return res.status(200).json(car);
  }
}