import { Category  } from "../model/category";

//Criando o DTO(data transfer object)
interface ICreateCategoryDTO{
    name: string,
    description: string
}

class CategoryRepository{

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void{
        const categoriesItem = new Category(name, description);

    this.categories.push(categoriesItem);
    }

    list():Category[] {
        return this.categories;
    }

    findByname(name: string): boolean{
        const category = this.categories.find(category => category.name === name);

        return false;
    }
}

export { CategoryRepository }