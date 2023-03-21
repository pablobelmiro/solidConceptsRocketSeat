import { Router, json } from 'express';
import { CategoryRepository } from "../repositories/CategoriesRepository"

const categoriesRoute = Router();
const categoriesrepository = new CategoryRepository();
categoriesRoute.use(json());

//POST
categoriesRoute.post('/', (req, res) => {
    if(!req.body.name){
        res.status(404).send("body não declarado}");
    }

    const { name, description } = req.body;

    

    res.status(201).send();
});

//GET
categoriesRoute.get('/', (req, res) => {
    const all = categoriesrepository.list();

    res.json(all);
})


export { categoriesRoute };