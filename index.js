
    import express from 'express';
    import cors from 'cors';
    import 'dotenv/config';

    import productsRouter from './src/routes/products.routes.js';
    import authRouter from './src/routes/auth.routes.js';
    import { authentication } from './src/middlewares/authetication.js';
    import bodyParser from 'body-parser';

    const app = express();

    // Configuración básica: Permitir todos los orígenes
    app.use(cors());
    // Middleware para dar formato al body de las request
    app.use(bodyParser.json());

    // Routers
    app.use('/auth', authRouter);
    app.use('/api', authentication, productsRouter);

    // Middleware para manejar errores 404
    app.use((req, res, next) => {
        res.status(404).send('Recurso no encontrado');
    });

    const PORT = process.env.APP_PORT;

    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
