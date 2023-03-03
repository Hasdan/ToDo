# Welcome!!

This is a simple implementation of a server Node.js with Express connected to a MySQL database. It allows you to view, create, edit and delete tasks!

## Installation
The program is made to build by itself all required components and packeges necessary to run the database and server.
To do so, open a terminal and run the following command:
```bash
sudo ./setup.sh
```

Default port will be 3000, but you will read the actual port if 3000 is occupied by another program.

## Testing
The following commands have been tested to allow interaction with the server.
```bash

curl -i -X POST -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:3000/to-dos --data '{"name":"Fake Task 0", "finished":0}'
curl -i -X PUT -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:3000/to-dos/0 --data '{"finished":true}' 
curl -i -X DELETE -H 'Accept: application/json' -H 'Content-type: application/json' http://localhost:3000/to-dos/0
```

* Warning: As always before using sudo, verify the content of setup.sh to ensure no malware or malicious action is being executed.

* Warning: this program has been tested on Linux, Ubuntu 20.04.

Made by Stepan Smirnov.
