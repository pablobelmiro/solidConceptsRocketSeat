import { v4 as uuidv4 } from 'uuid';

class Category{

    id?: string;
    name: string;
    description?: string;
    createdAt: Date

    constructor(name: string, description: string){
        if(!this.id){
            this.id = uuidv4();
        }
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
    }
};

export{ Category };
