import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginLibComponent } from './login-lib.component';
import { LoginRoutingModule } from './login-routing/login-routing.module';
import { LoginComponent } from './login/login.component';
import * as i0 from "@angular/core";
export class LoginLibModule {
}
LoginLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoginLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibModule, declarations: [LoginLibComponent,
        LoginComponent], imports: [LoginRoutingModule,
        CommonModule,
        LoginRoutingModule,
        HttpClientModule,
        FormsModule], exports: [LoginLibComponent] });
LoginLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: LoginLibModule, imports: [[
            LoginRoutingModule,
            CommonModule,
            LoginRoutingModule,
            HttpClientModule,
            FormsModule
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
                        FormsModule
                    ],
                    exports: [
                        LoginLibComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xvZ2luLWxpYi9zcmMvbGliL2xvZ2luLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFvQnpELE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBZHZCLGlCQUFpQjtRQUNqQixjQUFjLGFBR2Qsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFdBQVcsYUFHWCxpQkFBaUI7NEdBR1IsY0FBYyxZQVhoQjtZQUNQLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixXQUFXO1NBQ1o7MkZBS1UsY0FBYztrQkFoQjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMb2dpbkxpYkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4tbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xvZ2luLXJvdXRpbmcvbG9naW4tcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2dpbkxpYkNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTG9naW5Sb3V0aW5nTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMb2dpblJvdXRpbmdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTG9naW5MaWJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkxpYk1vZHVsZSB7IH1cbiJdfQ==