import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://backendblogpessoal.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://backendblogpessoal.herokuapp.com/usuarios/cadastrar', user)
  }

  logado(){
    //começo minha execução com ok falso
    let ok: boolean = false

    //se ok for diferente de vazio ele sera um true
    if(environment.token != ''){
      ok = true
    }

    //retorna o ok true o false, depende se ele vai entrar na condição
    return ok
  }

}
