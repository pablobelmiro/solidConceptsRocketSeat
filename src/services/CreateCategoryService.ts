import { CategoryRepository } from '../repositories/CategoriesRepository'

interface IRequest{
    name: string,
    description: string
}

class CreateCategoryService{
    private categoriesrepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository){
        this.categoriesrepository = categoryRepository;
    }

    execute({name, description}: IRequest):void{
    const categoryAlreadyExists = this.categoriesrepository.findByname(name);

    if(categoryAlreadyExists){
        throw new Error("Category already exists!")
    }

    this.categoriesrepository.create({name, description});
    }
}

export { CreateCategoryService }