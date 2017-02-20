#MEAN CRUD

   *M*  MongoDb  
   *E*  Express  
   *A*  Angular 2  
   *N*  Node.js

   *C*  create  
   *R*  read  
   *U*  update  
   *D*  delete

###INSTALL

1. Get files
   
   ```shell
   $git clone https://github.com/cmsrs/mean_crud.git
   $cd ./mean_crud
   ```
   
2. Installing Node Modules for server
   
   ```shell
   $npm install
   ```
   
3. Start MongoDB
   
   ```shell
   $/etc/init.d/mongodb  start
   ```
   
   and change database config in file: `./server/config/db.js` if you need
   
   
4. Start server
   
   ```shell
   $npm start
   ```
   
5. Test server
   
   create 10 examples records:
   
   ```shell
   $./tests/t.sh 10
   ```
   
6. Install angular 2 and dependents for client
   
   ```shell
   git clone https://github.com/angular/quickstart.git app
   $cd app
   $npm install 
   cd src; mv app app_org;  mv ../../app_src_app .; mv app_src_app app; cd ..
   $npm start   
   ```
   <http://localhost:3001>   
   
7. Go to page
   
   <http://localhost:3000>
      
