export class ProjectModel {
    title:string = "";
    imgFileArray:string[] =[];
    description:string="";
    link:string="";


    public constructor(init?:Partial<ProjectModel>) {
        Object.assign(this, init);
    }
}
