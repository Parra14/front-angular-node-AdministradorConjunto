export class Tasks {
    _id?:number;
    name: string;
    description: string;


    constructor(_id:number, name: string, description: string){
        this._id = _id;
        this.name = name;
        this.description = description;

    }

}