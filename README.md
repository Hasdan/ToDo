# Welcome!

This is a simple implementation of a server Node.js with Express connected to a MySQL database. It allows you to view, create, edit and delete tasks!

## Installation
The program is made to build by itself all required components and packages necessary to run the database and server.
However, it reuires a password if mysql is using one. To allow it, open `setup.sh` and edit line 8:
```bash
mysql -u root --password="test_password" < database_creation_file.txt
                         ^_edit_this___^
```
* Note: It you do not use a password, remove --password entirely.

To do so, open a terminal and run the following command:
```bash
sudo ./setup.sh
```
* Warning: As always before using sudo, verify the content of setup.sh to ensure no malware or malicious action is being executed.

Default port will be 3000, but you will read the actual port on the terminal if the former is occupied by another program.

## Testing
The following commands have been tested to allow interaction with the server.
```bash
curl -i -X GET -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:3000/to-dos
curl -i -X POST -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:3000/to-dos --data '{"name":"Fake Task 0", "finished":0}'
curl -i -X PUT -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:3000/to-dos/1 --data '{"finished":true}' 
curl -i -X DELETE -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:3000/to-dos/1
```

* Warning: this program has been tested on Linux, Ubuntu 20.04.

Made by Stepan Smirnov.
