import dotenv from 'dotenv';
import http, { type Server } from 'node:http';
import app from './app';

dotenv.config();

const PORT: number = Number(process.env.PORT || 3000);

const server: Server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});