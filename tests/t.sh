#!/bin/bash

if [ ! $# == 1 ]; then
	echo $"Skladnia: $0 {losc rekordow (10 lub 1000 )}"
	    exit
	fi

count=$1;

#kasujemy wszystkie rekordy
curl -H "Accept:application/json" -XPURGE "http://localhost:3000/api/user" 
#exit

#dodanie
for ((i=1;i<=$count;i++)); 
do 
		curl -H "Accept:application/json"  -H "Content-Type: application/json"  -XPOST  "http://localhost:3000/api/user" -d '{"first_name":"Jan",  "last_name":"Nowak",  "age":23,   "first_name_mother":"Anna",   "first_name_father":"Marcin"}'
done






#podglad
curl -H "Accept:application/json" "http://localhost:3000/api/user" 
