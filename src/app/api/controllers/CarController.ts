import { Router } from 'express';
import Car from '../domains/Car';
import ICar from '../interfaces/ICar';
import IRouter from '../interfaces/IRouter';
import IService from '../interfaces/IService';
import CarService from '../services/CarService';
import AbstractController from './AbstractController';

class CarController extends AbstractController<ICar, Car> implements IRouter {
  router: Router;

  constructor() {
    super();
    this.router = Router();
  }

  getService(): IService<ICar, Car> {
    return new CarService();
  }

  initRoutes(): Router {
    this.router.post('/cars', this.service.isValidBody, (req, res) =>
      // #swagger.tags = ['Car']
      // #swagger.summary = 'Criar Car'
      // #swagger.description = 'Endpoint para criar um Car.'

      /* #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Car data.',
        required: true,
        schema: { $ref: "#/definitions/Car" },
      } */

      /* #swagger.responses[201] = { 
        schema: { $ref: "#/definitions/Car" },
        description: 'Car criado!.' 
      } */

      /* #swagger.responses[400] = { 
        schema: { $ref: "#/definitions/BodyNotFound" },
        description: 'Erro no corpo da requisição!.' 
      } */
      this.create(req, res)
    );

    this.router.get('/cars', (req, res) =>
      // #swagger.tags = ['Car']
      // #swagger.summary = 'Listar Cars'
      // #swagger.description = 'Endpoint para listar Cars.'

      /* #swagger.responses[200] = { 
        description: 'Lista de Car!.' 
      } */
      this.readAll(req, res)
    );

    this.router.get('/cars/:id', (req, res) =>
      // #swagger.tags = ['Car']
      // #swagger.summary = 'Listar Car'
      // #swagger.description = 'Endpoint para listar Car.'

      /* #swagger.parameters['id'] = {
        in: 'path',
        type: 'string',
        description: 'Car ID.'
      } */

      /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Car" },
        description: 'Car encontrado!.' 
      } */

      /* #swagger.responses[401] = { 
        schema: { $ref: "#/definitions/IdNotFoundError" },
        description: 'Car não encontrado!.' 
      } */

      /* #swagger.responses[422] = { 
        schema: { $ref: "#/definitions/IdInvalidError" },
        description: 'Id mal formatado!.' 
      } */
      this.readById(req, res)
    );

    this.router.put('/cars/:id', this.service.isValidBody, (req, res) =>
      // #swagger.tags = ['Car']
      // #swagger.summary = 'Atualizar Car'
      // #swagger.description = 'Endpoint para atualizar um Car.'

      /* #swagger.parameters['id'] = {
        in: 'path',
        type: 'string',
        description: 'Car ID.'
      } */

      /* #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Car data.',
        required: true,
        schema: { $ref: "#/definitions/Car" },
      } */

      /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Car" },
        description: 'Car Alterado!.' 
      } */

      /* #swagger.responses[401] = { 
        schema: { $ref: "#/definitions/IdNotFoundError" },
        description: 'Car não encontrado!.' 
      } */

      /* #swagger.responses[422] = { 
        schema: { $ref: "#/definitions/IdInvalidError" },
        description: 'Id mal formatado!.' 
      } */
      this.update(req, res)
    );

    this.router.delete('/cars/:id', (req, res) =>
      // #swagger.tags = ['Car']
      // #swagger.summary = 'Deletar Car'
      // #swagger.description = 'Endpoint para deletar Car.'

      /* #swagger.parameters['id'] = {
        in: 'path',
        type: 'string',
        description: 'Car ID.'
      } */

      /* #swagger.responses[204] = { 
        description: 'Car deletado!.' 
      } */

      /* #swagger.responses[401] = { 
        schema: { $ref: "#/definitions/IdNotFoundError" },
        description: 'Car não encontrado!.' 
      } */

      /* #swagger.responses[422] = { 
        schema: { $ref: "#/definitions/IdInvalidError" },
        description: 'Id mal formatado!.' 
      } */
      this.delete(req, res)
    );
    return this.router;
  }
}

export default CarController;