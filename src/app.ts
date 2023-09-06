import express, {Request, Response} from 'express';
const app = express();
const port = 3000;

// middleware to parse json
app.use(express.json());
app.get('/', (req: Request, res: Response): any => {
    return res.send('Hello World!');
});

app.post('/api/post', (req, res) => {
    console.log(req.body);
    return res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});