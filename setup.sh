# [WARNING]: Lauch application as sudo in order to install required dependencies.

# Install required dependencies.
apt install nodejs mysql-server
# Install dependency mysql for communication
npm install mysql2 express
# Create the database and the table if they do not exist
mysql -u root --password="test_password" < database_creation_file.txt
# Launch the server
node index.js
