# HTTPS proxy on localhost
This script installs self-signed SSL certificates for use with HTTPS on your local development machine. It uses a proxy to forward requests to your application.

Inspired by [this guide](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec)

## Getting started
Clone the repo:
`git clone https://github.com/fugroup/https-localhost-proxy`

Install the packages:
`npm i` or `yarn`

Run the generate command:
`./generate.sh`

Follow the instructions. Use the same password all along, at least 4 characters long. The 'Common Name' will be the name of the certificate in Keychain Access.

Start the server with `node proxy.js`. You can customize the port by changing that file.

Enjoy SSL on localhost!
