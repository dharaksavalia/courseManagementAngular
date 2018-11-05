import { User } from "./model/User";
import { Role } from "./auth/auth.gaurd";


export class AppSettings {
    private static REST_ENDPOINT='https://webdev-mintex.herokuapp.com/api';
    private static _user : User;
    private static _role:Role;

    public static getEndPoint = ()=>{
        return AppSettings.REST_ENDPOINT;
    }
    static set user(user:User){
        this._user=user;
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this._role = user.role;
    }
    static get user() {
        if(this._user == null){
            let current_user:User = JSON.parse(sessionStorage.getItem('currentUser'));
            console.log('Current User'+current_user);
            if(current_user!=null){
                this._user=current_user;
            }
        }
        return this._user;
    }
    public static login = (user:User) =>{
        AppSettings.user(user);
    }
    public static logout=()=>{
        sessionStorage.clear;
        AppSettings._role= null;
        AppSettings._user=null;
    }



}