import * as express from 'express';

/**
 * Class represent the API Router
 * @export
 * @class ApiRouter
 */
export class ApiRouter {
    private router: express.Router = express.Router();

    public getRouter() {
        return this.router;
    }

    public addRoute(version: string, path: string, router: express.Router, defaultRoute: boolean = false) {
        this.router.use('/' + version + '/' + path, router);
        if (defaultRoute) {
            this.router.use('/' + path, router);
        }
    }
}