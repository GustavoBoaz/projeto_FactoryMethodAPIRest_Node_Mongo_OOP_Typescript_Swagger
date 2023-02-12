import { Request, Response } from 'express';
import IService from '../interfaces/IService';

/**
 * @author Gustavo Boaz
 * 
 * @description Classe abstrata para controladores
 * @argument I Corresponde a Interface dto de manipulação do modelo desejado
 * @argument D Corresponde a classe de dominio do modelo desejado
 * 
 * @property service
 * 
 * @constructor Inicializa um serviço baseado na estrutura de uma interface
 * 
 * @method create
 * @method readAll
 * @method readById
 * @method update
 * @method delete
 * 
 * @see IService
 */
abstract class AbstractController<I, D> {
  protected service: IService<I,D>;

  constructor() {
    this.service = this.getService();
  }

  protected async create(req: Request, res: Response): Promise<Response> {
    const result = await this.service.create(req.body);
    return res.status(201).json(result);
  }

  protected async readAll(req: Request, res: Response): Promise<Response> {
    const result = await this.service.readAll();
    return res.status(200).json(result);
  }

  protected async readById(req: Request, res: Response): Promise<Response> {
    const result = await this.service.readById(req.params.id);
    return res.status(200).json(result);
  }

  protected async update(req: Request, res: Response): Promise<Response> {
    const result = await this.service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  protected async delete(req: Request, res: Response): Promise<Response> {
    await this.service.delete(req.params.id);
    return res.status(204).send();
  }

  /**
   * Método utilizado para vincular um serviço especifico de um controlador
   * @example
   *    getService(): IService<ITodo, Todo> {
   *      return new TodoService();
   *    }
   * @returns IService: Retornar uma abstração de Interface
   */
  abstract getService(): IService<I, D>;
}

export default AbstractController;