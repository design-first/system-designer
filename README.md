# System Designer

[![npm](https://img.shields.io/npm/v/system-designer.svg)](https://www.npmjs.com/package/system-designer)
[![Build Status](https://travis-ci.org/design-first/system-designer.svg?branch=master)](https://travis-ci.org/design-first/system-designer)
[![devDependency Status](https://david-dm.org/design-first/system-designer/dev-status.svg)](https://david-dm.org/design-first/system-designer#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/system-designer.svg)](https://www.npmjs.com/package/system-designer)

![Image Alt](https://designfirst.io/img/system-designer.png)

## What is System Designer ?

No matter the frameworks you use and the code you write, the most important is the model that you define to create your system. System Designer helps you to design this model and to generate the classes and components to build your system.

## What is a system ?

With System Designer you create in fact a **system** and not an application. But what is a system ?

A system:

* is defined by a model,
* is composed by components and
* reacts to events with actions that we call behaviors.

![Image Alt](https://designfirst.io/img/system.png)


## What can I do with System Designer ?

#### Design your system with ease

If you look at the different JavaScript frameworks on the market, you will notice that they all have their own way to define a model, generally only with code.

System Designer uses [UML](http://www.uml.org), a standard, to define your model. So you probably already know how to design in System Designer even if you have never run it.

The definition of the model is stored on a JSON format called [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson). With [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) you can define types, classes, one to one / one to many relationships and multi inheritance between classes.

#### Code the behavior of your system

Once you have created your model, System Designer generates the skeletons of all your methods. You only have then to add your code to implement them.

System Designer provides you helpers to manage your components. You can easily navigate threw components to create your application.

#### Create components graphically

There is no need to code to instantiate a component. Create a component in System Designer is like creating a document in a NoSQL Database.

In fact, System Designer acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents.

#### Run your system

You can run your system directly from System Designer and then export it to HTML, JSON, JavaScript, a Node.js module or a [Graphviz](http://graphviz.org) file (* macOS, Windows 10 and web version only).

Because you have defined a model for your application, a [Dynamic Type Check](https://en.wikipedia.org/wiki/Type_system#DYNAMIC) is done on every action of your system. All warnings are send and shown in System Designer.

#### Debug your system

System Designer can load the model of any system that runs on the browser or on Node.js. You can see the schemas, models, components and methods of the running system and you can edit them.

All modifications to the model done inside System Designer will be send to the running system. There is no need to reload to see your modifications.

#### Design on the go

System Designer can be used on Windows 10, macOS, iOS, Android or any browsers. You can also install it in your project: System Designer requires no backend to work, it is a full web application.

System Designer has a GitHub module to synchronize your work between all these apps. You can begin your design on your Mac and then continue it on your iPad.

## Build

#### Installation

Clone the repository:

```sh
$ git clone https://github.com/design-first/system-designer.git
```

Once you have cloned the repository, install the dependencies:

```sh
$ npm i
```	 	

#### Build for web

Here are the different tasks you can use to build and start System Designer:

```sh
$ npm run web
```

Then you can start the server:

```sh
$ npm run start
```

Once server started, go to [http://localhost:8080/](http://localhost:8080/).

#### Build for Electron

To build for [Electron](http://electron.atom.io):

```sh
$ npm run electron
```

Copy the content of `/dist` directory into your [System Designer for Electron](https://github.com/design-first/system-designer-electron) project.

Then in your [System Designer for Electron](https://github.com/design-first/system-designer-electron) project:

```sh
$ npm run start
```

#### Build for Cordova

To build for [Cordova](http://cordova.apache.org):

```sh
$ npm run cordova
```

Copy the content of `/dist` directory into your [System Designer for Cordova](https://github.com/design-first/system-designer-cordova) project.

Then in your [System Designer for Cordova](https://github.com/design-first/system-designer-cordova) project:

```sh
# run ios simulator
$ cordova run ios

# run android simulator
$ cordova run android
```

## Development

To start System Designer in development mode:

```sh
$ npm run dev
```

Once server started, go to [http://localhost:9001/](http://localhost:9001/). All the modifications to the source code of System Designer will rebuild the solution and refresh the page.

## Documentation

* [Quick Start](https://designfirst.io/systemdesigner/documentation/docs/quick-start.html)
* [Documentation](https://designfirst.io/systemdesigner/documentation/docs/what-is-system-designer.html)

## Community

* [Code of Conduct](CODE_OF_CONDUCT.md)
* [Contributing Guidelines](CONTRIBUTING.md)

## License

Copyright © 2018 Erwan Carriou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 

**Do not use System Designer if you do not believe in Equality and Diversity.**

**System Designer is not for people of hate.**