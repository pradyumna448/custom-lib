import { Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LoginLibService {
    constructor(http, environment) {
        this.http = http;
        this.environment = '';
        this.environment = environment;
        console.log(environment);
    }
    login(credentials) {
        const hdrs = new HttpHeaders({ 'X-USER': credentials.username, 'X-PASS': credentials.password });
        hdrs.append('Content-Type', 'application/text');
        return this.http.post(this.environment['baseURL'] + 'ctld/api/session/v1', JSON.stringify({ username: credentials.username, password: credentials.password }), { headers: hdrs, observe: 'response' });
    }
}
LoginLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibService, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
LoginLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9sb2dpbi1saWIvc3JjL2xpYi9sb2dpbi1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUkvRCxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUFvQixJQUFlLEVBQXlCLFdBQWU7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBVztRQUQzQixnQkFBVyxHQUFDLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFRixLQUFLLENBQUMsV0FBZ0I7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcscUJBQXFCLEVBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQ2xGLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs0R0FkVSxlQUFlLDRDQUVtQixhQUFhO2dIQUYvQyxlQUFlLGNBRmQsTUFBTTsyRkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBR3VDLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkxpYlNlcnZpY2Uge1xuICBwcml2YXRlIGVudmlyb25tZW50PScnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudDphbnkpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgY29uc29sZS5sb2coZW52aXJvbm1lbnQpO1xuICAgIFxuICAgfVxuXG4gIGxvZ2luKGNyZWRlbnRpYWxzOiBhbnkpIHtcbiAgICBjb25zdCBoZHJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ1gtVVNFUic6IGNyZWRlbnRpYWxzLnVzZXJuYW1lLCAnWC1QQVNTJzogY3JlZGVudGlhbHMucGFzc3dvcmQgfSk7XG4gICAgaGRycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi90ZXh0Jyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW52aXJvbm1lbnRbJ2Jhc2VVUkwnXSArICdjdGxkL2FwaS9zZXNzaW9uL3YxJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IGNyZWRlbnRpYWxzLnVzZXJuYW1lLCBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQgfSksXG4gICAgICB7IGhlYWRlcnM6IGhkcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gIH1cbiAgXG59XG4iXX0=