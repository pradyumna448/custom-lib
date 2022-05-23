import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginLibComponent } from './login-lib.component';
import { LoginRoutingModule } from './login-routing/login-routing.module';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i0 from "@angular/core";
export class LoginLibModule {
}
LoginLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoginLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibModule, declarations: [LoginLibComponent,
        LoginComponent], imports: [LoginRoutingModule,
        CommonModule,
        LoginRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSnackBarModule,
        BrowserAnimationsModule], exports: [LoginLibComponent] });
LoginLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibModule, imports: [[
            LoginRoutingModule,
            CommonModule,
            LoginRoutingModule,
            HttpClientModule,
            FormsModule,
            MatSnackBarModule,
            BrowserAnimationsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginLibComponent,
                        LoginComponent
                    ],
                    imports: [
                        LoginRoutingModule,
                        CommonModule,
                        LoginRoutingModule,
                        HttpClientModule,
                        FormsModule,
                        MatSnackBarModule,
                        BrowserAnimationsModule
                    ],
                    exports: [
                        LoginLibComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xvZ2luLWxpYi9zcmMvbGliL2xvZ2luLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFxQi9FLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBaEJ2QixpQkFBaUI7UUFDakIsY0FBYyxhQUdkLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHVCQUF1QixhQUd2QixpQkFBaUI7NEdBR1IsY0FBYyxZQWJoQjtZQUNQLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLHVCQUF1QjtTQUN4QjsyRkFLVSxjQUFjO2tCQWxCMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUNqQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMb2dpbkxpYkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4tbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xvZ2luLXJvdXRpbmcvbG9naW4tcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9naW5MaWJDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIExvZ2luUm91dGluZ01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTG9naW5Sb3V0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExvZ2luTGliQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5MaWJNb2R1bGUgeyB9XG4iXX0=