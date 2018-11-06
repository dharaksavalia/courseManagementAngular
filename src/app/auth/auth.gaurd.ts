import {Injectable} from '@angular/core'
import {Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router'
import { AppSettings } from '../app.setting';

@Injectable()
export class AuthGaurdService implements CanActivate{

    constructor(private router:Router, private appSetting:AppSettings){

    }

    canActivate(route: ActivatedRouteSnapshot){
        const expectedRole = route.data.role;
        if(!this.appSetting.role && this.appSetting.role == expectedRole ){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false;
        }
    }
}

export enum Role{
    ADMIN,
    STUDENT,
    FACULTY  
}