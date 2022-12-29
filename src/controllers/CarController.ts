import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _carService: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const createCar = await this._carService.create(req.body);
    return res.status(201).json(createCar);
  }

  public async read(_req: Request, res: Response) {
    const carList = await this._carService.read();
    return res.status(200).json(carList);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._carService.readOne(id);
    return res.status(200).json(car);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const updateCar = await this._carService
      .update(id, { model, year, color, buyValue, seatsQty, doorsQty });
    return res.status(200).json(updateCar);
  }
}