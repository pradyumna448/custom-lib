import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class LoginLibService {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    login(credentials: any): import("rxjs").Observable<import("@angular/common/http").HttpResponse<Object>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoginLibService>;
}
