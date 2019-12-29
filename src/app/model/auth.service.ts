import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';


@Injectable()

export class AuthService {
  constructor(
    private restService: RestService
  ) {

  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.restService.authentication(username, password);
  }

  get authenticated(): boolean {
    //user login işlemini yapıp yapmadığını token'ın null olup olmadığı ile kontrol ediyoruz.
    return this.restService.token != null;
  }

  clear() {
    //user logout yapınca token ı siliyoruz.
    this.restService.token = null;
  }
}
