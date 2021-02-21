export class ProjectModel {
    title:string = "";
    imgFile:string ="";
    description:string="";


    public constructor(init?:Partial<ProjectModel>) {
        Object.assign(this, init);
    }
}
