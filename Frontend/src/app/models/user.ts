export class User {
    _id?:number;
    name: string;
    lastName: string;
    rol: string;
    email: string;
    password: string;


    constructor(name: string, lastName: string, rol: string, email: string, password: string){
        this.name = name;
        this.lastName = lastName;
        this.rol = rol;
        this.email = email;
        this.password = password;
    }

}