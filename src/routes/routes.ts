import { Router } from 'express';
import Cars from '../models/CarModel';
import CarService from '../services/CarService';
import CarController from '../controllers/CarController';

const route = Router();

const cars = new Cars();
const carService = new CarService(cars);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));
route.get('/cars/:id', (req, res) => carController.readOne(req, res));
route.put('/cars/:id', (req, res) => carController.update(req, res));

export default route;