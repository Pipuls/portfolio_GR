import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: 'root'
})

export class IterceptorService implements HttpInterceptor{
    constructor(private tokenService: TokenService){}
        
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            let intReq = request;
            const token = this.tokenService.getToken();
            if (token != null){
                intReq = request.clone({
                    headers: request.headers.set('Authorization','Bearer ' + token)
            });
        }
        return next.handle(intReq);
    }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: IterceptorService,
    multi: true
}];
