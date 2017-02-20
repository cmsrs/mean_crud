import { Component, OnInit  } from '@angular/core';
import { User } from '../model/user';
import {UserService} from '../services/user.service';
import {
	    FormGroup,
	    FormBuilder,
	    Validators,
	    FormControl
} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'user-add',
	templateUrl: 'app/components/user-form.html',
})
export class UserAddComponent  {
	public user: any = {};
    public isEdit: boolean = false;
	errorMessage: string;


	constructor( private userService: UserService, private _router: Router  ){
    }

	onSubmit(f: NgForm) {

		this.userService.createUser( this.user  ).
			subscribe(
                    user  => {}, //  this.user.push(user),
		            error =>  this.errorMessage = <any>error );				


		this._router.navigateByUrl('/');
	}

}
