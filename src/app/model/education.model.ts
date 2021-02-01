export class EducationModel {

    collegeName:string = "";
    degreeType:string = "";
    date:string = "";
    file:string = "";
    collegeLink:string = "";


    constructor(collegeName:string, degreeType:string, date:string, file:string, collegeLink:string){
        this.collegeName = collegeName;
        this.degreeType= degreeType;
        this.date = date;
        this.file = file;
        this.collegeLink = collegeLink;
    }
}