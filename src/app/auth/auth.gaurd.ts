import {Injectable} from '@angular/core'
import {Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router'

@Injectable()
export class AuthGaurdService implements CanActivate{

    constructor(private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot){
        const expectedRole = route.data.role;
        if(!AppSettings.role() && AppSettings.role == expectedRole ){
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