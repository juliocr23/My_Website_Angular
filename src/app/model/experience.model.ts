export class ExperienceModel {

    role:string = "";
    company:string = "";
    date:string = "";
    city:string = "";
    file:string = "";
    link:string = "";

    public constructor(init?:Partial<ExperienceModel>) {
        Object.assign(this, init);
    }
}