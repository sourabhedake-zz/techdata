import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user = null;
  
  getUser(): Observable<any> {
    return observableOf(this.user);
  }
}
