
import express from 'express';
const app = express();
import 'dotenv/config'
//
import { htmlSend } from './lib/RenderUtil'
import Top from './pages/App';
import About from './pages/About';
import Contact from './pages/Contact';
//
//import testRouter from './routes/test'; 
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
app.get('/contact', async (req: any, res: any) => {
  try {
    const rendered = await Contact()
    res.send(htmlSend(rendered.html));
  } catch (error) { res.sendStatus(500); }
});
app.get('/about', async (req: any, res: any) => {
  try {
    const rendered = await About()
    res.send(htmlSend(rendered.html));
  } catch (error) { res.sendStatus(500); }
});
app.get('/', async(req: any, res: any) => {
  try {
    const rendered = await Top()
    res.send(htmlSend(rendered.html));
  } catch (error) { res.sendStatus(500); }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
