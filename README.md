#MEAN CRUD:
tested on ubuntu: 16.04 

M - MongoDb
E - Express
A - Angular 2
N - Node.js


C - create
R - read
U - update
D - delete

#INSTALL

- get files: 

```shell
$git clone https://github.com/cmsrs/mean_crud.git
$cd ./mean_crud
```

- installing Node Modules for server

```shell
npm install
```

- start MongoDB


```shell
$/etc/init.d/mongodb  start
```
and change database config in file: ./server/config/db.js


- start server

```shell
$npm start
```

- test server

create 10 examples records:


```shell
$ ./tests/t.sh 10
```


- install angular 2 and dependents (for client)

```shell
$cd app
$npm install 
```

- go to page
http://localhost:3000 


- for developers - manage Angular 2 

```shell
$npm start 
```
http://localhost:3001 
