import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "../contact/contact.component";
import { Observable } from "rxjs";
export interface IdeactivateComponent{
  canExit: ()=>Observable<boolean> | Promise<boolean> | boolean;
}


export class CanDeactivateGuardService implements CanDeactivate<IdeactivateComponent> {
  canDeactivate(
    component: IdeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit();
  }
}
