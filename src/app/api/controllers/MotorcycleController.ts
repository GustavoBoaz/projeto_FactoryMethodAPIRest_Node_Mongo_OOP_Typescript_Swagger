import { Router } from 'express';
import Motorcycle from '../domains/Motorcycle';
import IMotorcycle from '../interfaces/IMotorcycle';
import IRouter from '../interfaces/IRouter';
import IService from '../interfaces/IService';
import MotorcycleService from '../services/MotorcycleService';
import AbstractController from './AbstractController';

class MotorcycleController extends AbstractController<IMotorcycle, Motorcycle> implements IRouter {
  router: Router;

  constructor() {
    super();
    this.router = Router();
  }

  getService(): IService<IMotorcycle, Motorcycle> {
    return new MotorcycleService();
  }

  initRoutes(): Router {
    this.router.post('/motorcycles', this.service.isValidBody, (req, res) => 
      // #swagger.tags = ['Motorcycle']
      // #swagger.summary = 'Criar Motorcycle'
      // #swagger.description = 'Endpoint para criar um Motorcycle.'

      /* #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Motorcycle data.',
        required: true,
        schema: { $ref: "#/definitions/Motorcycle" },
      } */

      /* #swagger.responses[201] = { 
        schema: { $ref: "#/definitions/Motorcycle" },
        description: 'Car criado!.' 
      } */

      /* #swagger.responses[400] = { 
        schema: { $ref: "#/definitions/BodyNotFound" },
        description: 'Erro no corpo da requisição!.' 
      } */      
      this.create(req, res)
    );

    this.router.get('/motorcycles', (req, res) =>
      // #swagger.tags = ['Motorcycle']
      // #swagger.summary = 'Listar Motorcycles'
      // #swagger.description = 'Endpoint para listar Motorcycles.'

      /* #swagger.responses[200] = { 
        description: 'Lista de Motorcycle!.' 
      } */
      this.readAll(req, res)
    );

    this.router.get('/motorcycles/:id', (req, res) =>
      // #swagger.tags = ['Motorcycle']
      // #swagger.summary = 'Listar Motorcycle'
      // #swagger.description = 'Endpoint para listar Motorcycle.'

      /* #swagger.parameters['id'] = {
        in: 'path',
        type: 'string',
        description: 'Motorcycle ID.'
      } */

      /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Motorcycle" },
        description: 'Motorcycle encontrado!.' 
      } */

      /* #swagger.responses[401] = { 
        schema: { $ref: "#/definitions/IdNotFoundError" },
        description: 'Motorcycle não encontrado!.' 
      } */

      /* #swagger.responses[422] = { 
        schema: { $ref: "#/definitions/IdInvalidError" },
        description: 'Id mal formatado!.' 
      } */
      this.readById(req, res)
    );

    this.router.put('/motorcycles/:id', this.service.isValidBody, (req, res) =>
      // #swagger.tags = ['Motorcycle']
      // #swagger.summary = 'Atualizar Motorcycle'
      // #swagger.description = 'Endpoint para atualizar um Motorcycle.'

      /* #swagger.parameters['id'] = {
        in: 'path',
        type: 'string',
        description: 'Motorcycle ID.'
      } */

      /* #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Motorcycle data.',
        required: true,
        schema: { $ref: "#/definitions/Motorcycle" },
      } */

      /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Motorcycle" },
        description: 'Motorcycle Alterado!.' 
      } */

      /* #swagger.responses[401] = { 
        schema: { $ref: "#/definitions/IdNotFoundError" },
        description: 'Motorcycle não encontrado!.' 
      } */

      /* #swagger.responses[422] = { 
        schema: { $ref: "#/definitions/IdInvalidError" },
        description: 'Id mal formatado!.' 
      } */    
      this.update(req, res)
    );

    this.router.delete('/motorcycles/:id', (req, res) =>
      // #swagger.tags = ['Motorcycle']
      // #swagger.summary = 'Deletar Motorcycle'
      // #swagger.description = 'Endpoint para deletar Motorcycle.'

      /* #swagger.parameters['id'] = {
        in: 'path',
        type: 'string',
        description: 'Motorcycle ID.'
      } */

      /* #swagger.responses[204] = { 
        description: 'Motorcycle deletado!.' 
      } */

      /* #swagger.responses[401] = { 
        schema: { $ref: "#/definitions/IdNotFoundError" },
        description: 'Motorcycle não encontrado!.' 
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

export default MotorcycleController;