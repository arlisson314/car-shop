import { Router } from 'express';
import CarController from '../controllers/CarController';
import Cars from '../models/CarModel';
import CarService from '../services/CarService';

const route = Router();

const cars = new Cars();
const carService = new CarService(cars);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars/:id', (req, res) => carController.readOne(req, res));
route.get('/cars', (req, res) => carController.read(req, res));

export default route;