#!/usr/bin/env sh
openssl genrsa -des3 -out rootCA.key 2048
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem

echo "\nOpen Keychain access, click on Certificates on the left, then File > Import Items and import the rootCA.pem file. Right click on the imported item and select 'Always trust'.\n"
read -p "Press enter to continue"
echo ""

openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config config/server.csr.cnf
openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile config/v3.ext

echo "Run 'node proxy.js' and navigate to https://localhost:<port>. Enjoy!"
