export class ProjectModel {
    title:string = "";
    imgFile:string[] =[];
    description:string="";
    link:string="";


    public constructor(init?:Partial<ProjectModel>) {
        Object.assign(this, init);
    }
}
