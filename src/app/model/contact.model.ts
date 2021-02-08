export class ContactModel {

    email:string = "";
    github:string = "";
    linkedIn:string = "";

    public constructor(init?:Partial<ContactModel>) {
        Object.assign(this, init);
    }
}