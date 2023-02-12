import { Router } from 'express';

/**
 * Interface responsavel por contrato de Router
 * @property router - Inicializar em um construtor
 * 
 * @method initRoutes(): Utilizar para inicializar rotas
 */
interface IRouter {
  router: Router;

  /**
   * Inicialize as rotas necessarias para sua aplicação
   * @example
   *    initRoutes(): express.Router {
   *      this.router.post('/todo', (req, res) => this.create(req, res));
   *      this.router.get('/todo', (req, res) => this.read(req, res));
   *      this.router.put('/todo', (req, res) => this.update(req, res));
   *      this.router.delete('/todo', (req, res) => this.create(req, res));
   *      return this.router;
   *    }
   * @returns Router: Retorna um objeto router para a aplicação
   */
  initRoutes(): Router;
}

export default IRouter;