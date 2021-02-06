export class EducationModel {

    collegeName:string = "";
    degreeType:string = "";
    date:string = "";
    file:string = "";
    collegeLink:string = "";

    public constructor(init?:Partial<EducationModel>) {
        Object.assign(this, init);
    }
}