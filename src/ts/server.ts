import express from 'express';
import { categoriesRoute  } from '../routes/categories.routes';

const app = express();
app.use("/categories", categoriesRoute); //Adicionando rota de categorias

app.listen(5154, () => console.log('Server on!'))