import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  private readonly tokenName: string = 'authorization';

  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService: AuthService = this.injector.get(AuthService);

    const token = authService.getToken();
    if (!token) {
      return next.handle(request);
    }

    request = this.setHeaders(request, token);

    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error.status === 401) {
          authService.logout();
          authService.initService();
        }
        return throwError(() => new Error(error));
      })
    );
  }

  setHeaders(request: HttpRequest<any>, token: string): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Accept-Language': 'en-US',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });

    return request;
  }
}
