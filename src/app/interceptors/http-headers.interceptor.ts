
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(
     req: HttpRequest<any>,
     next: HttpHandler
   ): Observable<HttpEvent<any>> {
       req = req.clone({
         setHeaders:{
            //'x-rapid-api-key':'150fb21e51msh82f3d456b243fe2p1e6229jsnc5d715ed356c',
          // 'x-rapidapi-host': 'https://rawg-video-games-database.p.rapidapi.com',
          // 'x-rapidapi-host': 'https://api.rawg.io/api',
           'X-RapidAPI-Key': '150fb21e51msh82f3d456b243fe2p1e6229jsnc5d715ed356c',
           'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
         },
         setParams: {
           key: '3fce2588eb364480b214cf11280ae3f9'
         }
       });
       return next.handle(req);
   }
}