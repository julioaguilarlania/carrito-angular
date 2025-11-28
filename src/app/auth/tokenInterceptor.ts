import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AUTH_TOKEN_ITEM } from "../app.constantes";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log('intercepting', req.url);
    if (sessionStorage.getItem(AUTH_TOKEN_ITEM)) {
        console.log('enviando token');
        const reqConToken = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem(AUTH_TOKEN_ITEM))
        });

        return next(reqConToken);
    }
    else {
        console.log('sin token');
        return next(req);
    }
    
}