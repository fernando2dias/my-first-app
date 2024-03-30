export class Recipe{
    public name: string;
    public description: string;
    public fullDescription: string;
    public imagePath: string;

    constructor(name:string, desc: string, fullDesc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.fullDescription = fullDesc;
        this.imagePath = imagePath;

    }

}