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



SERVER:

1. unzip file

$unzip mean_crud.zip
$git ...

$cd ./mean_crud

2. installing Node Modules

npm install

3. start MongoDB

#/etc/init.d/mongodb  start
and change database config in file: ./server/config/db.js


4. start server
$npm start

)
5. test server

create 10 examples records:
$ ./tests/t.sh 10


7. install angular2 and dependents
$cd app
$npm install 

8. go to page
http://localhost:3000 

CLIENT:

9. for developers - manage Angular2 
$npm start 
http://localhost:3001 
