import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

 @Injectable({providedIn: 'root'})
    
    export class CursosGuard implements CanActivateChild {
        
            canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
                ) : Observable<boolean> | Promise<boolean>| boolean{

                    console.log('guarda de rota filha')

            return true;
            }
    }
    
 