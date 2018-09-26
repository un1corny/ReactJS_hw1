export class DeveloperInfo {
    constructor (name, department, tel, email) {
        this.name = name;
        this.department = department;
        this.tel = tel;
        this.email = email;
    }
}

export function showDeveloperInfo(developerInfo) {
    console.log(developerInfo)
}