import express, { Application } from 'express';
import morgan from 'morgan';

require('dotenv').config()

// Routes
import indexRoutes from './routes/index.routes';
import userRoutes from './routes/user.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.APP_PORT || 3000);

        // Cors
        const cors = require('cors');
        this.app.use(cors());
        this.app.options('*', cors());
    }

    middlewares() {
        this.app.use(morgan('dev'));
        // this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/api/users', userRoutes);
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
    
}