import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginLibService } from '../login-lib.service';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private authService;
    private router;
    private matSnackBar;
    showLoader: boolean;
    hide: boolean;
    pageData: any;
    baseUrl: any;
    imageUrl: any;
    constructor(authService: LoginLibService, router: Router, matSnackBar: MatSnackBar);
    ngOnInit(): void;
    loginUser(userCredentials: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "lib-login", never, {}, {}, never, never>;
}
