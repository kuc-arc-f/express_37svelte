
import express from 'express';
const app = express();
import 'dotenv/config'
//
import { htmlSend } from './lib/RenderUtil'
//import App from './pages/App.svelte';
import App from './pages/App';
import AboutApp from './pages/About';

import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
console.log("EXTERNAL_API_URL=", process.env.EXTERNAL_API_URL)
//
const errorObj = {ret: "NG", messase: "Error"};
// API
app.use('/api/common', commonRouter);

//MPA
app.get('/about', async (req: any, res: any) => {
  try {
    const htm = AboutApp({coolieAuth: "" });
    res.send(htm);
  } catch (error) { res.sendStatus(500); }
});
app.get('/', async(req: any, res: any) => {
  try {
    const htm = App({coolieAuth: "" });
    res.send(htm);
  } catch (error) { res.sendStatus(500); }
});

//start
const PORT = 3000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
