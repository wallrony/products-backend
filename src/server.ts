import express from 'express';
import cors from 'cors';

import CoreRouter from './routers/CoreRouter';

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static('public'))

server.use('/api/core', CoreRouter)

export default server;