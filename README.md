# System Designer

[![npm version](https://badge.fury.io/js/system-designer.svg)](http://badge.fury.io/js/system-designer)
[![Build Status](https://travis-ci.org/system-designer/system-designer.svg?branch=master)](https://travis-ci.org/system-designer/system-designer)
[![devDependency Status](https://david-dm.org/system-designer/system-designer/dev-status.svg)](https://david-dm.org/system-designer/system-designer#info=devDependencies)

#### What is System Designer ?

System Designer is a free and Open Source IDE to create client and server JavaScript Application Systems.

Features:

* **System Driven Development** approach to design your application,
* **plugin based architecture** and
* no server need, **full web application**.

## Installation

#### Direct download

* [Download the zip file](https://github.com/system-designer/system-designer/archive/master.zip) of this project,
* unzip it and
* open `/system-designer-master/web/index.html` with Mozilla Firefox or Google Chrome.

#### Node.js

```sh
$ npm install system-designer --save
```

Then:

* open `/node_modules/system-designer/web/index.html` with Mozilla Firefox or Google Chrome.

#### Bower

```sh
$ bower install system-designer --save
```

Then:

* open `/bower_components/system-designer/web/index.html` with Mozilla Firefox or Google Chrome.

## Build

#### Installation

Once you have cloned the repository:

```sh
# needed by grunt (maybe you have this installed already)
$ npm install -g grunt-cli
$ npm install
$ bower install
```	 	

#### Grunt tasks

Here are the different tasks you can use to automate tasks:


```sh
# clean
$ grunt clean
# build
$ grunt build
# watch
$ grunt watch
# start the app
$ grunt start
```

To run System Designer, go to [http://localhost:9001/](http://localhost:9001/) .

## Documentation

* [Web site](https://systemdesigner.readme.io/docs) [ work in progress ]


## Licence

Copyright (C) 2016 - Erwan Carriou
 
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/. 