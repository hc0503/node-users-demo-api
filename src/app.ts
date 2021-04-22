import express, { Application } from 'express';
import morgan from 'morgan';

require('dotenv').config()

// Routes
import { Routes } from "./config/routes";

export class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routePrv.routes(this.app);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        // this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
    }
    settings() {
        this.app.set('port', this.port || process.env.APP_PORT || 3000);

        // Cors
        const cors = require('cors');
        this.app.use(cors());
        this.app.options('*', cors());
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
    
}