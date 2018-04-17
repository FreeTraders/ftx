![origin_github_banner](https://user-images.githubusercontent.com/673455/37314301-f8db9a90-2618-11e8-8fee-b44f38febf38.png)

![origin_npm_version](https://img.shields.io/npm/v/@originprotocol/origin.svg) ![origin_license](https://img.shields.io/npm/l/@originprotocol/origin.svg)

# Origin Platform

Origin Protocol is a library of javascript code and Ethereum smart contracts which allow anyone to create decentralized marketplaces, including for fractional usage.

Please refer to our [product brief](https://www.originprotocol.com/product-brief) and [technical whitepaper](https://www.originprotocol.com/whitepaper) for more detail.

 - [README for Javascript code](#originjs-documentation)
 - [README for Ethereum contracts](/contracts/)

## Follow our progress and get involved

This repo is under active development. We welcome your participation!

1. [Join our #engineering channel on Discord](http://www.originprotocol.com/discord).

2. Listen in on our weekly engineering call on Google Hangouts. It happens every week and everyone is welcome to listen in and participate. [Join us on Google Hangouts](https://meet.google.com/pws-cgyd-tqp) on Wednesdays at 9pm GMT ([Add to Calendar](https://calendar.google.com/event?action=TEMPLATE&tmeid=MHAyNHI3N2hzMjk5b3V2bjhoM2Q1ZWVzY2pfMjAxODA0MTFUMjAwMDAwWiBqb3NoQG9yaWdpbnByb3RvY29sLmNvbQ&tmsrc=josh%40originprotocol.com&scp=ALL)):

> | Pacific | Mountain | Central | Eastern | GMT |
> |---------|----------|---------|---------|-----|
> | Wed 1pm | Wed 2pm | Wed 3pm | Wed 4pm | Wed 9pm |

3. Catch up on our meeting notes & weekly sprint planning docs (feel free to add comments):
- [Engineering meeting notes](https://docs.google.com/document/d/1aRcAk_rEjRgd1BppzxZJK9RXfDkbuwKKH8nPQk7FfaU/)
- [Weekly sprint doc](https://docs.google.com/document/d/1qJ3sem38ED8oRI72JkeilcvIs82oDq5IT3fHKBrhZIM)

4. Read our simple [contributing and style guide](CONTRIBUTING.md).

# What we're building

The main components of this repo are:

 - [Origin.js](#originjs-documentation)
 - [Ethereum smart contracts](/contracts/)

This library is an abstraction layer for developers who want to build DApps on Origin Protocol, and is also used to build the [Origin Demo DApp](https://github.com/OriginProtocol/demo-dapp).

The library will make it easy for sellers to do things like:

 - Create listings
 - Update listings
 - Delete listings
 - Validate listings

And buyers to:

 - Browse listing
 - Create bookings
 - Update bookings
 - Cancel bookings

 # origin.js Documentation

 ## Introduction

 Welcome to the origin.js documentation! origin.js is a Javascript library for interacting with the Origin protocol.

 Using the library you can create new listings from your applications, purchase them, or update them from your own off-chain applications.

 ### Warning
 This is still an alpha version which will evolve significantly before the main net release.

 ## Using origin.js in your project

 ### Plain javascript

 A browser-compatible plain javascript file `origin.js` is available in the "Releases" tab, and will soon be hosted on originprotocol.com. It can be generated locally via `npm build` and will be placed in `dist/origin.js`.

 ## Install

 ### NPM
 ```
 npm install @originprotocol/origin --save
 ```

 ### Yarn
 ```
 yarn add @originprotocol/origin
 ```

 ### Local

 ```
 npm install
 ```

 ```
 npm start
 ```

 Finally, you will need to build the node module. For developing on `origin.js`, it is better to link the package rather than installing it. (Otherwise you would need to run `npm build` everytime you made a change to the package.)

 ```
 npm link
 ```

 Now change tabs (or directories) to the repo for your DApp (for example, the [Origin demo-dapp](https://github.com/OriginProtocol/demo-dapp)) and run:
 ```
 npm link @originprotocol/origin
 ```
 This will create a symlink, direcly linking the DApp to your local `origin.js` package.

 ## Import

 ```
 import Origin from '@originprotocol/origin'

 let { contractService, ipfsService, originService } = new Origin()
 ```

 ## IPFS

 If you are running a local IPFS daemon then set the following environment variables:

 ```
 export IPFS_DOMAIN=127.0.0.1
 export IPFS_API_PORT=5001
 export IPFS_GATEWAY_PORT=8080
 export IPFS_GATEWAY_PROTOCOL=http
 ```

 Configure your local IPFS daemon with the following settings to avoid CORS errors:

 ```
 ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["localhost:*"]'
 ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["GET", "POST", "PUT"]'
 ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
 ```

 ## Troubleshooting

 ### Python 3

 If you have Python 3 installed, you may see this error when installing dependencies:

 ```
 gyp ERR! stack Error: Python executable "/Users/aiham/.pyenv/shims/python" is v3.6.4, which is not supported by gyp.
 ```

 Resolve this by configuring npm to use Python 2 (where python2.7 is a binary accessible from your $PATH):

 ```
 npm config set python python2.7
 ```

 ## Tests

 When you begin developing, run `npm test` and keep it running while you develop.

 View test results in your browser at http://localhost:8081

 Tests are automatically rerun when source or test code is changed.

 Run a subset of tests using the `grep` query string parameter, for example: http://localhost:8081/?grep=IpfsService

 ## Documentation

 Needed
