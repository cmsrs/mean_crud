import { Component, OnInit  } from '@angular/core';
import { User } from '../model/user';
import {UserService} from '../services/user.service';

@Component({
	selector: 'users',
	template: `
		<div class="user-list">
			<table class="table table-striped">
				<tr>
					<th>No</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Age</th>
					<th>First Name Mother</th>
					<th>First Name Father</th>
					<th></th>
				</tr>
				<tr *ngFor="let user of users, let i = index ">
					<td>{{i+1}}</td>
					<td>{{user.first_name}}</td>
					<td>{{user.last_name}}</td>
					<td>{{user.age}}</td>
					<td>{{user.first_name_mother}}</td>
					<td>{{user.first_name_father}}</td>
					<td>
						<a  [routerLink]="['/edit', user._id]" class="btn btn-default">Edit</a> 
						<a  (click)="deleteUser(user._id)" class="btn btn-danger">Delete</a>
					</td>
				</tr>
		   </table>
		</div>
	`	
})
export class UserListComponent implements OnInit {
	users: User[];
	del : any;

	constructor( private userService: UserService  ){
    }

	ngOnInit(){
		this.userService.getUsers().subscribe(users => {
	        this.users = users;
		});
	}

	deleteUser( id: string ){
		this.userService.deleteUser(id).subscribe( del => {
	        for( let i = 0; i < this.users.length;i++ ){
				if( id == this.users[i]._id  ){
					this.users.splice(i, 1);
				}
			}
		});
	}


}
