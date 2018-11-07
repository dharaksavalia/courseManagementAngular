import { User } from "./model/User";
import { Role } from "./auth/auth.gaurd";
import { Injectable } from "@angular/core";

const REST_ENDPOINT='https://webdev-mintex.herokuapp.com/api';
@Injectable({
    providedIn: 'root',
})
export class AppSettings {
   
    _user: User|undefined;
    _role: Role|undefined;

    get getEndPoint(): string {
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
            if(current_user!=null){
                this._user=current_user;
            }
        }
        return this._user;
    }
    get role():Role|null|undefined{
        return this._role;
    }
    set role(role:Role){
        this._role =role;
    }
     login = (user:User) =>{
        this.user=user;
    }
    logout(){
        sessionStorage.clear();
        this._role = null;
        this._user=null;
    }



}
