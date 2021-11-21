import config from './src/config/env';
import Server from './src/config/server';
import express from 'express';
import middlewares from './src/config/middlewares';
import routes from './src/modules';
import db from './src/config/database';

const api = Server(express, middlewares, routes);

(async () => {
    try {
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({alter: true})
        await api.listen(config.app_port);
    } catch (e) {
        console.error(e);
    }
})();