import express, { Application, Request, Response, NextFunction} from 'express';
import { connection } from '../databases/connection';
import { sequelize } from '../databases/database';
import { User } from '../models/user/user.model';
const app: Application = express();
const port = 3000;
connection();

// middleware to parse json
app.use(express.json());
app.get('/', (req: Request, res: Response, next: NextFunction): any => {
    return res.send('Hello World!');
});

app.post('/api/post', async (req, res) => {
    await sequelize.sync();
    const user = await User.create({ 
        name: 'John Doe', 
        email: 'john@doee.com', 
        password: 'password' 
    });
    console.log(user.toJSON());
    return res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
