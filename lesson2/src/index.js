let message = require('./moduleMessage');
let userObject = require('./module1-2');
let userModule = require('./moduleUserExportBefore');
let developer = require('./developerInfoClass');

//for many constructions
import {userName as newUserName} from './module1-2';

console.log('First webpack project');

message('Message was send');
console.log(userObject.userName);
userObject.showInfo(userObject.userName);

console.log('After rename');
console.log(userObject.name);
userObject.show(userObject.name);

let user1 = new userModule.User('Olga Petrova');
userModule.showData(user1);

console.log(newUserName);

let developer1 = new developer.DeveloperInfo('Oleg Gagarin', 'frontend', '777-77-77', 'rrr@mm.ru');
developer.showDeveloperInfo(developer1);