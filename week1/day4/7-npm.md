## What is Node.js? 

Node.js is an open-source Javascript runtime environment designed to be run outside of the browser. 

Node.js has modules, which are like JavaScript libraries. Think of them like a set of functions to include in your application, like importing java.util.* in Java. Node.js has a set of built-in modules which you can use without further installation, and you can also make your own.
Popular built-in node.js modules include fs, http, path. 

## What is NPM?

NPM stands for Node Package Manager
Allows us to share, publish, and utilize code from/with other developers
NPM comes preinstalled with Node.js

It is the default package manager for node. Yarn is very similar, it was created in 2016 by Facebook. The intent was for Yarn to be a replacement of npm. At the time, yarn offered more advanced features that NPM lacked. Since, NPM added several crucial features. Now, Yard is considered more of an alterative to NPM rather than a replacement. 

On npmjs.com, all of the source code/packages are stored. If we need a package, we grab it from there.

## NPM Commands

# npm -v
Displays the version of npm installed

# npm init
Creates a package.json and initiales a Node project. Asks us for input on the package name, version, description, entry point, test commands, git repo, author, license. Hit enter to accept defaults. Name, Version, and Entry Point (if not the default index.js) are the important ones. If we were to publish, we would need to ensure the name is not already taken, and version appropriately.

Entry point is like the main method in Java. It tells where to start execution of the program. Oftentimes it is index.js; server.js is popular as well. 

'npm init -y' is the same as npm init, but accepts all of the defaults.

To install packages: 
# npm install <package-name> (ex. npm install react)
# npm i <package-name>
Installs the desired package to the project. Creates a package-lock.json file if you are installing a package for the first time, and the node-modules folder. Make sure to add a .gitignore file before pushing code to your repo (we don't want to push all the node modules too).

Note that packages have dependencies themselves. So when I install express, I am really installing 57 packages because it has dependencies, and those dependencies have dependencies. 

# npm install
# npm i
Install all packages listed in the package.json. For example, I pull code from someone else's repo and it has a package.json specifying the project specifications. Running npm i will install the packages I need for this project. 

# npm uninstall
Uninstalls the specified package and any of it's dependencies that were needed. Removes it from the package-lock.json. 

# npm update <package-name>
Updates the specified package to the highest version allowed

^ - Updates to the highest available minor version
~ - Updates to the highest availabel patch version

# npx <package-name>
Instead of installing the dependency, it will just execute and be done. NPX is the node package runnder; it is pre-built in npm. It is a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry. Example: npx create-react-app

## NPM flags

# -y (npm init -y)
Skips the npm init steps and just accepts defaults for everything

# -D (npm i -D jest)
# --save-dev (npm i --save-dev jest)
Installs the dependency as a "devDependency"
Dev Dependencies do NOT appear in the production build
In a development environment, it will be there. In a production environment, it will not be there

If you don't specify -D, defaults to -P, --save-prod (regular dependencies).

# --production
Run the project in production mode, ignoring all the devDependencies. 

# -g (npm i -g typescript)
Globally installs the package so that you can use it in any project. Mostly, we are installing per project. Refrain from global installs most of the time. 

## package.json
A file that describes the project meta data and defines what dependencies it requires
NPM will look at this file when running commands such `npm install` or `npm update <package-name>`

## package-lock.json
It "locks down" the dependency tree to ensure all of the peer dependencies are the version we expect them to be.
If a dependency of a dependency updates, we don't want that potentially our project, so we lock its version.
If I accidentally deleted my node-modules folder, I can "npm i" to reinstall all the node modules (dependencies and devDependencies, and the versions I was expecting) that I need. 
Don't really mess with this file. If you delete it and reinstall your dependencies, you may get different versions than before. Package-lock.json is a safe-guard for this. 

## node_modules
This is a huge folder containing all of the source code required to run the project
I also obtain any dependencies that dependency needs to run

## Versions

X.Y.Z

X - Major release
Y - Minor release
Z - Patch release

Major Release (1.x.x)
- For major updates, increase the major version
- Switching between major versions typically takes a lot time and effort
- Ex. Windows 10 -> Windows 11 OR Python 2 -> Python 3

Minor Release (x.1.x)
- Takes place in a major release and typically adds new features to the language or package
- Typically not a groundbreaking change, but may change some functionality or add new functionality
- Switching between minor versions doesn't take as much time, but some effort is required
- Ex. 16.8 Added hooks for function components OR adding new features to a programming language/package

Patch Release (x.x.1)
- Takes place in a minor release and typically is reserved for bug fixes/performance improvements
- Typically very small and often require no refactoring at all and typically take no effort to switch between
- Ex. There was a typo somewhere in the program, updated documentation, etc.

^ - Indicates that the package may be updated to the latest minor version (ex. ^18.0.0 allows 18.0.0 -> 18.2.0)
~ - Indicates that the package may be updated to the latest patch version (ex. ~18.0.0 allows 18.0.0 -> 18.0.17)
No symbol indicates that the package may be updated to the version (ex. 18.0.0 allows 18.0.0 -> 19.0.0)

# NVM
Node version manager. Tool for managing versions on your device. Can install different versions of node and switch between what version I'm using on projects. 