export class Student {
    name: string; // I need to initialize the property in a constructor
    tuition?: number; // ? makes this property optional
    constructor(name: string) {
        this.name = name;
    }

}