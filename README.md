MEAN CRUD:
tested on ubuntu: 16.04 

M - MongoDb
E - Express
A - Angular 2
N - Node.js


C - create
R - read
U - update
D - delete



1. get files: 

$git clone https://github.com/cmsrs/mean_crud.git
$cd ./mean_crud

2. installing Node Modules for server

npm install

3. start MongoDB

#/etc/init.d/mongodb  start
and change database config in file: ./server/config/db.js


4. start server
$npm start

5. test server

create 10 examples records:
$ ./tests/t.sh 10


7. install angular 2 and dependents (for client)
$cd app
$npm install 

8. go to page
http://localhost:3000 


9. for developers - manage Angular 2 
$npm start 
http://localhost:3001 
