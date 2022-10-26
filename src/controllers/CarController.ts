import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _Service: IService<ICar>) {}

  public async creat(req: Request, res: Response<ICar>) {
    const result = await this._Service.create(req.body);
    return res.status(201).json(result);
  }
}