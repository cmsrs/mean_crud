import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../model/user';
import {UserService} from '../services/user.service';

import {
	       FormGroup,
		   FormBuilder,
		   Validators,
		   FormControl
} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'user-edit',
    templateUrl: 'app/components/user-form.html',
})

export class UserEditComponent  implements OnInit {
	public user: any = {};
	errorMessage: string;
	public isEdit: boolean = true;
	id: string;

	constructor( private _userService: UserService, private _router: Router, private _route: ActivatedRoute  ){
    }

	ngOnInit(){
		this._route.params.subscribe(params => {
			this.id = params['id'];
		});
		this._userService.getUserById(this.id).subscribe( user => {
			this.user = user;
		});


	}

	onSubmit(f: NgForm) {

		this._userService.updateUserByUserObj( this.user ).subscribe(
			ans => {},
            error =>  this.errorMessage = <any>error				
		);

		this._router.navigateByUrl('/');

	}

}
