import { Component } from '@angular/core';

@Component({
  selector: 'mean-crud',
  template: `
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" routerLink='/'>MEAN CRUD</a>
			</div>
			<ul class="nav navbar-nav">
				<li><a routerLink='/'>Home</a></li>
			    <li><a routerLink='/add'>Create</a></li>
			</ul>
		</div>
	</nav>
	<div class="container">
		<router-outlet></router-outlet>
	</div>
  `,
})
export class AppComponent  { 
}
