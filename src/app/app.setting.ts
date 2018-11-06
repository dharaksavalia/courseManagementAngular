import { User } from "./model/User";
import { Role } from "./auth/auth.gaurd";
import { Injectable } from "@angular/core";

const REST_ENDPOINT='https://webdev-mintex.herokuapp.com/api';
@Injectable({
    providedIn: 'root',
})
export class AppSettings {
   
    _user : User|undefined;
    _role:Role|undefined;

    public static getEndPoint= (): string => {
        return REST_ENDPOINT;
    }
    set user(user:User){
        this._user=user;
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this._role = user.role;
    }
    get user() {
        if(this._user == null){
            let current_user:User = JSON.parse(sessionStorage.getItem('currentUser'));
            console.log('Current User'+current_user);
            if(current_user!=null){
                this.user=current_user;
            }
        }
        return this.user;
    }
    get role():Role|null|undefined{
        return this._role;
    }
    static set role(role:Role){
        this._role =role;
    }
    public login = (user:User) =>{
        this.user=user;
    }
    public logout=()=>{
        sessionStorage.clear;
        this._role = undefined;
        this._user=undefined;
    }



}