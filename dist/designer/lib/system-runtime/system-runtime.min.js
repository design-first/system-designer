(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtime = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module contains Runtime core system.
 *
 * @module runtime
 * @submodule runtime-system
 * @class runtime-system
 * @static 
 */

'use strict';


/* Public properties */


/*
 * Runtime core system
 * @property {RuntimeSystem} system
 */
var system = {
    "models": {
        "138a81fa1f16435": {
            "_id": "138a81fa1f16435",
            "_name": "RuntimeAdmin",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "start": {},
            "designerWindow": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": null
            }
        },
        "135c71078810af2": {
            "_id": "135c71078810af2",
            "_name": "RuntimeChannel",
            "_inherit": [
                "RuntimeComponent"
            ],
            "sync": {},
            "loadSystem": {
                "params": [{
                    "name": "system",
                    "type": "object"
                }]
            },
            "createSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "updateSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "deleteSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "updateModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "deleteModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
            },
            "updateType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
            },
            "deleteType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createComponent": {
                "params": [{
                    "name": "collection",
                    "type": "string"
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "updateComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "deleteComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }]
            },
            "createBehavior": {
                "params": [{
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "updateBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "deleteBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "_core": true,
            "send": {
                "params": [{
                    "name": "message",
                    "type": "object"
                }]
            }
        },
        "1f4141671514c2c": {
            "_id": "1f4141671514c2c",
            "_name": "RuntimeStorage",
            "get": {
                "params": [{
                    "name": "key",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "set": {
                "params": [{
                    "name": "key",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }, {
                    "name": "value",
                    "type": "any",
                    "mandatory": true,
                    "default": null
                }]
            },
            "changed": {
                "params": [{
                    "name": "changed",
                    "type": "object",
                    "mandatory": true,
                    "default": {}
                }]
            },
            "clear": {},
            "remove": {
                "params": [{
                    "name": "key",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "_core": true,
            "store": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            }
        },
        "14c7c105b31a160": {
            "_id": "14c7c105b31a160",
            "_name": "Runtime",
            "load": {
                "params": [{
                    "name": "url",
                    "type": "string"
                }, {
                    "name": "async",
                    "type": "boolean",
                    "mandatory": false,
                    "default": true
                }]
            },
            "ready": {},
            "_core": true,
            "version": {
                "type": "string",
                "readOnly": true,
                "mandatory": true,
                "default": "0.0.0"
            },
            "system": {
                "params": [{
                    "name": "name",
                    "type": "string",
                    "mandatory": false
                }],
                "result": "object"
            }
        },
        "1bd9f118d116f73": {
            "_name": "RuntimeBehavior",
            "_core": true,
            "core": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "useCoreAPI": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "component": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "action": {
                "type": "javascript",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "state": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "_id": "1bd9f118d116f73"
        },
        "12cbd1ed2a10bfd": {
            "_name": "RuntimeClassInfo",
            "_core": true,
            "metamodel": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "model": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "property": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "properties": {
                "result": "array"
            },
            "link": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "links": {
                "result": "array"
            },
            "method": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "methods": {
                "result": "array"
            },
            "collection": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "collections": {
                "result": "array"
            },
            "event": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "events": {
                "result": "array"
            },
            "_id": "12cbd1ed2a10bfd"
        },
        "123751cb591de26": {
            "_id": "123751cb591de26",
            "_name": "RuntimeComponent",
            "_core": true,
            "on": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "handler",
                    "type": "function"
                }, {
                    "name": "useCoreAPI",
                    "type": "boolean",
                    "mandatory": false,
                    "default": false
                }, {
                    "name": "isCore",
                    "type": "boolean",
                    "mandatory": false,
                    "default": false
                }]
            },
            "off": {
                "params": [{
                    "name": "state",
                    "type": "string",
                    "mandatory": false
                }, {
                    "name": "behaviorId",
                    "type": "string",
                    "mandatory": false
                }]
            },
            "require": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "destroy": {
                "params": []
            },
            "classInfo": {
                "type": "@RuntimeClassInfo",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "init": {
                "params": [{
                    "name": "conf",
                    "type": "object"
                }]
            },
            "error": {
                "params": [{
                    "name": "data",
                    "type": "errorParam"
                }]
            }
        },
        "1e83e1ce9515918": {
            "_name": "RuntimeDatabase",
            "_core": true,
            "system": {
                "params": [{
                    "name": "system",
                    "type": "object",
                    "mandatory": false
                }],
                "result": "string"
            },
            "subsystem": {
                "params": [{
                    "name": "params",
                    "type": "object"
                }],
                "result": "string"
            },
            "collections": {
                "result": "object"
            },
            "insert": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "object"
                }]
            },
            "update": {
                "params": [{
                    "name": "schema",
                    "type": "string"
                }, {
                    "name": "componentId",
                    "type": "string"
                }, {
                    "name": "attributeName",
                    "type": "string"
                }, {
                    "name": "attributeValue",
                    "type": "object"
                }]
            },
            "remove": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "string"
                }]
            },
            "_id": "1e83e1ce9515918"
        },
        "1209b1dcfd1f6a7": {
            "_name": "RuntimeLogger",
            "_core": true,
            "level": {
                "type": "log",
                "readOnly": false,
                "mandatory": false,
                "default": "warn"
            },
            "debug": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "info": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "warn": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "error": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "_id": "1209b1dcfd1f6a7"
        },
        "12d5b1a5e7108e2": {
            "_name": "RuntimeMessage",
            "_core": true,
            "event": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "from": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "data": {
                "type": "array",
                "readOnly": false,
                "mandatory": true,
                "default": []
            },
            "_id": "12d5b1a5e7108e2"
        },
        "161f812a8a13fe5": {
            "_name": "RuntimeMetamodel",
            "_core": true,
            "schema": {
                "params": [{
                    "name": "schema",
                    "type": "object"
                }],
                "result": "any"
            },
            "model": {
                "params": [{
                    "name": "model",
                    "type": "object"
                }],
                "result": "any"
            },
            "type": {
                "params": [{
                    "name": "type",
                    "type": "object"
                }],
                "result": "any"
            },
            "create": {
                "params": []
            },
            "_id": "161f812a8a13fe5"
        },
        "1d7d51cc2112de2": {
            "_name": "RuntimeState",
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "parameters": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "_id": "1d7d51cc2112de2"
        },
        "1d276159fd13df9": {
            "_name": "RuntimeSystem",
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "master": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "subsystem": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "version": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": "0.0.1"
            },
            "description": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "schemas": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "models": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "behaviors": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "types": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "components": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "ready": {},
            "sync": {},
            "main": {},
            "_id": "1d276159fd13df9"
        }
    },
    "schemas": {
        "10374180581a41f": {
            "_id": "10374180581a41f",
            "_name": "RuntimeAdmin",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "designerWindow": "property",
            "start": "method"
        },
        "104ad1f48518376": {
            "_id": "104ad1f48518376",
            "_name": "RuntimeChannel",
            "_core": true,
            "sync": "event",
            "loadSystem": "event",
            "createSchema": "event",
            "updateSchema": "event",
            "deleteSchema": "event",
            "createModel": "event",
            "updateModel": "event",
            "deleteModel": "event",
            "createType": "event",
            "updateType": "event",
            "deleteType": "event",
            "createComponent": "event",
            "updateComponent": "event",
            "deleteComponent": "event",
            "createBehavior": "event",
            "updateBehavior": "event",
            "deleteBehavior": "event",
            "_inherit": [
                "RuntimeComponent"
            ],
            "send": "event"
        },
        "12fa8181ce127a0": {
            "_id": "12fa8181ce127a0",
            "_name": "RuntimeStorage",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "store": "property",
            "get": "method",
            "set": "method",
            "remove": "method",
            "clear": "method",
            "changed": "event"
        },
        "12e211d4cd120a6": {
            "_id": "12e211d4cd120a6",
            "_name": "Runtime",
            "load": "method",
            "ready": "event",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "version": "property",
            "system": "method"
        },
        "1481a1836813787": {
            "_name": "RuntimeBehavior",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property",
            "_id": "1481a1836813787"
        },
        "1b78d1acc61e5e8": {
            "_name": "RuntimeClassInfo",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "model": "property",
            "metamodel": "property",
            "method": "method",
            "methods": "method",
            "property": "method",
            "properties": "method",
            "link": "method",
            "links": "method",
            "collections": "method",
            "collection": "method",
            "event": "method",
            "events": "method",
            "_id": "1b78d1acc61e5e8"
        },
        "111df11e2b19fde": {
            "_id": "111df11e2b19fde",
            "_name": "RuntimeComponent",
            "_inherit": [],
            "_core": true,
            "classInfo": "property",
            "on": "method",
            "off": "method",
            "require": "method",
            "destroy": "method",
            "init": "method",
            "error": "event"
        },
        "1200a119bf17b84": {
            "_name": "RuntimeDatabase",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "collections": "method",
            "insert": "event",
            "update": "event",
            "remove": "event",
            "_id": "1200a119bf17b84"
        },
        "10fff1e0851c419": {
            "_name": "RuntimeLogger",
            "_core": true,
            "level": "property",
            "debug": "method",
            "info": "method",
            "warn": "method",
            "error": "method",
            "_id": "10fff1e0851c419"
        },
        "1bdc115c4b172fd": {
            "_name": "RuntimeMessage",
            "_inherit": [],
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property",
            "_id": "1bdc115c4b172fd"
        },
        "12d38184341ae96": {
            "_name": "RuntimeMetamodel",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "schema": "method",
            "model": "method",
            "type": "method",
            "create": "method",
            "_id": "12d38184341ae96"
        },
        "1f1fb1e85f1a37e": {
            "_name": "RuntimeState",
            "_inherit": [],
            "_core": true,
            "_class": false,
            "name": "property",
            "parameters": "property",
            "_id": "1f1fb1e85f1a37e"
        },
        "173a31d0401b5ba": {
            "_name": "RuntimeSystem",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "name": "property",
            "master": "property",
            "subsystem": "property",
            "version": "property",
            "description": "property",
            "schemas": "property",
            "models": "property",
            "behaviors": "property",
            "types": "property",
            "components": "property",
            "sync": "method",
            "main": "method",
            "ready": "event",
            "_id": "173a31d0401b5ba"
        }
    },
    "types": {
        "collection": {
            "name": "collection",
            "type": "object",
            "schema": {
                "type": {
                    "type": [
                        "string"
                    ],
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "object",
                    "mandatory": true
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                },
                "label": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        },
        "css": {
            "name": "css",
            "type": "string",
            "core": true
        },
        "date": {
            "name": "date",
            "type": "object",
            "core": true
        },
        "errorParam": {
            "name": "errorParam",
            "type": "object",
            "schema": {
                "message": {
                    "type": "string",
                    "mandatory": true
                },
                "error": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "event": {
            "name": "event",
            "type": "object",
            "schema": {
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        },
        "html": {
            "name": "html",
            "type": "string",
            "core": true
        },
        "javascript": {
            "name": "javascript",
            "type": "string",
            "core": true
        },
        "json": {
            "name": "json",
            "type": "object",
            "core": true
        },
        "link": {
            "name": "link",
            "type": "object",
            "schema": {
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "@type",
                    "mandatory": true
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                },
                "label": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        },
        "log": {
            "name": "log",
            "type": "string",
            "value": [
                "debug",
                "info",
                "warn",
                "error"
            ],
            "core": true
        },
        "message": {
            "name": "message",
            "type": "object",
            "schema": {
                "event": {
                    "type": "string",
                    "mandatory": true
                },
                "from": {
                    "type": "string",
                    "mandatory": false
                },
                "data": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "method": {
            "name": "method",
            "type": "object",
            "schema": {
                "result": {
                    "type": "string",
                    "mandatory": false
                },
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        },
        "parameter": {
            "name": "parameter",
            "type": "object",
            "schema": {
                "name": {
                    "type": "string",
                    "mandatory": true
                },
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": false
                },
                "default": {
                    "type": "@type",
                    "mandatory": false
                }
            },
            "core": true
        },
        "property": {
            "name": "property",
            "type": "object",
            "schema": {
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "@type",
                    "mandatory": true
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                },
                "label": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        }
    },
    "behaviors": {
        "1c00c107e01c9b3": {
            "_id": "1c00c107e01c9b3",
            "component": "RuntimeAdmin",
            "state": "start",
            "action": "function start() {\n    var RuntimeChannel = null,\n        runtimeChannel = null;\n\n    if (!this.require('channel-admin')) {\n        RuntimeChannel = this.require('RuntimeChannel');\n        runtimeChannel = new RuntimeChannel({\n            '_id': 'channel-admin',\n            '_core': true\n        });\n        \n        runtimeChannel.on('send', function send(message) {\n            this.require('admin').designerWindow().postMessage(JSON.stringify(message), '*');\n        }, false, true);\n        \n        // schema change events\n        runtimeChannel.on('createSchema', function createSchema(id, schema) {\n            this.require('logger').level('warn');\n            this.require('metamodel').schema(schema);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, false, true);\n        \n        runtimeChannel.on('updateSchema', function updateSchema(id, schema) {\n            this.require('logger').level('warn');\n            this.require('metamodel').schema(schema);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, false, true);\n        \n        runtimeChannel.on('deleteSchema', function deleteSchema(id) {\n            this.require('logger').level('warn');\n            var search = $db.RuntimeSchema.find({ '_id': id }),\n                modelName = '',\n                modelId = '';\n\n            if (search.length) {\n                modelName = search[0]._name;\n                $db.RuntimeSchema.remove({ '_id': id });\n\n                search = $db.RuntimeModel.find({ '_name': modelName });\n                if (search.length) {\n                    modelId = search[0]._id;\n                    $db.RuntimeModel.remove({ '_id': modelId });\n                    $component.removeFromMemory(modelName);\n                }\n\n                search = $db.RuntimeGeneratedModel.find({ '_name': modelName });\n                if (search.length) {\n                    modelId = search[0]._id;\n                    $db.RuntimeGeneratedModel.remove({ '_id': modelId });\n                    $component.removeFromMemory(modelName);\n                }\n                this.require('metamodel').create();\n            }\n            this.require('logger').level('debug');\n        }, true, true);\n        \n        // model change events\n        runtimeChannel.on('createModel', function createModel(id, model) {\n            this.require('logger').level('warn');\n            this.require('metamodel').model(model);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, false, true);\n        \n        runtimeChannel.on('updateModel', function updateModel(id, model) {\n            this.require('logger').level('warn');\n            this.require('metamodel').model(model);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, false, true);\n        \n        runtimeChannel.on('deleteModel', function deleteModel(id) {\n            this.require('logger').level('warn');\n            var search = $db.RuntimeModel.find({ '_id': id }),\n                modelName = '',\n                modelId = '';\n\n            if (search.length) {\n                modelName = search[0]._name;\n                $db.RuntimeModel.remove({ '_id': id });\n                $component.removeFromMemory(modelName);\n            }\n\n            search = $db.RuntimeGeneratedModel.find({ '_name': modelName });\n            if (search.length) {\n                modelId = search[0]._id;\n                $db.RuntimeGeneratedModel.remove({ '_id': modelId });\n                $component.removeFromMemory(modelName);\n            }\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n        \n        // type change events\n        runtimeChannel.on('createType', function createType(id, type) {\n            this.require('logger').level('warn');\n            this.require('metamodel').type(type);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, false, true);\n        \n        runtimeChannel.on('updateType', function updateType(id, type) {\n            this.require('logger').level('warn');\n            this.require('metamodel').type(type);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, false, true);\n        \n        runtimeChannel.on('deleteType', function deleteType(id) {\n            this.require('logger').level('warn');\n            $db.RuntimeType.remove({ 'name': id });\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n        \n        // component change events\n        runtimeChannel.on('createComponent', function createComponent(model, component) {\n            $db[model].insert(component);\n        }, true, true);\n        \n        runtimeChannel.on('updateComponent', function updateComponent(id, collection, component) {\n            $db[collection].update({'_id': id}, component, {'upsert': true});\n        }, true, true);\n        \n        runtimeChannel.on('deleteComponent', function deleteComponent(id, collection) {\n            $db[collection].remove({'_id': id});\n        }, true, true);\n        \n        // behavior change events\n        runtimeChannel.on('createBehavior', function createBehavior(component) {\n            $db.RuntimeBehavior.insert(component);\n        }, true, true);\n        \n        runtimeChannel.on('updateBehavior', function updateBehavior(id, behavior) {\n            this.require(id).action(behavior.action);\n            if (behavior.state === 'main') {\n                this.require(behavior.component).main();    \n            }\n        }, false, true);\n        \n        runtimeChannel.on('deleteBehavior', function deleteBehavior(id) {\n            $db.RuntimeBehavior.remove({'_id': id});                  \n        }, true, true);\n     \n        // System Designer event\n        runtimeChannel.on('sync', function sync() {\n            var designerWindow = this.require('admin').designerWindow(),\n                system = null;\n            \n            this.require('admin').designerWindow(null);\n            system = JSON.parse(this.require('db').system());\n            designerWindow = this.require('admin').designerWindow(designerWindow);\n            \n            this.loadSystem(system);\n        }, false, true);\n        \n        window.addEventListener('message', function (event) {\n            var data = null;\n            try {\n                data = JSON.parse(event.data);\n                if (data && \n                    typeof data.event !== 'undefined' && \n                    typeof data.from !== 'undefined' &&  \n                    typeof data.data !== 'undefined') {\n                    this.designerWindow(event.source);\n                    $db.RuntimeMessage.insert(data);\n                }\n            } catch(e) {\n            }\n        }.bind(this), false);\n        \n        this.require('logger').info('admin is started');\n    } else {\n        this.require('logger').info('admin is already started');\n    }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1ca0f1020412d4f": {
            "_id": "1ca0f1020412d4f",
            "component": "RuntimeStorage",
            "state": "get",
            "action": "function get(key) {\n    var result = null;\n    \n    if (typeof this.store()[key]) {\n        result = this.store()[key];\n    }\n    return result;\n}",
            "useCoreAPI": false,
            "core": true
        },
        "16764100d51b5f8": {
            "_id": "16764100d51b5f8",
            "component": "RuntimeStorage",
            "state": "set",
            "action": "function set(key, value) {\n    var store = this.store(),\n        item = {};\n    \n    store[key] = value;\n    this.store(store);\n    \n    item[key] = JSON.stringify(value);\n    \n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            localStorage.setItem(key, JSON.stringify(value)); \n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
        },
        "134b616b1016f60": {
            "_id": "134b616b1016f60",
            "component": "RuntimeStorage",
            "state": "clear",
            "action": "function clear() {\n    this.store({});\n    \n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            localStorage.clear(); \n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
        },
        "14c7f1a8431b3d5": {
            "_id": "14c7f1a8431b3d5",
            "component": "RuntimeStorage",
            "state": "init",
            "action": "function init(conf) {\n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            \n            // init \n            var keys = Object.keys(localStorage),\n                store = {},\n                i = 0,\n                length = 0;\n                \n            length = keys.length;    \n            for (i = 0; i < length; i++) {\n                try {\n                    store[keys[i]] = JSON.parse(localStorage[keys[i]]);\n                } catch (e) {\n                }\n            }\n            this.store(store);\n            \n            // event\n            window.addEventListener('storage', function (e) {\n                var obj = {},\n                    store = this.store();\n                    \n                try {\n                    store[e.key] = JSON.parse(e.newValue)\n                    this.store(store);\n                   \n                    obj[e.key] = {};\n                    obj[e.key].oldValue = JSON.parse(e.oldValue);\n                    obj[e.key].newValue = JSON.parse(e.newValue);\n                    \n                    this.changed(obj);\n                } catch (e) {\n                }\n            }.bind(this));\n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
        },
        "1a4921ac7112bd4": {
            "_id": "1a4921ac7112bd4",
            "component": "RuntimeStorage",
            "state": "remove",
            "action": "function remove(key) {\n    var store = this.store();\n    \n    delete store[key];\n    this.store(store);\n    \n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            localStorage.removeItem(key); \n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
        },
        "1aaee1e6311ff39": {
            "_id": "1aaee1e6311ff39",
            "component": "runtime",
            "state": "load",
            "action": "function load(url, async) {\n    var xhr = null,\n    callbackLoad = null;\n    xhr = new XMLHttpRequest();\n    \n    callbackLoad = function callbackLoad(system) {\n        var sysId = $db.system(system),\n        sys = $component.get(sysId),\n        systems = document.querySelectorAll('link[rel=system]'),\n        nbSubsystem = $db.RuntimeSystem.find({\n            'subsystem': true\n        }); \n        if (sys) {\n            sys.main();\n        } \n        if (systems.length + 1 + nbSubsystem.length === $db.RuntimeSystem.count()) {\n            $component.get('runtime').ready();\n        }\n    };\n    \n    if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    callbackLoad(JSON.parse(xhr.response));\n                }\n            }\n        };\n        xhr.send(null);\n    } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200) {\n            callbackLoad(JSON.parse(xhr.response));\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() {\n    var subsystems = [],\n        systems = [],\n        system = null,\n        scripts = [],\n        script = null,\n        logLevel = 'warn',\n        i = 0,\n        length = 0;\n    \n    subsystems = $db.RuntimeSystem.find({\n        'subsystem': true\n    });\n    subsystems.forEach(function (subsystem) {\n        var subsystemId = subsystem._id;\n        this.require(subsystemId).main();\n    }, this); \n    \n    if (typeof document !== 'undefined') {\n        systems = document.querySelectorAll('link[rel=system]');\n        length = systems.length;\n        \n        // logger\n        scripts = document.querySelectorAll('script[log]');\n        if (scripts.length) {\n            logLevel = scripts[0].getAttribute('log');\n            this.require('logger').level(logLevel);\n        }\n        \n        // systems\n        for (i = 0; i < length; i++) {\n            system = systems[i];\n            \n            if (system.getAttribute('async') === 'false') {\n                this.require('runtime').load(system.href, false);\n            } else {\n                this.require('runtime').load(system.href, true);\n            }\n        }\n        \n        // designer\n        scripts = document.querySelectorAll('script[designer]');\n        if (scripts.length) {\n            this.require('admin').start();\n        }\n        \n        // ready event\n        if (length === 0) {\n           this.require('runtime').ready();\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "191431d29213fe4": {
            "_id": "191431d29213fe4",
            "component": "Runtime",
            "state": "system",
            "action": "function system(name) {\n    var System = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        System = this.require('RuntimeSystem');\n        system = new System(conf);\n    } else {\n        result = $db.RuntimeSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1abc71759718ebf": {
            "_id": "1abc71759718ebf",
            "component": "RuntimeClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "12cdf108d7154db": {
            "_id": "12cdf108d7154db",
            "component": "RuntimeClassInfo",
            "state": "collections",
            "action": "function collections() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.metamodel()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "1d0d51d312168d3": {
            "_id": "1d0d51d312168d3",
            "component": "RuntimeClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "130f511677141ae": {
            "_id": "130f511677141ae",
            "component": "RuntimeClassInfo",
            "state": "events",
            "action": "function events() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "1e9271925a1ac95": {
            "_id": "1e9271925a1ac95",
            "component": "RuntimeClassInfo",
            "state": "link",
            "action": "function link(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'link') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1c41e1cc201671b": {
            "_id": "1c41e1cc201671b",
            "component": "RuntimeClassInfo",
            "state": "links",
            "action": "function links() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'link') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "19db51b69a13b3b": {
            "_id": "19db51b69a13b3b",
            "component": "RuntimeClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "10cf812f7f1a11a": {
            "_id": "10cf812f7f1a11a",
            "component": "RuntimeClassInfo",
            "state": "methods",
            "action": "function methods() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1abb61345e13bec": {
            "_id": "1abb61345e13bec",
            "component": "RuntimeClassInfo",
            "state": "properties",
            "action": "function properties() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "10e651dfff1131c": {
            "_id": "10e651dfff1131c",
            "component": "RuntimeClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1155718b0a1125b": {
            "_id": "1155718b0a1125b",
            "component": "RuntimeComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1fc56132591a7e9": {
            "_id": "1fc56132591a7e9",
            "component": "RuntimeComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 7; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                this.require('logger').warn(\"invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1536b185d61eef4": {
            "_id": "1536b185d61eef4",
            "component": "RuntimeComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1c98511a0b1b110": {
            "_id": "1c98511a0b1b110",
            "component": "RuntimeDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Runtime') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1bb2910106124bc": {
            "_id": "1bb2910106124bc",
            "component": "RuntimeDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e9051962d1fa8e": {
            "_id": "1e9051962d1fa8e",
            "component": "RuntimeDatabase",
            "state": "system",
            "action": "function system(system) {\n    return $db.system(system);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1524d1737d1bda7": {
            "_id": "1524d1737d1bda7",
            "component": "RuntimeLogger",
            "state": "debug",
            "action": "function debug(message) {\n    if (this.level() === 'debug') {\n        console.log('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "14dc51f76e14747": {
            "_id": "14dc51f76e14747",
            "component": "RuntimeLogger",
            "state": "error",
            "action": "function error(message) {\n    console.error('runtime: ' + message);\n}",
            "core": true
        },
        "107421f7a61abe2": {
            "_id": "107421f7a61abe2",
            "component": "RuntimeLogger",
            "state": "info",
            "action": "function info(message) {\n    if (this.level() === 'info' || this.level() === 'debug') {\n        console.info('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "1515513bd81e34b": {
            "_id": "1515513bd81e34b",
            "component": "RuntimeLogger",
            "state": "level",
            "action": "function level(val) {\n    $log.level(val);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1b3d818ae913bdd": {
            "_id": "1b3d818ae913bdd",
            "component": "RuntimeLogger",
            "state": "warn",
            "action": "function warn(message) {\n    if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n        console.warn('runtime: ' + message);\n    } \n}",
            "core": true
        },
        "1ea2b1bce81cc52": {
            "_id": "1ea2b1bce81cc52",
            "component": "RuntimeMetamodel",
            "state": "create",
            "action": "function create() {\n        $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1203e19d961bb55": {
            "_id": "1203e19d961bb55",
            "component": "RuntimeMetamodel",
            "state": "model",
            "action": "function model(model) {\n    return $metamodel.model(model);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f54818735110d6": {
            "_id": "1f54818735110d6",
            "component": "RuntimeMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    return $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f8061f94612269": {
            "_id": "1f8061f94612269",
            "component": "RuntimeMetamodel",
            "state": "type",
            "action": "function type(type) {\n    return $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "112121e9761980c": {
            "_id": "112121e9761980c",
            "component": "RuntimeSystem",
            "state": "sync",
            "action": "function sync() {\n    var system = JSON.parse($db.system());\n    \n    this.schemas(system.schemas);\n    this.types(system.types);\n    this.behaviors(system.behaviors);\n    this.components(system.components);\n}",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "RuntimeAdmin": {
            "admin": {
                "_id": "admin",
                "_core": true,
                "designerWindow": null
            }
        },
        "RuntimeStorage": {
            "storage": {
                "_id": "storage",
                "_core": true
            }
        },
        "Runtime": {
            "runtime": {
                "_id": "runtime",
                "version": "1.6.5"
            }
        },
        "RuntimeDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "RuntimeLogger": {
            "logger": {
                "_id": "logger"
            }
        },
        "RuntimeMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        },
        "RuntimeSystem": {
            "18ed81de331252c": {
                "_id": "18ed81de331252c",
                "name": "system-admin",
                "version": "0.9.0",
                "description": "Runtime Component administration ",
                "subsystem": true,
                "master": false
            },
            "15de81d295153db": {
                "_id": "15de81d295153db",
                "name": "system-storage",
                "version": "0.1.0",
                "description": "Runtime storage system",
                "subsystem": true,
                "master": false
            },
            "133421d0c313d2d": {
                "_id": "133421d0c313d2d",
                "name": "web",
                "version": "0.2.0",
                "description": "Add behaviors for web",
                "subsystem": true,
                "master": false
            }
        }
    },
    "name": "runtime",
    "version": "1.6.5",
    "description": "Runtime",
    "_id": "e89c617b6b15d24",
    "master": false,
    "subsystem": false
};

/* exports  */


/**
 * This module contains Runtime core system.
 *
 * @module runtime
 * @submodule runtime-system
 * @class runtime-system
 * @static 
 */


/**
 * Runtime core system
 * @property {RuntimeSystem} system
 */
exports.system = system;

},{}],2:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module manages the behaviors of all components. 
 * A behavior is a mecanism that allow users to add actions that will be executed 
 * when a specific state of a component will change.
 * 
 * @module runtime
 * @submodule runtime-behavior
 * @requires runtime-db
 * @requires runtime-helper
 * @requires runtime-channel
 * @class runtime-behavior
 * @static
 */

'use strict';

var $db = require('./db.js');
var $helper = require('./helper.js');


/* Private properties */


var store = {};


/* Private methods */


/*
 * Create a function from a string.
 * The created function:
 * - will be a named function,
 * - has the context of the component and
 * - can have some core modules injected as parameters.
 * @method createFunction
 * @param {String} name default name of the function 
 * @param {String} func a stringified function
 * @param {Boolean} core if true, the behavior will be treated as a Runtime core behavior.
 * In that case, the behavior can not be exported in a system (default false)
 * @param {Boolean} useCoreAPI if true, Runtime core modules will be injected as parameters of the function (default false)
 * @return {Function} the created function
 * @private
 */
function createFunction(name, func, core, useCoreAPI) {
    var funcName = '',
        beginBody = -1,
        funcParams = '',
        params = [],
        paramsClean = [],
        funcBody = '',
        header = '',
        action = null;

    beginBody = func.indexOf('{');
    header = func.substring(0, beginBody);

    funcName = header.split('(')[0].replace('function', '').trim();
    funcParams = header.split('(')[1].replace(')', '').trim();

    params = funcParams.split(',');
    params.forEach(function (param) {
        paramsClean.push(param.trim());
    });

    funcBody = func.substring(beginBody + 1);
    funcBody = funcBody.substring(0, funcBody.lastIndexOf('}')).trim();

    funcName = funcName || name;

    if (params[0] === '') {
        params = [];
    }
    if (useCoreAPI) {
        params.push('$component');
        params.push('$db');
        params.push('$metamodel');
        params.push('$workflow');
        params.push('$behavior');
        params.push('$state');
        params.push('$log');
    }

    if (params[0] !== '') {
        /* jshint -W054 */
        action = new Function("body", "return function " + funcName + " (" + params.join(',') + ") { return new Function('" + params.join("','") + "', body).apply(this, arguments) };")(funcBody);
        /* jshint +W054 */
    } else {
        /* jshint -W054 */
        action = new Function("body", "return function " + funcName + " () { return new Function(body).apply(this, arguments) };")(funcBody);
        /* jshint +W054 */
    }

    return action;
}


/* Public methods */


/*
 * Add a behavior that will be stored in Runtime database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, Runtime core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in Runtime database
 */
function add(id, state, action, useCoreAPI, core) {
    var behaviorId = $helper.generateId(),
        strAction = action.toString();

    if (typeof core === 'undefined') {
        core = false;
    }
    if (typeof useCoreAPI === 'undefined') {
        useCoreAPI = false;
    }

    action = createFunction(state, strAction, core, useCoreAPI);

    store[behaviorId] = action;

    $db.RuntimeBehavior.insert({
        "_id": behaviorId,
        "component": id,
        "state": state,
        "action": strAction,
        "useCoreAPI": useCoreAPI,
        "core": core
    });

    return behaviorId;
}


/*
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
function remove(params) {
    var result = [];

    params = params || {};
    params.behaviorId = params.behaviorId || '';
    params.componentId = params.componentId || '';
    params.state = params.state || '';

    if (params.componentId) {
        if (params.behaviorId) {
            $db.RuntimeBehavior.remove({
                "_id": params.behaviorId,
                "component": params.componentId,
                "state": params.state
            });
            delete store[params.behaviorId];
        } else {
            if (params.state) {
                result = $db.RuntimeBehavior.remove({
                    "component": params.componentId,
                    "state": params.state
                });
            } else {
                result = $db.RuntimeBehavior.remove({
                    "component": params.componentId
                });
            }
            result.forEach(function (id) {
                delete store[id];
            });
        }
    }
}


/*
 * Remove a behavior with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
function removeFromMemory(id) {
    delete store[id];
}


/*
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
function getActions(id, state) {
    var result = [],
        dbResult = [],
        action = null;

    dbResult = $db.RuntimeBehavior.find({
        "component": id,
        "state": state
    });

    dbResult.forEach(function (behavior) {
        action = store[behavior._id];
        if (typeof action === 'undefined') {
            action = createFunction(behavior.state, behavior.action, behavior.core, behavior.useCoreAPI);
            store[behavior._id] = action;
        }
        result.push({
            "useCoreAPI": behavior.useCoreAPI,
            "action": action
        });
    });

    return result;
}


/*
 * Remove all the behaviors stored in memory.
 * @method clear
 */
function clear() {
    store = {};
}


/*
 * Get a behavior by its id.
 * @method get
 * @param {String} id id of the behavior
 * @return {Behavior} the behavior
 */
function get(id) {
    return store[id];
}


/* exports */


/**
 * This module manages the behaviors of all components. A behavior is a mecanism that allow users to add action that will be executed 
 * when a specific state of a component will change.
 * 
 * @module runtime
 * @submodule runtime-behavior
 * @requires runtime-db
 * @requires runtime-helper
 * @requires runtime-channel
 * @class runtime-behavior
 * @static
 */


/**
 * Add a behavior that will be stored in Runtime database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, Runtime core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in Runtime database
 */
exports.add = add;


/**
 * Get a behavior by its id.
 * @method get
 * @param {String} id id of the behavior
 * @return {Behavior} the behavior
 */
exports.get = get;


/**
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
exports.remove = remove;


/**
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
exports.getActions = getActions;


/**
 * Remove all the behaviors stored in memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Remove a behavior with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
exports.removeFromMemory = removeFromMemory;
},{"./db.js":4,"./helper.js":5}],3:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module manages the components. 
 * It is the factory of all the components that are created by Runtime.
 * 
 * @module runtime
 * @submodule runtime-component
 * @requires runtime-workflow
 * @requires runtime-db
 * @requires runtime-metamodel
 * @requires runtime-behavior
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-component
 * @static 
 */

'use strict';

var $workflow = require('./workflow.js');
var $db = require('./db.js');
var $metamodel = require('./metamodel.js');
var $behavior = require('./behavior.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $worklow = require('./workflow.js');
var $state = require('./state.js');


/* Private properties */


var PROPERTY_TYPE = 'property',
    LINK_TYPE = 'link',
    COLLECTION_TYPE = 'collection',
    METHOD_TYPE = 'method',
    EVENT_TYPE = 'event',
    NAME = '_name',
    store = {};


/* Private methods */


/*
 * Sub class to override push and pop method of Array Class.
 * @class RuntimeArray
 * @param {Object} conf
 * {String} classId name of the class
 * {String} type type of the array
 * {Array} arr array
 * @private
 */
function RuntimeArray(conf) {
    var arr = [],
        arrDb = [],
        type = '',
        id = '',
        propertyName = '',
        isReadOnly = false;

    conf = conf || {};
    type = conf.type || '';
    id = conf.id || '';
    propertyName = conf.propertyName || '';
    arrDb = conf.arr || [];

    if (typeof conf.readOnly !== 'undefined') {
        isReadOnly = conf.readOnly;
    }

    // init
    arrDb.forEach(function (val) {
        if (type.indexOf('@') !== -1) {
            arr.push($helper.getRuntime().require(val));
        } else {
            arr.push(val);
        }
    });

    /* Override push method.
     * @push
     * @param {RuntimeComponent|Object} value
     */
    arr.push = function push(val) {
        var isClass = false;

        if (!isReadOnly) {

            isClass = type.indexOf('@') !== -1;

            if (isClass) {
                if (val && $metamodel.inheritFrom(val.constructor.name, type.replace('@', ''))) {
                    arrDb.push(val.id());

                    $workflow.state({
                        "component": id,
                        "state": propertyName,
                        "data": [arrDb.length, val.id(), 'add']
                    });
                } else {
                    $log.invalidPropertyName(id, propertyName, val.id(), type);
                }
            } else {
                if (val && $metamodel.isValidType(val, type)) {
                    arrDb.push(val);

                    $workflow.state({
                        "component": id,
                        "state": propertyName,
                        "data": [arrDb.length, val, 'add']
                    });
                } else {
                    $log.invalidPropertyName(id, propertyName, val, type);
                }
            }
        } else {
            $log.readOnlyProperty(id, propertyName);
        }
        return arrDb.length;
    };

    /* Override pop method.
     * @pop
     * @return {RuntimeComponent|Object} value
     */
    arr.pop = function pop() {
        var result,
            val = null,
            isClass = false;

        if (!isReadOnly) {
            if (arrDb.length !== 0) {
                val = arrDb.pop();

                $workflow.state({
                    "component": id,
                    "state": propertyName,
                    "data": [arrDb.length, val, 'remove']
                });

                isClass = type.indexOf('@') !== -1;

                if (isClass) {
                    result = store[val];
                } else {
                    result = val;
                }
            }
        } else {
            $log.readOnlyProperty(id, propertyName);
        }
        return result;
    };

    /* Override sort method.
     * @sort
     * @param {Function} funct the sort function
     * @return {RuntimeArray} the current RuntimeArray
     */
    arr.sort = function sort(funct) {
        arrDb.sort(funct);
        return arr;
    };

    /* Override reverse method.
     * @reverse
     * @return {RuntimeArray} the reversed RuntimeArray
     */
    arr.reverse = function reverse() {
        arrDb.reverse();
        return arr;
    };

    return arr;
}

/* jshint -W058 */
RuntimeArray.prototype = new Array;
/* jshint +W058 */


/*
 * Get all the names of method parameters.
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} all the names of method parameters of the class
 * @private
 */
function getParamNames(id, methodName) {
    var params = [],
        result = [],
        length = 0,
        i = 0;

    params = $metamodel.getModel(id)[methodName].params;
    if (params) {
        length = params.length;
        for (i = 0; i < length; i++) {
            result.push(params[i].name);
        }
    }
    return result;
}


/*
 * Get all the property of a class.
 * @method getProperties
 * @param {String} id id of the class
 * @return {Array} all the properties of the class
 * @private
 */
function getProperties(id) {
    var model = null,
        schema = null,
        propNames = [],
        length = 0,
        i = 0,
        result = [];

    model = $metamodel.getModel(id);
    schema = $metamodel.getSchema(model[NAME]);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === LINK_TYPE || schema[propNames[i]] === PROPERTY_TYPE || schema[propNames[i]] === COLLECTION_TYPE) {
            result.push({
                "name": propNames[i],
                "type": model[propNames[i]].type,
                "readOnly": model[propNames[i]].readOnly
            });
        }
    }

    return result;
}


/*
 * Get all the method of a class.
 * @method getMethods
 * @param {String} id id of the class
 * @return {Array} all the methods of the class
 * @private
 */
function getMethods(id) {
    var model = null,
        schema = null,
        propNames = [],
        length = 0,
        i = 0,
        result = [];

    model = $metamodel.getModel(id);
    schema = $metamodel.getSchema(model[NAME]);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === METHOD_TYPE) {
            result.push(propNames[i]);
        }
    }

    return result;
}


/*
 * Get the schema of a structure.
 * @method getStructureProperties
 * @param {String} name of the property
 * @param {String} name of the model
 * @return {Array} list of property schema of the structure type
 * @private
 */
function getStructureProperties(propertyName, model) {
    var modelDef = null,
        type = null,
        structure = null,
        result = [],
        propNames = [];

    modelDef = $metamodel.getModel(model);
    type = modelDef[propertyName].type;
    structure = $metamodel.getType(type);

    if (structure.schema) {
        propNames = Object.keys(structure.schema);
        propNames.forEach(function (name) {
            structure.schema[name].name = name;
            result.push(structure.schema[name]);
        });
    }

    return result;
}


/*
 * Get all the event of a class.
 * @method getEvents
 * @param {String} id id of the class
 * @return {Array} all the events of the class
 * @private
 */
function getEvents(id) {
    var model = null,
        schema = null,
        propNames = [],
        length = 0,
        i = 0,
        result = [];

    model = $metamodel.getModel(id);
    schema = $metamodel.getSchema(model[NAME]);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === EVENT_TYPE) {
            result.push(propNames[i]);
        }
    }

    return result;
}

/*
 * Get the value of a structure.
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path 
 * @return {Object} the value
 * @private
 */
function getStructureValue(model, id, path) {
    var result = null,
        doc = $db.store[model][id],
        subPath = path.split('.'),
        length = subPath.length,
        i = 0;

    result = doc;

    for (i = 0; i < length; i++) {
        result = result[subPath[i]];
    }
    return result;
}


/*
 * Set the value of a structure.
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path 
 * @param {String} value the value to set 
 * @private
 */
function setStructureValue(model, id, path, value) {
    var result = null,
        doc = $db.store[model][id],
        subPath = path.split('.'),
        length = subPath.length,
        i = 0;

    result = doc;

    for (i = 0; i < length - 1; i++) {
        result = result[subPath[i]];
    }
    result[subPath[i]] = value;
}


/*
 * Create a new class from a class definition.
 * @method createClasss
 * @param {String} classId name of the class
 * @return {Function} the class
 * @private
 */
function createClass(classId) {
    var body = function (config) {
        config = config || {};
        var body = {};

        if (config.constructor.name !== 'Object') {
            $log.invalidConctructorParameters(config, classId);
            config = {};
        }

        if (!$metamodel.isValidObject(config, $metamodel.getModel(classId), true, true)) {
            $log.invalidParameters(classId);
        }

        $metamodel.prepareObject(config, $metamodel.getModel(classId));

        if (typeof config._id === 'undefined') {
            config._id = $helper.generateId();
        }

        store[config._id] = this;

        // id
        body = function () {
            return config._id;
        };
        /* jshint -W054 */
        this.id = new Function("body", "return function id () { return body.call(this) };")(body);
        /* jshint +W054 */

        // classInfo
        if ($metamodel.inheritFrom(classId, 'RuntimeComponent')) {
            config.classInfo = classId + 'Info';
        }

        // create link to db
        $db.store[classId][config._id] = config;

        if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
            $helper.getRuntime().require('db').insert(classId, config);
        }

        Object.freeze(this);

        if (this.init) {
            this.init(config);
        }
    };
    /* jshint -W054 */
    return new Function("body", "return function " + classId + " (config) { body.call(this,config) };")(body);
    /* jshint +W054 */
}


/*
 * Add an id method to a class that will return its id.
 * @method addId
 * @param {Function} Class a class
 * @param {String} classId name of the class
 * @private
 */
function addId(Class, classId) {
    var body = function () {
        return classId;
    };
    /* jshint -W054 */
    Class.id = new Function("body", "return function id (prop, val) { return body.call(this, prop, val) };")(body);
    /* jshint +W054 */
}


/*
 * Add properties to a component. All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 * @example
 * laure.age(); // get the age of a person
 * laure.age(22); // set the age of a person
 * @method addProperties
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addProperties(model, Class, classId) {
    var properties = getProperties(model);

    properties.forEach(function property(prop) {
        var body = {},
            propertyName = '',
            propertyType = '',
            propertyReadOnly = '';

        propertyName = prop.name;
        propertyType = prop.type;
        propertyReadOnly = prop.readOnly;

        if (Array.isArray(propertyType)) { // in case of array, return a sub array
            body = function body(position, value) {
                var search = [],
                    component = null,
                    runtimeArr = null,
                    val = null,
                    realVal = null;

                if (typeof value === 'undefined') {
                    if (typeof position === 'undefined') {

                        runtimeArr = new RuntimeArray({
                            "id": this.id(),
                            "propertyName": propertyName,
                            "readOnly": propertyReadOnly,
                            "classId": classId,
                            "type": propertyType[0],
                            "arr": $db.store[classId][this.id()][propertyName]
                        });

                        return runtimeArr;
                    } else {
                        val = $db.store[classId][this.id()][propertyName][position];
                        if (val) {
                            if (propertyType[0].indexOf('@') !== -1) {
                                realVal = $helper.getRuntime().require(val);
                            } else {
                                realVal = val;
                            }
                            return realVal;
                        }
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if (
                            $metamodel.isValidType(value, propertyType[0]) ||
                            ($metamodel.inheritFrom(value.constructor.name, propertyType[0].replace('@', '')) && (propertyType[0].indexOf('@') !== -1))
                        ) {
                            search = $db[classId].find({
                                "_id": this.id()
                            });
                            if (search.length) {

                                if (propertyType[0].indexOf('@') !== -1) {
                                    realVal = value.id();
                                } else {
                                    realVal = value;
                                }

                                component = search[0];
                                component[propertyName][position] = realVal;

                                if ($helper.isRuntime()) {
                                    $helper.getRuntime().require('db').update(classId, this.id(), propertyName, realVal);
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": [position, realVal, 'add']
                                });
                            } else {
                                $log.invalidPropertyName(this.id(), propertyName, value, propertyType);
                            }
                        }
                    }
                }
            };
            /* jshint -W054 */
            Class.prototype[propertyName] = new Function("body", "return function " + propertyName + " (position,value) { return body.call(this, position, value) };")(body);
            /* jshint +W054 */
        } else {
            body = function body(value) {
                var search = [],
                    component = null,
                    propertyValue = null;

                if (typeof value === 'undefined') {
                    component = $db.store[classId][this.id()];
                    if (component) {
                        switch (true) {
                            case propertyType.indexOf('@') !== -1:
                                propertyValue = get(component[propertyName]);
                                break;
                            case propertyType === 'date':
                                propertyValue = new Date(component[propertyName]);
                                break;
                            case $metamodel.isStructure(propertyName, classId):
                                propertyValue = addStructure('', propertyName, model, this.id());
                                break;
                            default:
                                propertyValue = component[propertyName];
                                break;
                        }
                        return propertyValue;
                    } else {
                        $log.destroyedComponentCall(propertyName, this.id());
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if ($metamodel.isValidType(value, propertyType)) {
                            search = $db[classId].find({ "_id": this.id() });
                            if (search.length) {
                                component = search[0];

                                switch (true) {
                                    case propertyType.indexOf('@') !== -1:
                                        component[propertyName] = value.id();
                                        break;
                                    case propertyType === 'date':
                                        component[propertyName] = value.toISOString();
                                        break;
                                    default:
                                        component[propertyName] = value;
                                        break;
                                }

                                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                                    $helper.getRuntime().require('db').update(classId, this.id(), propertyName, value);
                                }

                                // case of RuntimeBehavior
                                if (classId === 'RuntimeBehavior') {
                                    $behavior.removeFromMemory(this.id());
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": [value]
                                });
                            }
                        } else {
                            $log.invalidPropertyName(this.id(), propertyName, value, propertyType);
                        }
                    }
                }
            };
            /* jshint -W054 */
            Class.prototype[propertyName] = new Function("body", "return function " + propertyName + " (value) { return body.call(this,value) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add structure properties to a component. All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 * @method addStructure
 * @param {String} path parent path
 * @param {String} name property name
 * @param {String} model model name
 * @param {String} id id of the component
 * @return {Object} object that cointains methods to access the structure 
 * @private
 */
function addStructure(path, name, model, id) {
    var properties = getStructureProperties(name, model),
        sructure = {};

    properties.forEach(function property(prop) {
        var body = {},
            propertyName = '',
            propertyType = '',
            propertyReadOnly = '';

        propertyName = prop.name;
        propertyType = prop.type;
        propertyReadOnly = prop.readOnly;

        body = function body(value) {
            var search = [],
                component = null,
                propertyValue = null,
                parentPath = '',
                fullPath = '';

            if (path) {
                parentPath = parentPath + '.' + name;
            } else {
                parentPath = name;
            }
            fullPath = parentPath + '.' + propertyName;

            if (typeof value === 'undefined') {
                component = $db.store[model][id];
                if (component) {
                    switch (true) {
                        case propertyType.indexOf('@') !== -1:
                            propertyValue = get(getStructureValue(model, id, fullPath));
                            break;
                        case propertyType === 'date':
                            propertyValue = new Date(getStructureValue(model, id, fullPath));
                            break;
                        case $metamodel.isStructure(propertyName, model):
                            propertyValue = addStructure(parentPath, propertyName, model, id);
                            break;
                        default:
                            propertyValue = getStructureValue(model, id, fullPath);
                            break;
                    }
                    return propertyValue;
                } else {
                    $log.destroyedComponentCall(fullPath, id);
                }
            } else {
                if (propertyReadOnly) {
                    $log.readOnlyProperty(id, fullPath);
                } else {
                    if ($metamodel.isValidType(value, propertyType)) {
                        search = $db[model].find({ "_id": id });
                        if (search.length) {
                            component = search[0];

                            switch (true) {
                                case propertyType.indexOf('@') !== -1:
                                    setStructureValue(model, id, fullPath, value.id());
                                    break;
                                case propertyType === 'date':
                                    setStructureValue(model, id, fullPath, value.toISOString());
                                    break;
                                default:
                                    setStructureValue(model, id, fullPath, value);
                                    break;
                            }

                            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                                $helper.getRuntime().require('db').update(model, id, fullPath, value);
                            }

                            // case of RuntimeBehavior
                            if (model === 'RuntimeBehavior') {
                                $behavior.removeFromMemory(id);
                            }

                            $workflow.state({
                                "component": id,
                                "state": fullPath,
                                "data": [value]
                            });
                        }
                    } else {
                        $log.invalidPropertyName(id, fullPath, value, propertyType);
                    }
                }
            }
        };

        /* jshint -W054 */
        sructure[propertyName] = new Function("body", "return function " + propertyName + " (value) { return body.call(this,value) };")(body);
        /* jshint +W054 */
    });

    return sructure;
}

/*
 * Add methods to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts / outputs are compliant with the model.
 * @method addMethods
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addMethods(model, Class, classId) {
    var methods = getMethods(model);

    methods.forEach(function method(methodName) {
        var paramsName = getParamNames(classId, methodName),
            params = paramsName.join(','),
            body = function () {
                var result = null;

                result = $workflow.state({
                    "component": this.id(),
                    "state": methodName,
                    "data": arguments
                });

                return result;
            };
        if (params) {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " (" + params + ") { return body.call(this," + params + ") };")(body);
            /* jshint +W054 */
        } else {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " () { return body.call(this) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add events to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts are compliant with the model.
 * @method addEvents
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addEvents(model, Class, classId) {
    var events = getEvents(model);
    events.forEach(function event(methodName) {
        var paramsName = getParamNames(classId, methodName),
            params = paramsName.join(','),
            body = function () {
                var systems = [],
                    systemId = -1,
                    data = [],
                    i = 0,
                    length = -1,
                    message = {};

                if (classId === 'RuntimeChannel') {
                    systems = $db.RuntimeSystem.find({
                        'master': true
                    });
                    if (systems.length) {
                        systemId = systems[0]._id;

                        message.from = systemId;
                        length = arguments.length;
                        for (i = 0; i < length; i++) {
                            data.push(arguments[i]);
                        }
                        message.data = data;
                        message.event = methodName;

                        $db.RuntimeMessage.insert(message);

                        $workflow.state({
                            "component": this.id(),
                            "state": "send",
                            "data": [{
                                "event": message.event,
                                "from": message.from,
                                "data": message.data
                            }]
                        });
                    }
                } else {
                    $workflow.state({
                        "component": this.id(),
                        "state": methodName,
                        "data": arguments
                    });
                }
            };
        if (params) {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " (" + params + ") { return body.call(this," + params + ") };")(body);
            /* jshint +W054 */
        } else {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " () { return body.call(this) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add a on method to a component to add behaviors to the component.
 * @method addOn
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOn(Class, classId) {
    var body = function (state, handler, useCoreAPI, isCore) {
        var behaviorId = '',
            currentState = '';

        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                    !$metamodel.isEvent(state, classId) &&
                    !$metamodel.isProperty(state, classId) &&
                    !$metamodel.isLink(state, classId) &&
                    !$metamodel.isCollection(state, classId) &&
                    $db.RuntimeBehavior.find({
                        "component": this.id(),
                        "state": state
                    }).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    if ($worklow.validParamNumbers(classId, state, handler)) {
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI, isCore);

                        currentState = $state.get(this.id());
                        if (currentState && state === currentState.name) {
                            $workflow.action(behaviorId, currentState.parameters.data);
                        }

                    } else {
                        $log.invalidParamNumberMethodOn(this.id(), state);
                    }
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return behaviorId;
    };
    /* jshint -W054 */
    Class.prototype.on = new Function("body", "return function on (state,handler,useCoreAPI,isCore) { return body.call(this,state,handler,useCoreAPI,isCore) };")(body);
    /* jshint +W054 */
}


/*
 * Add a on method to a class component to add behaviors to the class.
 * @method addOnClass
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOnClass(Class, classId) {
    var body = function (state, handler, useCoreAPI, isCore) {
        var behaviorId = '',
            currentState = '';

        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                    !$metamodel.isEvent(state, classId) &&
                    !$metamodel.isProperty(state, classId) &&
                    !$metamodel.isLink(state, classId) &&
                    !$metamodel.isCollection(state, classId) &&
                    $db.RuntimeBehavior.find({
                        "component": this.id(),
                        "state": state
                    }).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    if ($worklow.validParamNumbers(classId, state, handler)) {
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI, isCore);

                        currentState = $state.get(this.id());
                        if (currentState && state === currentState.name) {
                            $workflow.action(behaviorId, currentState.parameters.data);
                        }

                    } else {
                        $log.invalidParamNumberMethodOn(this.id(), state);
                    }
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return behaviorId;
    };
    /* jshint -W054 */
    Class.on = new Function("body", "return function on (state,handler,useCoreAPI,isCore) { return body.call(this, state, handler, useCoreAPI,isCore) };")(body);
    /* jshint -W054 */
}


/*
 * Add a off method to a class component to remove behaviors from the class.
 * @method addOffClass
 * @param {Object} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOffClass(Class, classId) {
    var body = function (state, behaviorId) {
        if ($workflow.checkParams({
            "component": this,
            "methodName": "off",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                $behavior.remove({
                    "behaviorId": behaviorId,
                    "componentId": classId,
                    "state": state
                });
            } else {
                $log.InvalidStateOff(classId, state);
            }
        }
    };
    /* jshint -W054 */
    Class.off = new Function("body", "return function off (state, behaviorId) { return body.call(this, state, behaviorId) };")(body);
    /* jshint +W054 */
}


/*
 * Add a destroy method to a class component to detroy the class and all the components of the same class.
 * @method addDestroyClass
 * @param {Object} Class Class
 * @private
 */
function addDestroyClass(Class) {
    var body = function () {
        var id = this.id(),
            result = [],
            i = 0,
            length = 0;

        // if not virtual component
        if ($db[id]) {
            result = $db[id].remove();
        }

        delete store[id];

        // remove behaviors
        $behavior.remove({
            'componentId': id
        });

        length = result.length;
        for (i = 0; i < length; i++) {
            // remove behaviors
            $behavior.remove({
                'componentId': result[i]
            });
        }

        $workflow.state({
            "component": id,
            "state": "destroy"
        });
    };
    /* jshint -W054 */
    Class.destroy = new Function("body", "return function destroy () { return body.call(this) };")(body);
    /* jshint +W054 */
}


/*
 * Add the addClassInfo method on a class.
 * @method addClassInfoClass
 * @param {Object} Class Class
 * @private
 */
function addClassInfoClass(Class) {
    var body = function () {
        return get(this.id() + 'Info');
    };
    /* jshint -W054 */
    Class.classInfo = new Function("body", "return function classInfo () { return body.call(this) };")(body);
    /* jshint +W054 */
}


/*
 * Create a component from its configuration.
 * @method factory
 * @param {JSON} config configuration of the component
 * @return {Component} the created component
 * @private
 */
function factory(config) {
    config = config || {};

    var Class = {},
        classId = '';

    if (typeof config.model === 'undefined') {
        classId = $helper.generateId();
    } else {
        classId = config.model;
    }

    Class = createClass(classId);

    store[classId] = Class;

    addId(Class, classId);

    addProperties(config.model, Class, classId);
    addMethods(config.model, Class, classId);
    addEvents(config.model, Class, classId);

    // add default properties/methods only if the component
    // inherit from RuntimeComponent
    if ($metamodel.inheritFrom(classId, 'RuntimeComponent')) {
        addOn(Class, classId);
        addOnClass(Class, classId);
        addOffClass(Class, classId);
        addDestroyClass(Class);
        addClassInfoClass(Class);
    }

    Object.freeze(Class);

    return Class;
}


/* Public methods */


/*
 * Get a component by its id.
 * @method get
 * @param {String} id of the component
 * @return {Component} component
 */
function get(id) {
    return store[id];
}


/*
 * Create a component from its configuration.
 * @method create
 * @param {Object} config <br>
 * {String} model model name <br>
 * @return {Component}
 */
function create(config) {
    return factory(config);
}


/*
 * Destroy a component from its id.
 * @method destroy
 * @param {String} id id of the component to destroy
 */
function destroy(id) {
    var component = store[id],
        classId = '';

    if (component) {
        delete store[id];
        classId = component.constructor.name;
        $db[classId].remove({
            "_id": id
        });

        // remove behaviors
        $behavior.remove({
            'componentId': id
        });

        // case of Behavior
        if (classId === 'RuntimeBehavior') {
            $behavior.removeFromMemory(id);
        }
    }
}


/*
 * Remove a component with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
function removeFromMemory(id) {
    delete store[id];
}


/*
 * Remove all the components store in the memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the components. 
 * It is the factory of all the components that are created by Runtime.
 * 
 * @module runtime
 * @submodule runtime-component
 * @requires runtime-workflow
 * @requires runtime-db
 * @requires runtime-metamodel
 * @requires runtime-behavior
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-component
 * @static 
 */


/**
 * Create a component from its configuration.
 * @method create
 * @param {Object} config <br>
 * {String} model model name <br>
 * @return {Component} component
 */
exports.create = create;


/**
 * Get a component by its id.
 * @method get
 * @param {String} id id of the component
 * @return {Component} component
 */
exports.get = get;


/**
 * Remove a component with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
exports.removeFromMemory = removeFromMemory;


/**
 * Remove all the components store in memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Destroy a component from its id.
 * @method destroy
 * @param {String} id id of the component to destroy
 * @return {Boolean} if the component has been destroyed
 */
exports.destroy = destroy;
},{"./behavior.js":2,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9,"./workflow.js":10}],4:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module manages Runtime database. <br>
 * Runtime database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * Runtime Database is closely linked to Runtime metamodel and Runtime components because: <br>
 * - all operations done by Runtime database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *  
 * @module runtime
 * @submodule runtime-db
 * @requires runtime-component
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-db
 * @static
 */

'use strict';

var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $behavior = require('./behavior.js');
var $state = require('./state.js');
var $workflow = require('./workflow.js');


/* Private properties */


var store = {},
    collections = [],
    internalDB = [
        'Runtime',
        'RuntimeSchema',
        'RuntimeModel',
        'RuntimeGeneratedModel',
        'RuntimeBehavior',
        'RuntimeState',
        'RuntimeType',
        'RuntimeMetamodel',
        'RuntimeDatabase',
        'RuntimeSystem',
        'RuntimeClassInfo',
        'RuntimeMessage',
        'RuntimeChannel',
        'RuntimeLogger'
    ],
    coreDb = [
        'RuntimeSchema',
        'RuntimeLogger',
        'RuntimeModel',
        'RuntimeGeneratedModel',
        'RuntimeState',
        'RuntimeType'
    ];


/* Private methods */


/*
 * Dump the database.
 * @method dump
 * @return {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 * @private
 */
function dump() {
    var dbDump = {},
        collectionName = '',
        behaviorId = '',
        typeId = '',
        type = null,
        behavior = null,
        schema = null,
        model = null,
        collection = null,
        schemaId = '',
        modelId = '',
        length = 0,
        i = 0,
        id = '';

    // schemas
    dbDump.schemas = {};
    if (exports.RuntimeSchema.count()) {
        for (schemaId in store.RuntimeSchema) {
            schema = JSON.parse(JSON.stringify(store.RuntimeSchema[schemaId]));
            if (!schema._core) {
                dbDump.schemas[schemaId] = schema;
            }
        }
    }

    // models
    dbDump.models = {};
    if (exports.RuntimeModel.count()) {
        for (modelId in store.RuntimeModel) {
            model = JSON.parse(JSON.stringify(store.RuntimeModel[modelId]));
            if (!model._core) {
                dbDump.models[modelId] = model;
            }
        }
    }

    // types
    dbDump.types = {};
    if (exports.RuntimeType.count()) {
        for (typeId in store.RuntimeType) {
            type = JSON.parse(JSON.stringify(store.RuntimeType[typeId]));
            delete type._id;
            if (!type.core) {
                dbDump.types[type.name] = type;
            }
        }
    }

    // behaviors
    dbDump.behaviors = {};
    for (behaviorId in store.RuntimeBehavior) {
        behavior = JSON.parse(JSON.stringify(store.RuntimeBehavior[behaviorId]));
        delete behavior.classInfo;

        if (!behavior.core) {
            dbDump.behaviors[behaviorId] = behavior;
        }
    }

    // components
    dbDump.components = {};
    length = collections.length;
    for (i = 0; i < length; i++) {
        collectionName = collections[i];
        if (exports[collectionName].count()) {
            collection = JSON.parse(JSON.stringify(store[collectionName]));

            for (id in collection) {
                delete collection[id].classInfo;

                if (collection[id]._core) {
                    delete collection[id];
                }
            }

            if (Object.keys(collection).length) {
                dbDump.components[collectionName] = collection;
            }
        }
    }

    return dbDump;
}


/*
 * Test if an object contains another one.
 * @method contains
 * @param {Object} source source object 
 * @param {Object} target target object 
 * @return {Boolean} true if the source object contains the target object
 * @private
 */
function contains(source, target) {
    var result = true,
        property = '';

    for (property in source) {
        if (typeof target[property] !== 'undefined') {
            if (source[property] instanceof RegExp) {
                if (target[property].match(source[property]) === null) {
                    result = false;
                    break;
                }
            } else {
                if (target[property] !== source[property]) {
                    result = false;
                    break;
                }
            }
        } else {
            result = false;
            break;
        }
    }
    return result;
}


/** 
 * A collection of documents managed by Runtime. <br>
 * Internal collections manage core objects of Runtime (schema, type, ...). <br>
 * Public collections manage components of the same class. <br>
 * 
 * @class RuntimeDatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 */
var RuntimeDatabaseCollection = function(name) {
    if ($metamodel.getSchema(name) || internalDB.indexOf(name) !== -1) {
        store[name] = {};
        this.name = name;
        if (internalDB.indexOf(name) === -1) {
            collections.push(name);
        }
    } else {
        $log.invalidCollectionName(name);
    }
};


/**
 * Find a document into the collection.
 * @method find
 * @param {Object|Array} query
 * @return {Array} Array of documents that map the query
 * 
 * @example 
 * $db.Person.find({"name": "laure"}); <br>
 * $db.Person.find({"name": "laure", "age" : 24}); <br>
 * $db.Person.find([{"name": "rene"}, {"name": "robert"}]);
 */
RuntimeDatabaseCollection.prototype.find = function(query) {
    var result = [],
        id = '',
        object = {};

    query = query || null;

    if (query && Object.keys(query).length) {
        if (Array.isArray(query)) {
            query.forEach(function multi_search(criteria) {
                for (id in store[this.name]) {
                    object = store[this.name][id];
                    if (contains(criteria, object)) {
                        result.push(object);
                    }
                }
            }.bind(this));
        } else {
            for (id in store[this.name]) {
                object = store[this.name][id];
                if (contains(query, object)) {
                    result.push(object);
                }
            }
        }
    } else {
        for (id in store[this.name]) {
            object = store[this.name][id];
            result.push(object);
        }
    }

    return result;
};


/**
 * Insert an new document into the collection. <br>
 * Before inserting the document, Runtime checks that the document is compliant
 * with its class definition. <br> 
 * Then, after inserting it, we create the component.
 * @method insert
 * @param {Object|Array} document a new object to add
 * @return {Array} array of id created
 * 
 * @example 
 * $db.Person.insert({<br>
 *      "name": "bob", <br>
 *      "firstName": "Saint-Clar", <br>
 *      "age": 43 <br>
 * }); <br>
 */
RuntimeDatabaseCollection.prototype.insert = function(document) {
    var doc = [],
        Component = null,
        result = [];

    if (Array.isArray(document)) {
        doc = document;
    } else {
        doc.push(document);
    }

    doc.forEach(function multi_insert(obj) {
        var component = null,
            channels = [],
            channel = null,
            systems = [];

        switch (true) {
            case this.name === 'RuntimeSchema':
            case this.name === 'RuntimeLogger':
            case this.name === 'RuntimeModel':
            case this.name === 'RuntimeType':
            case this.name === 'RuntimeGeneratedModel':
            case $metamodel.isValidObject(obj, $metamodel.getModel(this.name)):

                if (typeof obj._id === 'undefined') {
                    obj._id = $helper.generateId();
                }

                store[this.name][obj._id] = obj;

                Component = $component.get(this.name);
                if (Component) {
                    component = new Component(obj);
                    result.push(component.id());
                } else {
                    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                        $helper.getRuntime().require('db').insert(this.name, obj);
                    }
                }

                if (this.name === 'RuntimeMessage') {
                    if ($helper.isRuntime()) {
                        systems = exports.RuntimeSystem.find({
                            'master': true
                        });
                        if (!systems.length || (systems.length && systems[0]._id !== obj.from)) {
                            channels = exports.RuntimeChannel.find({});
                            var length = channels.length;
                            for (var i = 0; i < length; i++) {
                                channel = $helper.getRuntime().require(channels[i]._id);
                                $workflow.state({
                                    "component": channels[i]._id,
                                    "state": obj.event,
                                    "data": obj.data
                                });
                            }
                        }
                    }
                }

                break;
            default:
                $log.invalidDocumentOnDbInsert(obj, this.name);
                break;
        }
    }.bind(this));

    return result;
};


/**
 * Update documents into a collection.
 * @method update
 * @param {Object|Array} query query to find the documents to update
 * @param {Object} update update to make
 * @param {Object} options 
 * {Boolean} upsert true if we create a document when no document is found by the query
 * @return {Number} Number of documents updated
 * 
 * @example 
 * $db.Cars.update({"code": "AZD-71"}, {"price": "10000$"}); <br>
 * $db.Cars.update([{"code": "AZD-71"}, {"code": "AZD-65"}], {"price": "10000$"}); <br>
 * $db.Cars.update({"code": "AZD-71"}, {"price": "10000$"}, {"upsert": true}); <br>
 */
RuntimeDatabaseCollection.prototype.update = function(query, update, options) {
    var docs = this.find(query),
        updated = 0,
        i = 0,
        length = docs.length,
        attributeName = '',
        schema = $metamodel.getModel(this.name),
        type = '';

    options = options || {};
    if (typeof options.upsert === 'undefined') {
        options.upsert = options.upsert || false;
    }

    if (update) {

        // upsert case
        if (length === 0 && options.upsert) {
            if (query._id) {
                update._id = query._id;
            }
            this.insert(update);
            updated = updated + 1;
        }

        for (i = 0; i < length; i++) {
            // case of update of _id
            if (typeof update._id !== 'undefined' && update._id !== docs[i]._id) {
                $log.updateUuid(docs[i]._id, update._id, typeof $component.get(update._id) !== 'undefined');
            }

            for (attributeName in update) {
                if (typeof docs[i][attributeName] !== 'undefined') {
                    if (this.name !== 'RuntimeSchema' && this.name !== 'RuntimeModel' && this.name !== 'RuntimeGeneratedModel') {
                        // check type
                        type = '';
                        if (attributeName.indexOf('_') !== 0) {
                            type = schema[attributeName].type;
                        } else {
                            if ($metamodel.getMetaDef()[attributeName]) {
                                type = $metamodel.getMetaDef()[attributeName].type;
                            }
                        }
                        if (type) {
                            if ($metamodel.isValidType(update[attributeName], type)) {
                                docs[i][attributeName] = update[attributeName];
                                updated = updated + 1;
                                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                                    $helper.getRuntime().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                                }
                                $workflow.state({
                                    "component": docs[i]._id,
                                    "state": attributeName,
                                    "data": [update[attributeName]]
                                });
                            } else {
                                $log.invalidPropertyTypeOnDbUpdate(this.name, docs[i]._id, attributeName, update[attributeName], schema[attributeName].type);
                            }
                        } else {
                            $log.unknownPropertyOnDbUpdate(attributeName, docs[i]._id);
                        }
                    } else {
                        // TODO more check in case of schema update
                        docs[i][attributeName] = update[attributeName];
                        updated = updated + 1;
                        if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                            $helper.getRuntime().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                        }
                    }
                }
            }
        }
    }

    return updated;
};


/**
 * Remove a document from the colllection. <br>
 * When a document is removed, the component is destroyed.
 * @method remove
 * @param {Object|Array} query query to find the documents to remove
 * @return {Array} list of documents id removed
 * 
 * @example 
 * $db.Cars.remove({"code": "AZD-71"}); <br>
 * $db.Cars.remove([{"code": "AZD-71"}, {"code": "AZD-65"}]); <br>
 */
RuntimeDatabaseCollection.prototype.remove = function(query) {
    var result = [],
        id = '',
        component = null,
        object = {};

    query = query || null;

    if (query && Object.keys(query).length) {

        if (Array.isArray(query)) {
            query.forEach(function multi_remove(criteria) {
                for (id in store[this.name]) {
                    object = store[this.name][id];

                    if (contains(criteria, object)) {
                        delete store[this.name][id];
                        component = $component.get(id);
                        if (component) {
                            component.destroy();
                        }
                        if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                            $helper.getRuntime().require('db').remove(this.name, id);
                        }
                        result.push(id);
                    }
                }
            }.bind(this));
        } else {
            for (id in store[this.name]) {
                object = store[this.name][id];

                if (contains(query, object)) {
                    delete store[this.name][id];
                    component = $component.get(id);
                    if (component) {
                        component.destroy();
                    }
                    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                        $helper.getRuntime().require('db').remove(this.name, id);
                    }
                    result.push(id);
                }
            }
        }
    } else {
        for (id in store[this.name]) {
            delete store[this.name][id];

            if (coreDb.indexOf(this.name) == -1) {
                component = $component.get(id);
                if (component) {
                    component.destroy();
                }
            }
            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                $helper.getRuntime().require('db').remove(this.name, id);
            }
            result.push(id);
        }
    }

    return result;
};


/**
 * Count the number of documents in the collection.
 * @method count
 * @return {Number} number of documents in the collection
 */
RuntimeDatabaseCollection.prototype.count = function() {
    var result = 0,
        objectId = '';
    for (objectId in store[this.name]) {
        result++;
    }
    return result;
};


/* Public methods */


/*
 * Create a new {{#crossLink "RuntimeDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
function collection(name) {
    exports[name] = new RuntimeDatabaseCollection(name);
}


/*
 * Import/Export a Runtime system into/from the database
 * @method system
 * @param {JSON} importedSystem a Runtime system to import
 * @return {String} the id of the imported Runtime system or the if of the current Runtime system
 */
function system(importedSystem) {
    var result = '',
        collectionName = '',
        componentId = '',
        typeName = '',
        schemaName = '',
        modelName = '',
        behaviorId = '',
        systems = [],
        id = null,
        dbDump = null,
        mastersystem = null,
        behavior = null,
        exportedSystem = {};

    if (importedSystem) { // import

        // add types
        for (typeName in importedSystem.types) {
            $metamodel.type(importedSystem.types[typeName]);
        }

        // add schemas
        for (schemaName in importedSystem.schemas) {
            $metamodel.schema(importedSystem.schemas[schemaName]);
        }

        // add models
        for (modelName in importedSystem.models) {
            $metamodel.model(importedSystem.models[modelName]);
        }

        $metamodel.create();

        //add behaviors
        for (behaviorId in importedSystem.behaviors) {
            exports.RuntimeBehavior.insert(importedSystem.behaviors[behaviorId]);
        }

        // add components
        for (collectionName in importedSystem.components) {
            for (componentId in importedSystem.components[collectionName]) {
                exports[collectionName].insert(importedSystem.components[collectionName][componentId]);
            }
        }

        // reset info if already a master system
        systems = exports.RuntimeSystem.find({
            'master': true
        });
        if (systems.length) {
            if (systems[0]._id === importedSystem._id) {
                importedSystem.master = true;
            } else {
                importedSystem.master = false;
            }
        }

        // insert the system in DB
        exports.RuntimeSystem.insert(importedSystem);

        result = importedSystem._id;

    } else { // export
        // get id of the master system
        systems = exports.RuntimeSystem.find({
            'master': true
        });

        if (systems.length) {

            mastersystem = systems[0];
            id = mastersystem._id;

            // prop
            exportedSystem._id = id;
            exportedSystem.name = mastersystem.name;
            exportedSystem.description = mastersystem.description;
            exportedSystem.version = mastersystem.version;

            // dump
            dbDump = dump();
            for (collectionName in dbDump) {
                if (dbDump.hasOwnProperty(collectionName)) {
                    exportedSystem[collectionName] = dbDump[collectionName];
                }
            }

            for (behaviorId in exportedSystem.behaviors) {
                behavior = exportedSystem.behaviors[behaviorId];
                if (behavior.state === 'main') {
                    behavior.component = id;
                }
            }

            result = JSON.stringify(exportedSystem);
        } else {
            result = "{}";
            $log.masterSystemNotFound();
        }
    }
    return result;
}


/*
 * Export a Runtime sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified Runtime sub-system
 * 
 * @example
 * $db.subsystem({"schemas":{"name":"Person"}}); // filter export on schemas <br>
 * $db.subsystem({"types":{"name":"address"}}); // filter export on types <br>
 * $db.subsystem({"behaviors":{"component":"laure"}}); // filter export on behaviors <br>
 * $db.subsystem({"components":{"Person": {"country": "France"}}}); // filter export on components <br>
 * $db.subsystem({"schemas":{"name":"Person"},"components":{"Person": {"country": "France"}}}); // combine filters
 */
function subsystem(params) {
    var system = {},
        result = [],
        defaultName = '',
        i = 0,
        length = 0,
        schema = null,
        type = null,
        model = null,
        behavior = null,
        component = null,
        className = '';

    // default values
    result = exports.RuntimeSystem.find({
        'master': true
    });
    if (result.length) {
        defaultName = result[0].name;
    }

    system.name = params.name || 'sub_' + defaultName;
    system.version = params.version || '0.0.1';
    system.description = params.description || '';

    system.subsystem = true;

    // schemas
    system.schemas = {};
    if (params.schemas) {
        result = exports.RuntimeSchema.find(params.schema);

        length = result.length;
        for (i = 0; i < length; i++) {
            schema = result[i];
            if (!schema._core) {
                system.schemas[schema._id] = schema;
            }
        }
    }

    // models
    system.models = {};
    if (params.models) {
        result = exports.RuntimeModel.find(params.models);

        length = result.length;
        for (i = 0; i < length; i++) {
            model = result[i];
            if (!model._core) {
                system.models[model._id] = model;
            }
        }
    }

    // types
    system.types = {};
    if (params.types) {
        result = exports.RuntimeType.find(params.types);

        length = result.length;
        for (i = 0; i < length; i++) {
            type = result[i];
            if (!type._core) {
                system.types[type._id] = type;
            }
        }
    }

    // behaviors
    system.behaviors = {};
    if (params.behaviors) {
        behavior = exports.RuntimeBehavior.find(params.behaviors);

        length = result.length;
        for (i = 0; i < length; i++) {
            behavior = result[i];
            if (!behavior.core) {
                system.behaviors[behavior._id] = behavior;
            }
        }
    }

    // components
    system.components = {};
    if (params.components) {
        for (className in params.components) {
            if (exports[className]) {
                system.components[className] = {};

                result = exports[className].find(params.components[className]);
                length = result.length;
                for (i = 0; i < length; i++) {
                    component = result[i];
                    system.components[className][component._id] = component;
                }
            }
        }
    }

    return JSON.stringify(system);
}


/*
 * Clear the database.
 * @method clear
 */
function clear() {
    var length = 0,
        i = 0,
        collectionName = '';

    // remove collections
    length = collections.length;
    for (i = 0; i < length; i++) {
        collectionName = collections[i];
        exports[collectionName].remove();
    }

    // remove internal collections
    length = internalDB.length;
    for (i = 0; i < length; i++) {
        collectionName = internalDB[i];
        exports[collectionName].remove();
    }
}


/*
 * Init the database.
 * @method init
 */
function init() {
    var runtimeSystemId = '',
        runtimeSystem = null;

    runtimeSystem = exports.RuntimeSystem.find({
        '_id': 'e89c617b6b15d24'
    })[0];

    // clear all the data in memory
    exports.clear();
    $component.clear();
    $metamodel.clear();
    $state.clear();
    $behavior.clear();

    // init metamodel
    $metamodel.init();

    // reimport Runtime core system
    runtimeSystemId = exports.system(runtimeSystem);
    $component.get(runtimeSystemId).main();
}


/* exports */


/**
 * This module manages Runtime database. <br>
 * Runtime database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * Runtime database is closely linked to Runtime metamodel because: <br>
 * - all operations done by Runtime database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *   
 * @module runtime
 * @submodule runtime-db
 * @requires runtime-component
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-db
 * @static
 */


/**
 * Create a new {{#crossLink "RuntimeDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
exports.collection = collection;


/**
 * Runtime database store that lists all the collections.
 * @property {JSON} store
 */
exports.store = store;


/**
 * Import/Export a Runtime system into/from the database.
 * @method system
 * @param {JSON} importedSystem a Runtime system to import
 * @return {String} the id of the imported Runtime system or the current Runtime system  
 */
exports.system = system;


/**
 * Export a Runtime sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified Runtime sub-system
 * 
 * @example
 * $db.subsystem({"schemas":{"name":"Person"}}); // filter export on schemas <br>
 * $db.subsystem({"types":{"name":"address"}}); // filter export on types <br>
 * $db.subsystem({"behaviors":{"component":"laure"}}); // filter export on behaviors <br>
 * $db.subsystem({"components":{"Person": {"country": "France"}}}); // filter export on components <br>
 * $db.subsystem({"schemas":{"name":"Person"},"components":{"Person": {"country": "France"}}}); // combine filters
 */
exports.subsystem = subsystem;


/**
 * Clear the database.
 * @method clear
 */
exports.clear = clear;


/**
 * Init the database.
 * @method init
 */
exports.init = init;
},{"./behavior.js":2,"./component.js":3,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9,"./workflow.js":10}],5:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module contains all the functions used by all the modules.
 * 
 * @module runtime
 * @submodule runtime-helper
 * @requires runtime-db
 * @requires runtime-component
 * @class runtime-helper
 * @static
 */


'use strict';

var $db = require('./db.js');
var $component = require('./component.js');


/* Private property */


var runtimeRef = null;


/* Public method */


/*
 * Check if a Runtime instance exists.
 * @method isRuntime
 * @return {Boolean} true if a Runtime instance exist
 */
function isRuntime() {
    var result = false;

    if ($db.Runtime && $db.Runtime.find().length) {
        result = true;
    }

    return result;
}


/*
 * Get the Runtime instance.
 * @method getRuntime
 * @return {Runtime} Runtime instance
 */
function getRuntime() {
    var runtimeId = '',
        result = null;

    if (!runtimeRef) {
        runtimeId = $db.Runtime.find()[0]._id;
        runtimeRef = $component.get(runtimeId);
    }

    return runtimeRef;
}


/*
 * Generate a uuid.
 * @method generateId
 * @return {String} a uuid
 */
function generateId() {
    function gen() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16);
    }
    return gen() + gen() + gen();
}


/*
 * Add Polyfill
 * @method polyfill
 */
function polyfill() {

    // fixing constructor.name property in IE
    // taken from http://stackoverflow.com/questions/25140723/constructor-name-is-undefined-in-internet-explorer
    if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
        Object.defineProperty(Function.prototype, 'name', {
            get: function() {
                var funcNameRegex = /function\s([^(]{1,})\(/;
                var results = (funcNameRegex).exec((this).toString());
                return (results && results.length > 1) ? results[1].trim() : "";
            },
            set: function(value) { }
        });
    }
}


/* exports */


/**
 * This module contains all the functions used by all the modules.
 * 
 * @module runtime
 * @submodule runtime-helper
 * @requires runtime-db
 * @requires runtime-component
 * @class runtime-helper
 * @static
 */


/**
 * Get Runtime instance.
 * @method getRuntime
 * @return {Runtime} Runtime instance
 */
exports.getRuntime = getRuntime;


/**
 * Check if a Runtime instance exists.
 * @method isRuntime
 * @return {Boolean} true if a Runtime instance exist
 */
exports.isRuntime = isRuntime;


/**
 * Generate a uuid.
 * @method generateId
 * @return {String} a uuid
 */
exports.generateId = generateId;


/**
 * Add Polyfill
 * @method polyfill
 */
exports.polyfill = polyfill;
},{"./component.js":3,"./db.js":4}],6:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module contains all the functions that write a log.
 * 
 * @module runtime
 * @submodule runtime-log
 * @requires runtime-helper
 * @class runtime-log
 * @static
 */

'use strict';


var $helper = require('./helper.js');
var $workflow = require('./workflow.js');
var $metamodel = require('./metamodel.js');
var $db = require('./db.js');
var $component = require('./component.js');

/* Private properties */


var ID = '_id',
    currentLevel = 'warn',
    loggerRef = null,
    fakeLoggerRef = {
        currentLevel: 'warn',
        level: function debug(levelName) {
            if (levelName) {
                this.currentLevel = levelName;
            }
            return this.currentLevel;
        },
        debug: function debug(message) {
            if (this.currentLevel === 'debug') {
                console.log('runtime: ' + message);
            }
        },
        info: function info(message) {
            if (this.currentLevel === 'info' || this.currentLevel === 'debug') {
                console.info('runtime: ' + message);
            }
        },
        warn: function warning(message) {
            if (this.currentLevel === 'info' || this.currentLevel === 'warn' || this.currentLevel === 'debug') {
                console.warn('runtime: ' + message);
            }
        },
        error: function error(message) {
            console.error('runtime: ' + message);
        }
    };

/*
 * Get the RuntimeLogger instance.
 * @method getLogger
 * @return {RuntimeLogger} RuntimeLogger instance
 * @private
 */
function getLogger() {
    var loggerId = '',
        loggers = [],
        result = null;

    if (!$metamodel.getModel('RuntimeLogger')) {
        result = fakeLoggerRef;
    } else {
        loggers = $db.RuntimeLogger.find();
        if (loggers.length) {
            loggerId = loggers[0][ID];

            if ($component.get(loggerId)) {
                loggerRef = $component.get(loggerId);
                result = loggerRef;
            } else {
                result = fakeLoggerRef;
            }
        } else {
            result = fakeLoggerRef;
        }
    }

    return result;
}


/* Public methods */


/*
 * Set the level of the log.
 * @method level
 * @param {String} levelName name of the level
 */
function level(levelName) {
    currentLevel = levelName;
}


/*
 * A property of a schema is unknown.
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 */
function unknownProperty(propertyName, schema) {
    var message = '';

    if (schema[ID]) {
        message = "unknown property '" + propertyName + "' for the definition of " + schema[ID];
    } else {
        message = "unknown property '" + propertyName + "' for a model";
    }

    getLogger().warn(message);
}


/*
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
function invalidPropertyType(propertyName, type, property) {
    getLogger().warn("invalid type for property '" + propertyName + "': expected type '" + type + "' instead of type '" + typeof property + "'");
}


/*
 * Invalid value for type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
function invalidEnumValue(value, type) {
    getLogger().warn("'" + value + "' is an invalid value for the type enum '" + type + "'");
}


/*
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
function invalidClassName(componentId, type, constructorName) {
    getLogger().warn("invalid class name for component '" + componentId + "': expected '" + type + "' instead of '" + constructorName + "'");
}


/*
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
function missingProperty(propertyName) {
    getLogger().warn("missing property '" + propertyName + "'");
}


/*
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} name name of the missing schema
 */
function missingImplementation(name) {
    getLogger().warn("schema '" + name + "' is missing.");
}


/*
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function invalidTypeImp(property, className) {
    getLogger().error("the property '" + property + "' of the model '" + className + "' is invalid");
}


/*
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function missingPropertyImp(property, className) {
    getLogger().warn("missing property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
function unknownPropertyImp(property, schema) {
    getLogger().error("the model '" + schema + "' has an unknown property '" + property + "'");
}


/*
 * Try to add an invalid type.
 * @method invalidTypeDefinition
 * @param {String} name a type definition
 */
function invalidTypeDefinition(name) {
    getLogger().warn("the type '" + name + "' is not valid");
}


/*
 * Invalid property name.
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
function invalidPropertyName(id, propertyName, propertyValue, type) {
    if (typeof type === 'string') {
        getLogger().warn("invalid type for property '" + propertyName + "' on component '" + id + "': expected '" + type.replace('@', '') + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    } else {
        getLogger().warn("invalid type for property type '" + propertyName + "' on component '" + id + "': expected 'string' instead of '" + typeof type + "' on component '" + id + "'");
    }
}


/*
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
function readOnlyProperty(id, propertyName) {
    getLogger().warn("can not set read-only property '" + propertyName + "' on component '" + id + "'");
}


/*
 * Invalid document on a Runtime database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
function invalidDocumentOnDbInsert(doc, collectionName) {
    getLogger().warn("invalid document '" + JSON.stringify(doc) + "' on an insert operation on collection '" + collectionName + "'");
}


/*
 * Invalid property on a Runtime database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
function invalidPropertyTypeOnDbUpdate(collectionName, id, propertyName, propertyValue, type) {
    if (type.indexOf("#") !== -1) {
        getLogger().warn("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        getLogger().warn("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}



/*
 * Unkonw property on a Runtime database update operation.
 * @method unknownPropertyOnDbUpdate
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
function unknownPropertyOnDbUpdate(propertyName, id) {
    getLogger().warn("unknown property '" + propertyName + "' on an update operation on component '" + id + "'");
}


/*
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
function unknownMethod(classId, methodName) {
    getLogger().warn("try to call an unknown method '" + methodName + "' for the class '" + classId + "'");
}


/*
 * Try to create an invalid RuntimeDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
function invalidCollectionName(name) {
    getLogger().warn("invalid name for creating the collection '" + name + "': there is no schema '" + name + "' in the metamodel");
}


/*
 * Invalid type result of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 * @param {String} expectedType expected type
 * @param {String} type current type
 */
function invalidResultType(id, methodName, expectedType, type) {
    if (type) {
        getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "': expected type '" + expectedType + "' instead of type '" + type + "'");
    } else {
        getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "': expected type '" + expectedType + "'");
    }
}


/*
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId if of the component
 */
function unknownComponent(className, componentId) {
    getLogger().warn("unkown class component '" + className + "' for component '" + componentId + "'");
}


/*
 * The Runtime workflow has been restarted.
 * @method workflowRestarted
 */
function workflowRestarted() {
    getLogger().warn('runtime has been restarted');
}


/*
 * invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumber(id, methodName) {
    getLogger().warn("invalid number of parameters when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * 
 */
function invalidParamType(id, methodName, paramName) {
    getLogger().warn("invalid type for the parameter '" + paramName + "' when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function behaviorNotUnique(id, stateName) {
    getLogger().warn("try to add more than one behavior for the state '" + stateName + "' on component class '" + id + "'");
}


/*
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOn(id, stateName) {
    getLogger().warn("try to add a behavior with an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOff(id, stateName) {
    getLogger().warn("try to remove a behavior from an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The master system is not found.
 * @method masterSystemNotFound
 */
function masterSystemNotFound() {
    getLogger().warn("can not export the database because no system was defined");
}


/*
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
function invalidType(value, typeName) {
    getLogger().warn("invalid type for value '" + JSON.stringify(value) + "': expected '" + typeName + "'");
}


/*
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
function unknownType(value) {
    getLogger().warn("unknown type for value '" + JSON.stringify(value) + "'");
}


/*
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
function canNotYetValidate(id, className) {
    getLogger().info("can not yet validate if the component '" + id + "' is an instance of '" + className + "'");
}


/**
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
function invalidChannelEvent(message, eventName, type) {
    getLogger().warn("invalid type for the message '" + JSON.stringify(message) + "': expected type '" + type + "' for event '" + eventName + "'");
}


/*
 * invalid parameter number for an action add with on method.
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumberMethodOn(id, methodName) {
    getLogger().warn("invalid number of parameters when adding an action on method '" + methodName + "' on component '" + id + "'");
}


/*
 * Change the id of a component.
 * @method updateUuid
 * @param {String} currentId id of the component
 * @param {String} newId of the component
 * @param {Boolean} alreadyUsed newId already used
 */
function updateUuid(currentId, newId, alreadyUsed) {
    if (alreadyUsed) {
        getLogger().warn("try to update a component of id '" + currentId + "' with the new id '" + newId + "' that is already used");
    } else {
        getLogger().warn("try to update a component of id '" + currentId + "' with the new id '" + newId + "'");
    }
}


/*
 * Try to change the state of a component that has been destroyed.
 * @method invalidUseOfComponent
 * @param {String} id id of the component
 */
function invalidUseOfComponent(id) {
    getLogger().warn("try to change the state of the destroyed component '" + id + "'");
}


/*
 * Try to add an invalid schema.
 * @method invalidSchema
 * @param {String} name name of the schema
 */
function invalidSchema(name) {
    getLogger().warn("the schema '" + name + "' is not valid");
}


/*
 * Try to add an invalid model.
 * @method invalidModel
 * @param {String} name name of the model
 */
function invalidModel(name) {
    getLogger().warn("the model '" + name + "' is not valid");
}


/*
 * Invalid parameters set when creating an instance of a class.
 * @method invalidParameters
 * @param {String} classId class name of the component
 */
function invalidParameters(classId) {
    getLogger().warn("the parameters for creating a component of class '" + classId + "' are not compliant with the model");
}


/*
 * Try to get the property of a destroyed component.
 * @method destroyedComponentCall
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
function destroyedComponentCall(propertyName, id) {
    getLogger().warn("trying to get the property '" + propertyName + "' on the destroyed component '" + id + "'");
}


/*
 * Invalid parameter type  when creating an instance of a class.
 * @method invalidConctructorParameters
 * @param {String} classId class name of the component
 * @param {String} name schema name
 */
function invalidConctructorParameters(object, name) {
    getLogger().warn("the constructor parameter '" + JSON.stringify(object) + "' for creating a component of class '" + name + "' is not an object");
}


/*
 * Get the information of an unkown model.
 * @method unknownModel
 * @param {String} classId id of the class
 */
function unknownModel(classId) {
    getLogger().warn("try get the information of an unknown model '" + classId + "'");
}


/*
 * A schema is missing.
 * @method missingSchema
 * @param {String} name name of the schema
 */
function missingSchema(name) {
    getLogger().warn("the schema '" + name + "' is missing");
}


/*
 * A cyclic dependency was found.
 * @method missingSchema
 * @param {String} name name of the schema where the cyclic dependency was found
 */
function cyclicDependency(name) {
    if (name) {
        getLogger().error('a cyclic inheritance dependency with \’' + name + '\’ schema has been found, please check the \'_inherit\' properties of your schemas');
    } else {
        getLogger().error('a cyclic inheritance dependency has been found, please check the \'_inherit\' properties of your schemas');
    }
}


/*
 * Invalid type for a type enum.
 * @method invalidEnumType
 * @param {Object} value the value
 * @param {String} typeName name of the type
 * @param {String} type typeName of the type
 */
function invalidEnumType(value, typeName, type) {
    getLogger().warn("invalid type for enumerated type '" + typeName + "': expected type '" + type + "' instead of type '" + typeof value + "'");
}


/*
 * Load schema.
 * @method loadSchema
 * @param {String} name name of the schema
 */
function loadSchema(name) {
    getLogger().info("load schema '" + name + "'");
}


/*
 * Load model.
 * @method loadModel
 * @param {String} name name of the model
 */
function loadModel(name) {
    getLogger().info("load model '" + name + "'");
}


/*
 * Load type.
 * @method loadType
 * @param {String} name name of the type
 */
function loadType(name) {
    getLogger().info("load type '" + name + "'");
}


/*
 * Compile schema.
 * @method compileSchema
 * @param {String} name name of the schema
 */
function compileSchema(name) {
    getLogger().info("compile schema '" + name + "'...");
}


/*
 * Generate model.
 * @method generateModel
 * @param {String} name name of the model
 */
function generateModel(name) {
    getLogger().info("generate model '" + name + "'...");
}


/*
 * Check model.
 * @method checkModel
 * @param {String} name name of the model
 */
function checkModel(name) {
    getLogger().info("analyze model '" + name + "'...");
}


/*
 * Create collection.
 * @method createCollection
 * @param {String} name name of the collection
 */
function createCollection(name) {
    getLogger().info("create collection '" + name + "'");
}

/*
 * Create class.
 * @method createClass
 * @param {String} name name of the class
 */
function createClass(name) {
    getLogger().info("create class '" + name + "'");
}


/*
 * Begins model creation.
 * @method modelCreationBegin
 */
function modelCreationBegin() {
    getLogger().info("starting model creation...");
}


/*
 * End model creation.
 * @method modelCreationEnd
 */
function modelCreationEnd() {
    getLogger().info("model creation ended");
}


/*
 * An error happened when invoking a behavior.
 * @method actionInvokeError
 * @param {String} state state
 * @param {String} id component id
 * @param {String} message
 */
function actionInvokeError(state, id, message) {
    getLogger().error("error when trying to call the method '" + state + "' on component '" + id + "': " + message);
}


/*
 * Invalid name for the property of a schema.
 * @method invalidSchemaProperty
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 */
function invalidSchemaProperty(name, propName) {
    getLogger().warn("invalid property '" + propName + "' for schema '" + name + "': only 'property', 'link', 'collection', 'method' and 'event' are allowed.");
}


/*
 * Invalid format for the definition of a property
 * @method invalidPropertyFormat
 * @param {String} obj definition of a property
 */
function invalidPropertyFormat(obj) {
    getLogger().warn("invalid format for a definition of a property': '" + obj + "' is not an object");
}


/* exports */


/**
 * This module contains all the functions that write a log.
 * 
 * @module runtime
 * @submodule runtime-log
 * @requires runtime-helper
 * @class runtime-log
 * @static
 */


/**
 * Set the level of the log.
 * @method level
 * @param {String} levelName name of the level
 */
exports.level = level;


/**
 * A property of a schema is unknown.
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 */
exports.unknownProperty = unknownProperty;


/**
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
exports.invalidPropertyType = invalidPropertyType;


/**
 * Invalid value for a type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
exports.invalidEnumValue = invalidEnumValue;


/**
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
exports.invalidClassName = invalidClassName;


/**
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
exports.missingProperty = missingProperty;


/**
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} name name of the missing schema
 */
exports.missingImplementation = missingImplementation;


/**
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
exports.invalidTypeImp = invalidTypeImp;


/**
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
exports.missingPropertyImp = missingPropertyImp;


/**
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
exports.unknownPropertyImp = unknownPropertyImp;


/**
 * Try to add an invalid type.
 * @method invalidTypeDefinition
 * @param {String} name a type definition
 */
exports.invalidTypeDefinition = invalidTypeDefinition;


/**
 * Invalid property type.
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
exports.invalidPropertyName = invalidPropertyName;


/**
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
exports.readOnlyProperty = readOnlyProperty;


/**
 * Invalid document on a Runtime database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
exports.invalidDocumentOnDbInsert = invalidDocumentOnDbInsert;


/**
 * Invalid property on a Runtime database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
exports.invalidPropertyTypeOnDbUpdate = invalidPropertyTypeOnDbUpdate;


/**
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
exports.unknownMethod = unknownMethod;


/**
 * Try to create an invalid RuntimeDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
exports.invalidCollectionName = invalidCollectionName;


/**
 * Invalid type result of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 * @param {String} expectedType expected type
 * @param {String} type current type
 */
exports.invalidResultType = invalidResultType;


/**
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId if of the component
 */
exports.unknownComponent = unknownComponent;


/**
 * The Runtime workflow has been restarted.
 * @method workflowRestarted
 */
exports.workflowRestarted = workflowRestarted;


/**
 * Invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
exports.invalidParamNumber = invalidParamNumber;


/**
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * 
 */
exports.invalidParamType = invalidParamType;


/**
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.behaviorNotUnique = behaviorNotUnique;


/**
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.invalidStateOn = invalidStateOn;


/**
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.invalidStateOff = invalidStateOff;


/**
 * The master system is not found.
 * @method masterSystemNotFound
 */
exports.masterSystemNotFound = masterSystemNotFound;


/**
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
exports.invalidType = invalidType;


/**
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
exports.unknownType = unknownType;


/**
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
exports.canNotYetValidate = canNotYetValidate;


/**
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
exports.invalidChannelEvent = invalidChannelEvent;


/**
 * invalid parameter number for an action add with on method.
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
exports.invalidParamNumberMethodOn = invalidParamNumberMethodOn;


/**
 * Change the id of a component.
 * @method updateUuid
 * @param {String} currentId id of the component
 * @param {String} newId of the component
 * @param {Boolean} alreadyUsed newId already used
 */
exports.updateUuid = updateUuid;


/**
 * Unkonw property on a Runtime database update operation.
 * @method unknownPropertyOnDbUpdate
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
exports.unknownPropertyOnDbUpdate = unknownPropertyOnDbUpdate;


/**
 * Try to change the state of a component that has been destroyed
 * @method invalideUseOfComponent
 * @param {String} id id of the component
 */
exports.invalidUseOfComponent = invalidUseOfComponent;


/**
 * Try to add an invalid schema.
 * @method invalidSchema
 * @param {String} name name of the schema
 */
exports.invalidSchema = invalidSchema;


/**
 * Try to add an invalid model.
 * @method invalidModel
 * @param {String} name name of the model
 */
exports.invalidModel = invalidModel;


/**
 * Invalid parameters set when creating an instance of a class.
 * @method invalidParameters
 * @param {String} classId class name of the component
 */
exports.invalidParameters = invalidParameters;


/**
 * Try to get the property of a destroyed component.
 * @method destroyedComponentCall
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
exports.destroyedComponentCall = destroyedComponentCall;


/**
 * Invalid parameter type  when creating an instance of a class.
 * @method invalidConctructorParameters
 * @param {String} classId class name of the component
 * @param {String} name schema name
 */
exports.invalidConctructorParameters = invalidConctructorParameters;


/**
 * Get the information of an unkown model.
 * @method unknownModel
 * @param {String} classId id of the class
 */
exports.unknownModel = unknownModel;


/**
 * A schema is missing.
 * @method missingSchema
 * @param {String} name name of the schema
 */
exports.missingSchema = missingSchema;


/**
 * A cyclic dependency was found.
 * @method missingSchema
 * @param {String} name name of the schema where the cyclic dependency was found
 */
exports.cyclicDependency = cyclicDependency;


/**
 * Invalid type for a type enum.
 * @method invalidEnumType
 * @param {Object} value the value
 * @param {String} typeName name of the type
 * @param {String} type typeName of the type
 */
exports.invalidEnumType = invalidEnumType;


/**
 * Load schema.
 * @method loadSchema
 * @param {String} name name of the schema
 */
exports.loadSchema = loadSchema;


/**
 * Load model.
 * @method loadModel
 * @param {String} name name of the model
 */
exports.loadModel = loadModel;


/**
 * Load type.
 * @method loadType
 * @param {String} name name of the type
 */
exports.loadType = loadType;


/** 
 * Compile schema.
 * @method compileSchema
 * @param {String} name name of the schema
 */
exports.compileSchema = compileSchema;


/**
 * Generate model.
 * @method generateModel
 * @param {String} name name of the model
 */
exports.generateModel = generateModel;


/**
 * Check model.
 * @method checkModel
 * @param {String} name name of the model
 */
exports.checkModel = checkModel;


/**
 * Create collection.
 * @method createCollection
 * @param {String} name name of the collection
 */
exports.createCollection = createCollection;


/**
 * Create class.
 * @method createClass
 * @param {String} name name of the class
 */
exports.createClass = createClass;


/*
 * Begins model creation.
 * @method modelCreationBegin
 */
exports.modelCreationBegin = modelCreationBegin;


/*
 * End model creation.
 * @method modelCreationEnd
 */
exports.modelCreationEnd = modelCreationEnd;


/**
 * An error happened when invoking a behavior.
 * @method actionInvokeError
 * @param {String} state state
 * @param {String} id component id
 * @param {String} message
 */
exports.actionInvokeError = actionInvokeError;


/**
 * Invalid name for the property of a schema.
 * @method invalidSchemaProperty
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 */
exports.invalidSchemaProperty = invalidSchemaProperty;


/**
 * Invalid format for the definition of a property
 * @method invalidPropertyFormat
 * @param {String} obj definition of a property
 */
exports.invalidPropertyFormat = invalidPropertyFormat;

},{"./component.js":3,"./db.js":4,"./helper.js":5,"./metamodel.js":7,"./workflow.js":10}],7:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module manages Runtime metamodel. <br>
 * Runtime metamodel loads schemas and types, analyzes them and creates the component classes and related RuntimeDatabaseCollections.
 * 
 * @module runtime
 * @submodule runtime-metamodel
 * @requires runtime-db
 * @requires runtime-log
 * @requires runtime-component
 * @requires runtime-workflow
 * @class runtime-metamodel
 * @static
 */

'use strict';

var $db = require('./db.js');
var $log = require('./log.js');
var $component = require('./component.js');
var $workflow = require('./workflow.js');
var $helper = require('./helper.js');


/* Private properties */


var ID = '_id',
    NAME = '_name',
    DESCRIPTION = '_description',
    INHERITS = '_inherit',
    CLASS = '_class',
    CORE = '_core',
    METHOD_TYPE = 'method',
    EVENT_TYPE = 'event',
    PROPERTY_TYPE = 'property',
    LINK_TYPE = 'link',
    COLLECTION_TYPE = 'collection',
    internalTypes = ['property', 'collection', 'link', 'method', 'event'],
    defaultTypes = ['boolean', 'string', 'number', 'object', 'function', 'array', 'any'],
    store = {
        metadef: {},
        inheritance: {},
        inheritanceTree: {},
        schemas: {},
        compiledSchemas: {},
        models: {},
        generatedModels: {},
        states: {},
        type: {}
    };


/* Private methods */


/*
 * Generate the models.
 * @method generateModels
 * @private
 */
function generateModels() {
    var att = '',
        name = '',
        schemaName = '',
        schema = {},
        modelName = '',
        modelParent = null,
        modelExt = null,
        modelDef = null,
        model = {},
        models = {},
        mergedModel = {},
        parents = [],
        length = 0,
        i = 0;

    // default values
    for (schemaName in store.compiledSchemas) {
        schema = store.compiledSchemas[schemaName];

        // set model internal properties
        model = {
            "_name": schema._name,
        };

        // set _core
        if (typeof schema._core !== 'undefined') {
            model._core = schema._core;
        }

        // set inherit
        if (Array.isArray(schema._inherit)) {
            model._inherit = schema._inherit;
        }

        // set class
        if (typeof schema._class !== 'undefined') {
            model._class = schema._class;
        }

        // set description 
        if (typeof schema._description !== 'undefined') {
            model._description = schema._description;
        }

        //  set model default values
        for (att in schema) {
            switch (true) {
                case schema[att] === 'property':
                    model[att] = {
                        "type": "any",
                        "readOnly": false,
                        "mandatory": false,
                        "default": null,
                        "description": att,
                        "label": att
                    };
                    break;
                case schema[att] === 'link':
                    model[att] = {
                        "type": "@RuntimeComponent",
                        "readOnly": false,
                        "mandatory": false,
                        "default": {},
                        "description": att,
                        "label": att
                    };
                    break;
                case schema[att] === 'method':
                    model[att] = {
                        "params": [
                            {
                                "name": "param",
                                "type": "any",
                                "mandatory": false
                            }
                        ],
                        "result": "any",
                        "description": att
                    };
                    break;
                case schema[att] === 'event':
                    model[att] = {
                        "params": [
                            {
                                "name": "param",
                                "type": "any",
                                "mandatory": false
                            }
                        ],
                        "description": att
                    };
                    break;
                case schema[att] === 'collection':
                    model[att] = {
                        "type": ["@RuntimeComponent"],
                        "readOnly": false,
                        "mandatory": false,
                        "default": [],
                        "description": att,
                        "label": att
                    };
                    break;
                default:
                    if (att.indexOf('_') !== 0) {
                        $log.invalidSchemaProperty(schema._name, att);
                    }
                    break;
            }
        }

        store.generatedModels[model._name] = model;
    }

    // models to override
    for (modelName in store.generatedModels) {
        model = store.generatedModels[modelName];
        name = model[NAME];
        modelExt = store.models[name];
        if (modelExt) {
            mergedModel = merge(modelExt, model);
            delete mergedModel._id;
            store.generatedModels[name] = mergedModel;
        }
    }

    // inheritance
    for (modelName in store.generatedModels) {
        model = store.generatedModels[modelName];
        parents = getParents(modelName);
        parents.reverse();

        var modelToMerge = JSON.parse(JSON.stringify(model));

        length = parents.length;
        for (i = 0; i < length; i++) {
            name = parents[i];
            modelParent = store.generatedModels[name];
            if (modelParent) {
                mergedModel = merge(modelParent, model);
                delete mergedModel._id;
                store.generatedModels[modelName] = mergedModel;
            }
        }

        // last inherit 
        // is the overriden model
        modelExt = store.models[modelName];
        if (modelExt) {
            mergedModel = merge(modelExt, store.generatedModels[modelName]);
            delete mergedModel._id;
            store.generatedModels[modelName] = mergedModel;
        }
    }

    // save 
    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        $db.RuntimeGeneratedModel.insert(modelDef);

        if (!modelDef._core) {
            $log.generateModel(modelName);
        }
    }
}

/*
 * Load schemas and types in memory.
 * @method loadInMemory
 * @private
 */
function loadInMemory() {
    var schemas = [],
        types = [],
        schema = null,
        model = {},
        models = [],
        type = null,
        id = '',
        name = '',
        inherit = '',
        i = 0,
        length = 0;

    // init store
    store.inheritance = {};
    store.inheritanceTree = {};
    store.schemas = {};
    store.compiledSchemas = {};
    store.models = {};
    store.generatedModels = {};
    store.states = {};
    store.type = {};

    // load schemas
    schemas = $db.RuntimeSchema.find({});

    length = schemas.length;
    for (i = 0; i < length; i++) {
        schema = schemas[i];

        name = schema[NAME];
        inherit = schema[INHERITS];

        store.schemas[name] = schema;
        if (inherit) {
            store.inheritance[name] = inherit;
        }

        if (!schema._core) {
            $log.loadSchema(name);
        }
    }

    // load models
    models = $db.RuntimeModel.find({});

    length = models.length;
    for (i = 0; i < length; i++) {
        model = models[i];
        name = model[NAME];

        store.models[name] = model;

        if (!model._core) {
            $log.loadModel(name);
        }
    }

    // load types
    types = $db.RuntimeType.find({});

    length = types.length;
    for (i = 0; i < length; i++) {
        type = types[i];
        store.type[type.name] = type;

        if (!type.core) {
            $log.loadType(type.name);
        }
    }
}


/*
 * Create the inheritance tree.
 * @method createInheritanceTree
 * @private
 */
function createInheritanceTree() {
    var name = '',
        c3linerization = [],
        ancestors = [];

    /*
     * Check if we have finisehd to linerize.
     * @param {Array} elts array of elts
     * @return {Boolean} true if all the arrays are empty
     * @private
     */
    function _isEmpty(elts) {
        var i = 0,
            length = 0,
            result = true;

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (elts[i].length) {
                result = false;
            }
        }
        return result;
    }

    /*
     * Remove an elt from all the arrays.
     * @param {String} elt element to remove
     * @param {Array} elts array of elts
     * @private
     */
    function _removeCandidate(elt, elts) {
        var i = 0,
            length = 0,
            arr = [];

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (elts[i].indexOf(elt) === 0) {
                arr = elts[i];
                arr.reverse();
                arr.pop();
                arr.reverse();
                elts[i] = arr;
            }
        }
    }

    /*
     * Check the element is a good candidate.
     * @param {String} elt element to remove
     * @param {Array} elts array of elts
     * @return {Boolean} true if the element is a good candidate.
     * @private
     */
    function _isCandidate(elt, elts) {
        var result = true,
            i = 0,
            length = 0;

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (elts[i].indexOf(elt) > 0) {
                result = false;
            }
        }

        return result;
    }

    /*
     * Find a candidate and return it.
     * @param {Array} elts array of elts
     * @return {Array} array containing the candidate
     * @private
     */
    function _findCandidate(elts) {
        var i = 0,
            length = 0,
            result = [];

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (_isCandidate(elts[i][0], elts)) {
                result.push(elts[i][0]);
                _removeCandidate(elts[i][0], elts);
                break;
            }
        }
        return result;
    }

    /*
     * Merge the arrays.
     * @param {Array} elts array of elts
     * @return {Array} list of candidates returned by the merge
     * @private
     */
    function _merge(elts) {
        var result = [],
            candidates = [];

        candidates = _findCandidate(elts);
        while (candidates[0] !== undefined) {
            result = result.concat(candidates);
            candidates = _findCandidate(elts);
        }

        if (!_isEmpty(elts)) {
            $log.cyclicDependency();
        }
        return result;
    }

    /*
     * Start the linerieation from an element.
     * @param {String} name name of the element
     * @return {Array} list of candidates
     * @private
     */
    function _linerize(name) {
        var result = [],
            parents = [],
            i = 0,
            length = 0;

        /*
         * Check if there is a cyclic dependency. 
         * @param {String} name
         * @param {String} item
         * @return {Boolean} true if there is a cyclic dependency
         * @private 
         */
        function _checkCyclicDep(name, item) {
            var isCyclicDeb = false;

            if (Array.isArray(store.inheritance[item]) && store.inheritance[item].indexOf(name) !== -1) {
                $log.cyclicDependency(name);
                isCyclicDeb = true;
            }
            return isCyclicDeb;
        }

        if (Array.isArray(store.inheritance[name])) {
            parents = store.inheritance[name].slice();
        } else {
            $log.missingSchema(name);
        }

        length = parents.length;
        for (i = 0; i < length; i++) {
            if (_checkCyclicDep(name, parents[i])) {
                parents = [];
                break;
            }
        }

        if (parents.length) {
            result = [name].concat(_merge(parents.map(_linerize).concat([parents])));
        } else {
            result = [name];
        }
        return result;
    }

    for (name in store.inheritance) {
        c3linerization = _linerize(name);
        ancestors = c3linerization.reverse();
        ancestors.pop();
        if (ancestors.length) {
            store.inheritanceTree[name] = ancestors;
        }
    }
}


/*
 * Extend a schema with the properties of its parent.
 * @method extend
 * @param {String} name name of the schema to extend
 * @return {JSON} object extended with the properties of its parent
 * @private
 */
function extend(name) {
    var sonExtend = {},
        son = store.schemas[name],
        ancestors = store.inheritanceTree[name],
        length = 0,
        i = 0,
        ancestor = null,
        prop = '';

    if (ancestors) {
        length = ancestors.length;
        ancestors.reverse();
    }
    for (i = 0; i < length; i++) {
        ancestor = store.schemas[ancestors[i]];
        for (prop in ancestor) {
            if (prop.indexOf('_') !== 0) {
                sonExtend[prop] = ancestor[prop];
            }
        }
    }
    for (prop in son) {
        sonExtend[prop] = son[prop];
    }
    return sonExtend;
}


/*
 * Add the models.
 * @method compileSchemas
 * @private
 */
function compileSchemas() {
    var name = '';
    for (name in store.schemas) {
        if (!store.schemas[name]._core) {
            $log.compileSchema(name);
        }

        store.compiledSchemas[name] = extend(name);
    }
}


/*
 * Test if all the models are compliants with their schemas.
 * @method checkModels
 * @private
 */
function checkModels() {
    var name = '',
        classDef = null,
        schema = '';

    for (name in store.generatedModels) {
        classDef = store.generatedModels[name];
        if (classDef) {
            schema = store.compiledSchemas[name];
            if (schema) {
                if (!classDef._core) {
                    $log.checkModel(name);
                }
                checkImp(classDef, schema);
            } else {
                $log.missingImplementation(name);
            }
        }
    }
}


/*
 * Get all the states of a schema.
 * @method getStates
 * @private
 */
function getStates() {
    var name = '',
        schema = null,
        type = '',
        states = [],
        attribute = '';

    for (name in store.compiledSchemas) {
        states = [];
        schema = store.compiledSchemas[name];
        if (schema) {
            for (attribute in schema) {
                type = schema[attribute];
                if (attribute.indexOf('_') !== 0 && internalTypes.indexOf(type) !== -1) {
                    states.push(attribute);
                }
            }
        }
        store.states[name] = states;
    }
}


/*
 * Test if a schema is compliant with its schema.
 * @method checkImp
 * @param {JSON} classDef schema to test 
 * @param {JSON} classImp schema to validate
 * @private
 */
function checkImp(classDef, classImp) {
    var property = '',
        value = null;
    for (property in classImp) {
        if (property !== ID &&
            property !== NAME &&
            property !== DESCRIPTION &&
            property !== INHERITS &&
            property !== CLASS &&
            property !== CORE) {
            if (typeof classDef[property] !== 'undefined') {
                value = classDef[property];
                if (!checkSchema(value, classImp[property])) {
                    $log.invalidTypeImp(property, classDef[NAME]);
                }
            } else {
                $log.missingPropertyImp(property, classDef[NAME]);
            }
        }
    }
    // check if all properties are there
    for (property in classDef) {
        if (property !== ID &&
            property !== NAME &&
            property !== DESCRIPTION &&
            property !== INHERITS &&
            property !== CLASS &&
            property !== CORE) {
            if (typeof classImp[property] === 'undefined') {
                $log.unknownPropertyImp(property, classDef[NAME]);
            }
        }
    }
}


/*
 * Test if a value has the correct type.
 * @method checkSchema
 * @param {Object} value value to test
 * @param {Object} type type to test
 * @return {Boolean} true if the value has the correct type
 * @private
 */
function checkSchema(value, type) {
    var result = true;
    if (hasType(type, 'string') && defaultTypes.indexOf(type) !== -1) {
        result = hasType(value, type);
    } else {
        result = checkCustomSchema(value, type);
    }
    return result;
}


/*
 * Test if a value has correct custom type.
 * @method checkCustomSchema
 * @param {type} value value to test
 * @param {String} typeName type to test
 * @return {Boolean} true if the value has the correct type
 * @private
 */
function checkCustomSchema(value, typeName) {
    var result = true,
        typeDef = store.type[typeName],
        length = 0,
        i = 0;

    if (!hasType(typeDef, 'undefined')) {
        if (!hasType(value, 'undefined')) {
            if (typeDef.type === 'array') {
                length = value.length;
                for (i = 0; i < length; i++) {
                    if (!hasType(typeDef.schema, 'undefined')) {
                        result = isValidSchema(value[i], typeDef.schema);
                    } else {
                        result = isValidType(value[i], typeDef.type);
                    }
                    if (result === false) {
                        break;
                    }
                }
            } else {
                if (!hasType(typeDef.schema, 'undefined')) {
                    result = isValidSchema(value, typeDef.schema);
                } else {
                    result = isValidType(value, typeDef.type);
                }
            }
        } else {
            result = false;
        }
    } else {
        result = false;
    }

    return result;
}


/*
 * Init the Database stucture.
 * @method initDbStructure
 * @private
 */
function initDbStructure() {
    $db.collection('RuntimeLogger');
    $db.collection('RuntimeSchema');
    $db.collection('RuntimeModel');
    $db.collection('RuntimeGeneratedModel');
    $db.collection('RuntimeClassInfo');
    $db.collection('RuntimeBehavior');
    $db.collection('RuntimeState');
    $db.collection('RuntimeType');
    $db.collection('RuntimeMessage');
    $db.collection('RuntimeChannel');
}


/*
 * Create the Database structure (i.e. RuntimeDatabaseCollection).
 * @method createDbStructure
 * @private
 */
function createDbStructure() {
    var modelName = '',
        modelDef = {};

    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        if (typeof $db[modelDef[NAME]] === 'undefined' &&
            modelDef[CLASS] !== false) {
            $db.collection(modelDef[NAME]);

            if (!modelDef._core) {
                $log.createCollection(modelDef[NAME]);
            }
        }
    }
}


/*
 * Create all the classes of the model.
 * @method createClass
 * @private
 */
function createClass() {
    var modelName = '',
        modelDef = {};

    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        if (modelDef[CLASS] !== false) {
            $component.create({
                "model": modelName
            });
            if (!modelDef._core) {
                $log.createClass(modelName);
            }
        }
    }
}


/*
 * Create all the ClassInfo of the model.
 * @method createClassInfo
 * @private
 */
function createClassInfo() {
    var modelName = '',
        modelDef = {},
        name = '';

    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        name = modelDef[NAME] + 'Info';

        if (
            modelDef[CLASS] !== false &&
            inheritFrom(modelDef[NAME], 'RuntimeComponent')
        ) {
            if (!$component.get(name)) {
                $db.RuntimeClassInfo.insert({
                    "_id": name,
                    "metamodel": store.compiledSchemas[modelName],
                    "model": modelDef
                });
            } else {
                $db.RuntimeClassInfo.update({
                    "_id": name
                }, {
                        "_id": name,
                        "metamodel": store.compiledSchemas[modelName],
                        "model": modelDef
                    });
            }
        }
    }
}


/* 
 * Get the real name of the reference object / type.
 * @method getReference
 * @param {String} value
 * @return {String} real name
 * @private
 */
function getReference(value) {
    return value.replace('@', '');
}


/*
 * Is the value a custom type.
 * @method isCustomType
 * @param {String} value
 * @return {Boolean}
 * @private
 */
function isCustomType(value) {
    var result = hasType(value, 'string') &&
        defaultTypes.indexOf(value) === -1 &&
        !isReference(value);

    return result;
}


/*
 * Is the value a reference.
 * @method isReference
 * @param {String} value
 * @return {Boolean}
 * @private
 */
function isReference(value) {
    return value.indexOf('@') !== -1;
}


/*
 * Get the real type of a value.
 * @method getRealType
 * @param {type} value
 * @return {String} type of the value
 * @private
 */
function getRealType(value) {
    var type = '';

    if (Array.isArray(value)) {
        type = 'array';
    } else {
        type = typeof value;
    }
    if (value === 'any') {
        type = 'any';
    }

    return type;
}


/*
 * Get the class name of an object.
 * @method getClassName
 * @param {type} obj object
 * @return {String} the class name of the object
 * @private
 */
function getClassName(obj) {
    var result = '';
    
    if (obj && obj.constructor) {
        result = obj.constructor.name;
    }
    return result;
}


/*
 * Check if the value is a valid enum value.
 * @method isValidEnumValue
 * @param {String} value
 * @param {Array} enumValue
 * @return {Boolean} the class name of the object
 * @private
 */
function isValidEnumValue(value, enumValue) {
    return enumValue.indexOf(value) !== -1;
}


/*
 * Check if a value has the specified type.
 * @param {type} value
 * @param {type} type
 * @returns {Boolean} true is value has type 'type'
 */
function hasType(value, type) {
    var result = true;

    switch (type) {
        case 'array':
            result = Array.isArray(value);
            break;
        case 'any':
            result = true;
            break;
        default:
            result = (type === typeof value);
            break;
    }

    return result;
}


/*
 * Check if an attribute of the schema has a specific type.
 * @method isCollection
 * @param {String} name
 * @param {String} id component id
 * @param {String} type type to check
 * @return {Boolean} true if the attribute has for type type
 */
function checkType(name, id, type) {
    var result = false,
        componentSchema = store.generatedModels[id],
        attributeType = '';

    if (componentSchema && componentSchema[NAME]) {
        componentSchema = store.compiledSchemas[componentSchema[NAME]];
    }

    if (componentSchema) {
        attributeType = componentSchema[name];
        if (attributeType === type) {
            result = true;
        }
    }

    return result;
}

/*
 * Merge two schemas.
 * @method merge
 * @param {Object} source source schema
 * @param {Object} target target schema
 * @param {Boolean} merge also private properties
 * @return {Object} merged schema
 */
function merge(source, target, all) {
    var propName = '',
        result = target;

    for (propName in source) {
        if (source.hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
            result[propName] = source[propName];
        }
    }
    return result;
}

/* Public methods */


/*
 * Add a new schema.
 * @method schema
 * @param {JSON} importedSchema schema to add
 */
function schema(importedSchema) {
    var id = null,
        result = [],
        schema = null,
        name = '',
        mergedSchema = {},
        schemas = [];

    schema = JSON.parse(JSON.stringify(importedSchema));
    name = schema[NAME];

    if (typeof schema[ID] === 'undefined') {
        schema[ID] = $helper.generateId();
    }
    if (typeof schema[INHERITS] === 'undefined') {
        schema[INHERITS] = ['RuntimeComponent'];
    }

    // check if schema is compliant with the meta meta model
    if (isValidObject(schema, store.metadef.schema, false)) {
        schemas = $db.RuntimeSchema.find({ '_name': name });
        if (schemas.length) {
            mergedSchema = merge(schema, schemas[0]);
            delete mergedSchema._id;
            $db.RuntimeSchema.update({ '_name': name }, mergedSchema);
            id = schemas[0]._id;
        } else {
            result = $db.RuntimeSchema.insert(schema);
            id = result[0];
        }
    } else {
        $log.invalidSchema(schema[NAME]);
    }

    return id;
}


/*
 * Add a new model.
 * @method model
 * @param {JSON} importedModel model to add
 */
function model(importedModel) {
    var model = null,
        id = null,
        result = [],
        inherit = '',
        name = '',
        mergedModel = {},
        models = [];

    model = JSON.parse(JSON.stringify(importedModel));
    name = model[NAME];

    if (typeof model[ID] === 'undefined') {
        model[ID] = $helper.generateId();
    }

    // check if model is compliant with the meta meta model
    if (isValidObject(model, store.metadef.model, false)) {
        models = $db.RuntimeModel.find({ '_name': name });
        if (models.length) {
            mergedModel = merge(model, models[0]);
            delete mergedModel._id;
            $db.RuntimeModel.update({ '_name': name }, mergedModel);
            id = models[0]._id;
        } else {
            result = $db.RuntimeModel.insert(model);
            id = result[0];
        }
    } else {
        $log.invalidModel(model[NAME]);
    }

    return id;
}

/*
 * Add a new type.
 * @method type
 * @param {JSON} importedType type to add
 */
function type(importedType) {
    var id = null,
        result = [],
        name = importedType.name;

    // check if type is compliant with the meta meta model
    if (isValidObject(importedType, store.metadef.type)) {
        result = $db.RuntimeType.insert(importedType);
        id = result[0];
    } else {
        $log.invalidTypeDefinition(name);
    }

    return id;
}


/*
 * Init the metamodel.
 * @method init
 */
function init() {
    clear();
    store.metadef = {
        schema: {
            "_id": {
                "type": "string",
                "mandatory": true
            },
            "_name": {
                "type": "string",
                "mandatory": true
            },
            "_inherit": {
                "type": ["string"],
                "mandatory": false,
                "default": ["RuntimeComponent"]
            },
            "_class": {
                "type": "boolean",
                "mandatory": false
            },
            "_core": {
                "type": "boolean",
                "mandatory": false
            },
            "_description": {
                "type": "string",
                "mandatory": false
            }
        },
        model: {
            "_id": {
                "type": "string",
                "mandatory": true
            },
            "_name": {
                "type": "string",
                "mandatory": true
            },
            "_inherit": {
                "type": ["string"],
                "mandatory": false
            },
            "_class": {
                "type": "boolean",
                "mandatory": false
            },
            "_core": {
                "type": "boolean",
                "mandatory": false
            },
            "_description": {
                "type": "string",
                "mandatory": false
            }
        },
        type: {
            "name": {
                "type": "string",
                "mandatory": true
            },
            "type": {
                "type": "string",
                "mandatory": true
            },
            "schema": {
                "type": "object",
                "mandatory": false
            },
            "value": {
                "type": ["string"],
                "mandatory": false
            },
            "core": {
                "type": "boolean",
                "mandatory": false
            },
            "_description": {
                "type": "string",
                "mandatory": false
            }
        }

    };
    initDbStructure();
}


/*
 * Remove the data of the metamodel from the memory.
 * @method clear
 */
function clear() {
    store = {
        metadef: {},
        inheritance: {},
        inheritanceTree: {},
        schemas: {},
        compiledSchemas: {},
        models: {},
        generatedModels: {},
        states: {},
        type: {}
    };
}


/*
 * Create the metamodel.
 * @method create
 */
function create() {
    $log.modelCreationBegin();
    loadInMemory();
    createInheritanceTree();
    compileSchemas();
    generateModels();
    checkModels();
    getStates();
    createDbStructure();
    createClass();
    createClassInfo();
    $log.modelCreationEnd();
}


/*
 * Check if an attribute of the schema is an event.
 * @method isEvent
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is an event
 */
function isEvent(name, id) {
    return checkType(name, id, EVENT_TYPE);
}


/*
 * Check if an attribute of the schema is a property.
 * @method isProperty
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a property
 */
function isProperty(name, id) {
    return checkType(name, id, PROPERTY_TYPE);
}


/*
 * Check if an attribute of the schema is a link.
 * @method isLink
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a link
 */
function isLink(name, id) {
    return checkType(name, id, LINK_TYPE);
}


/*
 * Check if an attribute of the schema is a collection.
 * @method isCollection
 * @param {String} name name of the collection
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a collection
 */
function isCollection(name, id) {
    return checkType(name, id, COLLECTION_TYPE);
}


/*
 * Check if an attribute of the schema is a method.
 * @method isMethod
 * @param {String} name name of the method
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a method
 */
function isMethod(name, id) {
    return checkType(name, id, METHOD_TYPE);
}


/*
 * Check if an attribute of the schema is a structure.
 * @method isStructure
 * @param {String} name name of the propertys
 * @param {String} id component id
 * @return {Boolean} true if the property is a structure
 */
function isStructure(name, id) {
    var result = false,
        model = store.generatedModels[id],
        attributeType = '',
        type = '';

    if (model[name]) {
        type = store.type[model[name].type];
    }

    if (type && type.schema) {
        result = true;
    }

    return result;
}


/*
 * Check if the name is a correct state for the component.
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @return {Boolean} true if the name is a correct state for the component
 */
function isValidState(name, id) {
    var result = false,
        componentSchema = store.generatedModels[id],
        state = {};

    if (componentSchema && componentSchema[NAME]) {
        componentSchema = store.generatedModels[componentSchema[NAME]];
    }
    state = store.states[componentSchema[NAME]];

    if (Array.isArray(state)) {
        result = state.indexOf(name) !== -1;
    }

    return result;
}


/*
 * Check if a value is compliant with a type.
 * @method isValidType
 * @param {Object} object object to validate
 * @param {String} type type to use for validation
 * @return {Boolean} true if the object is compliant with the type
 */
function isValidType(value, typeName) {
    var result = true;


    function _isValidCustomType(value, typeName) {
        var typeDef = store.type[typeName],
            result = true;

        if (Array.isArray(typeDef.value) && typeDef.value.indexOf(value) === -1) {
            result = false;
        }

        if (result === false) {
            $log.invalidEnumValue(value, typeName);
        }
        return result;
    }

    function _checkReference(value, typeName) {
        var isValid = true;
        var typeRef = getReference(typeName);
        var component = value;

        if (hasType(value, 'string')) {
            component = $component.get(value);
        }
        if (getClassName(component) !== typeRef && JSON.stringify(component) !== '{}') {
            isValid = false;
            $log.invalidType(value, typeName.replace('@', ''));
        }
        return isValid;
    }

    /*
    * Check if an object is compliant with a type.
    * @return {Boolean} the object is compliant with the type
    * @private
    */
    function _isValidType(value, typeName) {
        var isValid = true,
            realType = '',
            i = 0,
            length = 0;

        realType = getRealType(typeName);
        switch (realType) {
            case 'string':
                isValid = hasType(value, typeName);
                break;
            case 'array':
                length = value.length;
                for (i = 0; i < length; i++) {
                    switch (true) {
                        case isCustomType(typeName[0]):
                            isValid = checkCustomSchema(value[i], typeName[0]);
                            break;
                        case isReference(typeName[0]):
                            isValid = _checkReference(value[i], typeName[0]);
                            break;
                        default:
                            isValid = hasType(value[i], typeName[0]);
                            break;
                    }
                }
                break;
            default:
                break;
        }
        return isValid;
    }

    if (hasType(typeName, 'string')) {
        switch (true) {
            case isCustomType(typeName):
                result = checkCustomSchema(value, typeName);

                if (!result) {
                    $log.invalidEnumType(value, typeName, store.type[typeName].type);
                }

                if (result) {
                    result = _isValidCustomType(value, typeName);
                }
                break;
            case isReference(typeName):
                result = _checkReference(value, typeName);
                break;
            default:
                result = _isValidType(value, typeName);
                break;
        }
    } else {
        result = false;
    }

    return result;
}


/*
 * Check if a value is compliant with a type enum.
 * @method isValidEnum
 * @param {String|Object} value value to validate
 * @param {Schema} schema schema to use for validation
 * @return {Boolean} true if the object is compliant with the enum
 */
function isValidEnum(value, schema) {
    var result = true;

    function _isInstanceOf(component, className) {
        var result = false,
            componentClassName = '';

        componentClassName = component.constructor.name;

        if (componentClassName === 'Function') {
            componentClassName = component.name;
        }
        result = componentClassName === className;

        return result;
    }

    if (isReference(schema.type)) {
        result = _isInstanceOf($component.get(value), getReference(schema.type)) && schema.value.indexOf(value) !== -1;
        if (!result) {
            $log.invalidEnumValue(value, schema.type);
        }
    } else {
        result = (hasType(value, schema.type)) && schema.value.indexOf(value) !== -1;
        if (!result) {
            $log.invalidEnumValue(value, schema.type);
        }
    }

    return result;
}


/*
 * Check if the object is compliant with the schema.
 * Use it to test if a schema is compliant with a schema
 * it is supposed to validate.
 * @method isValidSchema
 * @param {JSON} object
 * @param {JSON} schema
 * @return {Boolean}
 * @private
 */
function isValidSchema(object, schema) {
    var fieldName = '',
        field = null,
        result = true,
        mandatory = true,
        typeSchema = '',
        typeRef = '',
        realType = '',
        length = 0,
        i = 0;

    /*
     * Check if a field is compliant with the type of the reference.
     * @return {Boolean} the field is compliant with the type of the reference
     * @private
     */
    function _isValidReference() {
        var isValid = true,
            enumValue = [];

        typeRef = getReference(typeSchema);
        typeRef = object[typeRef];
        if (isCustomType(typeRef)) {
            if (store.type[typeRef]) {
                if (store.type[typeRef].schema) {
                    isValid = isValidSchema(field, store.type[typeRef].schema);
                } else {
                    // check type
                    isValid = hasType(field, store.type[typeRef].type);

                    // check value
                    enumValue = store.type[typeRef].value;
                    if (enumValue) {
                        isValid = isValidEnumValue(field, enumValue);
                    }
                }
            } else {
                isValid = false;
            }
        } else {
            if (typeRef === 'array') {
                isValid = Array.isArray(field);
            } else {
                if (isReference(typeRef)) {
                    isValid = hasType(field, 'object') || hasType(field, 'string');
                    // TODO maybe have a more strict validation than just a type checking
                } else {
                    isValid = hasType(field, typeRef);
                }
            }
        }
        if (!isValid) {
            $log.invalidPropertyType(fieldName, typeRef, field);
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with a type.
     * @return {Boolean} the field is compliant with the type
     * @private
     */
    function _isValidType() {
        var isValid = true;

        realType = getRealType(typeSchema);
        switch (realType) {
            case 'string':
                if (isCustomType(realType)) {
                    isValid = isValidSchema(field, typeSchema);
                } else {
                    if (!hasType(field, typeSchema)) {
                        $log.invalidPropertyType(fieldName, typeSchema, field);
                        isValid = false;
                        break;
                    }
                }
                break;
            case 'array':
                length = field.length;
                for (i = 0; i < length; i++) {
                    if (isCustomType(typeSchema[0])) {
                        isValid = isValidSchema(field[i], store.type[typeSchema[0]].schema);
                    } else {
                        if (!hasType(field[i], typeSchema[0])) {
                            $log.invalidPropertyType(field[i], typeSchema[0], field[i]);
                            isValid = false;
                            break;
                        }
                    }
                }
                break;
            default:
                break;
        }
        return isValid;
    }

    // type

    if (hasType(object, 'object')) {
        for (fieldName in object) {
            field = object[fieldName];

            if (hasType(schema[fieldName], 'undefined')) {
                $log.unknownProperty(fieldName, schema);
                return false;
            } else {
                typeSchema = schema[fieldName].type;
            }

            switch (true) {
                case isReference(typeSchema):
                    result = _isValidReference();
                    break;
                default:
                    result = _isValidType();
                    break;
            }
            if (!result) {
                break;
            }
        }

        // mandatory
        for (fieldName in schema) {
            field = schema[fieldName];
            mandatory = field.mandatory;
            if (mandatory === true && (hasType(object[fieldName], 'undefined') && object[fieldName] !== undefined)) {
                $log.missingProperty(fieldName);
                result = false;
                break;
            }
        }
    } else {
        result = false;
        $log.invalidPropertyFormat(object);
    }

    return result;
}


/*
 * Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 * @method isValidObject
 * @param {Object} object object to validate
 * @param {Object} schema schema that validates the object
 * @param {Boolean} strict true if validation is strict
 * @param {Boolean} cleanRef true if we remove the reference to the object
 * @return {Boolean} true is the object is compliant with the schema
 */
function isValidObject(object, schema, strict, cleanRef) {
    var fieldName = '',
        field = null,
        result = true,
        mandatory = true,
        typeSchema = '',
        typeRef = '',
        realType = '',
        length = 0,
        i = 0;

    if (hasType(strict, 'undefined')) {
        strict = true;
    }

    if (hasType(cleanRef, 'undefined')) {
        strict = false;
    }

    /*
     * Check if a field is compliant with a custom type.
     * @return {Boolean} the field is compliant with the custom type
     * @private
     */
    function _isValidCustomType(field, typeSchema) {
        var isValid = true,
            realType = '';

        realType = store.type[typeSchema];
        if (realType) {
            switch (true) {
                case !hasType(realType.schema, 'undefined'):
                    isValid = isValidObject(field, realType.schema);
                    break;
                case !hasType(realType.value, 'undefined'):
                    isValid = isValidEnum(field, realType);
                    break;
                default:
                    isValid = isValidType(field, realType.type);
                    break;
            }
        } else {
            isValid = false;
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with the type of the reference.
     * @return {Boolean} the field is compliant with the type of the reference
     * @private
     */
    function _isValidReference(field, typeSchema) {
        var isValid = true,
            comp = null,
            isComponent = false;

        typeRef = getReference(typeSchema);
        if (field && field.id) {
            comp = field;
            isComponent = true;
        } else {
            comp = $component.get(field);
        }

        if (!hasType(comp, 'undefined')) {
            if (!inheritFrom(comp.constructor.name, typeRef)) {
                //if (getClassName(comp) !== typeRef) { uncomment this line for a strict mode
                isValid = false;
                $log.invalidType(field, typeRef);
            } else {
                if (isComponent && cleanRef) {
                    object[fieldName] = comp.id(); // store the id instead the full object 
                }
            }
        } else {
            // check for default value of an object ({} or null)
            switch (true) {
                case (hasType(field, 'object') && field !== null && Object.keys(field).length > 0):
                case hasType(field, 'string'):
                    $log.canNotYetValidate(field, typeRef);
                    break;
                default:
                    break;
            }
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with a type.
     * @return {Boolean} the field is compliant with the type
     * @private
     */
    function _isValidType(field, typeSchema) {
        var isValid = true,
            typeArray = '';

        realType = getRealType(typeSchema);
        switch (realType) {
            case 'any':
                break;
            case 'string':
                if (isCustomType(realType)) {
                    isValid = isValidObject(field, typeSchema);
                } else {
                    if (typeSchema === 'array') {
                        if (getRealType(field) !== 'array') {
                            $log.invalidPropertyType(fieldName, typeSchema, field);
                            isValid = false;
                            break;
                        }
                    } else {
                        if (getRealType(field) !== typeSchema) {
                            $log.invalidPropertyType(fieldName, typeSchema, field);
                            isValid = false;
                            break;
                        }
                    }
                }
                break;
            case 'array':
                if (Array.isArray(field)) {
                    length = field.length;
                    typeArray = typeSchema[0];
                    for (i = 0; i < length; i++) {
                        if (isCustomType(typeArray)) {
                            isValid = isValidObject(field[i], store.type[typeArray].schema);
                        } else {
                            if (!isReference(typeArray)) {
                                if (getRealType(field[i]) !== typeArray) {
                                    $log.invalidPropertyType(field[i], typeArray, field[i]);
                                    isValid = false;
                                    break;
                                }
                            } else {
                                if (getRealType(field[i]) === 'string') {
                                    // Case of an import of a system
                                    if ($component.get(field[i])) {
                                        if (getClassName($component.get(field[i])) !== getReference(typeArray)) {
                                            $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName(field[i]));
                                            isValid = false;
                                            break;
                                        }
                                    } else {
                                        $log.canNotYetValidate(field[i], getReference(typeArray));
                                    }
                                } else {
                                    if (!inheritFrom(getClassName(field[i]), getReference(typeArray))) {
                                        $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName(field[i]));
                                        isValid = false;
                                        break;
                                    } else {
                                        if (cleanRef) {
                                            field[i] = field[i].id(); // store the id instead the full object
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    isValid = false;
                    $log.invalidType(field, 'array');
                }
                break;
            default:
                isValid = false;
                $log.unknownType(field);
                break;
        }
        return isValid;
    }


    // type
    for (fieldName in object) {
        field = object[fieldName];

        if (!hasType(schema[fieldName], 'undefined') || fieldName === '_core') {

            // case of _core
            if (fieldName !== '_core') {
                typeSchema = schema[fieldName].type;
            } else {
                typeSchema = 'boolean';
            }

            // cas of _id
            if (fieldName === '_id') {
                typeSchema = 'string';
            }

        } else {
            if (strict) {
                $log.unknownProperty(fieldName, schema);
                return false;
            } else {
                continue;
            }
        }

        switch (true) {
            case isCustomType(typeSchema):
                result = _isValidCustomType(field, typeSchema);
                break;
            case isReference(typeSchema):
                result = _isValidReference(field, typeSchema);
                break;
            default:
                result = _isValidType(field, typeSchema);
                break;
        }
    }

    // mandatory
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        if (hasType(object[fieldName], 'undefined')) {
            if (mandatory === true) {
                $log.missingProperty(fieldName);
                result = false;
            }
        }
    }

    return result;
}


/*
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object object to prepate
 * @param {Object} schema schema that validates the object
 */
function prepareObject(object, schema) {
    var fieldName = '',
        field = null,
        mandatory = true,
        defaultValue = '';

    // mandatory & default value
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        defaultValue = field.default;
        if (hasType(object[fieldName], 'undefined')) {
            if (mandatory === false && !hasType(defaultValue, 'undefined')) {
                object[fieldName] = defaultValue;
            }
        }
    }
}


/*
 * Get a schema.
 * @method getSchema
 * @param {String} name of the schema
 * @return {Object} the schema
 */
function getSchema(name) {
    var result = null;
    if (store.compiledSchemas[name]) {
        result = store.compiledSchemas[name];
    }
    return result;
}


/*
 * Get a model.
 * @method getModel
 * @param {String} name of the model
 * @return {Object} the model
 */
function getModel(name) {
    var result = null;
    if (store.generatedModels[name]) {
        result = store.generatedModels[name];
    }
    return result;
}


/*
 * Get a type.
 * @method getType
 * @param {String} name of the type
 * @return {Object} the type
 */
function getType(name) {
    var result = null;
    if (store.type[name] && store.type[name]) {
        result = JSON.parse(JSON.stringify(store.type[name]));
    }
    return result;
}


/*
 * Get the definition of the metamodel.
 * @method getMetaDef
 * @return {Object} the metadefinition of the metamodel
 */
function getMetaDef() {
    var result = store.metadef.schema;
    return result;
}


/*
 * Get parents of a schema if any.
 * @method get
 * @param {String} id id of the schema
 * @return {Array} id id of the parents
 */
function getParents(id) {
    var result = [];

    if (!store.inheritanceTree[id]) {
        result = [];
    } else {
        result = store.inheritanceTree[id].slice();
    }

    return result;
}

/*
 * Check if a class inherits from another one
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @return {Boolean} true if the component inherit from the specific class name
 */
function inheritFrom(name, parentName) {
    var result = false,
        parents = [],
        i = 0,
        length = 0;

    /*
     * 
     * Check if a class inherits from another one
     * @method _searchParent
     * @param {String} className name of the class
     * @param {String} ancestorName of the parent
     * @returns {Boolean} true if the component inherit from the specific class name
     * @private
     */
    function _searchParent(className, ancestorName) {
        var isAncestor = false,
            parents = [],
            i = 0,
            length = 0;

        parents = getParents(className);
        if (parents.length !== 0) {
            if (parents.indexOf(ancestorName) !== -1) {
                isAncestor = true;
            } else {
                for (i = 0; i < length; i++) {
                    isAncestor = _searchParent(parents[i], ancestorName);
                    if (isAncestor) {
                        break;
                    }
                }
            }
        }
        return isAncestor;
    }

    if (name !== parentName) {
        parents = getParents(name);
        length = parents.length;

        if (parents.length !== 0) {
            if (parents.indexOf(parentName) !== -1) {
                result = true;
            } else {
                for (i = 0; i < length; i++) {
                    result = _searchParent(parents[i], parentName);
                    if (result) {
                        break;
                    }
                }
            }
        }
    } else {
        result = true;
    }

    return result;
}


/* exports */


/**
 * This module manages Runtime metamodel. <br>
 * Runtime metamodel loads schemas and types, analyzes them and creates the component classes and related RuntimeDatabaseCollections.
 * 
 * @module runtime
 * @submodule runtime-metamodel
 * @requires runtime-db
 * @requires runtime-log
 * @requires runtime-component
 * @requires runtime-workflow
 * @class runtime-metamodel
 * @static
 */


/**
 * Init the metamodel.
 * @method init
 */
exports.init = init;


/**
 * Remove the data of the metamodel from the memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Add a new schema.
 * @method schema
 * @param {JSON} importedSchema a schema to add
 */
exports.schema = schema;


/**
 * Add a new model.
 * @method model
 * @param {JSON} importedModel a mode to add
 */
exports.model = model;


/**
 * Add a new type.
 * @method type
 * @param {JSON} importedType type to add
 */
exports.type = type;


/**
 * Create the metamodel.
 * @method create
 */
exports.create = create;


/**
 * Get a schema.
 * @method getSchema
 * @param {String} name name of the schema
 * @return {Object} the schema
 */
exports.getSchema = getSchema;


/**
 * Get a model.
 * @method getModel
 * @param {String} name name of the model
 * @return {Object} the model
 */
exports.getModel = getModel;


/**
 * Get the definition of the metamodel.
 * @method getMetaDef
 * @return {Object} the metadefinition of the metamodel
 */
exports.getMetaDef = getMetaDef;


/**
 * Get parents of a shema if any.
 * @method getParents
 * @param {String} id id of the schema
 * @return {Array} id id of the parents
 */
exports.getParents = getParents;


/**
 * Check if a class inherits from another one
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @return {Boolean} true if the component inherit from the specific class name
 */
exports.inheritFrom = inheritFrom;


/**
 * Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 * @method isValidObject
 * @param {Object} object object to validate
 * @param {Object} schema schema that validates the object
 * @param {Boolean} strict true if validation is strict
 * @param {Boolean} cleanRef true if we remove the reference to the object
 * @return {Boolean} true is the object is compliant with the schema
 */
exports.isValidObject = isValidObject;


/**
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object object to prepare
 * @param {Object} schema schema that validates the object
 */
exports.prepareObject = prepareObject;


/**
 * Check if a value is compliant with a type.
 * @method isValidType
 * @param {Object} object object to validate
 * @param {String} type type to use for validation
 * @return {Boolean} true if the object is compliant with the type
 */
exports.isValidType = isValidType;


/**
 * Check if a value is compliant with a type enum.
 * @method isValidEnum
 * @param {String|Object} value value to validate
 * @param {Schema} schema schema to use for validation
 * @return {Boolean} true if the object is compliant with the enum
 */
exports.isValidEnum = isValidEnum;


/**
 * Check if the name is a correct state for the component.
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @return {Boolean} true if the name is a correct state for the component
 */
exports.isValidState = isValidState;


/**
 * Check if an attribute of the schema is an event.
 * @method isEvent
 * @param {String} name name of the attribute
 * @param {String} id component id
 * @return {Boolean} true if the attribute is an event
 */
exports.isEvent = isEvent;


/**
 * Check if an attribute of the schema is a property.
 * @method isProperty
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a property
 */
exports.isProperty = isProperty;


/**
 * Check if an attribute of the schema is a link.
 * @method isLink
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a link
 */
exports.isLink = isLink;


/**
 * Check if an attribute of the schema is a collection.
 * @method isCollection
 * @param {String} name name of the collection
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a collection
 */
exports.isCollection = isCollection;


/**
 * Check if an attribute of the schema is a method.
 * @method isMethod
 * @param {String} name name of the method
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a method
 */
exports.isMethod = isMethod;


/**
 * Check if an attribute of the schema is a structure.
 * @method isStructure
 * @param {String} name name of the propertys
 * @param {String} id component id
 * @return {Boolean} true if the property is a structure
 */
exports.isStructure = isStructure;


/**
 * Get a type.
 * @method getType
 * @param {String} name of the type
 * @return {Object} the type
 */
exports.getType = getType;
},{"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./workflow.js":10}],8:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module is the main module of Runtime. <br>
 * It inits Runtime metamodel and loads Runtime core system.
 * 
 * @module runtime
 * @requires runtime-component
 * @requires runtime-metamodel
 * @requires runtime-system
 * @requires runtime-helper
 * @main runtime
 * @class runtime
 * @static
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $system = require('../build/system/system.js');
var $helper = require('./helper.js');


/* Private Property */

var sytemId = '',
    system = '';


/* Polyfill */
$helper.polyfill();

/* Init Metamodel */


$metamodel.init();


/* Init runtime from a system */


sytemId = $db.system($system.system);
system = $component.get(sytemId);
system.main();


/* exports */


/**
 * This module is the main module of Runtime. <br>
 * It inits Runtime metamodel and loads Runtime core system.
 * 
 * @module runtime
 * @requires runtime-component
 * @requires runtime-metamodel
 * @requires runtime-system
 * @main runtime
 * @class runtime
 * @static
 */


/**
 * Runtime instance.
 * @property runtime
 * @type Runtime
 */
module.exports = $component.get('runtime');
},{"../build/system/system.js":1,"./component.js":3,"./db.js":4,"./helper.js":5,"./metamodel.js":7}],9:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * This module manages the states of all thecomponents.
 * 
 * @module runtime
 * @submodule runtime-state
 * @requires runtime-db
 * @class runtime-state
 * @static
 */

'use strict';

var $db = require('./db.js');


/* Private properties */


var store = {};


/* Public methods */


/*
 * Set the state of a component.
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 * @param {Object} parameters parameters
 */
function set(id, state, parameters) {
    store[id] = {
        "name": state,
        "parameters": {
            "data": parameters
        }
    };
    $db.store.RuntimeState[id] = {
        "name": state,
        "parameters": {
            "data": parameters
        }
    };
}


/*
 * Get the state of a component.
 * @method get 
 * @param {String} id id of the component
 * @return {String} state of the component
 */
function get(id) {
    return store[id];
}


/*
 * Remove all the states of the components from the memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the states of all the components.
 * 
 * @module runtime
 * @submodule runtime-state
 * @requires runtime-db
 * @class runtime-state
 * @static
 */


/**
 * Set the state of a component.
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 */
exports.set = set;


/**
 * Get the state of a component.
 * @method get 
 * @param {String} id id of the component
 * @return {String} the state of the component.
 */
exports.get = get;


/**
 * Remove all the states of the components from the memory.
 * @method clear
 */
exports.clear = clear;
},{"./db.js":4}],10:[function(require,module,exports){
/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This module manages the workflow of Runtime. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and runtime. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module runtime
 * @submodule runtime-workflow
 * @requires runtime-metamodel
 * @requires runtime-component
 * @requires runtime-behavior
 * @requires runtime-channel
 * @requires runtime-state
 * @requires runtime-helper
 * @requires runtime-log
 * @requires runtime-db
 * @class runtime-workflow 
 * @static
 */

'use strict';

var $metamodel = require('./metamodel.js');
var $component = require('./component.js');
var $behavior = require('./behavior.js');
var $state = require('./state.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $db = require('./db.js');


/* Private methods */


/**
 * The RuntimeError class.
 * @class RuntimeError
 * @constructor
 * @param {String} message message of the error
 */
function RuntimeError(message) {
    this.message = message;
    this.name = "RuntimeError";
}
RuntimeError.prototype = new Error();
RuntimeError.prototype.constructor = RuntimeError;


/*
 * Get all the names of the parameter of a method.
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} the names of all parameters of the method for the class
 * @private
 */
function getParamNames(id, methodName) {
    var method = null,
        params = [],
        result = [],
        length = 0,
        i = 0;

    if ($metamodel.getModel(id)) {
        method = $metamodel.getModel(id)[methodName];
    } else {
        $log.unknownModel(id);
    }

    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                result.push(params[i].name);
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/* 
 * Get the number of parameters of a method.
 * @method getParamNumber
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} number of parameters min and max for the method
 * @private
 */
function getParamNumber(id, methodName) {
    var method = null,
        params = [],
        result = [],
        length = 0,
        i = 0,
        min = 0,
        max = 0;

    if ($metamodel.getModel(id)) {
        method = $metamodel.getModel(id)[methodName];
    } else {
        $log.unknownModel(id);
    }

    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                if (typeof params[i].mandatory === 'undefined' || params[i].mandatory === true) {
                    min = min + 1;
                }
                max = max + 1;
            }
        }
        result.push(min);
        result.push(max);
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/* 
 * Set the default value of the non mandatory parameters of a method.
 * @method setDefaultValue
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @param {Array} args arguments
 * @return {Array} arguments with default values
 * @private
 */
function setDefaultValue(id, methodName, args) {
    var method = null,
        params = [],
        result = [],
        length = 0,
        i = 0;

    method = $metamodel.getModel(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                if (params[i].mandatory === false && typeof args[i] === 'undefined') {
                    result.push(params[i].default);
                } else {
                    result.push(args[i]);
                }
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/*
 * Get the type returned by a method.
 * @method getReturnType
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {String} the type returned by the method
 * @private
 */
function getReturnType(id, methodName) {
    var resultType = null,
        result = null;

    if ($metamodel.getModel(id)) {
        resultType = $metamodel.getModel(id)[methodName].result;
    } else {
        $log.unknownModel(id);
    }

    if (resultType) {
        result = resultType;
    }
    return result;
}


/*
 * Get all the type of the parameters of a method
 * @method getParamTypes
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} the types of the parameters of a method
 * @private
 */
function getParamTypes(id, methodName) {
    var method = null,
        params = [],
        result = [],
        length = 0,
        i = 0;

    if ($metamodel.getModel(id)) {
        method = $metamodel.getModel(id)[methodName];
    } else {
        $log.unknownModel(id);
    }

    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                result.push(params[i].type);
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/*
 * Check if conditions on output are compliant with the metamodel
 * @method checkResult
 * @param {Object} params
 * @return {Boolean} true if conditions on ouput are compliant with the metamodel
 * @private
 */
function checkResult(params) {
    params = params || {};

    var component = params.component || null,
        methodName = params.methodName || '',
        methodResult = null,
        componentClassName = '',
        returnType = null,
        result = true;

    if (typeof params.methodResult !== 'undefined') {
        methodResult = params.methodResult;
    } else {
        methodResult = undefined;
    }

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    returnType = getReturnType(componentClassName, methodName);

    if (returnType !== null) {
        switch (true) {
            case returnType === 'any':
                break;
            case returnType === 'array':
                if (!Array.isArray(methodResult)) {
                    result = false;
                    $log.invalidResultType(component.id(), methodName, returnType, null);
                }
                break;
            default:
                if (typeof methodResult !== returnType) {
                    result = false;
                    $log.invalidResultType(component.id(), methodName, returnType, typeof methodResult);
                }
                break;
        }
    }

    return result;
}


/*
 * Get the actions of the specified state
 * @method getActions
 * @param {Object} component a Runtime component
 * @param {String} name name of the state
 * @param {Boolean} isEvent true if the state is an event
 * @return {Array} list of the actions
 * @private
 */
function getActions(component, name, isEvent) {
    var action = $behavior.getActions(component.id(), name),
        parents = [],
        length = 0,
        i = 0,
        parent = null;

    if (!action.length || isEvent) {
        if (component.constructor.name !== 'Function') {
            action = action.concat(getActions($component.get(component.constructor.name), name, isEvent));
        } else {
            parents = $metamodel.getParents(component.name);
            length = parents.length;
            for (i = 0; i < length; i++) {
                parent = $component.get(parents[i]);
                if (parent) {
                    action = action.concat(getActions(parent, name, isEvent));
                } else {
                    $log.unknownComponent(parents[i], component.name);
                }
                if (action.length) {
                    break;
                }
            }
        }
    }

    if (action.length) {
        action.reverse();
    }

    return action;
}


/*
 * Call an action and make some Dependency Injection if it is a core action
 * @method callAction
 * @param {Component} component
 * @param {String} state name of the state
 * @param {Object} action action
 * @param {Array} params parameters of the action
 * @param {Boolean} isEvent is the action a callback of an event
 * @return {Boolean} result of the action
 */
function callAction(component, state, action, params, isEvent) {
    var result = null,
        injectedParams = [],
        componentClassName = '',
        i = 0,
        length = 0;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    if (!$metamodel.isProperty(state, componentClassName) && !$metamodel.isLink(state, componentClassName) && !$metamodel.isCollection(state, componentClassName)) {
        params = setDefaultValue(componentClassName, state, params);
    }

    try {
        length = params.length;
        for (i = 0; i < length; i++) {
            injectedParams.push(params[i]);
        }
        if (action.useCoreAPI) {
            injectedParams.push($component);
            injectedParams.push($db);
            injectedParams.push($metamodel);
            injectedParams.push(exports);
            injectedParams.push($behavior);
            injectedParams.push($state);
            injectedParams.push($log);
        }

        if (isEvent) {
            setTimeout(action.action.bind.apply(action.action, [component].concat(injectedParams)), 0);
        } else {
            result = action.action.apply(component, injectedParams);
        }
    } catch (e) {
        if (e instanceof RuntimeError) {
            throw e;
        } else {
            if (component && component.error) {
                component.error({
                    "message": "error when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
            if ($helper.getRuntime()) {
                $helper.getRuntime().error({
                    "message": "error when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
            $log.actionInvokeError(state, component.id(), e.message);
        }
    }

    return result;
}


/* Public methods */


/*
 * Check if an action has the valid number of parameter.
 * @method validParamNumbers
 * @param {String} className name the class
 * @param {String} state state on which the action applied
 * @param {Function} action action
 * @return {Boolean} true if the action is the valid number of parameters
 */
function validParamNumbers(className, state, action) {
    var func = '',
        beginBody = -1,
        header = '',
        funcParams = '',
        params = [],
        paramNumber = 0,
        modelNumberParam = [],
        isProperty = false,
        isLink = false,
        isCollection = false,
        result = false;

    // check number of parameters of the action
    func = action.toString();
    beginBody = func.indexOf('{');
    header = func.substring(0, beginBody);
    funcParams = header.split('(')[1].replace(')', '').trim();
    params = funcParams.split(',');
    if (params[0] === '') {
        params = [];
    }
    paramNumber = params.length;

    // get the number min and max of valid parameters
    isProperty = $metamodel.isProperty(state, className);
    isLink = $metamodel.isLink(state, className);
    isCollection = $metamodel.isCollection(state, className);

    switch (true) {
        case isCollection:
            modelNumberParam = [3, 3];
            break;
        case isProperty:
            modelNumberParam = [1, 1];
            break;
        case isLink:
            modelNumberParam = [1, 1];
            break;
        default:
            modelNumberParam = getParamNumber(className, state);
            break;
    }

    // compare
    if (modelNumberParam[0] <= paramNumber && paramNumber <= modelNumberParam[1]) {
        result = true;
    }

    return result;
}


/*
 * Check if conditions on input are compliant with the model before calling the action.
 * @method checkParams
 * @param {Object} params
 * @return {Boolean} true if condition on input are compliant with the model
 */
function checkParams(params) {
    params = params || {};

    var component = params.component || null,
        methodName = params.methodName || '',
        args = params.args || '',
        paramsName = [],
        paramsType = [],
        paramsNumber = [],
        componentClassName = '',
        length = args.length,
        i = 0,
        param = null,
        result = true,
        isProperty = false,
        isLink = false,
        isCollection = false;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    isProperty = $metamodel.isProperty(methodName, componentClassName);
    isLink = $metamodel.isLink(methodName, componentClassName);
    isCollection = $metamodel.isCollection(methodName, componentClassName);
    paramsName = getParamNames(componentClassName, methodName);

    switch (true) {
        case isCollection:
            paramsType = ['number', $metamodel.getModel(componentClassName)[methodName].type[0], 'string'];
            paramsNumber = [3, 3];
            break;
        case isProperty:
            paramsType = [$metamodel.getModel(componentClassName)[methodName].type];
            paramsNumber = [1, 1];
            break;
        case isLink:
            paramsType = [$metamodel.getModel(componentClassName)[methodName].type];
            paramsNumber = [1, 1];
            break;
        default:
            paramsType = getParamTypes(componentClassName, methodName);
            paramsNumber = getParamNumber(componentClassName, methodName);
            break;
    }

    // case of object
    if (typeof length === 'undefined') {
        length = 1;
    }

    if (length < paramsNumber[0] || paramsNumber[1] < length) {
        result = false;
        $log.invalidParamNumber(component.id(), methodName);
    }

    for (i = 0; i < length; i++) {
        param = args[i];
        if (typeof param === 'undefined') {
            if (i < paramsNumber[0]) {
                result = false;
                $log.invalidParamNumber(component.id(), methodName);
            } else {
                continue;
            }
        } else {
            if (!$metamodel.isValidType(param, paramsType[i])) {
                result = false;
                $log.invalidParamType(component.id(), methodName, paramsName[i]);
            }
        }
    }

    return result;
}


/*
 * Call an action that comes from an event.
 * @method action
 * @param {String} behaviorId id of the behavior
 * @param {Array} params parameters
 */
function action(behaviorId, params) {
    var isEvent = false,
        isProperty = false,
        isLink = false,
        isCollection = false,
        behaviors = [],
        behavior = null,
        component = null,
        componentClassName = '',
        actionFromMemory = null;

    behaviors = $db.RuntimeBehavior.find({
        "_id": behaviorId
    });

    actionFromMemory = $behavior.get(behaviorId);

    if (behaviors.length === 1) {
        behavior = behaviors[0];

        component = $component.get(behavior.component);
        if (component) {

            if (component.constructor.name === 'Function') {
                componentClassName = component.name;
            } else {
                componentClassName = component.constructor.name;
            }

            isEvent = $metamodel.isEvent(behavior.state, componentClassName);
            isProperty = $metamodel.isProperty(behavior.state, componentClassName);
            isLink = $metamodel.isLink(behavior.state, componentClassName);
            isCollection = $metamodel.isCollection(behavior.state, componentClassName);

            if (isEvent || isProperty || isCollection || isLink) {
                callAction(component, behavior.state, {
                    "useCoreAPI": behavior.useCoreAPI,
                    "action": actionFromMemory
                }, params, true);
            }
        }
    }
}


/*
 * Change the state of a component.
 * 
 * Worklow:<br>
 * <br>
 * 0. Check if the component has not been destroyed <br>
 * 1. Check if the state is a method, a property or an event <br>
 * 2. Search if there is a behavior with actions for the new state <br>
 * 3. If so, get the action(s) <br>
 * 4. Check if the inputs are compliants with the metamodel <br>
 * 5. Call the action(s) <br>
 * 6. If a method, check if the output are compliants with the metamodel <br>
 * 7. If all is ok, the state of the component is updated <br>
 * 8. Return the result <br>
 * 
 * @method state
 * @param {Object} params params to change the state <br>
 * {String} component id of the component <br>
 * {String} state state of the component <br>
 * {Array} data parameters to send to the action
 */
function state(params) {

    params = params || {};
    params.component = params.component || '';
    params.state = params.state || '';
    params.data = params.data || [];

    var component = null,
        currentState = '',
        actions = [],
        action = null,
        result = null,
        i = 0,
        length = 0,
        componentClassName = false,
        isProperty = false,
        isLink = false,
        isCollection = false,
        isEvent = false;

    currentState = $state.get(params.component);

    if (currentState === 'destroy') {
        $log.invalidUseOfComponent(params.component);
    }

    component = $component.get(params.component);
    if (component) {

        if (component.constructor.name === 'Function') {
            componentClassName = component.name;
        } else {
            componentClassName = component.constructor.name;
        }
        isEvent = $metamodel.isEvent(params.state, componentClassName);
        isProperty = $metamodel.isProperty(params.state, componentClassName);
        isLink = $metamodel.isLink(params.state, componentClassName);
        isCollection = $metamodel.isCollection(params.state, componentClassName);
        actions = getActions(component, params.state, isEvent);
    }

    if (actions.length) {

        if (checkParams({
            "component": component,
            "methodName": params.state,
            "args": params.data
        })) {

            if (!isEvent &&
                !isProperty &&
                !isLink &&
                !isCollection) {
                action = actions[0];
                result = callAction(component, params.state, action, params.data, false);

                checkResult({
                    "component": component,
                    "methodName": params.state,
                    "methodResult": result
                });

            } else {

                length = actions.length;
                for (i = 0; i < length; i++) {
                    action = actions[i];
                    callAction(component, params.state, action, params.data, true);
                }

                $state.set(component.id(), params.state, params.data);
            }
        }
        return result;
    } else {
        if (component && (isEvent || isProperty || isLink || isCollection)) {
            $state.set(component.id(), params.state, params.data);
        }
    }
}


/*
 * Stop the workflow engine.
 * @method stop
 * @param {Object} params parameters <br>
 * {Boolean} error true if the stop of the workflow is due to an error (default false) <br>
 * {String} message error message to log (default '')
 */
function stop(params) {
    params = params || {};

    if (typeof params.error === 'undefined') {
        params.error = false;
    }
    params.message = params.message || '';

    exports.state = function () {
    };

    if (params.error) {
        if (params.message) {
            throw new RuntimeError('runtime has been stopped because ' + params.message);
        } else {
            throw new RuntimeError('runtime has been stopped because of an unknown error');
        }
    } else {
        if (params.message) {
            console.error('runtime: runtime has been stopped because ' + params.message);
        } else {
            console.error('runtime: runtime has been stopped');
        }
    }
}


/*
 * Restart the workflow engine from the last state.
 * @method restart
 */
function restart() {
    exports.state = state;
    $log.workflowRestarted();
}


/* exports */


/**
 * This module manages the workflow of Runtime. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and of Runtime instance. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module runtime
 * @submodule runtime-workflow
 * @requires runtime-metamodel
 * @requires runtime-component
 * @requires runtime-behavior
 * @requires runtime-channel
 * @requires runtime-state
 * @requires runtime-helper
 * @requires runtime-log
 * @requires runtime-db
 * @class runtime-workflow 
 * @static
 */


/**
 * Change the state of a component.
 * 
 * Worklow:<br>
 * <br>
 * 0. Check if the component has not been destroyed <br>
 * 1. Check if the state is a method or an event <br>
 * 2. Search if there is a behavior with an action for the new state <br>
 * 3. If so, get the action(s) <br>
 * 4. Check if the conditons on input are compliant with the metamodel <br>
 * 5. Call the action(s) <br>
 * 6. If not an of event, check if the conditons on input are compliant with the metamodel <br>
 * 7. If all is ok, the state of the component is updated <br>
 * 8. Return the result <br>
 * 
 * @method state
 * @param {Object} params params to change the state <br>
 * {String} component id of the component <br>
 * {String} state state of the component <br>
 * {Array} data parameters to send to the action
 */
exports.state = state;


/**
 * Stop the workflow engine.
 * @method stop
 * @param {Object} params parameters <br>
 * {Boolean} error true if the stop of the workflow is due to an error (default false) <br>
 * {String} message error message to log (default '')
 */
exports.stop = stop;


/**
 * Restart the workflow engine from the last state.
 * @method restart
 */
exports.restart = restart;


/**
 * Check if conditions on input are compliant with the model before calling the action.
 * @method checkParams
 * @param {Object} params
 * @return {Boolean} true if condition on input are compliant with the model
 */
exports.checkParams = checkParams;


/**
 * Check if an action has the valid number of parameter.
 * @method validParamNumbers
 * @param {String} className name the class
 * @param {String} state state on which the action applied
 * @param {Function} action action
 * @return {Boolean} true if the action is the valid number of parameters
 */
exports.validParamNumbers = validParamNumbers;


/**
 * Call an action that comes from an event.
 * @method action
 * @param {String} behaviorId id of the behavior
 * @param {Array} params parameters
 */
exports.action = action;
},{"./behavior.js":2,"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9}]},{},[8])(8)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbjZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3J1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDLzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4dENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBEZXNpZ24gfCBDcmVhdGUgfCBDb21wb3NlXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKlxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtc3lzdGVtXG4gKiBAY2xhc3MgcnVudGltZS1zeXN0ZW1cbiAqIEBzdGF0aWMgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cblxuLypcbiAqIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7UnVudGltZVN5c3RlbX0gc3lzdGVtXG4gKi9cbnZhciBzeXN0ZW0gPSB7XG4gICAgXCJtb2RlbHNcIjoge1xuICAgICAgICBcIjEzOGE4MWZhMWYxNjQzNVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzOGE4MWZhMWYxNjQzNVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVBZG1pblwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IHt9LFxuICAgICAgICAgICAgXCJkZXNpZ25lcldpbmRvd1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjEzNWM3MTA3ODgxMGFmMlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzNWM3MTA3ODgxMGFmMlwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVDaGFubmVsXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwibG9hZFN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVTY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVsZXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjcmVhdGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZU1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVsZXRlTW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlbGV0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZWxldGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvclwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVCZWhhdmlvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJlaGF2aW9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlbGV0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzZW5kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxZjQxNDE2NzE1MTRjMmNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZjQxNDE2NzE1MTRjMmNcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImtleVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJrZXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hhbmdlZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsZWFyXCI6IHt9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImtleVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3RvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRjN2MxMDViMzFhMTYwXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjN2MxMDViMzFhMTYwXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJsb2FkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCIwLjAuMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjFiZDlmMTE4ZDExNmY3M1wiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUJlaGF2aW9yXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJqYXZhc2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxYmQ5ZjExOGQxMTZmNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIjEyY2JkMWVkMmExMGJmZFwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxpbmtcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmNiZDFlZDJhMTBiZmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIjEyMzc1MWNiNTkxZGUyNlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyMzc1MWNiNTkxZGUyNlwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib25cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYW5kbGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInVzZUNvcmVBUElcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpc0NvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9mZlwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvcklkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2xhc3NJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb25mXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVycm9yUGFyYW1cIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMWU4M2UxY2U5NTE1OTE4XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYXJhbXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW5zZXJ0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjbGFzc0lkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudElkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRyaWJ1dGVOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRyaWJ1dGVWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNsYXNzSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTgzZTFjZTk1MTU5MThcIlxuICAgICAgICB9LFxuICAgICAgICBcIjEyMDliMWRjZmQxZjZhN1wiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibG9nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJ3YXJuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlYnVnXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2FyblwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxMjA5YjFkY2ZkMWY2YTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIjEyZDViMWE1ZTcxMDhlMlwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZU1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyZDViMWE1ZTcxMDhlMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTYxZjgxMmE4YTEzZmU1XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYW55XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2MWY4MTJhOGExM2ZlNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWQ3ZDUxY2MyMTEyZGUyXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RhdGVcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWQ3ZDUxY2MyMTEyZGUyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZDI3NjE1OWZkMTNkZjlcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiMC4wLjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYXNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlbHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZWFkeVwiOiB7fSxcbiAgICAgICAgICAgIFwic3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwibWFpblwiOiB7fSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWQyNzYxNTlmZDEzZGY5XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJzY2hlbWFzXCI6IHtcbiAgICAgICAgXCIxMDM3NDE4MDU4MWE0MWZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDM3NDE4MDU4MWE0MWZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJkZXNpZ25lcldpbmRvd1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDRhZDFmNDg1MTgzNzZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDRhZDFmNDg1MTgzNzZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2hhbm5lbFwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeW5jXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwibG9hZFN5c3RlbVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImRlbGV0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZU1vZGVsXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlTW9kZWxcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJkZWxldGVNb2RlbFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZVR5cGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiZGVsZXRlVHlwZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImRlbGV0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZUJlaGF2aW9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlQmVoYXZpb3JcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJkZWxldGVCZWhhdmlvclwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VuZFwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmZhODE4MWNlMTI3YTBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmZhODE4MWNlMTI3YTBcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0b3JlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZ2V0XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInNldFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZW1vdmVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY2xlYXJcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY2hhbmdlZFwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmUyMTFkNGNkMTIwYTZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmUyMTFkNGNkMTIwYTZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBcImxvYWRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE0ODFhMTgzNjgxMzc4N1wiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUJlaGF2aW9yXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0ODFhMTgzNjgxMzc4N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWI3OGQxYWNjNjFlNWU4XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRob2RcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibWV0aG9kc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibGlua3NcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWI3OGQxYWNjNjFlNWU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTFkZjExZTJiMTlmZGVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTFkZjExZTJiMTlmZGVcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjbGFzc0luZm9cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJvblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJvZmZcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVxdWlyZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJkZXN0cm95XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImluaXRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTIwMGExMTliZjE3Yjg0XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25zXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImluc2VydFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInJlbW92ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyMDBhMTE5YmYxN2I4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTBmZmYxZTA4NTFjNDE5XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImxldmVsXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGVidWdcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ3YXJuXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEwZmZmMWUwODUxYzQxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWJkYzExNWM0YjE3MmZkXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJmcm9tXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiZGMxMTVjNGIxNzJmZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJkMzgxODQzNDFhZTk2XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1vZGVsXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyZDM4MTg0MzQxYWU5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWYxZmIxZTg1ZjFhMzdlXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RhdGVcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW10sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInBhcmFtZXRlcnNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxZjFmYjFlODVmMWEzN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE3M2EzMWQwNDAxYjViYVwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVN5c3RlbVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzY2hlbWFzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibW9kZWxzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYmVoYXZpb3JzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidHlwZXNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3luY1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJtYWluXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInJlYWR5XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTczYTMxZDA0MDFiNWJhXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJ0eXBlc1wiOiB7XG4gICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJjc3NcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3NzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJkYXRlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJyb3JQYXJhbVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJlcnJvclBhcmFtXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJodG1sXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImh0bWxcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJqYXZhc2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImphdmFzY3JpcHRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJqc29uXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImpzb25cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaW5rXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImxpbmtcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImxvZ1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJsb2dcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgXCJkZWJ1Z1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgIFwid2FyblwiLFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXRob2RcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhcmFtZXRlclwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwYXJhbWV0ZXJcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICBcIjFjMDBjMTA3ZTAxYzliM1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjMDBjMTA3ZTAxYzliM1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGFydFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydCgpIHtcXG4gICAgdmFyIFJ1bnRpbWVDaGFubmVsID0gbnVsbCxcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsID0gbnVsbDtcXG5cXG4gICAgaWYgKCF0aGlzLnJlcXVpcmUoJ2NoYW5uZWwtYWRtaW4nKSkge1xcbiAgICAgICAgUnVudGltZUNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ1J1bnRpbWVDaGFubmVsJyk7XFxuICAgICAgICBydW50aW1lQ2hhbm5lbCA9IG5ldyBSdW50aW1lQ2hhbm5lbCh7XFxuICAgICAgICAgICAgJ19pZCc6ICdjaGFubmVsLWFkbWluJyxcXG4gICAgICAgICAgICAnX2NvcmUnOiB0cnVlXFxuICAgICAgICB9KTtcXG4gICAgICAgIFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3NlbmQnLCBmdW5jdGlvbiBzZW5kKG1lc3NhZ2UpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3coKS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgJyonKTtcXG4gICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gc2NoZW1hIGNoYW5nZSBldmVudHNcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdjcmVhdGVTY2hlbWEnLCBmdW5jdGlvbiBjcmVhdGVTY2hlbWEoaWQsIHNjaGVtYSkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLnNjaGVtYShzY2hlbWEpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3VwZGF0ZVNjaGVtYScsIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShpZCwgc2NoZW1hKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKHNjaGVtYSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgZmFsc2UsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICBydW50aW1lQ2hhbm5lbC5vbignZGVsZXRlU2NoZW1hJywgZnVuY3Rpb24gZGVsZXRlU2NoZW1hKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHZhciBzZWFyY2ggPSAkZGIuUnVudGltZVNjaGVtYS5maW5kKHsgJ19pZCc6IGlkIH0pLFxcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWUgPSAnJyxcXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9ICcnO1xcblxcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9IHNlYXJjaFswXS5fbmFtZTtcXG4gICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVTY2hlbWEucmVtb3ZlKHsgJ19pZCc6IGlkIH0pO1xcblxcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGIuUnVudGltZU1vZGVsLmZpbmQoeyAnX25hbWUnOiBtb2RlbE5hbWUgfSk7XFxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgICAgICBtb2RlbElkID0gc2VhcmNoWzBdLl9pZDtcXG4gICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lTW9kZWwucmVtb3ZlKHsgJ19pZCc6IG1vZGVsSWQgfSk7XFxuICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LnJlbW92ZUZyb21NZW1vcnkobW9kZWxOYW1lKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGIuUnVudGltZUdlbmVyYXRlZE1vZGVsLmZpbmQoeyAnX25hbWUnOiBtb2RlbE5hbWUgfSk7XFxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgICAgICBtb2RlbElkID0gc2VhcmNoWzBdLl9pZDtcXG4gICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwucmVtb3ZlKHsgJ19pZCc6IG1vZGVsSWQgfSk7XFxuICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LnJlbW92ZUZyb21NZW1vcnkobW9kZWxOYW1lKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIC8vIG1vZGVsIGNoYW5nZSBldmVudHNcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdjcmVhdGVNb2RlbCcsIGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKGlkLCBtb2RlbCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLm1vZGVsKG1vZGVsKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCd1cGRhdGVNb2RlbCcsIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsKGlkLCBtb2RlbCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLm1vZGVsKG1vZGVsKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdkZWxldGVNb2RlbCcsIGZ1bmN0aW9uIGRlbGV0ZU1vZGVsKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHZhciBzZWFyY2ggPSAkZGIuUnVudGltZU1vZGVsLmZpbmQoeyAnX2lkJzogaWQgfSksXFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9ICcnLFxcbiAgICAgICAgICAgICAgICBtb2RlbElkID0gJyc7XFxuXFxuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lID0gc2VhcmNoWzBdLl9uYW1lO1xcbiAgICAgICAgICAgICAgICAkZGIuUnVudGltZU1vZGVsLnJlbW92ZSh7ICdfaWQnOiBpZCB9KTtcXG4gICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVGcm9tTWVtb3J5KG1vZGVsTmFtZSk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHNlYXJjaCA9ICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwuZmluZCh7ICdfbmFtZSc6IG1vZGVsTmFtZSB9KTtcXG4gICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICBtb2RlbElkID0gc2VhcmNoWzBdLl9pZDtcXG4gICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVHZW5lcmF0ZWRNb2RlbC5yZW1vdmUoeyAnX2lkJzogbW9kZWxJZCB9KTtcXG4gICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVGcm9tTWVtb3J5KG1vZGVsTmFtZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICAvLyB0eXBlIGNoYW5nZSBldmVudHNcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdjcmVhdGVUeXBlJywgZnVuY3Rpb24gY3JlYXRlVHlwZShpZCwgdHlwZSkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLnR5cGUodHlwZSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgZmFsc2UsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICBydW50aW1lQ2hhbm5lbC5vbigndXBkYXRlVHlwZScsIGZ1bmN0aW9uIHVwZGF0ZVR5cGUoaWQsIHR5cGUpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCd3YXJuJyk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS50eXBlKHR5cGUpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2RlbGV0ZVR5cGUnLCBmdW5jdGlvbiBkZWxldGVUeXBlKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgICRkYi5SdW50aW1lVHlwZS5yZW1vdmUoeyAnbmFtZSc6IGlkIH0pO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICAvLyBjb21wb25lbnQgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2NyZWF0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChtb2RlbCwgY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgJGRiW21vZGVsXS5pbnNlcnQoY29tcG9uZW50KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICBydW50aW1lQ2hhbm5lbC5vbigndXBkYXRlQ29tcG9uZW50JywgZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KGlkLCBjb2xsZWN0aW9uLCBjb21wb25lbnQpIHtcXG4gICAgICAgICAgICAkZGJbY29sbGVjdGlvbl0udXBkYXRlKHsnX2lkJzogaWR9LCBjb21wb25lbnQsIHsndXBzZXJ0JzogdHJ1ZX0pO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdkZWxldGVDb21wb25lbnQnLCBmdW5jdGlvbiBkZWxldGVDb21wb25lbnQoaWQsIGNvbGxlY3Rpb24pIHtcXG4gICAgICAgICAgICAkZGJbY29sbGVjdGlvbl0ucmVtb3ZlKHsnX2lkJzogaWR9KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICAvLyBiZWhhdmlvciBjaGFuZ2UgZXZlbnRzXFxuICAgICAgICBydW50aW1lQ2hhbm5lbC5vbignY3JlYXRlQmVoYXZpb3InLCBmdW5jdGlvbiBjcmVhdGVCZWhhdmlvcihjb21wb25lbnQpIHtcXG4gICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLmluc2VydChjb21wb25lbnQpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCd1cGRhdGVCZWhhdmlvcicsIGZ1bmN0aW9uIHVwZGF0ZUJlaGF2aW9yKGlkLCBiZWhhdmlvcikge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZShpZCkuYWN0aW9uKGJlaGF2aW9yLmFjdGlvbik7XFxuICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnbWFpbicpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKGJlaGF2aW9yLmNvbXBvbmVudCkubWFpbigpOyAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdkZWxldGVCZWhhdmlvcicsIGZ1bmN0aW9uIGRlbGV0ZUJlaGF2aW9yKGlkKSB7XFxuICAgICAgICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5yZW1vdmUoeydfaWQnOiBpZH0pOyAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuICAgICBcXG4gICAgICAgIC8vIFN5c3RlbSBEZXNpZ25lciBldmVudFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3N5bmMnLCBmdW5jdGlvbiBzeW5jKCkge1xcbiAgICAgICAgICAgIHZhciBkZXNpZ25lcldpbmRvdyA9IHRoaXMucmVxdWlyZSgnYWRtaW4nKS5kZXNpZ25lcldpbmRvdygpLFxcbiAgICAgICAgICAgICAgICBzeXN0ZW0gPSBudWxsO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnYWRtaW4nKS5kZXNpZ25lcldpbmRvdyhudWxsKTtcXG4gICAgICAgICAgICBzeXN0ZW0gPSBKU09OLnBhcnNlKHRoaXMucmVxdWlyZSgnZGInKS5zeXN0ZW0oKSk7XFxuICAgICAgICAgICAgZGVzaWduZXJXaW5kb3cgPSB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3coZGVzaWduZXJXaW5kb3cpO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHRoaXMubG9hZFN5c3RlbShzeXN0ZW0pO1xcbiAgICAgICAgfSwgZmFsc2UsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xcbiAgICAgICAgICAgIHZhciBkYXRhID0gbnVsbDtcXG4gICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgXFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5ldmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgXFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5mcm9tICE9PSAndW5kZWZpbmVkJyAmJiAgXFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5kYXRhICE9PSAndW5kZWZpbmVkJykge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25lcldpbmRvdyhldmVudC5zb3VyY2UpO1xcbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVNZXNzYWdlLmluc2VydChkYXRhKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xcbiAgICAgICAgXFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmluZm8oJ2FkbWluIGlzIHN0YXJ0ZWQnKTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykuaW5mbygnYWRtaW4gaXMgYWxyZWFkeSBzdGFydGVkJyk7XFxuICAgIH1cXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWNhMGYxMDIwNDEyZDRmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWNhMGYxMDIwNDEyZDRmXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZ2V0XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGdldChrZXkpIHtcXG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XFxuICAgIFxcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RvcmUoKVtrZXldKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLnN0b3JlKClba2V5XTtcXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTY3NjQxMDBkNTFiNWY4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTY3NjQxMDBkNTFiNWY4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2V0XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XFxuICAgIHZhciBzdG9yZSA9IHRoaXMuc3RvcmUoKSxcXG4gICAgICAgIGl0ZW0gPSB7fTtcXG4gICAgXFxuICAgIHN0b3JlW2tleV0gPSB2YWx1ZTtcXG4gICAgdGhpcy5zdG9yZShzdG9yZSk7XFxuICAgIFxcbiAgICBpdGVtW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XFxuICAgIFxcbiAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICAgIGNhc2UgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc6XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpOyBcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgICAgIGRlZmF1bHQ6XFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgIH1cXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEzNGI2MTZiMTAxNmY2MFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzNGI2MTZiMTAxNmY2MFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNsZWFyXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNsZWFyKCkge1xcbiAgICB0aGlzLnN0b3JlKHt9KTtcXG4gICAgXFxuICAgIHN3aXRjaCAodHJ1ZSkge1xcbiAgICAgICAgY2FzZSB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJzpcXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTsgXFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNGM3ZjFhODQzMWIzZDVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNGM3ZjFhODQzMWIzZDVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJpbml0XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGluaXQoY29uZikge1xcbiAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICAgIGNhc2UgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc6XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLy8gaW5pdCBcXG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSksXFxuICAgICAgICAgICAgICAgIHN0b3JlID0ge30sXFxuICAgICAgICAgICAgICAgIGkgPSAwLFxcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAwO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDsgICAgXFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgICAgICAgICBzdG9yZVtrZXlzW2ldXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleXNbaV1dKTtcXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vIGV2ZW50XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbiAoZSkge1xcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0ge30sXFxuICAgICAgICAgICAgICAgICAgICBzdG9yZSA9IHRoaXMuc3RvcmUoKTtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVbZS5rZXldID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZShzdG9yZSk7XFxuICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgb2JqW2Uua2V5XSA9IHt9O1xcbiAgICAgICAgICAgICAgICAgICAgb2JqW2Uua2V5XS5vbGRWYWx1ZSA9IEpTT04ucGFyc2UoZS5vbGRWYWx1ZSk7XFxuICAgICAgICAgICAgICAgICAgICBvYmpbZS5rZXldLm5ld1ZhbHVlID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkKG9iaik7XFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYTQ5MjFhYzcxMTJiZDRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYTQ5MjFhYzcxMTJiZDRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJyZW1vdmVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xcbiAgICB2YXIgc3RvcmUgPSB0aGlzLnN0b3JlKCk7XFxuICAgIFxcbiAgICBkZWxldGUgc3RvcmVba2V5XTtcXG4gICAgdGhpcy5zdG9yZShzdG9yZSk7XFxuICAgIFxcbiAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICAgIGNhc2UgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc6XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTsgXFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYWFlZTFlNjMxMWZmMzlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWFlZTFlNjMxMWZmMzlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwicnVudGltZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxvYWRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbG9hZCh1cmwsIGFzeW5jKSB7XFxuICAgIHZhciB4aHIgPSBudWxsLFxcbiAgICBjYWxsYmFja0xvYWQgPSBudWxsO1xcbiAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcXG4gICAgXFxuICAgIGNhbGxiYWNrTG9hZCA9IGZ1bmN0aW9uIGNhbGxiYWNrTG9hZChzeXN0ZW0pIHtcXG4gICAgICAgIHZhciBzeXNJZCA9ICRkYi5zeXN0ZW0oc3lzdGVtKSxcXG4gICAgICAgIHN5cyA9ICRjb21wb25lbnQuZ2V0KHN5c0lkKSxcXG4gICAgICAgIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyksXFxuICAgICAgICBuYlN1YnN5c3RlbSA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgICAgICdzdWJzeXN0ZW0nOiB0cnVlXFxuICAgICAgICB9KTsgXFxuICAgICAgICBpZiAoc3lzKSB7XFxuICAgICAgICAgICAgc3lzLm1haW4oKTtcXG4gICAgICAgIH0gXFxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggKyAxICsgbmJTdWJzeXN0ZW0ubGVuZ3RoID09PSAkZGIuUnVudGltZVN5c3RlbS5jb3VudCgpKSB7XFxuICAgICAgICAgICAgJGNvbXBvbmVudC5nZXQoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgICAgfVxcbiAgICB9O1xcbiAgICBcXG4gICAgaWYgKGFzeW5jKSB7XFxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XFxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XFxuICAgICAgICAgICAgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY2MDAxNzczYTE4NzkxXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY2MDAxNzczYTE4NzkxXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1haW5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWFpbigpIHtcXG4gICAgdmFyIHN1YnN5c3RlbXMgPSBbXSxcXG4gICAgICAgIHN5c3RlbXMgPSBbXSxcXG4gICAgICAgIHN5c3RlbSA9IG51bGwsXFxuICAgICAgICBzY3JpcHRzID0gW10sXFxuICAgICAgICBzY3JpcHQgPSBudWxsLFxcbiAgICAgICAgbG9nTGV2ZWwgPSAnd2FybicsXFxuICAgICAgICBpID0gMCxcXG4gICAgICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICBzdWJzeXN0ZW1zID0gJGRiLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XFxuICAgICAgICAnc3Vic3lzdGVtJzogdHJ1ZVxcbiAgICB9KTtcXG4gICAgc3Vic3lzdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzeXN0ZW0pIHtcXG4gICAgICAgIHZhciBzdWJzeXN0ZW1JZCA9IHN1YnN5c3RlbS5faWQ7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoc3Vic3lzdGVtSWQpLm1haW4oKTtcXG4gICAgfSwgdGhpcyk7IFxcbiAgICBcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICAgIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyk7XFxuICAgICAgICBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gbG9nZ2VyXFxuICAgICAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2xvZ10nKTtcXG4gICAgICAgIGlmIChzY3JpcHRzLmxlbmd0aCkge1xcbiAgICAgICAgICAgIGxvZ0xldmVsID0gc2NyaXB0c1swXS5nZXRBdHRyaWJ1dGUoJ2xvZycpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwobG9nTGV2ZWwpO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAvLyBzeXN0ZW1zXFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgICAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGlmIChzeXN0ZW0uZ2V0QXR0cmlidXRlKCdhc3luYycpID09PSAnZmFsc2UnKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLmxvYWQoc3lzdGVtLmhyZWYsIGZhbHNlKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5sb2FkKHN5c3RlbS5ocmVmLCB0cnVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC8vIGRlc2lnbmVyXFxuICAgICAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2Rlc2lnbmVyXScpO1xcbiAgICAgICAgaWYgKHNjcmlwdHMubGVuZ3RoKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdhZG1pbicpLnN0YXJ0KCk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC8vIHJlYWR5IGV2ZW50XFxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XFxuICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE5MTQzMWQyOTIxM2ZlNFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5MTQzMWQyOTIxM2ZlNFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5c3RlbShuYW1lKSB7XFxuICAgIHZhciBTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGNvbmYgPSB7fTtcXG4gICAgXFxuICAgIGlmIChuYW1lKSB7XFxuICAgICAgICBjb25mLm1hc3RlciA9IHRydWU7XFxuICAgICAgICBjb25mLm5hbWUgPSBuYW1lO1xcbiAgICAgICAgU3lzdGVtID0gdGhpcy5yZXF1aXJlKCdSdW50aW1lU3lzdGVtJyk7XFxuICAgICAgICBzeXN0ZW0gPSBuZXcgU3lzdGVtKGNvbmYpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XFxuICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgICAgIH0pO1xcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcXG4gICAgICAgICAgICBzeXN0ZW1JZCA9IHJlc3VsdFswXS5faWQ7XFxuICAgICAgICAgICAgc3lzdGVtID0gJGNvbXBvbmVudC5nZXQoc3lzdGVtSWQpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHJldHVybiBzeXN0ZW07XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFhYmM3MTc1OTcxOGViZlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFhYmM3MTc1OTcxOGViZlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9uKG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ2NvbGxlY3Rpb24nKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgIH0gXFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0OyBcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyY2RmMTA4ZDcxNTRkYlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyY2RmMTA4ZDcxNTRkYlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiY29sbGVjdGlvbnNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY29sbGVjdGlvbnMoKSB7XFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IFxcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IFxcbiAgICAgICAgaXRlbSA9IGtleXNbaV07IFxcbiAgICAgICAgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWQwZDUxZDMxMjE2OGQzXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWQwZDUxZDMxMjE2OGQzXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudChuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgXFxuICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnZXZlbnQnKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgIH0gXFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTMwZjUxMTY3NzE0MWFlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTMwZjUxMTY3NzE0MWFlXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJldmVudHNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXZlbnRzKCkge1xcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAnZXZlbnQnKSB7XFxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgICAgICB9XFxuICAgIH0gXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTkyNzE5MjVhMWFjOTVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTkyNzE5MjVhMWFjOTVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxpbmtcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGluayhuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgXFxuICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnbGluaycpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWM0MWUxY2MyMDE2NzFiXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWM0MWUxY2MyMDE2NzFiXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsaW5rc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsaW5rcygpIHsgXFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG4gICAgXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgaXRlbSA9IGtleXNbaV07XFxuICAgICAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ2xpbmsnKSB7XFxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgICAgICB9XFxuICAgIH0gcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE5ZGI1MWI2OWExM2IzYlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5ZGI1MWI2OWExM2IzYlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1ldGhvZChuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdtZXRob2QnKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgICAgICBcXG4gICAgfVxcbiAgICBcXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEwY2Y4MTJmN2YxYTExYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEwY2Y4MTJmN2YxYTExYVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibWV0aG9kc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2RzKCkge1xcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgaXRlbSA9IGtleXNbaV07XFxuICAgICAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfSBcXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYWJiNjEzNDVlMTNiZWNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWJiNjEzNDVlMTNiZWNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnRpZXNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcHJvcGVydGllcygpIHsgXFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG4gICAgXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgaXRlbSA9IGtleXNbaV07XFxuICAgICAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ3Byb3BlcnR5Jykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMGU2NTFkZmZmMTEzMWNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMGU2NTFkZmZmMTEzMWNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHByb3BlcnR5KG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBcXG4gICAgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTE1NTcxOGIwYTExMjViXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTE1NTcxOGIwYTExMjViXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGRlc3Ryb3koKSB7XFxuICAgICRjb21wb25lbnQuZGVzdHJveSh0aGlzLmlkKCkpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZmM1NjEzMjU5MWE3ZTlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZmM1NjEzMjU5MWE3ZTlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm9mZlwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBvZmYoc3RhdGUsIGJlaGF2aW9ySWQpIHtcXG4gICAgdmFyIGFyZ3MgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gNzsgaSsrKSB7XFxuICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcXG4gICAgfVxcbiAgICBcXG4gICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XFxuICAgICAgICBcXFwiY29tcG9uZW50XFxcIjogdGhpcywgXFxuICAgICAgICBcXFwibWV0aG9kTmFtZVxcXCI6IFxcXCJvZmZcXFwiLCBcXG4gICAgICAgIFxcXCJhcmdzXFxcIjogYXJnc1xcbiAgICAgICAgfSkpIHtcXG4gICAgICAgIFxcbiAgICAgICAgaWYgKHN0YXRlIHx8IGJlaGF2aW9ySWQpIHtcXG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpIHtcXG4gICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgICAgICAgICAgICBcXFwiYmVoYXZpb3JJZFxcXCI6IGJlaGF2aW9ySWQsIFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImNvbXBvbmVudElkXFxcIjogdGhpcy5pZCgpLCBcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJzdGF0ZVxcXCI6IHN0YXRlXFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0gZWxzZSB7IFxcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLndhcm4oXFxcImludm9rZSBcXFxcJ29mZlxcXFwnIG1ldGhvZCBvZiBjb21wb25lbnQgJ1xcXCIgKyB0aGlzLmlkKCkgKyBcXFwiJyB3aXRoIGFuIGludmFsaWQgc3RhdGUgJ1xcXCIgKyBzdGF0ZSArIFxcXCInXFxcIik7IFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE1MzZiMTg1ZDYxZWVmNFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE1MzZiMTg1ZDYxZWVmNFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicmVxdWlyZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiByZXF1aXJlKGlkKSB7XFxuICAgIHJldHVybiAkY29tcG9uZW50LmdldChpZCk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjOTg1MTFhMGIxYjExMFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjOTg1MTFhMGIxYjExMFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjb2xsZWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9LFxcbiAgICBjb2xsZWN0aW9uTmFtZSA9ICcnO1xcbiAgICBcXG4gICAgZm9yIChjb2xsZWN0aW9uTmFtZSBpbiAkZGIuc3RvcmUpIHtcXG4gICAgICAgIGlmICgkZGIuc3RvcmUuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpICYmIGNvbGxlY3Rpb25OYW1lLmluZGV4T2YoJ1J1bnRpbWUnKSAhPT0gMCkge1xcbiAgICAgICAgICAgIHJlc3VsdFtjb2xsZWN0aW9uTmFtZV0gPSAkZGJbY29sbGVjdGlvbk5hbWVdO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFiYjI5MTAxMDYxMjRiY1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiYjI5MTAxMDYxMjRiY1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdWJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xcbiAgICByZXR1cm4gJGRiLnN1YnN5c3RlbShwYXJhbXMpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTkwNTE5NjJkMWZhOGVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTkwNTE5NjJkMWZhOGVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZURhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5c3RlbShzeXN0ZW0pIHtcXG4gICAgcmV0dXJuICRkYi5zeXN0ZW0oc3lzdGVtKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTUyNGQxNzM3ZDFiZGE3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTUyNGQxNzM3ZDFiZGE3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJkZWJ1Z1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7XFxuICAgIGlmICh0aGlzLmxldmVsKCkgPT09ICdkZWJ1ZycpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICAgIH1cXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE0ZGM1MWY3NmUxNDc0N1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0ZGM1MWY3NmUxNDc0N1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xcbiAgICBjb25zb2xlLmVycm9yKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDc0MjFmN2E2MWFiZTJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDc0MjFmN2E2MWFiZTJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImluZm9cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XFxuICAgIGlmICh0aGlzLmxldmVsKCkgPT09ICdpbmZvJyB8fCB0aGlzLmxldmVsKCkgPT09ICdkZWJ1ZycpIHtcXG4gICAgICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTE1NTEzYmQ4MWUzNGJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTE1NTEzYmQ4MWUzNGJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxldmVsXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxldmVsKHZhbCkge1xcbiAgICAkbG9nLmxldmVsKHZhbCk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFiM2Q4MThhZTkxM2JkZFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiM2Q4MThhZTkxM2JkZFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwid2FyblwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcXG4gICAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2luZm8nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ3dhcm4nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICAgICAgY29uc29sZS53YXJuKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICAgIH0gXFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZWEyYjFiY2U4MWNjNTJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZWEyYjFiY2U4MWNjNTJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU1ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjcmVhdGUoKSB7XFxuICAgICAgICAkbWV0YW1vZGVsLmNyZWF0ZSgpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMjAzZTE5ZDk2MWJiNTVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMjAzZTE5ZDk2MWJiNTVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU1ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1vZGVsKG1vZGVsKSB7XFxuICAgIHJldHVybiAkbWV0YW1vZGVsLm1vZGVsKG1vZGVsKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY1NDgxODczNTExMGQ2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY1NDgxODczNTExMGQ2XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc2NoZW1hKHNjaGVtYSkge1xcbiAgICByZXR1cm4gJG1ldGFtb2RlbC5zY2hlbWEoc2NoZW1hKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY4MDYxZjk0NjEyMjY5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY4MDYxZjk0NjEyMjY5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHR5cGUodHlwZSkge1xcbiAgICByZXR1cm4gJG1ldGFtb2RlbC50eXBlKHR5cGUpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTIxMjFlOTc2MTk4MGNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTIxMjFlOTc2MTk4MGNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN5c3RlbVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN5bmNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3luYygpIHtcXG4gICAgdmFyIHN5c3RlbSA9IEpTT04ucGFyc2UoJGRiLnN5c3RlbSgpKTtcXG4gICAgXFxuICAgIHRoaXMuc2NoZW1hcyhzeXN0ZW0uc2NoZW1hcyk7XFxuICAgIHRoaXMudHlwZXMoc3lzdGVtLnR5cGVzKTtcXG4gICAgdGhpcy5iZWhhdmlvcnMoc3lzdGVtLmJlaGF2aW9ycyk7XFxuICAgIHRoaXMuY29tcG9uZW50cyhzeXN0ZW0uY29tcG9uZW50cyk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImNvbXBvbmVudHNcIjoge1xuICAgICAgICBcIlJ1bnRpbWVBZG1pblwiOiB7XG4gICAgICAgICAgICBcImFkbWluXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImFkbWluXCIsXG4gICAgICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVzaWduZXJXaW5kb3dcIjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJzdG9yYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZVwiOiB7XG4gICAgICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwicnVudGltZVwiLFxuICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuNi41XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lRGF0YWJhc2VcIjoge1xuICAgICAgICAgICAgXCJkYlwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJkYlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZUxvZ2dlclwiOiB7XG4gICAgICAgICAgICBcImxvZ2dlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJsb2dnZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVNZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwibWV0YW1vZGVsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lU3lzdGVtXCI6IHtcbiAgICAgICAgICAgIFwiMThlZDgxZGUzMzEyNTJjXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcIjE4ZWQ4MWRlMzMxMjUyY1wiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbS1hZG1pblwiLFxuICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuOS4wXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJ1bnRpbWUgQ29tcG9uZW50IGFkbWluaXN0cmF0aW9uIFwiLFxuICAgICAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYXN0ZXJcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjE1ZGU4MWQyOTUxNTNkYlwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCIxNWRlODFkMjk1MTUzZGJcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXN0ZW0tc3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuMS4wXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJ1bnRpbWUgc3RvcmFnZSBzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICBcInN1YnN5c3RlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFzdGVyXCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIxMzM0MjFkMGMzMTNkMmRcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiMTMzNDIxZDBjMzEzZDJkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwid2ViXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4yLjBcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWRkIGJlaGF2aW9ycyBmb3Igd2ViXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hc3RlclwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCJydW50aW1lXCIsXG4gICAgXCJ2ZXJzaW9uXCI6IFwiMS42LjVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiUnVudGltZVwiLFxuICAgIFwiX2lkXCI6IFwiZTg5YzYxN2I2YjE1ZDI0XCIsXG4gICAgXCJtYXN0ZXJcIjogZmFsc2UsXG4gICAgXCJzdWJzeXN0ZW1cIjogZmFsc2Vcbn07XG5cbi8qIGV4cG9ydHMgICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICpcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXN5c3RlbVxuICogQGNsYXNzIHJ1bnRpbWUtc3lzdGVtXG4gKiBAc3RhdGljIFxuICovXG5cblxuLyoqXG4gKiBSdW50aW1lIGNvcmUgc3lzdGVtXG4gKiBAcHJvcGVydHkge1J1bnRpbWVTeXN0ZW19IHN5c3RlbVxuICovXG5leHBvcnRzLnN5c3RlbSA9IHN5c3RlbTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogRGVzaWduIHwgQ3JlYXRlIHwgQ29tcG9zZVxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuIFxuICogQSBiZWhhdmlvciBpcyBhIG1lY2FuaXNtIHRoYXQgYWxsb3cgdXNlcnMgdG8gYWRkIGFjdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY2hhbm5lbFxuICogQGNsYXNzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge307XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIGZyb20gYSBzdHJpbmcuXG4gKiBUaGUgY3JlYXRlZCBmdW5jdGlvbjpcbiAqIC0gd2lsbCBiZSBhIG5hbWVkIGZ1bmN0aW9uLFxuICogLSBoYXMgdGhlIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCBhbmRcbiAqIC0gY2FuIGhhdmUgc29tZSBjb3JlIG1vZHVsZXMgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycy5cbiAqIEBtZXRob2QgY3JlYXRlRnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGRlZmF1bHQgbmFtZSBvZiB0aGUgZnVuY3Rpb24gXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVuYyBhIHN0cmluZ2lmaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgdGhlIGJlaGF2aW9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIFJ1bnRpbWUgY29yZSBiZWhhdmlvci5cbiAqIEluIHRoYXQgY2FzZSwgdGhlIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWQgaW4gYSBzeXN0ZW0gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBmdW5jdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24obmFtZSwgZnVuYywgY29yZSwgdXNlQ29yZUFQSSkge1xuICAgIHZhciBmdW5jTmFtZSA9ICcnLFxuICAgICAgICBiZWdpbkJvZHkgPSAtMSxcbiAgICAgICAgZnVuY1BhcmFtcyA9ICcnLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcGFyYW1zQ2xlYW4gPSBbXSxcbiAgICAgICAgZnVuY0JvZHkgPSAnJyxcbiAgICAgICAgaGVhZGVyID0gJycsXG4gICAgICAgIGFjdGlvbiA9IG51bGw7XG5cbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gICAgZnVuY05hbWUgPSBoZWFkZXIuc3BsaXQoJygnKVswXS5yZXBsYWNlKCdmdW5jdGlvbicsICcnKS50cmltKCk7XG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlci5zcGxpdCgnKCcpWzFdLnJlcGxhY2UoJyknLCAnJykudHJpbSgpO1xuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDEpO1xuICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcblxuICAgIGZ1bmNOYW1lID0gZnVuY05hbWUgfHwgbmFtZTtcblxuICAgIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgIH1cbiAgICBpZiAodXNlQ29yZUFQSSkge1xuICAgICAgICBwYXJhbXMucHVzaCgnJGNvbXBvbmVudCcpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGRiJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckd29ya2Zsb3cnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRiZWhhdmlvcicpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJHN0YXRlJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckbG9nJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1swXSAhPT0gJycpIHtcbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBmdW5jTmFtZSArIFwiIChcIiArIHBhcmFtcy5qb2luKCcsJykgKyBcIikgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKCdcIiArIHBhcmFtcy5qb2luKFwiJywnXCIpICsgXCInLCBib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCIpKGZ1bmNCb2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBmdW5jTmFtZSArIFwiICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCIpKGZ1bmNCb2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBiZWhhdmlvciB0aGF0IHdpbGwgYmUgc3RvcmVkIGluIFJ1bnRpbWUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlIFxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gUnVudGltZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBhZGQoaWQsIHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGNvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpLFxuICAgICAgICBzdHJBY3Rpb24gPSBhY3Rpb24udG9TdHJpbmcoKTtcblxuICAgIGlmICh0eXBlb2YgY29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29yZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihzdGF0ZSwgc3RyQWN0aW9uLCBjb3JlLCB1c2VDb3JlQVBJKTtcblxuICAgIHN0b3JlW2JlaGF2aW9ySWRdID0gYWN0aW9uO1xuXG4gICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoe1xuICAgICAgICBcIl9pZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZSxcbiAgICAgICAgXCJhY3Rpb25cIjogc3RyQWN0aW9uLFxuICAgICAgICBcInVzZUNvcmVBUElcIjogdXNlQ29yZUFQSSxcbiAgICAgICAgXCJjb3JlXCI6IGNvcmVcbiAgICB9KTtcblxuICAgIHJldHVybiBiZWhhdmlvcklkO1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBvciByZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgZm9yIGEgc3BlY2lmaWMgc3RhdGVcbiAqIG9mIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKSkgPGJyPlxuICovXG5mdW5jdGlvbiByZW1vdmUocGFyYW1zKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIHBhcmFtcy5iZWhhdmlvcklkID0gcGFyYW1zLmJlaGF2aW9ySWQgfHwgJyc7XG4gICAgcGFyYW1zLmNvbXBvbmVudElkID0gcGFyYW1zLmNvbXBvbmVudElkIHx8ICcnO1xuICAgIHBhcmFtcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAnJztcblxuICAgIGlmIChwYXJhbXMuY29tcG9uZW50SWQpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5iZWhhdmlvcklkKSB7XG4gICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogcGFyYW1zLmJlaGF2aW9ySWQsXG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcGFyYW1zLnN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVtwYXJhbXMuYmVoYXZpb3JJZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVCZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcGFyYW1zLnN0YXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVbaWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRnJvbU1lbW9yeShpZCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aW9ucyhpZCwgc3RhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGRiUmVzdWx0ID0gW10sXG4gICAgICAgIGFjdGlvbiA9IG51bGw7XG5cbiAgICBkYlJlc3VsdCA9ICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgfSk7XG5cbiAgICBkYlJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChiZWhhdmlvcikge1xuICAgICAgICBhY3Rpb24gPSBzdG9yZVtiZWhhdmlvci5faWRdO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKGJlaGF2aW9yLnN0YXRlLCBiZWhhdmlvci5hY3Rpb24sIGJlaGF2aW9yLmNvcmUsIGJlaGF2aW9yLnVzZUNvcmVBUEkpO1xuICAgICAgICAgICAgc3RvcmVbYmVoYXZpb3IuX2lkXSA9IGFjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IGFjdGlvblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qXG4gKiBHZXQgYSBiZWhhdmlvciBieSBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHJldHVybiB7QmVoYXZpb3J9IHRoZSBiZWhhdmlvclxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy4gQSBiZWhhdmlvciBpcyBhIG1lY2FuaXNtIHRoYXQgYWxsb3cgdXNlcnMgdG8gYWRkIGFjdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiB3aGVuIGEgc3BlY2lmaWMgc3RhdGUgb2YgYSBjb21wb25lbnQgd2lsbCBjaGFuZ2UuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jaGFubmVsXG4gKiBAY2xhc3MgcnVudGltZS1iZWhhdmlvclxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBBZGQgYSBiZWhhdmlvciB0aGF0IHdpbGwgYmUgc3RvcmVkIGluIFJ1bnRpbWUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlIFxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gUnVudGltZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmFkZCA9IGFkZDtcblxuXG4vKipcbiAqIEdldCBhIGJlaGF2aW9yIGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcmV0dXJuIHtCZWhhdmlvcn0gdGhlIGJlaGF2aW9yXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yIChvcHRpb25hbCkpIDxicj5cbiAqL1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5cblxuLyoqXG4gKiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKi9cbmV4cG9ydHMuZ2V0QWN0aW9ucyA9IGdldEFjdGlvbnM7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnJlbW92ZUZyb21NZW1vcnkgPSByZW1vdmVGcm9tTWVtb3J5OyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogRGVzaWduIHwgQ3JlYXRlIHwgQ29tcG9zZVxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IFJ1bnRpbWUuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAc3RhdGljIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICR3b3JrbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eScsXG4gICAgTElOS19UWVBFID0gJ2xpbmsnLFxuICAgIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJyxcbiAgICBNRVRIT0RfVFlQRSA9ICdtZXRob2QnLFxuICAgIEVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuICAgIE5BTUUgPSAnX25hbWUnLFxuICAgIHN0b3JlID0ge307XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIFN1YiBjbGFzcyB0byBvdmVycmlkZSBwdXNoIGFuZCBwb3AgbWV0aG9kIG9mIEFycmF5IENsYXNzLlxuICogQGNsYXNzIFJ1bnRpbWVBcnJheVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZcbiAqIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIHtTdHJpbmd9IHR5cGUgdHlwZSBvZiB0aGUgYXJyYXlcbiAqIHtBcnJheX0gYXJyIGFycmF5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBSdW50aW1lQXJyYXkoY29uZikge1xuICAgIHZhciBhcnIgPSBbXSxcbiAgICAgICAgYXJyRGIgPSBbXSxcbiAgICAgICAgdHlwZSA9ICcnLFxuICAgICAgICBpZCA9ICcnLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgaXNSZWFkT25seSA9IGZhbHNlO1xuXG4gICAgY29uZiA9IGNvbmYgfHwge307XG4gICAgdHlwZSA9IGNvbmYudHlwZSB8fCAnJztcbiAgICBpZCA9IGNvbmYuaWQgfHwgJyc7XG4gICAgcHJvcGVydHlOYW1lID0gY29uZi5wcm9wZXJ0eU5hbWUgfHwgJyc7XG4gICAgYXJyRGIgPSBjb25mLmFyciB8fCBbXTtcblxuICAgIGlmICh0eXBlb2YgY29uZi5yZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXNSZWFkT25seSA9IGNvbmYucmVhZE9ubHk7XG4gICAgfVxuXG4gICAgLy8gaW5pdFxuICAgIGFyckRiLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBpZiAodHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyLnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyogT3ZlcnJpZGUgcHVzaCBtZXRob2QuXG4gICAgICogQHB1c2hcbiAgICAgKiBAcGFyYW0ge1J1bnRpbWVDb21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIGFyci5wdXNoID0gZnVuY3Rpb24gcHVzaCh2YWwpIHtcbiAgICAgICAgdmFyIGlzQ2xhc3MgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcblxuICAgICAgICAgICAgaXNDbGFzcyA9IHR5cGUuaW5kZXhPZignQCcpICE9PSAtMTtcblxuICAgICAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsICYmICRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGUucmVwbGFjZSgnQCcsICcnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwuaWQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW2FyckRiLmxlbmd0aCwgdmFsLmlkKCksICdhZGQnXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIHByb3BlcnR5TmFtZSwgdmFsLmlkKCksIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFthcnJEYi5sZW5ndGgsIHZhbCwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyRGIubGVuZ3RoO1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSBwb3AgbWV0aG9kLlxuICAgICAqIEBwb3BcbiAgICAgKiBAcmV0dXJuIHtSdW50aW1lQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICAgKi9cbiAgICBhcnIucG9wID0gZnVuY3Rpb24gcG9wKCkge1xuICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgdmFsID0gbnVsbCxcbiAgICAgICAgICAgIGlzQ2xhc3MgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGlmIChhcnJEYi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBhcnJEYi5wb3AoKTtcblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFthcnJEYi5sZW5ndGgsIHZhbCwgJ3JlbW92ZSddXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpc0NsYXNzID0gdHlwZS5pbmRleE9mKCdAJykgIT09IC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc3RvcmVbdmFsXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qIE92ZXJyaWRlIHNvcnQgbWV0aG9kLlxuICAgICAqIEBzb3J0XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3QgdGhlIHNvcnQgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtSdW50aW1lQXJyYXl9IHRoZSBjdXJyZW50IFJ1bnRpbWVBcnJheVxuICAgICAqL1xuICAgIGFyci5zb3J0ID0gZnVuY3Rpb24gc29ydChmdW5jdCkge1xuICAgICAgICBhcnJEYi5zb3J0KGZ1bmN0KTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG4gICAgLyogT3ZlcnJpZGUgcmV2ZXJzZSBtZXRob2QuXG4gICAgICogQHJldmVyc2VcbiAgICAgKiBAcmV0dXJuIHtSdW50aW1lQXJyYXl9IHRoZSByZXZlcnNlZCBSdW50aW1lQXJyYXlcbiAgICAgKi9cbiAgICBhcnIucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICAgIGFyckRiLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFycjtcbn1cblxuLyoganNoaW50IC1XMDU4ICovXG5SdW50aW1lQXJyYXkucHJvdG90eXBlID0gbmV3IEFycmF5O1xuLyoganNoaW50ICtXMDU4ICovXG5cblxuLypcbiAqIEdldCBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzLlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgcGFyYW1zID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV0ucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgcHJvcGVydHkgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0UHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBMSU5LX1RZUEUgfHwgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IFBST1BFUlRZX1RZUEUgfHwgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IENPTExFQ1RJT05fVFlQRSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBwcm9wTmFtZXNbaV0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0udHlwZSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0ucmVhZE9ubHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGdldE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIG1ldGhvZHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRNZXRob2RzKGlkKSB7XG4gICAgdmFyIG1vZGVsID0gbnVsbCxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgcHJvcE5hbWVzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHNjaGVtYSBvZiBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIHByb3BlcnR5IHNjaGVtYSBvZiB0aGUgc3RydWN0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVByb3BlcnRpZXMocHJvcGVydHlOYW1lLCBtb2RlbCkge1xuICAgIHZhciBtb2RlbERlZiA9IG51bGwsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBzdHJ1Y3R1cmUgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgcHJvcE5hbWVzID0gW107XG5cbiAgICBtb2RlbERlZiA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwobW9kZWwpO1xuICAgIHR5cGUgPSBtb2RlbERlZltwcm9wZXJ0eU5hbWVdLnR5cGU7XG4gICAgc3RydWN0dXJlID0gJG1ldGFtb2RlbC5nZXRUeXBlKHR5cGUpO1xuXG4gICAgaWYgKHN0cnVjdHVyZS5zY2hlbWEpIHtcbiAgICAgICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc3RydWN0dXJlLnNjaGVtYSk7XG4gICAgICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RydWN0dXJlLnNjaGVtYVtuYW1lXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIGV2ZW50IG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGdldEV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgZXZlbnRzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRzKGlkKSB7XG4gICAgdmFyIG1vZGVsID0gbnVsbCxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgcHJvcE5hbWVzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gRVZFTlRfVFlQRSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBnZXRTdHJ1Y3R1cmVWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHZhbHVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIHBhdGgpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgZG9jID0gJGRiLnN0b3JlW21vZGVsXVtpZF0sXG4gICAgICAgIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyksXG4gICAgICAgIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoLFxuICAgICAgICBpID0gMDtcblxuICAgIHJlc3VsdCA9IGRvYztcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRbc3ViUGF0aFtpXV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFNldCB0aGUgdmFsdWUgb2YgYSBzdHJ1Y3R1cmUuXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSB0byBzZXQgXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIHBhdGgsIHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIGRvYyA9ICRkYi5zdG9yZVttb2RlbF1baWRdLFxuICAgICAgICBzdWJQYXRoID0gcGF0aC5zcGxpdCgnLicpLFxuICAgICAgICBsZW5ndGggPSBzdWJQYXRoLmxlbmd0aCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICByZXN1bHQgPSBkb2M7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJQYXRoW2ldXTtcbiAgICB9XG4gICAgcmVzdWx0W3N1YlBhdGhbaV1dID0gdmFsdWU7XG59XG5cblxuLypcbiAqIENyZWF0ZSBhIG5ldyBjbGFzcyBmcm9tIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHZhciBib2R5ID0ge307XG5cbiAgICAgICAgaWYgKGNvbmZpZy5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzKGNvbmZpZywgY2xhc3NJZCk7XG4gICAgICAgICAgICBjb25maWcgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtZXRlcnMoY2xhc3NJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAkbWV0YW1vZGVsLnByZXBhcmVPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldE1vZGVsKGNsYXNzSWQpKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25maWcuX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZVtjb25maWcuX2lkXSA9IHRoaXM7XG5cbiAgICAgICAgLy8gaWRcbiAgICAgICAgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWcuX2lkO1xuICAgICAgICB9O1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgdGhpcy5pZCA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gaWQgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cblxuICAgICAgICAvLyBjbGFzc0luZm9cbiAgICAgICAgaWYgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ1J1bnRpbWVDb21wb25lbnQnKSkge1xuICAgICAgICAgICAgY29uZmlnLmNsYXNzSW5mbyA9IGNsYXNzSWQgKyAnSW5mbyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICAgICAkZGIuc3RvcmVbY2xhc3NJZF1bY29uZmlnLl9pZF0gPSBjb25maWc7XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5pbnNlcnQoY2xhc3NJZCwgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgY2xhc3NJZCArIFwiIChjb25maWcpIHsgYm9keS5jYWxsKHRoaXMsY29uZmlnKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkLlxuICogQG1ldGhvZCBhZGRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZElkKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbGFzc0lkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuaWQgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGlkIChwcm9wLCB2YWwpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwcm9wLCB2YWwpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC4gQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBleGFtcGxlXG4gKiBsYXVyZS5hZ2UoKTsgLy8gZ2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIGxhdXJlLmFnZSgyMik7IC8vIHNldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBAbWV0aG9kIGFkZFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKG1vZGVsKTtcblxuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBib2R5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9ICcnLFxuICAgICAgICAgICAgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpKSB7IC8vIGluIGNhc2Ugb2YgYXJyYXksIHJldHVybiBhIHN1YiBhcnJheVxuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICBydW50aW1lQXJyID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lQXJyID0gbmV3IFJ1bnRpbWVBcnJheSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eU5hbWVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogcHJvcGVydHlSZWFkT25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzSWRcIjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJyXCI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVbMF0uaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFsVmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlWzBdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5VHlwZVswXS5yZXBsYWNlKCdAJywgJycpKSAmJiAocHJvcGVydHlUeXBlWzBdLmluZGV4T2YoJ0AnKSAhPT0gLTEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVbMF0uaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKGNsYXNzSWQsIHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lLCByZWFsVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbcG9zaXRpb24sIHJlYWxWYWwsICdhZGQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiIChwb3NpdGlvbix2YWx1ZSkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsIHBvc2l0aW9uLCB2YWx1ZSkgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0KGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzU3RydWN0dXJlKHByb3BlcnR5TmFtZSwgY2xhc3NJZCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoJycsIHByb3BlcnR5TmFtZSwgbW9kZWwsIHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuZGVzdHJveWVkQ29tcG9uZW50Q2FsbChwcm9wZXJ0eU5hbWUsIHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoeyBcIl9pZFwiOiB0aGlzLmlkKCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUuaW5kZXhPZignQCcpICE9PSAtMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKGNsYXNzSWQsIHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIFJ1bnRpbWVCZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ1J1bnRpbWVCZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiAodmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLHZhbHVlKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLypcbiAqIEFkZCBzdHJ1Y3R1cmUgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC4gQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgYWRkU3RydWN0dXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXJlbnQgcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IG9iamVjdCB0aGF0IGNvaW50YWlucyBtZXRob2RzIHRvIGFjY2VzcyB0aGUgc3RydWN0dXJlIFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkU3RydWN0dXJlKHBhdGgsIG5hbWUsIG1vZGVsLCBpZCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhuYW1lLCBtb2RlbCksXG4gICAgICAgIHNydWN0dXJlID0ge307XG5cbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gcHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIgYm9keSA9IHt9LFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gJycsXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSAnJyxcbiAgICAgICAgICAgIHByb3BlcnR5UmVhZE9ubHkgPSAnJztcblxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICAgICAgcHJvcGVydHlSZWFkT25seSA9IHByb3AucmVhZE9ubHk7XG5cbiAgICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBzZWFyY2ggPSBbXSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsLFxuICAgICAgICAgICAgICAgIHBhcmVudFBhdGggPSAnJyxcbiAgICAgICAgICAgICAgICBmdWxsUGF0aCA9ICcnO1xuXG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHBhcmVudFBhdGggPSBwYXJlbnRQYXRoICsgJy4nICsgbmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9IG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdWxsUGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW21vZGVsXVtpZF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldChnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgRGF0ZShnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUocHJvcGVydHlOYW1lLCBtb2RlbCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGFkZFN0cnVjdHVyZShwYXJlbnRQYXRoLCBwcm9wZXJ0eU5hbWUsIG1vZGVsLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmRlc3Ryb3llZENvbXBvbmVudENhbGwoZnVsbFBhdGgsIGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbbW9kZWxdLmZpbmQoeyBcIl9pZFwiOiBpZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUudG9JU09TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2Ugb2YgUnVudGltZUJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsID09PSAnUnVudGltZUJlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeShpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGZ1bGxQYXRoLCB2YWx1ZSwgcHJvcGVydHlUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgc3J1Y3R1cmVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiAodmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLHZhbHVlKSB9O1wiKShib2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3J1Y3R1cmU7XG59XG5cbi8qXG4gKiBBZGQgbWV0aG9kcyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyAvIG91dHB1dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgYWRkTWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTWV0aG9kcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIG1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtc05hbWUuam9pbignLCcpLFxuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbWV0aG9kTmFtZSArIFwiIChcIiArIHBhcmFtcyArIFwiKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxcIiArIHBhcmFtcyArIFwiKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbWV0aG9kTmFtZSArIFwiICgpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLypcbiAqIEFkZCBldmVudHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgYWRkRXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRFdmVudHMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGV2ZW50cyA9IGdldEV2ZW50cyhtb2RlbCk7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gZXZlbnQobWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY2xhc3NJZCwgbWV0aG9kTmFtZSksXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXNOYW1lLmpvaW4oJywnKSxcbiAgICAgICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5c3RlbXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtSWQgPSAtMSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gLTEsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUNoYW5uZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbXMgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5c3RlbUlkID0gc3lzdGVtc1swXS5faWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZnJvbSA9IHN5c3RlbUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXZlbnQgPSBtZXRob2ROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZU1lc3NhZ2UuaW5zZXJ0KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IFwic2VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IG1lc3NhZ2UuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbVwiOiBtZXNzYWdlLmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKFwiICsgcGFyYW1zICsgXCIpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLFwiICsgcGFyYW1zICsgXCIpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGEgb24gbWV0aG9kIHRvIGEgY29tcG9uZW50IHRvIGFkZCBiZWhhdmlvcnMgdG8gdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgYWRkT25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT24oQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uIChzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7XG4gICAgICAgIHZhciBiZWhhdmlvcklkID0gJycsXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAnJztcblxuICAgICAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJvblwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd29ya2xvdy52YWxpZFBhcmFtTnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9ySWQgPSAkYmVoYXZpb3IuYWRkKHRoaXMuaWQoKSwgc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksIGlzQ29yZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgc3RhdGUgPT09IGN1cnJlbnRTdGF0ZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBjdXJyZW50U3RhdGUucGFyYW1ldGVycy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbih0aGlzLmlkKCksIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5wcm90b3R5cGUub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEksaXNDb3JlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEksaXNDb3JlKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGEgb24gbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIGFkZCBiZWhhdmlvcnMgdG8gdGhlIGNsYXNzLlxuICogQG1ldGhvZCBhZGRPbkNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uIChzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSwgaXNDb3JlKSB7XG4gICAgICAgIHZhciBiZWhhdmlvcklkID0gJycsXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAnJztcblxuICAgICAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJvblwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd29ya2xvdy52YWxpZFBhcmFtTnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9ySWQgPSAkYmVoYXZpb3IuYWRkKHRoaXMuaWQoKSwgc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksIGlzQ29yZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgc3RhdGUgPT09IGN1cnJlbnRTdGF0ZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBjdXJyZW50U3RhdGUucGFyYW1ldGVycy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbih0aGlzLmlkKCksIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5vbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLGhhbmRsZXIsdXNlQ29yZUFQSSxpc0NvcmUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSxpc0NvcmUpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvZmYgbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIHJlbW92ZSBiZWhhdmlvcnMgZnJvbSB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZE9mZkNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBiZWhhdmlvcklkKSB7XG4gICAgICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcyxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBcIm9mZlwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBcImJlaGF2aW9ySWRcIjogYmVoYXZpb3JJZCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRJZFwiOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuSW52YWxpZFN0YXRlT2ZmKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub2ZmID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvZmYgKHN0YXRlLCBiZWhhdmlvcklkKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgc3RhdGUsIGJlaGF2aW9ySWQpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZERlc3Ryb3lDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZCgpLFxuICAgICAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgLy8gaWYgbm90IHZpcnR1YWwgY29tcG9uZW50XG4gICAgICAgIGlmICgkZGJbaWRdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkZGJbaWRdLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcblxuICAgICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgJ2NvbXBvbmVudElkJzogaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAnY29tcG9uZW50SWQnOiByZXN1bHRbaV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgdGhlIGFkZENsYXNzSW5mbyBtZXRob2Qgb24gYSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkQ2xhc3NJbmZvQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3NJbmZvQ2xhc3MoQ2xhc3MpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLmlkKCkgKyAnSW5mbycpO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuY2xhc3NJbmZvID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBjbGFzc0luZm8gKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgZmFjdG9yeVxuICogQHBhcmFtIHtKU09OfSBjb25maWcgY29uZmlndXJhdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IHRoZSBjcmVhdGVkIGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICB2YXIgQ2xhc3MgPSB7fSxcbiAgICAgICAgY2xhc3NJZCA9ICcnO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWcubW9kZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNsYXNzSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0lkID0gY29uZmlnLm1vZGVsO1xuICAgIH1cblxuICAgIENsYXNzID0gY3JlYXRlQ2xhc3MoY2xhc3NJZCk7XG5cbiAgICBzdG9yZVtjbGFzc0lkXSA9IENsYXNzO1xuXG4gICAgYWRkSWQoQ2xhc3MsIGNsYXNzSWQpO1xuXG4gICAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRNZXRob2RzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZEV2ZW50cyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgICAvLyBpbmhlcml0IGZyb20gUnVudGltZUNvbXBvbmVudFxuICAgIGlmICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKGNsYXNzSWQsICdSdW50aW1lQ29tcG9uZW50JykpIHtcbiAgICAgICAgYWRkT24oQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICAgICAgYWRkT2ZmQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpO1xuICAgICAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmZyZWV6ZShDbGFzcyk7XG5cbiAgICByZXR1cm4gQ2xhc3M7XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyA8YnI+XG4gKiB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lIDxicj5cbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZykge1xuICAgIHJldHVybiBmYWN0b3J5KGNvbmZpZyk7XG59XG5cblxuLypcbiAqIERlc3Ryb3kgYSBjb21wb25lbnQgZnJvbSBpdHMgaWQuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50IHRvIGRlc3Ryb3lcbiAqL1xuZnVuY3Rpb24gZGVzdHJveShpZCkge1xuICAgIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF0sXG4gICAgICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAkZGJbY2xhc3NJZF0ucmVtb3ZlKHtcbiAgICAgICAgICAgIFwiX2lkXCI6IGlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAnY29tcG9uZW50SWQnOiBpZFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXNlIG9mIEJlaGF2aW9yXG4gICAgICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUJlaGF2aW9yJykge1xuICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiByZW1vdmVGcm9tTWVtb3J5KGlkKSB7XG4gICAgZGVsZXRlIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGFsbCB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGNvbXBvbmVudHMuIFxuICogSXQgaXMgdGhlIGZhY3Rvcnkgb2YgYWxsIHRoZSBjb21wb25lbnRzIHRoYXQgYXJlIGNyZWF0ZWQgYnkgUnVudGltZS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS13b3JrZmxvd1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAY2xhc3MgcnVudGltZS1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgPGJyPlxuICoge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZSA8YnI+XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuXG4vKipcbiAqIEdldCBhIGNvbXBvbmVudCBieSBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgY29tcG9uZW50IHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5yZW1vdmVGcm9tTWVtb3J5ID0gcmVtb3ZlRnJvbU1lbW9yeTtcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBkZXN0cm95OyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogRGVzaWduIHwgQ3JlYXRlIHwgQ29tcG9zZVxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFJ1bnRpbWUgZGF0YWJhc2UuIDxicj5cbiAqIFJ1bnRpbWUgZGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kIDxicj5cbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy4gPGJyPlxuICogXG4gKiBSdW50aW1lIERhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBSdW50aW1lIGNvbXBvbmVudHMgYmVjYXVzZTogPGJyPlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IFJ1bnRpbWUgZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLCA8YnI+XG4gKiAtIGluc2VydCBvcGVyYXRpb24gYXV0b21hdGljYWxseSBjcmVhdGVzIGEgY29tcG9uZW50IGFuZCA8YnI+XG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICogIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEBjbGFzcyBydW50aW1lLWRiXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge30sXG4gICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICBpbnRlcm5hbERCID0gW1xuICAgICAgICAnUnVudGltZScsXG4gICAgICAgICdSdW50aW1lU2NoZW1hJyxcbiAgICAgICAgJ1J1bnRpbWVNb2RlbCcsXG4gICAgICAgICdSdW50aW1lR2VuZXJhdGVkTW9kZWwnLFxuICAgICAgICAnUnVudGltZUJlaGF2aW9yJyxcbiAgICAgICAgJ1J1bnRpbWVTdGF0ZScsXG4gICAgICAgICdSdW50aW1lVHlwZScsXG4gICAgICAgICdSdW50aW1lTWV0YW1vZGVsJyxcbiAgICAgICAgJ1J1bnRpbWVEYXRhYmFzZScsXG4gICAgICAgICdSdW50aW1lU3lzdGVtJyxcbiAgICAgICAgJ1J1bnRpbWVDbGFzc0luZm8nLFxuICAgICAgICAnUnVudGltZU1lc3NhZ2UnLFxuICAgICAgICAnUnVudGltZUNoYW5uZWwnLFxuICAgICAgICAnUnVudGltZUxvZ2dlcidcbiAgICBdLFxuICAgIGNvcmVEYiA9IFtcbiAgICAgICAgJ1J1bnRpbWVTY2hlbWEnLFxuICAgICAgICAnUnVudGltZUxvZ2dlcicsXG4gICAgICAgICdSdW50aW1lTW9kZWwnLFxuICAgICAgICAnUnVudGltZUdlbmVyYXRlZE1vZGVsJyxcbiAgICAgICAgJ1J1bnRpbWVTdGF0ZScsXG4gICAgICAgICdSdW50aW1lVHlwZSdcbiAgICBdO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBEdW1wIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgZHVtcCBvZiB0aGUgZGF0YWJhc2UuIFRoZSBkdW1wIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiB7T2JqZWN0fSBzY2hlbWFzIHRoZSBzY2hlbWFzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSB0eXBlcyB0aGUgdHlwZXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGJlaGF2aW9ycyB0aGUgYmVoYXZpb3JzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBjb21wb25lbnRzIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBkYXRhYmFzZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgICB2YXIgZGJEdW1wID0ge30sXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gJycsXG4gICAgICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgdHlwZUlkID0gJycsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIG1vZGVsID0gbnVsbCxcbiAgICAgICAgY29sbGVjdGlvbiA9IG51bGwsXG4gICAgICAgIHNjaGVtYUlkID0gJycsXG4gICAgICAgIG1vZGVsSWQgPSAnJyxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGlkID0gJyc7XG5cbiAgICAvLyBzY2hlbWFzXG4gICAgZGJEdW1wLnNjaGVtYXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5SdW50aW1lU2NoZW1hLmNvdW50KCkpIHtcbiAgICAgICAgZm9yIChzY2hlbWFJZCBpbiBzdG9yZS5SdW50aW1lU2NoZW1hKSB7XG4gICAgICAgICAgICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLlJ1bnRpbWVTY2hlbWFbc2NoZW1hSWRdKSk7XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vZGVsc1xuICAgIGRiRHVtcC5tb2RlbHMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5SdW50aW1lTW9kZWwuY291bnQoKSkge1xuICAgICAgICBmb3IgKG1vZGVsSWQgaW4gc3RvcmUuUnVudGltZU1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUuUnVudGltZU1vZGVsW21vZGVsSWRdKSk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgZGJEdW1wLm1vZGVsc1ttb2RlbElkXSA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBkYkR1bXAudHlwZXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5SdW50aW1lVHlwZS5jb3VudCgpKSB7XG4gICAgICAgIGZvciAodHlwZUlkIGluIHN0b3JlLlJ1bnRpbWVUeXBlKSB7XG4gICAgICAgICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5SdW50aW1lVHlwZVt0eXBlSWRdKSk7XG4gICAgICAgICAgICBkZWxldGUgdHlwZS5faWQ7XG4gICAgICAgICAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC50eXBlc1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yc1xuICAgIGRiRHVtcC5iZWhhdmlvcnMgPSB7fTtcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gc3RvcmUuUnVudGltZUJlaGF2aW9yKSB7XG4gICAgICAgIGJlaGF2aW9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5SdW50aW1lQmVoYXZpb3JbYmVoYXZpb3JJZF0pKTtcbiAgICAgICAgZGVsZXRlIGJlaGF2aW9yLmNsYXNzSW5mbztcblxuICAgICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgICAgIGRiRHVtcC5iZWhhdmlvcnNbYmVoYXZpb3JJZF0gPSBiZWhhdmlvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBkYkR1bXAuY29tcG9uZW50cyA9IHt9O1xuICAgIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICAgICAgaWYgKGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmNvdW50KCkpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlW2NvbGxlY3Rpb25OYW1lXSkpO1xuXG4gICAgICAgICAgICBmb3IgKGlkIGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sbGVjdGlvbltpZF0uY2xhc3NJbmZvO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25baWRdLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2xsZWN0aW9uW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjb2xsZWN0aW9uKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkYkR1bXAuY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0gPSBjb2xsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRiRHVtcDtcbn1cblxuXG4vKlxuICogVGVzdCBpZiBhbiBvYmplY3QgY29udGFpbnMgYW5vdGhlciBvbmUuXG4gKiBAbWV0aG9kIGNvbnRhaW5zXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBvYmplY3QgXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IHRhcmdldCBvYmplY3QgXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBzb3VyY2Ugb2JqZWN0IGNvbnRhaW5zIHRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb250YWlucyhzb3VyY2UsIHRhcmdldCkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlLFxuICAgICAgICBwcm9wZXJ0eSA9ICcnO1xuXG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W3Byb3BlcnR5XS5tYXRjaChzb3VyY2VbcHJvcGVydHldKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W3Byb3BlcnR5XSAhPT0gc291cmNlW3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKiBcbiAqIEEgY29sbGVjdGlvbiBvZiBkb2N1bWVudHMgbWFuYWdlZCBieSBSdW50aW1lLiA8YnI+XG4gKiBJbnRlcm5hbCBjb2xsZWN0aW9ucyBtYW5hZ2UgY29yZSBvYmplY3RzIG9mIFJ1bnRpbWUgKHNjaGVtYSwgdHlwZSwgLi4uKS4gPGJyPlxuICogUHVibGljIGNvbGxlY3Rpb25zIG1hbmFnZSBjb21wb25lbnRzIG9mIHRoZSBzYW1lIGNsYXNzLiA8YnI+XG4gKiBcbiAqIEBjbGFzcyBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG5ldyBjb2xsZWN0aW9uXG4gKi9cbnZhciBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGlmICgkbWV0YW1vZGVsLmdldFNjaGVtYShuYW1lKSB8fCBpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHN0b3JlW25hbWVdID0ge307XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIGlmIChpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9ucy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIEZpbmQgYSBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBmaW5kXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBkb2N1bWVudHMgdGhhdCBtYXAgdGhlIHF1ZXJ5XG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLlBlcnNvbi5maW5kKHtcIm5hbWVcIjogXCJsYXVyZVwifSk7IDxicj5cbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIiwgXCJhZ2VcIiA6IDI0fSk7IDxicj5cbiAqICRkYi5QZXJzb24uZmluZChbe1wibmFtZVwiOiBcInJlbmVcIn0sIHtcIm5hbWVcIjogXCJyb2JlcnRcIn1dKTtcbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBpZCA9ICcnLFxuICAgICAgICBvYmplY3QgPSB7fTtcblxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICAgIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiBtdWx0aV9zZWFyY2goY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhjcml0ZXJpYSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMocXVlcnksIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogSW5zZXJ0IGFuIG5ldyBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLiA8YnI+XG4gKiBCZWZvcmUgaW5zZXJ0aW5nIHRoZSBkb2N1bWVudCwgUnVudGltZSBjaGVja3MgdGhhdCB0aGUgZG9jdW1lbnQgaXMgY29tcGxpYW50XG4gKiB3aXRoIGl0cyBjbGFzcyBkZWZpbml0aW9uLiA8YnI+IFxuICogVGhlbiwgYWZ0ZXIgaW5zZXJ0aW5nIGl0LCB3ZSBjcmVhdGUgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW5zZXJ0XG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gZG9jdW1lbnQgYSBuZXcgb2JqZWN0IHRvIGFkZFxuICogQHJldHVybiB7QXJyYXl9IGFycmF5IG9mIGlkIGNyZWF0ZWRcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuUGVyc29uLmluc2VydCh7PGJyPlxuICogICAgICBcIm5hbWVcIjogXCJib2JcIiwgPGJyPlxuICogICAgICBcImZpcnN0TmFtZVwiOiBcIlNhaW50LUNsYXJcIiwgPGJyPlxuICogICAgICBcImFnZVwiOiA0MyA8YnI+XG4gKiB9KTsgPGJyPlxuICovXG5SdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbihkb2N1bWVudCkge1xuICAgIHZhciBkb2MgPSBbXSxcbiAgICAgICAgQ29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudCkpIHtcbiAgICAgICAgZG9jID0gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLnB1c2goZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIGRvYy5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX2luc2VydChvYmopIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICBjaGFubmVscyA9IFtdLFxuICAgICAgICAgICAgY2hhbm5lbCA9IG51bGwsXG4gICAgICAgICAgICBzeXN0ZW1zID0gW107XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVTY2hlbWEnOlxuICAgICAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdSdW50aW1lTG9nZ2VyJzpcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZU1vZGVsJzpcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZVR5cGUnOlxuICAgICAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdSdW50aW1lR2VuZXJhdGVkTW9kZWwnOlxuICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3Qob2JqLCAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSkpOlxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBvYmouX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RvcmVbdGhpcy5uYW1lXVtvYmouX2lkXSA9IG9iajtcblxuICAgICAgICAgICAgICAgIENvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG9iaik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudC5pZCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLmluc2VydCh0aGlzLm5hbWUsIG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnUnVudGltZU1lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5SdW50aW1lU3lzdGVtLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3lzdGVtcy5sZW5ndGggfHwgKHN5c3RlbXMubGVuZ3RoICYmIHN5c3RlbXNbMF0uX2lkICE9PSBvYmouZnJvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVscyA9IGV4cG9ydHMuUnVudGltZUNoYW5uZWwuZmluZCh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGNoYW5uZWxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKGNoYW5uZWxzW2ldLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjaGFubmVsc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG9iai5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBvYmouZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KG9iaiwgdGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFVwZGF0ZSBkb2N1bWVudHMgaW50byBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgdXBkYXRlIHRvIG1ha2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFxuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IE51bWJlciBvZiBkb2N1bWVudHMgdXBkYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnVwZGF0ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSk7IDxicj5cbiAqICRkYi5DYXJzLnVwZGF0ZShbe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wiY29kZVwiOiBcIkFaRC02NVwifV0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMudXBkYXRlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9LCB7XCJ1cHNlcnRcIjogdHJ1ZX0pOyA8YnI+XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHF1ZXJ5LCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZG9jcyA9IHRoaXMuZmluZChxdWVyeSksXG4gICAgICAgIHVwZGF0ZWQgPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gZG9jcy5sZW5ndGgsXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnJyxcbiAgICAgICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpLFxuICAgICAgICB0eXBlID0gJyc7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXBzZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLnVwc2VydCA9IG9wdGlvbnMudXBzZXJ0IHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGUpIHtcblxuICAgICAgICAvLyB1cHNlcnQgY2FzZVxuICAgICAgICBpZiAobGVuZ3RoID09PSAwICYmIG9wdGlvbnMudXBzZXJ0KSB7XG4gICAgICAgICAgICBpZiAocXVlcnkuX2lkKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLl9pZCA9IHF1ZXJ5Ll9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHVwZGF0ZSk7XG4gICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNhc2Ugb2YgdXBkYXRlIG9mIF9pZFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cGRhdGUuX2lkICE9PSAndW5kZWZpbmVkJyAmJiB1cGRhdGUuX2lkICE9PSBkb2NzW2ldLl9pZCkge1xuICAgICAgICAgICAgICAgICRsb2cudXBkYXRlVXVpZChkb2NzW2ldLl9pZCwgdXBkYXRlLl9pZCwgdHlwZW9mICRjb21wb25lbnQuZ2V0KHVwZGF0ZS5faWQpICE9PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoYXR0cmlidXRlTmFtZSBpbiB1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgIT09ICdSdW50aW1lU2NoZW1hJyAmJiB0aGlzLm5hbWUgIT09ICdSdW50aW1lTW9kZWwnICYmIHRoaXMubmFtZSAhPT0gJ1J1bnRpbWVHZW5lcmF0ZWRNb2RlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBzY2hlbWFbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuZ2V0TWV0YURlZigpW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdID0gdXBkYXRlW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFt1cGRhdGVbYXR0cmlidXRlTmFtZV1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUodGhpcy5uYW1lLCBkb2NzW2ldLl9pZCwgYXR0cmlidXRlTmFtZSwgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCBzY2hlbWFbYXR0cmlidXRlTmFtZV0udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGUoYXR0cmlidXRlTmFtZSwgZG9jc1tpXS5faWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBtb3JlIGNoZWNrIGluIGNhc2Ugb2Ygc2NoZW1hIHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh0aGlzLm5hbWUsIGRvY3NbaV0uX2lkLCBhdHRyaWJ1dGVOYW1lLCB1cGRhdGVbYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG59O1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgZG9jdW1lbnQgZnJvbSB0aGUgY29sbGxlY3Rpb24uIDxicj5cbiAqIFdoZW4gYSBkb2N1bWVudCBpcyByZW1vdmVkLCB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnkgcXVlcnkgdG8gZmluZCB0aGUgZG9jdW1lbnRzIHRvIHJlbW92ZVxuICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgZG9jdW1lbnRzIGlkIHJlbW92ZWRcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuQ2Fycy5yZW1vdmUoe1wiY29kZVwiOiBcIkFaRC03MVwifSk7IDxicj5cbiAqICRkYi5DYXJzLnJlbW92ZShbe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wiY29kZVwiOiBcIkFaRC02NVwifV0pOyA8YnI+XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBpZCA9ICcnLFxuICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBvYmplY3QgPSB7fTtcblxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICAgIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICAgICAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX3JlbW92ZShjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHRoaXMubmFtZSwgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHRoaXMubmFtZSwgaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgaWYgKGNvcmVEYi5pbmRleE9mKHRoaXMubmFtZSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh0aGlzLm5hbWUsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGNvdW50XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gMCxcbiAgICAgICAgb2JqZWN0SWQgPSAnJztcbiAgICBmb3IgKG9iamVjdElkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgcmVzdWx0Kys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSBhIG5ldyB7eyNjcm9zc0xpbmsgXCJSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uXCJ9fXt7L2Nyb3NzTGlua319LlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgICBleHBvcnRzW25hbWVdID0gbmV3IFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24obmFtZSk7XG59XG5cblxuLypcbiAqIEltcG9ydC9FeHBvcnQgYSBSdW50aW1lIHN5c3RlbSBpbnRvL2Zyb20gdGhlIGRhdGFiYXNlXG4gKiBAbWV0aG9kIHN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFJ1bnRpbWUgc3lzdGVtIG9yIHRoZSBpZiBvZiB0aGUgY3VycmVudCBSdW50aW1lIHN5c3RlbVxuICovXG5mdW5jdGlvbiBzeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgICB2YXIgcmVzdWx0ID0gJycsXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gJycsXG4gICAgICAgIGNvbXBvbmVudElkID0gJycsXG4gICAgICAgIHR5cGVOYW1lID0gJycsXG4gICAgICAgIHNjaGVtYU5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxOYW1lID0gJycsXG4gICAgICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgc3lzdGVtcyA9IFtdLFxuICAgICAgICBpZCA9IG51bGwsXG4gICAgICAgIGRiRHVtcCA9IG51bGwsXG4gICAgICAgIG1hc3RlcnN5c3RlbSA9IG51bGwsXG4gICAgICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICAgICAgZXhwb3J0ZWRTeXN0ZW0gPSB7fTtcblxuICAgIGlmIChpbXBvcnRlZFN5c3RlbSkgeyAvLyBpbXBvcnRcblxuICAgICAgICAvLyBhZGQgdHlwZXNcbiAgICAgICAgZm9yICh0eXBlTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS50eXBlcykge1xuICAgICAgICAgICAgJG1ldGFtb2RlbC50eXBlKGltcG9ydGVkU3lzdGVtLnR5cGVzW3R5cGVOYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgc2NoZW1hc1xuICAgICAgICBmb3IgKHNjaGVtYU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hcykge1xuICAgICAgICAgICAgJG1ldGFtb2RlbC5zY2hlbWEoaW1wb3J0ZWRTeXN0ZW0uc2NoZW1hc1tzY2hlbWFOYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgbW9kZWxzXG4gICAgICAgIGZvciAobW9kZWxOYW1lIGluIGltcG9ydGVkU3lzdGVtLm1vZGVscykge1xuICAgICAgICAgICAgJG1ldGFtb2RlbC5tb2RlbChpbXBvcnRlZFN5c3RlbS5tb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICAkbWV0YW1vZGVsLmNyZWF0ZSgpO1xuXG4gICAgICAgIC8vYWRkIGJlaGF2aW9yc1xuICAgICAgICBmb3IgKGJlaGF2aW9ySWQgaW4gaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICAgICAgICBleHBvcnRzLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBjb21wb25lbnRzXG4gICAgICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmluc2VydChpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXVtjb21wb25lbnRJZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5SdW50aW1lU3lzdGVtLmZpbmQoe1xuICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHN5c3RlbXNbMF0uX2lkID09PSBpbXBvcnRlZFN5c3RlbS5faWQpIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRlZFN5c3RlbS5tYXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRlZFN5c3RlbS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluc2VydCB0aGUgc3lzdGVtIGluIERCXG4gICAgICAgIGV4cG9ydHMuUnVudGltZVN5c3RlbS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0pO1xuXG4gICAgICAgIHJlc3VsdCA9IGltcG9ydGVkU3lzdGVtLl9pZDtcblxuICAgIH0gZWxzZSB7IC8vIGV4cG9ydFxuICAgICAgICAvLyBnZXQgaWQgb2YgdGhlIG1hc3RlciBzeXN0ZW1cbiAgICAgICAgc3lzdGVtcyA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBtYXN0ZXJzeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgICAgICAgICAgaWQgPSBtYXN0ZXJzeXN0ZW0uX2lkO1xuXG4gICAgICAgICAgICAvLyBwcm9wXG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5faWQgPSBpZDtcbiAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtLm5hbWUgPSBtYXN0ZXJzeXN0ZW0ubmFtZTtcbiAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtLmRlc2NyaXB0aW9uID0gbWFzdGVyc3lzdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0udmVyc2lvbiA9IG1hc3RlcnN5c3RlbS52ZXJzaW9uO1xuXG4gICAgICAgICAgICAvLyBkdW1wXG4gICAgICAgICAgICBkYkR1bXAgPSBkdW1wKCk7XG4gICAgICAgICAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluIGRiRHVtcCkge1xuICAgICAgICAgICAgICAgIGlmIChkYkR1bXAuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtW2NvbGxlY3Rpb25OYW1lXSA9IGRiRHVtcFtjb2xsZWN0aW9uTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGJlaGF2aW9ySWQgaW4gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3IgPSBleHBvcnRlZFN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF07XG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IuY29tcG9uZW50ID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShleHBvcnRlZFN5c3RlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBcInt9XCI7XG4gICAgICAgICAgICAkbG9nLm1hc3RlclN5c3RlbU5vdEZvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogRXhwb3J0IGEgUnVudGltZSBzdWItc3lzdGVtLlxuICogQG1ldGhvZCBzdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBzdHJpbmdpZmllZCBSdW50aW1lIHN1Yi1zeXN0ZW1cbiAqIFxuICogQGV4YW1wbGVcbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHNjaGVtYXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJ0eXBlc1wiOntcIm5hbWVcIjpcImFkZHJlc3NcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiB0eXBlcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImJlaGF2aW9yc1wiOntcImNvbXBvbmVudFwiOlwibGF1cmVcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBiZWhhdmlvcnMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGZpbHRlciBleHBvcnQgb24gY29tcG9uZW50cyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn0sXCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGNvbWJpbmUgZmlsdGVyc1xuICovXG5mdW5jdGlvbiBzdWJzeXN0ZW0ocGFyYW1zKSB7XG4gICAgdmFyIHN5c3RlbSA9IHt9LFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgZGVmYXVsdE5hbWUgPSAnJyxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBtb2RlbCA9IG51bGwsXG4gICAgICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICAgICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lID0gJyc7XG5cbiAgICAvLyBkZWZhdWx0IHZhbHVlc1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICBkZWZhdWx0TmFtZSA9IHJlc3VsdFswXS5uYW1lO1xuICAgIH1cblxuICAgIHN5c3RlbS5uYW1lID0gcGFyYW1zLm5hbWUgfHwgJ3N1Yl8nICsgZGVmYXVsdE5hbWU7XG4gICAgc3lzdGVtLnZlcnNpb24gPSBwYXJhbXMudmVyc2lvbiB8fCAnMC4wLjEnO1xuICAgIHN5c3RlbS5kZXNjcmlwdGlvbiA9IHBhcmFtcy5kZXNjcmlwdGlvbiB8fCAnJztcblxuICAgIHN5c3RlbS5zdWJzeXN0ZW0gPSB0cnVlO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIHN5c3RlbS5zY2hlbWFzID0ge307XG4gICAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuUnVudGltZVNjaGVtYS5maW5kKHBhcmFtcy5zY2hlbWEpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2NoZW1hID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc2NoZW1hc1tzY2hlbWEuX2lkXSA9IHNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vZGVsc1xuICAgIHN5c3RlbS5tb2RlbHMgPSB7fTtcbiAgICBpZiAocGFyYW1zLm1vZGVscykge1xuICAgICAgICByZXN1bHQgPSBleHBvcnRzLlJ1bnRpbWVNb2RlbC5maW5kKHBhcmFtcy5tb2RlbHMpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbW9kZWwgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLm1vZGVsc1ttb2RlbC5faWRdID0gbW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0eXBlc1xuICAgIHN5c3RlbS50eXBlcyA9IHt9O1xuICAgIGlmIChwYXJhbXMudHlwZXMpIHtcbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5SdW50aW1lVHlwZS5maW5kKHBhcmFtcy50eXBlcyk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0eXBlID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCF0eXBlLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGUuX2lkXSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvcnNcbiAgICBzeXN0ZW0uYmVoYXZpb3JzID0ge307XG4gICAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBleHBvcnRzLlJ1bnRpbWVCZWhhdmlvci5maW5kKHBhcmFtcy5iZWhhdmlvcnMpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmVoYXZpb3IgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9yLl9pZF0gPSBiZWhhdmlvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBzeXN0ZW0uY29tcG9uZW50cyA9IHt9O1xuICAgIGlmIChwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgICBmb3IgKGNsYXNzTmFtZSBpbiBwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKGV4cG9ydHNbY2xhc3NOYW1lXSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV0gPSB7fTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGV4cG9ydHNbY2xhc3NOYW1lXS5maW5kKHBhcmFtcy5jb21wb25lbnRzW2NsYXNzTmFtZV0pO1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtLmNvbXBvbmVudHNbY2xhc3NOYW1lXVtjb21wb25lbnQuX2lkXSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3lzdGVtKTtcbn1cblxuXG4vKlxuICogQ2xlYXIgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICB2YXIgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gJyc7XG5cbiAgICAvLyByZW1vdmUgY29sbGVjdGlvbnNcbiAgICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBpbnRlcm5hbCBjb2xsZWN0aW9uc1xuICAgIGxlbmd0aCA9IGludGVybmFsREIubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGludGVybmFsREJbaV07XG4gICAgICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG4vKlxuICogSW5pdCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgcnVudGltZVN5c3RlbUlkID0gJycsXG4gICAgICAgIHJ1bnRpbWVTeXN0ZW0gPSBudWxsO1xuXG4gICAgcnVudGltZVN5c3RlbSA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgJ19pZCc6ICdlODljNjE3YjZiMTVkMjQnXG4gICAgfSlbMF07XG5cbiAgICAvLyBjbGVhciBhbGwgdGhlIGRhdGEgaW4gbWVtb3J5XG4gICAgZXhwb3J0cy5jbGVhcigpO1xuICAgICRjb21wb25lbnQuY2xlYXIoKTtcbiAgICAkbWV0YW1vZGVsLmNsZWFyKCk7XG4gICAgJHN0YXRlLmNsZWFyKCk7XG4gICAgJGJlaGF2aW9yLmNsZWFyKCk7XG5cbiAgICAvLyBpbml0IG1ldGFtb2RlbFxuICAgICRtZXRhbW9kZWwuaW5pdCgpO1xuXG4gICAgLy8gcmVpbXBvcnQgUnVudGltZSBjb3JlIHN5c3RlbVxuICAgIHJ1bnRpbWVTeXN0ZW1JZCA9IGV4cG9ydHMuc3lzdGVtKHJ1bnRpbWVTeXN0ZW0pO1xuICAgICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVTeXN0ZW1JZCkubWFpbigpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBkYXRhYmFzZS4gPGJyPlxuICogUnVudGltZSBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6IDxicj5cbiAqIC0gY29sbGVjdGlvbnMgdG8gc3RvcmUgZG9jdW1lbnRzIChzY2hlbWFzLCB0eXBlcywgY29tcG9uZW50cywgLi4uKSBhbmQgPGJyPlxuICogLSBBUElzIHRvIGltcG9ydCBvciBleHBvcnQgZG9jdW1lbnRzLiA8YnI+XG4gKiBcbiAqIFJ1bnRpbWUgZGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gUnVudGltZSBtZXRhbW9kZWwgYmVjYXVzZTogPGJyPlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IFJ1bnRpbWUgZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLCA8YnI+XG4gKiAtIGluc2VydCBvcGVyYXRpb24gYXV0b21hdGljYWxseSBjcmVhdGVzIGEgY29tcG9uZW50IGFuZCA8YnI+XG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICogICBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAY2xhc3MgcnVudGltZS1kYlxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcge3sjY3Jvc3NMaW5rIFwiUnVudGltZURhdGFiYXNlQ29sbGVjdGlvblwifX17ey9jcm9zc0xpbmt9fS5cbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblxuXG4vKipcbiAqIFJ1bnRpbWUgZGF0YWJhc2Ugc3RvcmUgdGhhdCBsaXN0cyBhbGwgdGhlIGNvbGxlY3Rpb25zLlxuICogQHByb3BlcnR5IHtKU09OfSBzdG9yZVxuICovXG5leHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqXG4gKiBJbXBvcnQvRXhwb3J0IGEgUnVudGltZSBzeXN0ZW0gaW50by9mcm9tIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2Qgc3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgUnVudGltZSBzeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBpZCBvZiB0aGUgaW1wb3J0ZWQgUnVudGltZSBzeXN0ZW0gb3IgdGhlIGN1cnJlbnQgUnVudGltZSBzeXN0ZW0gIFxuICovXG5leHBvcnRzLnN5c3RlbSA9IHN5c3RlbTtcblxuXG4vKipcbiAqIEV4cG9ydCBhIFJ1bnRpbWUgc3ViLXN5c3RlbS5cbiAqIEBtZXRob2Qgc3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgUnVudGltZSBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZXhwb3J0cy5zdWJzeXN0ZW0gPSBzdWJzeXN0ZW07XG5cblxuLyoqXG4gKiBDbGVhciB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcblxuXG4vKipcbiAqIEluaXQgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmV4cG9ydHMuaW5pdCA9IGluaXQ7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBEZXNpZ24gfCBDcmVhdGUgfCBDb21wb3NlXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIHRoZSBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEBjbGFzcyBydW50aW1lLWhlbHBlclxuICogQHN0YXRpY1xuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydHkgKi9cblxuXG52YXIgcnVudGltZVJlZiA9IG51bGw7XG5cblxuLyogUHVibGljIG1ldGhvZCAqL1xuXG5cbi8qXG4gKiBDaGVjayBpZiBhIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RzLlxuICogQG1ldGhvZCBpc1J1bnRpbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYSBSdW50aW1lIGluc3RhbmNlIGV4aXN0XG4gKi9cbmZ1bmN0aW9uIGlzUnVudGltZSgpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoJGRiLlJ1bnRpbWUgJiYgJGRiLlJ1bnRpbWUuZmluZCgpLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgUnVudGltZSBpbnN0YW5jZS5cbiAqIEBtZXRob2QgZ2V0UnVudGltZVxuICogQHJldHVybiB7UnVudGltZX0gUnVudGltZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXRSdW50aW1lKCkge1xuICAgIHZhciBydW50aW1lSWQgPSAnJyxcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcblxuICAgIGlmICghcnVudGltZVJlZikge1xuICAgICAgICBydW50aW1lSWQgPSAkZGIuUnVudGltZS5maW5kKClbMF0uX2lkO1xuICAgICAgICBydW50aW1lUmVmID0gJGNvbXBvbmVudC5nZXQocnVudGltZUlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVudGltZVJlZjtcbn1cblxuXG4vKlxuICogR2VuZXJhdGUgYSB1dWlkLlxuICogQG1ldGhvZCBnZW5lcmF0ZUlkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgdXVpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICAgIGZ1bmN0aW9uIGdlbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbigpICsgZ2VuKCkgKyBnZW4oKTtcbn1cblxuXG4vKlxuICogQWRkIFBvbHlmaWxsXG4gKiBAbWV0aG9kIHBvbHlmaWxsXG4gKi9cbmZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuXG4gICAgLy8gZml4aW5nIGNvbnN0cnVjdG9yLm5hbWUgcHJvcGVydHkgaW4gSUVcbiAgICAvLyB0YWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUxNDA3MjMvY29uc3RydWN0b3ItbmFtZS1pcy11bmRlZmluZWQtaW4taW50ZXJuZXQtZXhwbG9yZXJcbiAgICBpZiAoRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09IHVuZGVmaW5lZCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnbmFtZScsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb25cXHMoW14oXXsxLH0pXFwoLztcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKCh0aGlzKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0udHJpbSgpIDogXCJcIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7IH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIHRoZSBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEBjbGFzcyBydW50aW1lLWhlbHBlclxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBHZXQgUnVudGltZSBpbnN0YW5jZS5cbiAqIEBtZXRob2QgZ2V0UnVudGltZVxuICogQHJldHVybiB7UnVudGltZX0gUnVudGltZSBpbnN0YW5jZVxuICovXG5leHBvcnRzLmdldFJ1bnRpbWUgPSBnZXRSdW50aW1lO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBSdW50aW1lIGluc3RhbmNlIGV4aXN0cy5cbiAqIEBtZXRob2QgaXNSdW50aW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGEgUnVudGltZSBpbnN0YW5jZSBleGlzdFxuICovXG5leHBvcnRzLmlzUnVudGltZSA9IGlzUnVudGltZTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdXVpZC5cbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybiB7U3RyaW5nfSBhIHV1aWRcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZUlkID0gZ2VuZXJhdGVJZDtcblxuXG4vKipcbiAqIEFkZCBQb2x5ZmlsbFxuICogQG1ldGhvZCBwb2x5ZmlsbFxuICovXG5leHBvcnRzLnBvbHlmaWxsID0gcG9seWZpbGw7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBEZXNpZ24gfCBDcmVhdGUgfCBDb21wb3NlXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAY2xhc3MgcnVudGltZS1sb2dcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBJRCA9ICdfaWQnLFxuICAgIGN1cnJlbnRMZXZlbCA9ICd3YXJuJyxcbiAgICBsb2dnZXJSZWYgPSBudWxsLFxuICAgIGZha2VMb2dnZXJSZWYgPSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbDogJ3dhcm4nLFxuICAgICAgICBsZXZlbDogZnVuY3Rpb24gZGVidWcobGV2ZWxOYW1lKSB7XG4gICAgICAgICAgICBpZiAobGV2ZWxOYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBsZXZlbE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlYnVnOiBmdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbmZvOiBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8IHRoaXMuY3VycmVudExldmVsID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSAnaW5mbycgfHwgdGhpcy5jdXJyZW50TGV2ZWwgPT09ICd3YXJuJyB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuLypcbiAqIEdldCB0aGUgUnVudGltZUxvZ2dlciBpbnN0YW5jZS5cbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcmV0dXJuIHtSdW50aW1lTG9nZ2VyfSBSdW50aW1lTG9nZ2VyIGluc3RhbmNlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRMb2dnZXIoKSB7XG4gICAgdmFyIGxvZ2dlcklkID0gJycsXG4gICAgICAgIGxvZ2dlcnMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcblxuICAgIGlmICghJG1ldGFtb2RlbC5nZXRNb2RlbCgnUnVudGltZUxvZ2dlcicpKSB7XG4gICAgICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VycyA9ICRkYi5SdW50aW1lTG9nZ2VyLmZpbmQoKTtcbiAgICAgICAgaWYgKGxvZ2dlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsb2dnZXJJZCA9IGxvZ2dlcnNbMF1bSURdO1xuXG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyUmVmID0gJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxvZ2dlclJlZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIFNldCB0aGUgbGV2ZWwgb2YgdGhlIGxvZy5cbiAqIEBtZXRob2QgbGV2ZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbE5hbWUgbmFtZSBvZiB0aGUgbGV2ZWxcbiAqL1xuZnVuY3Rpb24gbGV2ZWwobGV2ZWxOYW1lKSB7XG4gICAgY3VycmVudExldmVsID0gbGV2ZWxOYW1lO1xufVxuXG5cbi8qXG4gKiBBIHByb3BlcnR5IG9mIGEgc2NoZW1hIGlzIHVua25vd24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgdGhlIHNjaGVtYSBkZWZpbml0aW9uXG4gKi9cbmZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHNjaGVtYSkge1xuICAgIHZhciBtZXNzYWdlID0gJyc7XG5cbiAgICBpZiAoc2NoZW1hW0lEXSkge1xuICAgICAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgXCIgKyBzY2hlbWFbSURdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciBhIG1vZGVsXCI7XG4gICAgfVxuXG4gICAgZ2V0TG9nZ2VyKCkud2FybihtZXNzYWdlKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHBlcm9wZXR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSB0aGUgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZShwcm9wZXJ0eU5hbWUsIHR5cGUsIHByb3BlcnR5KSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInOiBleHBlY3RlZCB0eXBlICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArIHR5cGVvZiBwcm9wZXJ0eSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCInXCIgKyB2YWx1ZSArIFwiJyBpcyBhbiBpbnZhbGlkIHZhbHVlIGZvciB0aGUgdHlwZSBlbnVtICdcIiArIHR5cGUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDbGFzc05hbWUoY29tcG9uZW50SWQsIHR5cGUsIGNvbnN0cnVjdG9yTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnRJZCArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIGNvbnN0cnVjdG9yTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogTWlzc2luZyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5KHByb3BlcnR5TmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdJbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWlzc2luZyBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ0ltcGxlbWVudGF0aW9uKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwic2NoZW1hICdcIiArIG5hbWUgKyBcIicgaXMgbWlzc2luZy5cIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eSBvZiBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlSW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzTmFtZSkge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFwidGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIG9mIHRoZSBtb2RlbCAnXCIgKyBjbGFzc05hbWUgKyBcIicgaXMgaW52YWxpZFwiKTtcbn1cblxuXG4vKlxuICogTWlzc2luZyBhIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArIGNsYXNzTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVW5rb3duIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgYSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gdW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBzY2hlbWEpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcInRoZSBtb2RlbCAnXCIgKyBzY2hlbWEgKyBcIicgaGFzIGFuIHVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGEgdHlwZSBkZWZpbml0aW9uXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlRGVmaW5pdGlvbihuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSB0eXBlICdcIiArIG5hbWUgKyBcIicgaXMgbm90IHZhbGlkXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHByb3BlcnR5IG5hbWUuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZS5yZXBsYWNlKCdAJywgJycpICsgXCInIGluc3RlYWQgb2YgJ1wiICsgdHlwZW9mIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5IHR5cGUgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJzogZXhwZWN0ZWQgJ3N0cmluZycgaW5zdGVhZCBvZiAnXCIgKyB0eXBlb2YgdHlwZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5LlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiByZWFkT25seVByb3BlcnR5KGlkLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiY2FuIG5vdCBzZXQgcmVhZC1vbmx5IHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgZG9jdW1lbnQgb24gYSBSdW50aW1lIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KGRvYywgY29sbGVjdGlvbk5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBkb2N1bWVudCAnXCIgKyBKU09OLnN0cmluZ2lmeShkb2MpICsgXCInIG9uIGFuIGluc2VydCBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwcm9wZXJ0eSBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKGNvbGxlY3Rpb25OYW1lLCBpZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUuaW5kZXhPZihcIiNcIikgIT09IC0xKSB7XG4gICAgICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgdHlwZW9mIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG5cbi8qXG4gKiBVbmtvbncgcHJvcGVydHkgb24gYSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGUocHJvcGVydHlOYW1lLCBpZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQ2FsbCBhbiB1bmtub3duIG1ldGhvZCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICovXG5mdW5jdGlvbiB1bmtub3duTWV0aG9kKGNsYXNzSWQsIG1ldGhvZE5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIGNhbGwgYW4gdW5rbm93biBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBmb3IgdGhlIGNsYXNzICdcIiArIGNsYXNzSWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBuYW1lIGZvciBjcmVhdGluZyB0aGUgY29sbGVjdGlvbiAnXCIgKyBuYW1lICsgXCInOiB0aGVyZSBpcyBubyBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpbiB0aGUgbWV0YW1vZGVsXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgcmVzdWx0IG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb3QgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGV4cGVjdGVkVHlwZSBleHBlY3RlZCB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBjdXJyZW50IHR5cGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFJlc3VsdFR5cGUoaWQsIG1ldGhvZE5hbWUsIGV4cGVjdGVkVHlwZSwgdHlwZSkge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSByZXN1bHQgb2YgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInOiBleHBlY3RlZCB0eXBlICdcIiArIGV4cGVjdGVkVHlwZSArIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICsgdHlwZSArIFwiJ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgKyBleHBlY3RlZFR5cGUgKyBcIidcIik7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBVbmtub3duIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWYgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiB1bmtub3duQ29tcG9uZW50KGNsYXNzTmFtZSwgY29tcG9uZW50SWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidW5rb3duIGNsYXNzIGNvbXBvbmVudCAnXCIgKyBjbGFzc05hbWUgKyBcIicgZm9yIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnRJZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIFJ1bnRpbWUgd29ya2Zsb3cgaGFzIGJlZW4gcmVzdGFydGVkLlxuICogQG1ldGhvZCB3b3JrZmxvd1Jlc3RhcnRlZFxuICovXG5mdW5jdGlvbiB3b3JrZmxvd1Jlc3RhcnRlZCgpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKCdydW50aW1lIGhhcyBiZWVuIHJlc3RhcnRlZCcpO1xufVxuXG5cbi8qXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBwYXJhbWV0ZXJzIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAqIFxuICovXG5mdW5jdGlvbiBpbnZhbGlkUGFyYW1UeXBlKGlkLCBtZXRob2ROYW1lLCBwYXJhbU5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcGFyYW1ldGVyICdcIiArIHBhcmFtTmFtZSArIFwiJyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQWRkIGEgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciB0byBhIHN0YXRlLlxuICogQG1ldGhvZCBiZWhhdmlvck5vdFVuaXF1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBiZWhhdmlvck5vdFVuaXF1ZShpZCwgc3RhdGVOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBhZGQgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciBmb3IgdGhlIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjb21wb25lbnQgY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNvbXBvbmVudCBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIGNhbGwgdG8gYSByZW1vdmUgc3RhdGUgb2YgdGhlIGJlaGF2aW9yIG1vZHVsZSBpcyBpbnZhbGlkLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPZmZcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFN0YXRlT2ZmKGlkLCBzdGF0ZU5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIHJlbW92ZSBhIGJlaGF2aW9yIGZyb20gYW4gdW5rd293biBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY29tcG9uZW50IGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgbWFzdGVyIHN5c3RlbSBpcyBub3QgZm91bmQuXG4gKiBAbWV0aG9kIG1hc3RlclN5c3RlbU5vdEZvdW5kXG4gKi9cbmZ1bmN0aW9uIG1hc3RlclN5c3RlbU5vdEZvdW5kKCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJjYW4gbm90IGV4cG9ydCB0aGUgZGF0YWJhc2UgYmVjYXVzZSBubyBzeXN0ZW0gd2FzIGRlZmluZWRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIGV4cGVjdGVjIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHZhbHVlICdcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZU5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua25vd24gdHlwZS5cbiAqIEBtZXRob2QgdW5rbm93blR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB2YWx1ZVxuICovXG5mdW5jdGlvbiB1bmtub3duVHlwZSh2YWx1ZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ1bmtub3duIHR5cGUgZm9yIHZhbHVlICdcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkLlxuICogQG1ldGhvZCBjYW5Ob3RZZXRWYWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gY2FuTm90WWV0VmFsaWRhdGUoaWQsIGNsYXNzTmFtZSkge1xuICAgIGdldExvZ2dlcigpLmluZm8oXCJjYW4gbm90IHlldCB2YWxpZGF0ZSBpZiB0aGUgY29tcG9uZW50ICdcIiArIGlkICsgXCInIGlzIGFuIGluc3RhbmNlIG9mICdcIiArIGNsYXNzTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKipcbiAqIEEgbWVzc2FnZSBzZW5kIGJ5IHRoZSBjaGFubmVsIGlzIGludmFsaWRcbiAqIEBtZXRob2QgaW52YWxpZENoYW5uZWxFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDaGFubmVsRXZlbnQobWVzc2FnZSwgZXZlbnROYW1lLCB0eXBlKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgdGhlIG1lc3NhZ2UgJ1wiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBmb3IgZXZlbnQgJ1wiICsgZXZlbnROYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGFuIGFjdGlvbiBhZGQgd2l0aCBvbiBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgd2hlbiBhZGRpbmcgYW4gYWN0aW9uIG9uIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQ2hhbmdlIHRoZSBpZCBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgdXBkYXRlVXVpZFxuICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmV3SWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtCb29sZWFufSBhbHJlYWR5VXNlZCBuZXdJZCBhbHJlYWR5IHVzZWRcbiAqL1xuZnVuY3Rpb24gdXBkYXRlVXVpZChjdXJyZW50SWQsIG5ld0lkLCBhbHJlYWR5VXNlZCkge1xuICAgIGlmIChhbHJlYWR5VXNlZCkge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgKyBjdXJyZW50SWQgKyBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArIG5ld0lkICsgXCInIHRoYXQgaXMgYWxyZWFkeSB1c2VkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgdG8gdXBkYXRlIGEgY29tcG9uZW50IG9mIGlkICdcIiArIGN1cnJlbnRJZCArIFwiJyB3aXRoIHRoZSBuZXcgaWQgJ1wiICsgbmV3SWQgKyBcIidcIik7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZC5cbiAqIEBtZXRob2QgaW52YWxpZFVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBpbnZhbGlkVXNlT2ZDb21wb25lbnQoaWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBzY2hlbWEuXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU2NoZW1hKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCB2YWxpZFwiKTtcbn1cblxuXG4vKlxuICogVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIG1vZGVsLlxuICogQG1ldGhvZCBpbnZhbGlkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRNb2RlbChuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCB2YWxpZFwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwYXJhbWV0ZXJzIHNldCB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtZXRlcnMoY2xhc3NJZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICsgY2xhc3NJZCArIFwiJyBhcmUgbm90IGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFwiKTtcbn1cblxuXG4vKlxuICogVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50LlxuICogQG1ldGhvZCBkZXN0cm95ZWRDb21wb25lbnRDYWxsXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkZXN0cm95ZWRDb21wb25lbnRDYWxsKHByb3BlcnR5TmFtZSwgaWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5aW5nIHRvIGdldCB0aGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIHRoZSBkZXN0cm95ZWQgY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHBhcmFtZXRlciB0eXBlICB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgc2NoZW1hIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyhvYmplY3QsIG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIGNvbnN0cnVjdG9yIHBhcmFtZXRlciAnXCIgKyBKU09OLnN0cmluZ2lmeShvYmplY3QpICsgXCInIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCBhbiBvYmplY3RcIik7XG59XG5cblxuLypcbiAqIEdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rb3duIG1vZGVsLlxuICogQG1ldGhvZCB1bmtub3duTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiB1bmtub3duTW9kZWwoY2xhc3NJZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgZ2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtub3duIG1vZGVsICdcIiArIGNsYXNzSWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgc2NoZW1hIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBtaXNzaW5nU2NoZW1hKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmdcIik7XG59XG5cblxuLypcbiAqIEEgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgd2hlcmUgdGhlIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5mdW5jdGlvbiBjeWNsaWNEZXBlbmRlbmN5KG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcignYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSB3aXRoIFxc4oCZJyArIG5hbWUgKyAnXFzigJkgc2NoZW1hIGhhcyBiZWVuIGZvdW5kLCBwbGVhc2UgY2hlY2sgdGhlIFxcJ19pbmhlcml0XFwnIHByb3BlcnRpZXMgb2YgeW91ciBzY2hlbWFzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3IoJ2EgY3ljbGljIGluaGVyaXRhbmNlIGRlcGVuZGVuY3kgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgXFwnX2luaGVyaXRcXCcgcHJvcGVydGllcyBvZiB5b3VyIHNjaGVtYXMnKTtcbiAgICB9XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVOYW1lIG9mIHRoZSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUsIHR5cGUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBlbnVtZXJhdGVkIHR5cGUgJ1wiICsgdHlwZU5hbWUgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICsgdHlwZW9mIHZhbHVlICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBMb2FkIHNjaGVtYS5cbiAqIEBtZXRob2QgbG9hZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGxvYWRTY2hlbWEobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmluZm8oXCJsb2FkIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBMb2FkIG1vZGVsLlxuICogQG1ldGhvZCBsb2FkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGxvYWRNb2RlbChuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuaW5mbyhcImxvYWQgbW9kZWwgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogTG9hZCB0eXBlLlxuICogQG1ldGhvZCBsb2FkVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICovXG5mdW5jdGlvbiBsb2FkVHlwZShuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuaW5mbyhcImxvYWQgdHlwZSAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDb21waWxlIHNjaGVtYS5cbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTY2hlbWEobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmluZm8oXCJjb21waWxlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufVxuXG5cbi8qXG4gKiBHZW5lcmF0ZSBtb2RlbC5cbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVNb2RlbChuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuaW5mbyhcImdlbmVyYXRlIG1vZGVsICdcIiArIG5hbWUgKyBcIicuLi5cIik7XG59XG5cblxuLypcbiAqIENoZWNrIG1vZGVsLlxuICogQG1ldGhvZCBjaGVja01vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBjaGVja01vZGVsKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwiYW5hbHl6ZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwiY3JlYXRlIGNvbGxlY3Rpb24gJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn1cblxuLypcbiAqIENyZWF0ZSBjbGFzcy5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwiY3JlYXRlIGNsYXNzICdcIiArIG5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEJlZ2lucyBtb2RlbCBjcmVhdGlvbi5cbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkJlZ2luXG4gKi9cbmZ1bmN0aW9uIG1vZGVsQ3JlYXRpb25CZWdpbigpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwic3RhcnRpbmcgbW9kZWwgY3JlYXRpb24uLi5cIik7XG59XG5cblxuLypcbiAqIEVuZCBtb2RlbCBjcmVhdGlvbi5cbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkVuZFxuICovXG5mdW5jdGlvbiBtb2RlbENyZWF0aW9uRW5kKCkge1xuICAgIGdldExvZ2dlcigpLmluZm8oXCJtb2RlbCBjcmVhdGlvbiBlbmRlZFwiKTtcbn1cblxuXG4vKlxuICogQW4gZXJyb3IgaGFwcGVuZWQgd2hlbiBpbnZva2luZyBhIGJlaGF2aW9yLlxuICogQG1ldGhvZCBhY3Rpb25JbnZva2VFcnJvclxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICovXG5mdW5jdGlvbiBhY3Rpb25JbnZva2VFcnJvcihzdGF0ZSwgaWQsIG1lc3NhZ2UpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgKyBzdGF0ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIic6IFwiICsgbWVzc2FnZSk7XG59XG5cblxuLypcbiAqIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hLlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRTY2hlbWFQcm9wZXJ0eShuYW1lLCBwcm9wTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHByb3BlcnR5ICdcIiArIHByb3BOYW1lICsgXCInIGZvciBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJzogb25seSAncHJvcGVydHknLCAnbGluaycsICdjb2xsZWN0aW9uJywgJ21ldGhvZCcgYW5kICdldmVudCcgYXJlIGFsbG93ZWQuXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGZvcm1hdCBmb3IgdGhlIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlGb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmogZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eUZvcm1hdChvYmopIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBmb3JtYXQgZm9yIGEgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5JzogJ1wiICsgb2JqICsgXCInIGlzIG5vdCBhbiBvYmplY3RcIik7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdGhhdCB3cml0ZSBhIGxvZy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEBjbGFzcyBydW50aW1lLWxvZ1xuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBTZXQgdGhlIGxldmVsIG9mIHRoZSBsb2cuXG4gKiBAbWV0aG9kIGxldmVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbGV2ZWxOYW1lIG5hbWUgb2YgdGhlIGxldmVsXG4gKi9cbmV4cG9ydHMubGV2ZWwgPSBsZXZlbDtcblxuXG4vKipcbiAqIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93bi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHkgPSB1bmtub3duUHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlO1xuXG5cbi8qKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVmFsdWUgPSBpbnZhbGlkRW51bVZhbHVlO1xuXG5cbi8qKlxuICogSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2xhc3NOYW1lID0gaW52YWxpZENsYXNzTmFtZTtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5ID0gbWlzc2luZ1Byb3BlcnR5O1xuXG5cbi8qKlxuICogQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdJbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWlzc2luZyBzY2hlbWFcbiAqL1xuZXhwb3J0cy5taXNzaW5nSW1wbGVtZW50YXRpb24gPSBtaXNzaW5nSW1wbGVtZW50YXRpb247XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVJbXAgPSBpbnZhbGlkVHlwZUltcDtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eUltcCA9IG1pc3NpbmdQcm9wZXJ0eUltcDtcblxuXG4vKipcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5SW1wID0gdW5rbm93blByb3BlcnR5SW1wO1xuXG5cbi8qKlxuICogVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgYSB0eXBlIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZURlZmluaXRpb24gPSBpbnZhbGlkVHlwZURlZmluaXRpb247XG5cblxuLyoqXG4gKiBJbnZhbGlkIHByb3BlcnR5IHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5TmFtZSA9IGludmFsaWRQcm9wZXJ0eU5hbWU7XG5cblxuLyoqXG4gKiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5LlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLnJlYWRPbmx5UHJvcGVydHkgPSByZWFkT25seVByb3BlcnR5O1xuXG5cbi8qKlxuICogSW52YWxpZCBkb2N1bWVudCBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgaW5zZXJ0IG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZERvY3VtZW50T25EYkluc2VydFxuICogQHBhcmFtIHtTdHJpbmd9IGRvYyBhIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZERvY3VtZW50T25EYkluc2VydCA9IGludmFsaWREb2N1bWVudE9uRGJJbnNlcnQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHByb3BlcnR5IG9uIGEgUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZSA9IGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlO1xuXG5cbi8qKlxuICogQ2FsbCBhbiB1bmtub3duIG1ldGhvZCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICovXG5leHBvcnRzLnVua25vd25NZXRob2QgPSB1bmtub3duTWV0aG9kO1xuXG5cbi8qKlxuICogVHJ5IHRvIGNyZWF0ZSBhbiBpbnZhbGlkIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWRDb2xsZWN0aW9uTmFtZSA9IGludmFsaWRDb2xsZWN0aW9uTmFtZTtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSByZXN1bHQgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRSZXN1bHRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwZWN0ZWRUeXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGN1cnJlbnQgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRSZXN1bHRUeXBlID0gaW52YWxpZFJlc3VsdFR5cGU7XG5cblxuLyoqXG4gKiBVbmtub3duIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWYgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnVua25vd25Db21wb25lbnQgPSB1bmtub3duQ29tcG9uZW50O1xuXG5cbi8qKlxuICogVGhlIFJ1bnRpbWUgd29ya2Zsb3cgaGFzIGJlZW4gcmVzdGFydGVkLlxuICogQG1ldGhvZCB3b3JrZmxvd1Jlc3RhcnRlZFxuICovXG5leHBvcnRzLndvcmtmbG93UmVzdGFydGVkID0gd29ya2Zsb3dSZXN0YXJ0ZWQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXIgPSBpbnZhbGlkUGFyYW1OdW1iZXI7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXG4gKiBcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1UeXBlID0gaW52YWxpZFBhcmFtVHlwZTtcblxuXG4vKipcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0cy5iZWhhdmlvck5vdFVuaXF1ZSA9IGJlaGF2aW9yTm90VW5pcXVlO1xuXG5cbi8qKlxuICogQ2FuIG5vdCBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIGludmFsaWQgc3RhdGUuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT24gPSBpbnZhbGlkU3RhdGVPbjtcblxuXG4vKipcbiAqIFRoZSBjYWxsIHRvIGEgcmVtb3ZlIHN0YXRlIG9mIHRoZSBiZWhhdmlvciBtb2R1bGUgaXMgaW52YWxpZC5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT2ZmID0gaW52YWxpZFN0YXRlT2ZmO1xuXG5cbi8qKlxuICogVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5leHBvcnRzLm1hc3RlclN5c3RlbU5vdEZvdW5kID0gbWFzdGVyU3lzdGVtTm90Rm91bmQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlID0gaW52YWxpZFR5cGU7XG5cblxuLyoqXG4gKiBVbmtub3duIHR5cGUuXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqL1xuZXhwb3J0cy51bmtub3duVHlwZSA9IHVua25vd25UeXBlO1xuXG5cbi8qKlxuICogQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkLlxuICogQG1ldGhvZCBjYW5Ob3RZZXRWYWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqL1xuZXhwb3J0cy5jYW5Ob3RZZXRWYWxpZGF0ZSA9IGNhbk5vdFlldFZhbGlkYXRlO1xuXG5cbi8qKlxuICogQSBtZXNzYWdlIHNlbmQgYnkgdGhlIGNoYW5uZWwgaXMgaW52YWxpZFxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2hhbm5lbEV2ZW50ID0gaW52YWxpZENoYW5uZWxFdmVudDtcblxuXG4vKipcbiAqIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYW4gYWN0aW9uIGFkZCB3aXRoIG9uIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbiA9IGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uO1xuXG5cbi8qKlxuICogQ2hhbmdlIHRoZSBpZCBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgdXBkYXRlVXVpZFxuICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmV3SWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtCb29sZWFufSBhbHJlYWR5VXNlZCBuZXdJZCBhbHJlYWR5IHVzZWRcbiAqL1xuZXhwb3J0cy51cGRhdGVVdWlkID0gdXBkYXRlVXVpZDtcblxuXG4vKipcbiAqIFVua29udyBwcm9wZXJ0eSBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlID0gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZTtcblxuXG4vKipcbiAqIFRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50IHRoYXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKiBAbWV0aG9kIGludmFsaWRlVXNlT2ZDb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFVzZU9mQ29tcG9uZW50ID0gaW52YWxpZFVzZU9mQ29tcG9uZW50O1xuXG5cbi8qKlxuICogVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHNjaGVtYS5cbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFNjaGVtYSA9IGludmFsaWRTY2hlbWE7XG5cblxuLyoqXG4gKiBUcnkgdG8gYWRkIGFuIGludmFsaWQgbW9kZWwuXG4gKiBAbWV0aG9kIGludmFsaWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5pbnZhbGlkTW9kZWwgPSBpbnZhbGlkTW9kZWw7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHBhcmFtZXRlcnMgc2V0IHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbWV0ZXJzID0gaW52YWxpZFBhcmFtZXRlcnM7XG5cblxuLyoqXG4gKiBUcnkgdG8gZ2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGRlc3Ryb3llZCBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGRlc3Ryb3llZENvbXBvbmVudENhbGxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZGVzdHJveWVkQ29tcG9uZW50Q2FsbCA9IGRlc3Ryb3llZENvbXBvbmVudENhbGw7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHBhcmFtZXRlciB0eXBlICB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgc2NoZW1hIG5hbWVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzID0gaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycztcblxuXG4vKipcbiAqIEdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rb3duIG1vZGVsLlxuICogQG1ldGhvZCB1bmtub3duTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICovXG5leHBvcnRzLnVua25vd25Nb2RlbCA9IHVua25vd25Nb2RlbDtcblxuXG4vKipcbiAqIEEgc2NoZW1hIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLm1pc3NpbmdTY2hlbWEgPSBtaXNzaW5nU2NoZW1hO1xuXG5cbi8qKlxuICogQSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmQuXG4gKiBAbWV0aG9kIG1pc3NpbmdTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYSB3aGVyZSB0aGUgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kXG4gKi9cbmV4cG9ydHMuY3ljbGljRGVwZW5kZW5jeSA9IGN5Y2xpY0RlcGVuZGVuY3k7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlTmFtZSBvZiB0aGUgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVHlwZSA9IGludmFsaWRFbnVtVHlwZTtcblxuXG4vKipcbiAqIExvYWQgc2NoZW1hLlxuICogQG1ldGhvZCBsb2FkU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5sb2FkU2NoZW1hID0gbG9hZFNjaGVtYTtcblxuXG4vKipcbiAqIExvYWQgbW9kZWwuXG4gKiBAbWV0aG9kIGxvYWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5sb2FkTW9kZWwgPSBsb2FkTW9kZWw7XG5cblxuLyoqXG4gKiBMb2FkIHR5cGUuXG4gKiBAbWV0aG9kIGxvYWRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKi9cbmV4cG9ydHMubG9hZFR5cGUgPSBsb2FkVHlwZTtcblxuXG4vKiogXG4gKiBDb21waWxlIHNjaGVtYS5cbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuY29tcGlsZVNjaGVtYSA9IGNvbXBpbGVTY2hlbWE7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBtb2RlbC5cbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZU1vZGVsID0gZ2VuZXJhdGVNb2RlbDtcblxuXG4vKipcbiAqIENoZWNrIG1vZGVsLlxuICogQG1ldGhvZCBjaGVja01vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5leHBvcnRzLmNoZWNrTW9kZWwgPSBjaGVja01vZGVsO1xuXG5cbi8qKlxuICogQ3JlYXRlIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jcmVhdGVDb2xsZWN0aW9uID0gY3JlYXRlQ29sbGVjdGlvbjtcblxuXG4vKipcbiAqIENyZWF0ZSBjbGFzcy5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY3JlYXRlQ2xhc3MgPSBjcmVhdGVDbGFzcztcblxuXG4vKlxuICogQmVnaW5zIG1vZGVsIGNyZWF0aW9uLlxuICogQG1ldGhvZCBtb2RlbENyZWF0aW9uQmVnaW5cbiAqL1xuZXhwb3J0cy5tb2RlbENyZWF0aW9uQmVnaW4gPSBtb2RlbENyZWF0aW9uQmVnaW47XG5cblxuLypcbiAqIEVuZCBtb2RlbCBjcmVhdGlvbi5cbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkVuZFxuICovXG5leHBvcnRzLm1vZGVsQ3JlYXRpb25FbmQgPSBtb2RlbENyZWF0aW9uRW5kO1xuXG5cbi8qKlxuICogQW4gZXJyb3IgaGFwcGVuZWQgd2hlbiBpbnZva2luZyBhIGJlaGF2aW9yLlxuICogQG1ldGhvZCBhY3Rpb25JbnZva2VFcnJvclxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICovXG5leHBvcnRzLmFjdGlvbkludm9rZUVycm9yID0gYWN0aW9uSW52b2tlRXJyb3I7XG5cblxuLyoqXG4gKiBJbnZhbGlkIG5hbWUgZm9yIHRoZSBwcm9wZXJ0eSBvZiBhIHNjaGVtYS5cbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRTY2hlbWFQcm9wZXJ0eSA9IGludmFsaWRTY2hlbWFQcm9wZXJ0eTtcblxuXG4vKipcbiAqIEludmFsaWQgZm9ybWF0IGZvciB0aGUgZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eUZvcm1hdFxuICogQHBhcmFtIHtTdHJpbmd9IG9iaiBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlGb3JtYXQgPSBpbnZhbGlkUHJvcGVydHlGb3JtYXQ7XG4iLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIERlc2lnbiB8IENyZWF0ZSB8IENvbXBvc2VcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBAZWNhcnJpb3VcbiAqIFxuICogQ29weXJpZ2h0IDIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBSdW50aW1lIG1ldGFtb2RlbC4gPGJyPlxuICogUnVudGltZSBtZXRhbW9kZWwgbG9hZHMgc2NoZW1hcyBhbmQgdHlwZXMsIGFuYWx5emVzIHRoZW0gYW5kIGNyZWF0ZXMgdGhlIGNvbXBvbmVudCBjbGFzc2VzIGFuZCByZWxhdGVkIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25zLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEBjbGFzcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIElEID0gJ19pZCcsXG4gICAgTkFNRSA9ICdfbmFtZScsXG4gICAgREVTQ1JJUFRJT04gPSAnX2Rlc2NyaXB0aW9uJyxcbiAgICBJTkhFUklUUyA9ICdfaW5oZXJpdCcsXG4gICAgQ0xBU1MgPSAnX2NsYXNzJyxcbiAgICBDT1JFID0gJ19jb3JlJyxcbiAgICBNRVRIT0RfVFlQRSA9ICdtZXRob2QnLFxuICAgIEVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuICAgIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuICAgIExJTktfVFlQRSA9ICdsaW5rJyxcbiAgICBDT0xMRUNUSU9OX1RZUEUgPSAnY29sbGVjdGlvbicsXG4gICAgaW50ZXJuYWxUeXBlcyA9IFsncHJvcGVydHknLCAnY29sbGVjdGlvbicsICdsaW5rJywgJ21ldGhvZCcsICdldmVudCddLFxuICAgIGRlZmF1bHRUeXBlcyA9IFsnYm9vbGVhbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ29iamVjdCcsICdmdW5jdGlvbicsICdhcnJheScsICdhbnknXSxcbiAgICBzdG9yZSA9IHtcbiAgICAgICAgbWV0YWRlZjoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgc2NoZW1hczoge30sXG4gICAgICAgIGNvbXBpbGVkU2NoZW1hczoge30sXG4gICAgICAgIG1vZGVsczoge30sXG4gICAgICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgICAgIHN0YXRlczoge30sXG4gICAgICAgIHR5cGU6IHt9XG4gICAgfTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogR2VuZXJhdGUgdGhlIG1vZGVscy5cbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWxzKCkge1xuICAgIHZhciBhdHQgPSAnJyxcbiAgICAgICAgbmFtZSA9ICcnLFxuICAgICAgICBzY2hlbWFOYW1lID0gJycsXG4gICAgICAgIHNjaGVtYSA9IHt9LFxuICAgICAgICBtb2RlbE5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxQYXJlbnQgPSBudWxsLFxuICAgICAgICBtb2RlbEV4dCA9IG51bGwsXG4gICAgICAgIG1vZGVsRGVmID0gbnVsbCxcbiAgICAgICAgbW9kZWwgPSB7fSxcbiAgICAgICAgbW9kZWxzID0ge30sXG4gICAgICAgIG1lcmdlZE1vZGVsID0ge30sXG4gICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICAvLyBkZWZhdWx0IHZhbHVlc1xuICAgIGZvciAoc2NoZW1hTmFtZSBpbiBzdG9yZS5jb21waWxlZFNjaGVtYXMpIHtcbiAgICAgICAgc2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW3NjaGVtYU5hbWVdO1xuXG4gICAgICAgIC8vIHNldCBtb2RlbCBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgICAgIG1vZGVsID0ge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBzY2hlbWEuX25hbWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IF9jb3JlXG4gICAgICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9jb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbW9kZWwuX2NvcmUgPSBzY2hlbWEuX2NvcmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgaW5oZXJpdFxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEuX2luaGVyaXQpKSB7XG4gICAgICAgICAgICBtb2RlbC5faW5oZXJpdCA9IHNjaGVtYS5faW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBjbGFzc1xuICAgICAgICBpZiAodHlwZW9mIHNjaGVtYS5fY2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBtb2RlbC5fY2xhc3MgPSBzY2hlbWEuX2NsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGRlc2NyaXB0aW9uIFxuICAgICAgICBpZiAodHlwZW9mIHNjaGVtYS5fZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBtb2RlbC5fZGVzY3JpcHRpb24gPSBzY2hlbWEuX2Rlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIHNldCBtb2RlbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICBmb3IgKGF0dCBpbiBzY2hlbWEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdwcm9wZXJ0eSc6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhdHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IGF0dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbGluayc6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhdHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IGF0dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbWV0aG9kJzpcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhdHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2V2ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnY29sbGVjdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wiQFJ1bnRpbWVDb21wb25lbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogYXR0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHQuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTY2hlbWFQcm9wZXJ0eShzY2hlbWEuX25hbWUsIGF0dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWwuX25hbWVdID0gbW9kZWw7XG4gICAgfVxuXG4gICAgLy8gbW9kZWxzIHRvIG92ZXJyaWRlXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcbiAgICAgICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbmFtZV07XG4gICAgICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbEV4dCwgbW9kZWwpO1xuICAgICAgICAgICAgZGVsZXRlIG1lcmdlZE1vZGVsLl9pZDtcbiAgICAgICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5oZXJpdGFuY2VcbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICAgICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMobW9kZWxOYW1lKTtcbiAgICAgICAgcGFyZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgICAgdmFyIG1vZGVsVG9NZXJnZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobW9kZWwpKTtcblxuICAgICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuYW1lID0gcGFyZW50c1tpXTtcbiAgICAgICAgICAgIG1vZGVsUGFyZW50ID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICAgICAgICAgICAgaWYgKG1vZGVsUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbFBhcmVudCwgbW9kZWwpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRNb2RlbC5faWQ7XG4gICAgICAgICAgICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxhc3QgaW5oZXJpdCBcbiAgICAgICAgLy8gaXMgdGhlIG92ZXJyaWRlbiBtb2RlbFxuICAgICAgICBtb2RlbEV4dCA9IHN0b3JlLm1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgICBpZiAobW9kZWxFeHQpIHtcbiAgICAgICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxFeHQsIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdKTtcbiAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRNb2RlbC5faWQ7XG4gICAgICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2F2ZSBcbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgICAgJGRiLlJ1bnRpbWVHZW5lcmF0ZWRNb2RlbC5pbnNlcnQobW9kZWxEZWYpO1xuXG4gICAgICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICAgICAgICRsb2cuZ2VuZXJhdGVNb2RlbChtb2RlbE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICogTG9hZCBzY2hlbWFzIGFuZCB0eXBlcyBpbiBtZW1vcnkuXG4gKiBAbWV0aG9kIGxvYWRJbk1lbW9yeVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZEluTWVtb3J5KCkge1xuICAgIHZhciBzY2hlbWFzID0gW10sXG4gICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIG1vZGVsID0ge30sXG4gICAgICAgIG1vZGVscyA9IFtdLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgbmFtZSA9ICcnLFxuICAgICAgICBpbmhlcml0ID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgLy8gaW5pdCBzdG9yZVxuICAgIHN0b3JlLmluaGVyaXRhbmNlID0ge307XG4gICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlID0ge307XG4gICAgc3RvcmUuc2NoZW1hcyA9IHt9O1xuICAgIHN0b3JlLmNvbXBpbGVkU2NoZW1hcyA9IHt9O1xuICAgIHN0b3JlLm1vZGVscyA9IHt9O1xuICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVscyA9IHt9O1xuICAgIHN0b3JlLnN0YXRlcyA9IHt9O1xuICAgIHN0b3JlLnR5cGUgPSB7fTtcblxuICAgIC8vIGxvYWQgc2NoZW1hc1xuICAgIHNjaGVtYXMgPSAkZGIuUnVudGltZVNjaGVtYS5maW5kKHt9KTtcblxuICAgIGxlbmd0aCA9IHNjaGVtYXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzY2hlbWEgPSBzY2hlbWFzW2ldO1xuXG4gICAgICAgIG5hbWUgPSBzY2hlbWFbTkFNRV07XG4gICAgICAgIGluaGVyaXQgPSBzY2hlbWFbSU5IRVJJVFNdO1xuXG4gICAgICAgIHN0b3JlLnNjaGVtYXNbbmFtZV0gPSBzY2hlbWE7XG4gICAgICAgIGlmIChpbmhlcml0KSB7XG4gICAgICAgICAgICBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSA9IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgJGxvZy5sb2FkU2NoZW1hKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbG9hZCBtb2RlbHNcbiAgICBtb2RlbHMgPSAkZGIuUnVudGltZU1vZGVsLmZpbmQoe30pO1xuXG4gICAgbGVuZ3RoID0gbW9kZWxzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbW9kZWwgPSBtb2RlbHNbaV07XG4gICAgICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcblxuICAgICAgICBzdG9yZS5tb2RlbHNbbmFtZV0gPSBtb2RlbDtcblxuICAgICAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAgICAgICAkbG9nLmxvYWRNb2RlbChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvYWQgdHlwZXNcbiAgICB0eXBlcyA9ICRkYi5SdW50aW1lVHlwZS5maW5kKHt9KTtcblxuICAgIGxlbmd0aCA9IHR5cGVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHlwZSA9IHR5cGVzW2ldO1xuICAgICAgICBzdG9yZS50eXBlW3R5cGUubmFtZV0gPSB0eXBlO1xuXG4gICAgICAgIGlmICghdHlwZS5jb3JlKSB7XG4gICAgICAgICAgICAkbG9nLmxvYWRUeXBlKHR5cGUubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSB0aGUgaW5oZXJpdGFuY2UgdHJlZS5cbiAqIEBtZXRob2QgY3JlYXRlSW5oZXJpdGFuY2VUcmVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKSB7XG4gICAgdmFyIG5hbWUgPSAnJyxcbiAgICAgICAgYzNsaW5lcml6YXRpb24gPSBbXSxcbiAgICAgICAgYW5jZXN0b3JzID0gW107XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIHdlIGhhdmUgZmluaXNlaGQgdG8gbGluZXJpemUuXG4gICAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhbGwgdGhlIGFycmF5cyBhcmUgZW1wdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc0VtcHR5KGVsdHMpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsdHNbaV0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlbW92ZSBhbiBlbHQgZnJvbSBhbGwgdGhlIGFycmF5cy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZWx0IGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcmVtb3ZlQ2FuZGlkYXRlKGVsdCwgZWx0cykge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICAgICAgYXJyID0gW107XG5cbiAgICAgICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsdHNbaV0uaW5kZXhPZihlbHQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYXJyID0gZWx0c1tpXTtcbiAgICAgICAgICAgICAgICBhcnIucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGFyci5wb3AoKTtcbiAgICAgICAgICAgICAgICBhcnIucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGVsdHNbaV0gPSBhcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVsdCBlbGVtZW50IHRvIHJlbW92ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgYSBnb29kIGNhbmRpZGF0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc0NhbmRpZGF0ZShlbHQsIGVsdHMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsdHNbaV0uaW5kZXhPZihlbHQpID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEZpbmQgYSBjYW5kaWRhdGUgYW5kIHJldHVybiBpdC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgY29udGFpbmluZyB0aGUgY2FuZGlkYXRlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZmluZENhbmRpZGF0ZShlbHRzKSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX2lzQ2FuZGlkYXRlKGVsdHNbaV1bMF0sIGVsdHMpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWx0c1tpXVswXSk7XG4gICAgICAgICAgICAgICAgX3JlbW92ZUNhbmRpZGF0ZShlbHRzW2ldWzBdLCBlbHRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTWVyZ2UgdGhlIGFycmF5cy5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiBjYW5kaWRhdGVzIHJldHVybmVkIGJ5IHRoZSBtZXJnZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX21lcmdlKGVsdHMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgY2FuZGlkYXRlcyA9IFtdO1xuXG4gICAgICAgIGNhbmRpZGF0ZXMgPSBfZmluZENhbmRpZGF0ZShlbHRzKTtcbiAgICAgICAgd2hpbGUgKGNhbmRpZGF0ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChjYW5kaWRhdGVzKTtcbiAgICAgICAgICAgIGNhbmRpZGF0ZXMgPSBfZmluZENhbmRpZGF0ZShlbHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX2lzRW1wdHkoZWx0cykpIHtcbiAgICAgICAgICAgICRsb2cuY3ljbGljRGVwZW5kZW5jeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTdGFydCB0aGUgbGluZXJpZWF0aW9uIGZyb20gYW4gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBlbGVtZW50XG4gICAgICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2xpbmVyaXplKG5hbWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3kuIFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbVxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3lcbiAgICAgICAgICogQHByaXZhdGUgXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfY2hlY2tDeWNsaWNEZXAobmFtZSwgaXRlbSkge1xuICAgICAgICAgICAgdmFyIGlzQ3ljbGljRGViID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0b3JlLmluaGVyaXRhbmNlW2l0ZW1dKSAmJiBzdG9yZS5pbmhlcml0YW5jZVtpdGVtXS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICRsb2cuY3ljbGljRGVwZW5kZW5jeShuYW1lKTtcbiAgICAgICAgICAgICAgICBpc0N5Y2xpY0RlYiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNDeWNsaWNEZWI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSkpIHtcbiAgICAgICAgICAgIHBhcmVudHMgPSBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXS5zbGljZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5taXNzaW5nU2NoZW1hKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9jaGVja0N5Y2xpY0RlcChuYW1lLCBwYXJlbnRzW2ldKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gW25hbWVdLmNvbmNhdChfbWVyZ2UocGFyZW50cy5tYXAoX2xpbmVyaXplKS5jb25jYXQoW3BhcmVudHNdKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZm9yIChuYW1lIGluIHN0b3JlLmluaGVyaXRhbmNlKSB7XG4gICAgICAgIGMzbGluZXJpemF0aW9uID0gX2xpbmVyaXplKG5hbWUpO1xuICAgICAgICBhbmNlc3RvcnMgPSBjM2xpbmVyaXphdGlvbi5yZXZlcnNlKCk7XG4gICAgICAgIGFuY2VzdG9ycy5wb3AoKTtcbiAgICAgICAgaWYgKGFuY2VzdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXSA9IGFuY2VzdG9ycztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudC5cbiAqIEBtZXRob2QgZXh0ZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgdG8gZXh0ZW5kXG4gKiBAcmV0dXJuIHtKU09OfSBvYmplY3QgZXh0ZW5kZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSkge1xuICAgIHZhciBzb25FeHRlbmQgPSB7fSxcbiAgICAgICAgc29uID0gc3RvcmUuc2NoZW1hc1tuYW1lXSxcbiAgICAgICAgYW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW25hbWVdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgYW5jZXN0b3IgPSBudWxsLFxuICAgICAgICBwcm9wID0gJyc7XG5cbiAgICBpZiAoYW5jZXN0b3JzKSB7XG4gICAgICAgIGxlbmd0aCA9IGFuY2VzdG9ycy5sZW5ndGg7XG4gICAgICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhbmNlc3RvciA9IHN0b3JlLnNjaGVtYXNbYW5jZXN0b3JzW2ldXTtcbiAgICAgICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBhbmNlc3Rvcltwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gc29uKSB7XG4gICAgICAgIHNvbkV4dGVuZFtwcm9wXSA9IHNvbltwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuXG4vKlxuICogQWRkIHRoZSBtb2RlbHMuXG4gKiBAbWV0aG9kIGNvbXBpbGVTY2hlbWFzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb21waWxlU2NoZW1hcygpIHtcbiAgICB2YXIgbmFtZSA9ICcnO1xuICAgIGZvciAobmFtZSBpbiBzdG9yZS5zY2hlbWFzKSB7XG4gICAgICAgIGlmICghc3RvcmUuc2NoZW1hc1tuYW1lXS5fY29yZSkge1xuICAgICAgICAgICAgJGxvZy5jb21waWxlU2NoZW1hKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdID0gZXh0ZW5kKG5hbWUpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhbGwgdGhlIG1vZGVscyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZWlyIHNjaGVtYXMuXG4gKiBAbWV0aG9kIGNoZWNrTW9kZWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja01vZGVscygpIHtcbiAgICB2YXIgbmFtZSA9ICcnLFxuICAgICAgICBjbGFzc0RlZiA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9ICcnO1xuXG4gICAgZm9yIChuYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgICAgICBjbGFzc0RlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgICAgICAgaWYgKGNsYXNzRGVmKSB7XG4gICAgICAgICAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgICAgICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjbGFzc0RlZi5fY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmNoZWNrTW9kZWwobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoZWNrSW1wKGNsYXNzRGVmLCBzY2hlbWEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgc3RhdGVzIG9mIGEgc2NoZW1hLlxuICogQG1ldGhvZCBnZXRTdGF0ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFN0YXRlcygpIHtcbiAgICB2YXIgbmFtZSA9ICcnLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICB0eXBlID0gJycsXG4gICAgICAgIHN0YXRlcyA9IFtdLFxuICAgICAgICBhdHRyaWJ1dGUgPSAnJztcblxuICAgIGZvciAobmFtZSBpbiBzdG9yZS5jb21waWxlZFNjaGVtYXMpIHtcbiAgICAgICAgc3RhdGVzID0gW107XG4gICAgICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXTtcbiAgICAgICAgaWYgKHNjaGVtYSkge1xuICAgICAgICAgICAgZm9yIChhdHRyaWJ1dGUgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuaW5kZXhPZignXycpICE9PSAwICYmIGludGVybmFsVHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUuc3RhdGVzW25hbWVdID0gc3RhdGVzO1xuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBpdHMgc2NoZW1hLlxuICogQG1ldGhvZCBjaGVja0ltcFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0RlZiBzY2hlbWEgdG8gdGVzdCBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NJbXAgc2NoZW1hIHRvIHZhbGlkYXRlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0ltcChjbGFzc0RlZiwgY2xhc3NJbXApIHtcbiAgICB2YXIgcHJvcGVydHkgPSAnJyxcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NJbXApIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBERVNDUklQVElPTiAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBDT1JFKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzRGVmW3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNsYXNzRGVmW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrU2NoZW1hKHZhbHVlLCBjbGFzc0ltcFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgYWxsIHByb3BlcnRpZXMgYXJlIHRoZXJlXG4gICAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0RlZikge1xuICAgICAgICBpZiAocHJvcGVydHkgIT09IElEICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IERFU0NSSVBUSU9OICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBDTEFTUyAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IENPUkUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NJbXBbcHJvcGVydHldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZS5cbiAqIEBtZXRob2QgY2hlY2tTY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1NjaGVtYSh2YWx1ZSwgdHlwZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChoYXNUeXBlKHR5cGUsICdzdHJpbmcnKSAmJiBkZWZhdWx0VHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgdmFsdWUgaGFzIGNvcnJlY3QgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGNoZWNrQ3VzdG9tU2NoZW1hXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgaWYgKCFoYXNUeXBlKHZhbHVlLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlRGVmLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkU2NoZW1hKHZhbHVlW2ldLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkVHlwZSh2YWx1ZVtpXSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRTY2hlbWEodmFsdWUsIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEluaXQgdGhlIERhdGFiYXNlIHN0dWN0dXJlLlxuICogQG1ldGhvZCBpbml0RGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXREYlN0cnVjdHVyZSgpIHtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZUxvZ2dlcicpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lU2NoZW1hJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVNb2RlbCcpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lR2VuZXJhdGVkTW9kZWwnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZUNsYXNzSW5mbycpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lQmVoYXZpb3InKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZVN0YXRlJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVUeXBlJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVNZXNzYWdlJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVDaGFubmVsJyk7XG59XG5cblxuLypcbiAqIENyZWF0ZSB0aGUgRGF0YWJhc2Ugc3RydWN0dXJlIChpLmUuIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24pLlxuICogQG1ldGhvZCBjcmVhdGVEYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGJTdHJ1Y3R1cmUoKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBtb2RlbERlZiA9IHt9O1xuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgJGRiW21vZGVsRGVmW05BTUVdXSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICRkYi5jb2xsZWN0aW9uKG1vZGVsRGVmW05BTUVdKTtcblxuICAgICAgICAgICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgICAgICAgICAgICRsb2cuY3JlYXRlQ29sbGVjdGlvbihtb2RlbERlZltOQU1FXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBtb2RlbERlZiA9IHt9O1xuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgIGlmIChtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkY29tcG9uZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgXCJtb2RlbFwiOiBtb2RlbE5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgICAgICAgICAgICRsb2cuY3JlYXRlQ2xhc3MobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogQ3JlYXRlIGFsbCB0aGUgQ2xhc3NJbmZvIG9mIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NJbmZvXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzc0luZm8oKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBtb2RlbERlZiA9IHt9LFxuICAgICAgICBuYW1lID0gJyc7XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgICAgbmFtZSA9IG1vZGVsRGVmW05BTUVdICsgJ0luZm8nO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIGluaGVyaXRGcm9tKG1vZGVsRGVmW05BTUVdLCAnUnVudGltZUNvbXBvbmVudCcpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCEkY29tcG9uZW50LmdldChuYW1lKSkge1xuICAgICAgICAgICAgICAgICRkYi5SdW50aW1lQ2xhc3NJbmZvLmluc2VydCh7XG4gICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsRGVmXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRkYi5SdW50aW1lQ2xhc3NJbmZvLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IG5hbWVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjogc3RvcmUuY29tcGlsZWRTY2hlbWFzW21vZGVsTmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsRGVmXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qIFxuICogR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QgLyB0eXBlLlxuICogQG1ldGhvZCBnZXRSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKCdAJywgJycpO1xufVxuXG5cbi8qXG4gKiBJcyB0aGUgdmFsdWUgYSBjdXN0b20gdHlwZS5cbiAqIEBtZXRob2QgaXNDdXN0b21UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0N1c3RvbVR5cGUodmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpICYmXG4gICAgICAgIGRlZmF1bHRUeXBlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiZcbiAgICAgICAgIWlzUmVmZXJlbmNlKHZhbHVlKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIElzIHRoZSB2YWx1ZSBhIHJlZmVyZW5jZS5cbiAqIEBtZXRob2QgaXNSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG59XG5cblxuLypcbiAqIEdldCB0aGUgcmVhbCB0eXBlIG9mIGEgdmFsdWUuXG4gKiBAbWV0aG9kIGdldFJlYWxUeXBlXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGUgb2YgdGhlIHZhbHVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRSZWFsVHlwZSh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gJyc7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAnYW55Jykge1xuICAgICAgICB0eXBlID0gJ2FueSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG59XG5cblxuLypcbiAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QuXG4gKiBAbWV0aG9kIGdldENsYXNzTmFtZVxuICogQHBhcmFtIHt0eXBlfSBvYmogb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgXG4gICAgaWYgKG9iaiAmJiBvYmouY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmVzdWx0ID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGVudW0gdmFsdWUuXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gZW51bVZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bVZhbHVlKHZhbHVlLCBlbnVtVmFsdWUpIHtcbiAgICByZXR1cm4gZW51bVZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBoYXMgdGhlIHNwZWNpZmllZCB0eXBlLlxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHBhcmFtIHt0eXBlfSB0eXBlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB2YWx1ZSBoYXMgdHlwZSAndHlwZSdcbiAqL1xuZnVuY3Rpb24gaGFzVHlwZSh2YWx1ZSwgdHlwZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXN1bHQgPSAodHlwZSA9PT0gdHlwZW9mIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGhhcyBhIHNwZWNpZmljIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBoYXMgZm9yIHR5cGUgdHlwZVxuICovXG5mdW5jdGlvbiBjaGVja1R5cGUobmFtZSwgaWQsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tpZF0sXG4gICAgICAgIGF0dHJpYnV0ZVR5cGUgPSAnJztcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW05BTUVdKSB7XG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tjb21wb25lbnRTY2hlbWFbTkFNRV1dO1xuICAgIH1cblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICAgICAgYXR0cmlidXRlVHlwZSA9IGNvbXBvbmVudFNjaGVtYVtuYW1lXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKlxuICogTWVyZ2UgdHdvIHNjaGVtYXMuXG4gKiBAbWV0aG9kIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgdGFyZ2V0IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBtZXJnZSBhbHNvIHByaXZhdGUgcHJvcGVydGllc1xuICogQHJldHVybiB7T2JqZWN0fSBtZXJnZWQgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNvdXJjZSwgdGFyZ2V0LCBhbGwpIHtcbiAgICB2YXIgcHJvcE5hbWUgPSAnJyxcbiAgICAgICAgcmVzdWx0ID0gdGFyZ2V0O1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTY2hlbWEgc2NoZW1hIHRvIGFkZFxuICovXG5mdW5jdGlvbiBzY2hlbWEoaW1wb3J0ZWRTY2hlbWEpIHtcbiAgICB2YXIgaWQgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgbmFtZSA9ICcnLFxuICAgICAgICBtZXJnZWRTY2hlbWEgPSB7fSxcbiAgICAgICAgc2NoZW1hcyA9IFtdO1xuXG4gICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbXBvcnRlZFNjaGVtYSkpO1xuICAgIG5hbWUgPSBzY2hlbWFbTkFNRV07XG5cbiAgICBpZiAodHlwZW9mIHNjaGVtYVtJRF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNjaGVtYVtJRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzY2hlbWFbSU5IRVJJVFNdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzY2hlbWFbSU5IRVJJVFNdID0gWydSdW50aW1lQ29tcG9uZW50J107XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgICBpZiAoaXNWYWxpZE9iamVjdChzY2hlbWEsIHN0b3JlLm1ldGFkZWYuc2NoZW1hLCBmYWxzZSkpIHtcbiAgICAgICAgc2NoZW1hcyA9ICRkYi5SdW50aW1lU2NoZW1hLmZpbmQoeyAnX25hbWUnOiBuYW1lIH0pO1xuICAgICAgICBpZiAoc2NoZW1hcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lcmdlZFNjaGVtYSA9IG1lcmdlKHNjaGVtYSwgc2NoZW1hc1swXSk7XG4gICAgICAgICAgICBkZWxldGUgbWVyZ2VkU2NoZW1hLl9pZDtcbiAgICAgICAgICAgICRkYi5SdW50aW1lU2NoZW1hLnVwZGF0ZSh7ICdfbmFtZSc6IG5hbWUgfSwgbWVyZ2VkU2NoZW1hKTtcbiAgICAgICAgICAgIGlkID0gc2NoZW1hc1swXS5faWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZVNjaGVtYS5pbnNlcnQoc2NoZW1hKTtcbiAgICAgICAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hKHNjaGVtYVtOQU1FXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBuZXcgbW9kZWwuXG4gKiBAbWV0aG9kIG1vZGVsXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkTW9kZWwgbW9kZWwgdG8gYWRkXG4gKi9cbmZ1bmN0aW9uIG1vZGVsKGltcG9ydGVkTW9kZWwpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBpZCA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBpbmhlcml0ID0gJycsXG4gICAgICAgIG5hbWUgPSAnJyxcbiAgICAgICAgbWVyZ2VkTW9kZWwgPSB7fSxcbiAgICAgICAgbW9kZWxzID0gW107XG5cbiAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRNb2RlbCkpO1xuICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcblxuICAgIGlmICh0eXBlb2YgbW9kZWxbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2RlbFtJRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBtb2RlbCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gICAgaWYgKGlzVmFsaWRPYmplY3QobW9kZWwsIHN0b3JlLm1ldGFkZWYubW9kZWwsIGZhbHNlKSkge1xuICAgICAgICBtb2RlbHMgPSAkZGIuUnVudGltZU1vZGVsLmZpbmQoeyAnX25hbWUnOiBuYW1lIH0pO1xuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbCwgbW9kZWxzWzBdKTtcbiAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRNb2RlbC5faWQ7XG4gICAgICAgICAgICAkZGIuUnVudGltZU1vZGVsLnVwZGF0ZSh7ICdfbmFtZSc6IG5hbWUgfSwgbWVyZ2VkTW9kZWwpO1xuICAgICAgICAgICAgaWQgPSBtb2RlbHNbMF0uX2lkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVNb2RlbC5pbnNlcnQobW9kZWwpO1xuICAgICAgICAgICAgaWQgPSByZXN1bHRbMF07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRNb2RlbChtb2RlbFtOQU1FXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xufVxuXG4vKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlIHR5cGUgdG8gYWRkXG4gKi9cbmZ1bmN0aW9uIHR5cGUoaW1wb3J0ZWRUeXBlKSB7XG4gICAgdmFyIGlkID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIG5hbWUgPSBpbXBvcnRlZFR5cGUubmFtZTtcblxuICAgIC8vIGNoZWNrIGlmIHR5cGUgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkVHlwZSwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZVR5cGUuaW5zZXJ0KGltcG9ydGVkVHlwZSk7XG4gICAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbn1cblxuXG4vKlxuICogSW5pdCB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBzdG9yZS5tZXRhZGVmID0ge1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfbmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXCJzdHJpbmdcIl0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFtcIlJ1bnRpbWVDb21wb25lbnRcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX25hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY2xhc3NcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2Rlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9kZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBpbml0RGJTdHJ1Y3R1cmUoKTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHtcbiAgICAgICAgbWV0YWRlZjoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgc2NoZW1hczoge30sXG4gICAgICAgIGNvbXBpbGVkU2NoZW1hczoge30sXG4gICAgICAgIG1vZGVsczoge30sXG4gICAgICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgICAgIHN0YXRlczoge30sXG4gICAgICAgIHR5cGU6IHt9XG4gICAgfTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgJGxvZy5tb2RlbENyZWF0aW9uQmVnaW4oKTtcbiAgICBsb2FkSW5NZW1vcnkoKTtcbiAgICBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKTtcbiAgICBjb21waWxlU2NoZW1hcygpO1xuICAgIGdlbmVyYXRlTW9kZWxzKCk7XG4gICAgY2hlY2tNb2RlbHMoKTtcbiAgICBnZXRTdGF0ZXMoKTtcbiAgICBjcmVhdGVEYlN0cnVjdHVyZSgpO1xuICAgIGNyZWF0ZUNsYXNzKCk7XG4gICAgY3JlYXRlQ2xhc3NJbmZvKCk7XG4gICAgJGxvZy5tb2RlbENyZWF0aW9uRW5kKCk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50LlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBFVkVOVF9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaXNQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGlzUHJvcGVydHkobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBQUk9QRVJUWV9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBsaW5rLlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBsaW5rXG4gKi9cbmZ1bmN0aW9uIGlzTGluayhuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIExJTktfVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaXNDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGlzQ29sbGVjdGlvbihuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIENPTExFQ1RJT05fVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gaXNNZXRob2QobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBNRVRIT0RfVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBpc1N0cnVjdHVyZShuYW1lLCBpZCkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdLFxuICAgICAgICBhdHRyaWJ1dGVUeXBlID0gJycsXG4gICAgICAgIHR5cGUgPSAnJztcblxuICAgIGlmIChtb2RlbFtuYW1lXSkge1xuICAgICAgICB0eXBlID0gc3RvcmUudHlwZVttb2RlbFtuYW1lXS50eXBlXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLnNjaGVtYSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaXNWYWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFN0YXRlKG5hbWUsIGlkKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdLFxuICAgICAgICBzdGF0ZSA9IHt9O1xuXG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbTkFNRV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gICAgfVxuICAgIHN0YXRlID0gc3RvcmUuc3RhdGVzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gc3RhdGUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gKiBAbWV0aG9kIGlzVmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICAgICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdLFxuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlRGVmLnZhbHVlKSAmJiB0eXBlRGVmLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2hlY2tSZWZlcmVuY2UodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZU5hbWUpO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRDbGFzc05hbWUoY29tcG9uZW50KSAhPT0gdHlwZVJlZiAmJiBKU09OLnN0cmluZ2lmeShjb21wb25lbnQpICE9PSAne30nKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZS5yZXBsYWNlKCdAJywgJycpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIHJlYWxUeXBlID0gJycsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlTmFtZSk7XG4gICAgICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlTmFtZVswXSk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IF9jaGVja1JlZmVyZW5jZSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVHlwZSh0eXBlTmFtZSwgJ3N0cmluZycpKSB7XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZU5hbWUpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUsIHN0b3JlLnR5cGVbdHlwZU5hbWVdLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlTmFtZSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NoZWNrUmVmZXJlbmNlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdmFsdWUgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWEgc2NoZW1hIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBlbnVtXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbnVtKHZhbHVlLCBzY2hlbWEpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIF9pc0luc3RhbmNlT2YoY29tcG9uZW50LCBjbGFzc05hbWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJyc7XG5cbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudENsYXNzTmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gY29tcG9uZW50Q2xhc3NOYW1lID09PSBjbGFzc05hbWU7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWZlcmVuY2Uoc2NoZW1hLnR5cGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IF9pc0luc3RhbmNlT2YoJGNvbXBvbmVudC5nZXQodmFsdWUpLCBnZXRSZWZlcmVuY2Uoc2NoZW1hLnR5cGUpKSAmJiBzY2hlbWEudmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEudHlwZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAoaGFzVHlwZSh2YWx1ZSwgc2NoZW1hLnR5cGUpKSAmJiBzY2hlbWEudmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBhIHNjaGVtYVxuICogaXQgaXMgc3VwcG9zZWQgdG8gdmFsaWRhdGUuXG4gKiBAbWV0aG9kIGlzVmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gb2JqZWN0XG4gKiBAcGFyYW0ge0pTT059IHNjaGVtYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTY2hlbWEob2JqZWN0LCBzY2hlbWEpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgICAgIGZpZWxkID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICAgICAgdHlwZVNjaGVtYSA9ICcnLFxuICAgICAgICB0eXBlUmVmID0gJycsXG4gICAgICAgIHJlYWxUeXBlID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkUmVmZXJlbmNlKCkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICBlbnVtVmFsdWUgPSBbXTtcblxuICAgICAgICB0eXBlUmVmID0gZ2V0UmVmZXJlbmNlKHR5cGVTY2hlbWEpO1xuICAgICAgICB0eXBlUmVmID0gb2JqZWN0W3R5cGVSZWZdO1xuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0udHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgZW51bVZhbHVlID0gc3RvcmUudHlwZVt0eXBlUmVmXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudW1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtVmFsdWUoZmllbGQsIGVudW1WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlUmVmID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IEFycmF5LmlzQXJyYXkoZmllbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWZlcmVuY2UodHlwZVJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSB8fCBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gbWF5YmUgaGF2ZSBhIG1vcmUgc3RyaWN0IHZhbGlkYXRpb24gdGhhbiBqdXN0IGEgdHlwZSBjaGVja2luZ1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlUmVmLCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZVNjaGVtYSk7XG4gICAgICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZVNjaGVtYVswXV0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0sIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8vIHR5cGVcblxuICAgIGlmIChoYXNUeXBlKG9iamVjdCwgJ29iamVjdCcpKSB7XG4gICAgICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS50eXBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFuZGF0b3J5XG4gICAgICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUgJiYgKGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSAmJiBvYmplY3RbZmllbGROYW1lXSAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdCB0cnVlIGlmIHZhbGlkYXRpb24gaXMgc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmIHRydWUgaWYgd2UgcmVtb3ZlIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZE9iamVjdChvYmplY3QsIHNjaGVtYSwgc3RyaWN0LCBjbGVhblJlZikge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICAgICAgZmllbGQgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgICAgICB0eXBlU2NoZW1hID0gJycsXG4gICAgICAgIHR5cGVSZWYgPSAnJyxcbiAgICAgICAgcmVhbFR5cGUgPSAnJyxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBpZiAoaGFzVHlwZShzdHJpY3QsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBzdHJpY3QgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChoYXNUeXBlKGNsZWFuUmVmLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3RyaWN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgY3VzdG9tIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBjdXN0b20gdHlwZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIHJlYWxUeXBlID0gJyc7XG5cbiAgICAgICAgcmVhbFR5cGUgPSBzdG9yZS50eXBlW3R5cGVTY2hlbWFdO1xuICAgICAgICBpZiAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgIWhhc1R5cGUocmVhbFR5cGUuc2NoZW1hLCAndW5kZWZpbmVkJyk6XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCByZWFsVHlwZS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnZhbHVlLCAndW5kZWZpbmVkJyk6XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bShmaWVsZCwgcmVhbFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFR5cGUoZmllbGQsIHJlYWxUeXBlLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRSZWZlcmVuY2UoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICAgICAgY29tcCA9IG51bGwsXG4gICAgICAgICAgICBpc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgICAgIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZVNjaGVtYSk7XG4gICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5pZCkge1xuICAgICAgICAgICAgY29tcCA9IGZpZWxkO1xuICAgICAgICAgICAgaXNDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcCA9ICRjb21wb25lbnQuZ2V0KGZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzVHlwZShjb21wLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmICghaW5oZXJpdEZyb20oY29tcC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlUmVmKSkge1xuICAgICAgICAgICAgICAgIC8vaWYgKGdldENsYXNzTmFtZShjb21wKSAhPT0gdHlwZVJlZikgeyB1bmNvbW1lbnQgdGhpcyBsaW5lIGZvciBhIHN0cmljdCBtb2RlXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQgJiYgY2xlYW5SZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W2ZpZWxkTmFtZV0gPSBjb21wLmlkKCk7IC8vIHN0b3JlIHRoZSBpZCBpbnN0ZWFkIHRoZSBmdWxsIG9iamVjdCBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZGVmYXVsdCB2YWx1ZSBvZiBhbiBvYmplY3QgKHt9IG9yIG51bGwpXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgJiYgZmllbGQgIT09IG51bGwgJiYgT2JqZWN0LmtleXMoZmllbGQpLmxlbmd0aCA+IDApOlxuICAgICAgICAgICAgICAgIGNhc2UgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpOlxuICAgICAgICAgICAgICAgICAgICAkbG9nLmNhbk5vdFlldFZhbGlkYXRlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICB0eXBlQXJyYXkgPSAnJztcblxuICAgICAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgICAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhbnknOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZCkgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gdHlwZVNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdHlwZUFycmF5ID0gdHlwZVNjaGVtYVswXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlQXJyYXldLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNSZWZlcmVuY2UodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UmVhbFR5cGUoZmllbGRbaV0pICE9PSB0eXBlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZUFycmF5LCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZFtpXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXNlIG9mIGFuIGltcG9ydCBvZiBhIHN5c3RlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSAhPT0gZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSksIGdldENsYXNzTmFtZShmaWVsZFtpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShmaWVsZFtpXSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmhlcml0RnJvbShnZXRDbGFzc05hbWUoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSwgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0gPSBmaWVsZFtpXS5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGQsICdhcnJheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blR5cGUoZmllbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuXG4gICAgLy8gdHlwZVxuICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICAgIGlmICghaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpIHx8IGZpZWxkTmFtZSA9PT0gJ19jb3JlJykge1xuXG4gICAgICAgICAgICAvLyBjYXNlIG9mIF9jb3JlXG4gICAgICAgICAgICBpZiAoZmllbGROYW1lICE9PSAnX2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGVTY2hlbWEgPSAnYm9vbGVhbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhcyBvZiBfaWRcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdfaWQnKSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9ICdzdHJpbmcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkUmVmZXJlbmNlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHByZXBhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gcHJlcGFyZU9iamVjdChvYmplY3QsIHNjaGVtYSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICAgICAgZmllbGQgPSBudWxsLFxuICAgICAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJztcblxuICAgIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgICBkZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0O1xuICAgICAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGdldFNjaGVtYShuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXSkge1xuICAgICAgICByZXN1bHQgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhIG1vZGVsLlxuICogQG1ldGhvZCBnZXRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBnZXRNb2RlbChuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSkge1xuICAgICAgICByZXN1bHQgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhIHR5cGUuXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmIChzdG9yZS50eXBlW25hbWVdICYmIHN0b3JlLnR5cGVbbmFtZV0pIHtcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS50eXBlW25hbWVdKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtZXRhZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGFEZWYoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHN0b3JlLm1ldGFkZWYuc2NoZW1hO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBwYXJlbnRzIG9mIGEgc2NoZW1hIGlmIGFueS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudHMoaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoIXN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0pIHtcbiAgICAgICAgcmVzdWx0ID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5zbGljZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqIEBtZXRob2QgaW5oZXJpdEZyb21cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBuYW1lIG9mIHRoZSBwYXJlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdEZyb20obmFtZSwgcGFyZW50TmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIC8qXG4gICAgICogXG4gICAgICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gICAgICogQG1ldGhvZCBfc2VhcmNoUGFyZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbmNlc3Rvck5hbWUgb2YgdGhlIHBhcmVudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc2VhcmNoUGFyZW50KGNsYXNzTmFtZSwgYW5jZXN0b3JOYW1lKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2UsXG4gICAgICAgICAgICBwYXJlbnRzID0gW10sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaXNBbmNlc3RvciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpc0FuY2VzdG9yID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBhbmNlc3Rvck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQW5jZXN0b3I7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgIT09IHBhcmVudE5hbWUpIHtcbiAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMobmFtZSk7XG4gICAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihwYXJlbnROYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBSdW50aW1lIG1ldGFtb2RlbC4gPGJyPlxuICogUnVudGltZSBtZXRhbW9kZWwgbG9hZHMgc2NoZW1hcyBhbmQgdHlwZXMsIGFuYWx5emVzIHRoZW0gYW5kIGNyZWF0ZXMgdGhlIGNvbXBvbmVudCBjbGFzc2VzIGFuZCByZWxhdGVkIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25zLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEBjbGFzcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBJbml0IHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGF0YSBvZiB0aGUgbWV0YW1vZGVsIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHNjaGVtYS5cbiAqIEBtZXRob2Qgc2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU2NoZW1hIGEgc2NoZW1hIHRvIGFkZFxuICovXG5leHBvcnRzLnNjaGVtYSA9IHNjaGVtYTtcblxuXG4vKipcbiAqIEFkZCBhIG5ldyBtb2RlbC5cbiAqIEBtZXRob2QgbW9kZWxcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRNb2RlbCBhIG1vZGUgdG8gYWRkXG4gKi9cbmV4cG9ydHMubW9kZWwgPSBtb2RlbDtcblxuXG4vKipcbiAqIEFkZCBhIG5ldyB0eXBlLlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkVHlwZSB0eXBlIHRvIGFkZFxuICovXG5leHBvcnRzLnR5cGUgPSB0eXBlO1xuXG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuXG4vKipcbiAqIEdldCBhIHNjaGVtYS5cbiAqIEBtZXRob2QgZ2V0U2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmdldFNjaGVtYSA9IGdldFNjaGVtYTtcblxuXG4vKipcbiAqIEdldCBhIG1vZGVsLlxuICogQG1ldGhvZCBnZXRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuZ2V0TW9kZWwgPSBnZXRNb2RlbDtcblxuXG4vKipcbiAqIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtZXRhZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuZ2V0TWV0YURlZiA9IGdldE1ldGFEZWY7XG5cblxuLyoqXG4gKiBHZXQgcGFyZW50cyBvZiBhIHNoZW1hIGlmIGFueS5cbiAqIEBtZXRob2QgZ2V0UGFyZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge0FycmF5fSBpZCBpZCBvZiB0aGUgcGFyZW50c1xuICovXG5leHBvcnRzLmdldFBhcmVudHMgPSBnZXRQYXJlbnRzO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gKiBAbWV0aG9kIGluaGVyaXRGcm9tXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgbmFtZSBvZiB0aGUgcGFyZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW5oZXJpdEZyb20gPSBpbmhlcml0RnJvbTtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0IHRydWUgaWYgdmFsaWRhdGlvbiBpcyBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWYgdHJ1ZSBpZiB3ZSByZW1vdmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBpc1ZhbGlkT2JqZWN0O1xuXG5cbi8qKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHByZXBhcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqL1xuZXhwb3J0cy5wcmVwYXJlT2JqZWN0ID0gcHJlcGFyZU9iamVjdDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkVHlwZSA9IGlzVmFsaWRUeXBlO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdmFsdWUgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWEgc2NoZW1hIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBlbnVtXG4gKi9cbmV4cG9ydHMuaXNWYWxpZEVudW0gPSBpc1ZhbGlkRW51bTtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaXNWYWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU3RhdGUgPSBpc1ZhbGlkU3RhdGU7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhbiBldmVudC5cbiAqIEBtZXRob2QgaXNFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYW4gZXZlbnRcbiAqL1xuZXhwb3J0cy5pc0V2ZW50ID0gaXNFdmVudDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGlzUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmlzUHJvcGVydHkgPSBpc1Byb3BlcnR5O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBsaW5rLlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBsaW5rXG4gKi9cbmV4cG9ydHMuaXNMaW5rID0gaXNMaW5rO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pc0NvbGxlY3Rpb24gPSBpc0NvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaXNNZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaXNNZXRob2QgPSBpc01ldGhvZDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHN0cnVjdHVyZVxuICovXG5leHBvcnRzLmlzU3RydWN0dXJlID0gaXNTdHJ1Y3R1cmU7XG5cblxuLyoqXG4gKiBHZXQgYSB0eXBlLlxuICogQG1ldGhvZCBnZXRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgdHlwZVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdHlwZVxuICovXG5leHBvcnRzLmdldFR5cGUgPSBnZXRUeXBlOyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogRGVzaWduIHwgQ3JlYXRlIHwgQ29tcG9zZVxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyB0aGUgbWFpbiBtb2R1bGUgb2YgUnVudGltZS4gPGJyPlxuICogSXQgaW5pdHMgUnVudGltZSBtZXRhbW9kZWwgYW5kIGxvYWRzIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN5c3RlbVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAbWFpbiBydW50aW1lXG4gKiBAY2xhc3MgcnVudGltZVxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJyxcbiAgICBzeXN0ZW0gPSAnJztcblxuXG4vKiBQb2x5ZmlsbCAqL1xuJGhlbHBlci5wb2x5ZmlsbCgpO1xuXG4vKiBJbml0IE1ldGFtb2RlbCAqL1xuXG5cbiRtZXRhbW9kZWwuaW5pdCgpO1xuXG5cbi8qIEluaXQgcnVudGltZSBmcm9tIGEgc3lzdGVtICovXG5cblxuc3l0ZW1JZCA9ICRkYi5zeXN0ZW0oJHN5c3RlbS5zeXN0ZW0pO1xuc3lzdGVtID0gJGNvbXBvbmVudC5nZXQoc3l0ZW1JZCk7XG5zeXN0ZW0ubWFpbigpO1xuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBSdW50aW1lLiA8YnI+XG4gKiBJdCBpbml0cyBSdW50aW1lIG1ldGFtb2RlbCBhbmQgbG9hZHMgUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtc3lzdGVtXG4gKiBAbWFpbiBydW50aW1lXG4gKiBAY2xhc3MgcnVudGltZVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBSdW50aW1lIGluc3RhbmNlLlxuICogQHByb3BlcnR5IHJ1bnRpbWVcbiAqIEB0eXBlIFJ1bnRpbWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgncnVudGltZScpOyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogRGVzaWduIHwgQ3JlYXRlIHwgQ29tcG9zZVxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHN0YXRlcyBvZiBhbGwgdGhlY29tcG9uZW50cy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtc3RhdGVcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAY2xhc3MgcnVudGltZS1zdGF0ZVxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlcnMgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiBzZXQoaWQsIHN0YXRlLCBwYXJhbWV0ZXJzKSB7XG4gICAgc3RvcmVbaWRdID0ge1xuICAgICAgICBcIm5hbWVcIjogc3RhdGUsXG4gICAgICAgIFwicGFyYW1ldGVyc1wiOiB7XG4gICAgICAgICAgICBcImRhdGFcIjogcGFyYW1ldGVyc1xuICAgICAgICB9XG4gICAgfTtcbiAgICAkZGIuc3RvcmUuUnVudGltZVN0YXRlW2lkXSA9IHtcbiAgICAgICAgXCJuYW1lXCI6IHN0YXRlLFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgXCJkYXRhXCI6IHBhcmFtZXRlcnNcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLypcbiAqIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldCBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZSBjb21wb25lbnRzLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1zdGF0ZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXN0YXRlXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIFNldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuc2V0ID0gc2V0O1xuXG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0IFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyOyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogRGVzaWduIHwgQ3JlYXRlIHwgQ29tcG9zZVxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSB3b3JrZmxvdyBvZiBSdW50aW1lLiBJdCBiZWhhdmVzIGxpa2UgYSB3b3JrZmxvdyBlbmdpbmUuIDxicj5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgY2hhbmdlIG9mIHN0YXR1cyBvZiBhIGNvbXBvbmVudCBpcyB2YWxpZCB0byBiZSBleGVjdXRlZC4gQnkgdmFsaWQsIGl0IG1lYW5zIHRoYXQ6PGJyPlxuICogLSB0aGUgc3RhdGUgaXMgdmFsaWQgZm9yIHRoZSBjb21wb25lbnQsIDxicj5cbiAqIC0gdGhlIGlucHV0IChpLmUuIHBhcmFtZXRlcnMpIG9mIGFsbCBhY3Rpb25zIGZvciB0aGUgc3RhdGUgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwgYW5kIDxicj5cbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC4gPGJyPlxuICogXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIHJ1bnRpbWUuIDxicj5cbiAqIElmIHRoZSBlcnJvciBjYW4gYnJlYWsgdGhlIGNvbnNpc3RlbmN5IG9mIHRoZSBjdXJyZW50IHN5c3RlbSwgdGhlIHdvcmtsb3cgd2lsbCBzdG9wLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS13b3JrZmxvd1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jaGFubmVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1zdGF0ZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAY2xhc3MgcnVudGltZS13b3JrZmxvdyBcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZS5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKipcbiAqIFRoZSBSdW50aW1lRXJyb3IgY2xhc3MuXG4gKiBAY2xhc3MgUnVudGltZUVycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugb2YgdGhlIGVycm9yXG4gKi9cbmZ1bmN0aW9uIFJ1bnRpbWVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm5hbWUgPSBcIlJ1bnRpbWVFcnJvclwiO1xufVxuUnVudGltZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUnVudGltZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJ1bnRpbWVFcnJvcjtcblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbmFtZXMgb2YgdGhlIHBhcmFtZXRlciBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIG9mIHRoZSBtZXRob2QgZm9yIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFxuICogR2V0IHRoZSBudW1iZXIgb2YgcGFyYW1ldGVycyBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IG51bWJlciBvZiBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IGZvciB0aGUgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU51bWJlcihpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBtaW4gPSAwLFxuICAgICAgICBtYXggPSAwO1xuXG4gICAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09ICd1bmRlZmluZWQnIHx8IHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gbWluICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChtaW4pO1xuICAgICAgICByZXN1bHQucHVzaChtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2Qgc2V0RGVmYXVsdFZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJndW1lbnRzIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRWYWx1ZShpZCwgbWV0aG9kTmFtZSwgYXJncykge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IGZhbHNlICYmIHR5cGVvZiBhcmdzW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0uZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJnc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSB0eXBlIHJldHVybmVkIGJ5IGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRSZXR1cm5UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHR5cGUgcmV0dXJuZWQgYnkgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmV0dXJuVHlwZShpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciByZXN1bHRUeXBlID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcblxuICAgIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgICAgICByZXN1bHRUeXBlID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV0ucmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0VHlwZSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAbWV0aG9kIGdldFBhcmFtVHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IHRoZSB0eXBlcyBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1UeXBlcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0udHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIG91dHB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbFxuICogQG1ldGhvZCBjaGVja1Jlc3VsdFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb25zIG9uIG91cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Jlc3VsdChwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsLFxuICAgICAgICBtZXRob2ROYW1lID0gcGFyYW1zLm1ldGhvZE5hbWUgfHwgJycsXG4gICAgICAgIG1ldGhvZFJlc3VsdCA9IG51bGwsXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICByZXR1cm5UeXBlID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLm1ldGhvZFJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbWV0aG9kUmVzdWx0ID0gcGFyYW1zLm1ldGhvZFJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXRob2RSZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIHJldHVyblR5cGUgPSBnZXRSZXR1cm5UeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAocmV0dXJuVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgcmV0dXJuVHlwZSA9PT0gJ2FueSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHJldHVyblR5cGUgPT09ICdhcnJheSc6XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUsIHJldHVyblR5cGUsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RSZXN1bHQgIT09IHJldHVyblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUsIHJldHVyblR5cGUsIHR5cGVvZiBtZXRob2RSZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgYWN0aW9ucyBvZiB0aGUgc3BlY2lmaWVkIHN0YXRlXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgYSBSdW50aW1lIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCB0cnVlIGlmIHRoZSBzdGF0ZSBpcyBhbiBldmVudFxuICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgdGhlIGFjdGlvbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoY29tcG9uZW50LCBuYW1lLCBpc0V2ZW50KSB7XG4gICAgdmFyIGFjdGlvbiA9ICRiZWhhdmlvci5nZXRBY3Rpb25zKGNvbXBvbmVudC5pZCgpLCBuYW1lKSxcbiAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcGFyZW50ID0gbnVsbDtcblxuICAgIGlmICghYWN0aW9uLmxlbmd0aCB8fCBpc0V2ZW50KSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKCRjb21wb25lbnQuZ2V0KGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50cyA9ICRtZXRhbW9kZWwuZ2V0UGFyZW50cyhjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKHBhcmVudCwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cudW5rbm93bkNvbXBvbmVudChwYXJlbnRzW2ldLCBjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKlxuICogQ2FsbCBhbiBhY3Rpb24gYW5kIG1ha2Ugc29tZSBEZXBlbmRlbmN5IEluamVjdGlvbiBpZiBpdCBpcyBhIGNvcmUgYWN0aW9uXG4gKiBAbWV0aG9kIGNhbGxBY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCBpcyB0aGUgYWN0aW9uIGEgY2FsbGJhY2sgb2YgYW4gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdCBvZiB0aGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNhbGxBY3Rpb24oY29tcG9uZW50LCBzdGF0ZSwgYWN0aW9uLCBwYXJhbXMsIGlzRXZlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgaW5qZWN0ZWRQYXJhbXMgPSBbXSxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGlmICghJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSAmJiAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkpIHtcbiAgICAgICAgcGFyYW1zID0gc2V0RGVmYXVsdFZhbHVlKGNvbXBvbmVudENsYXNzTmFtZSwgc3RhdGUsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKHBhcmFtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi51c2VDb3JlQVBJKSB7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRjb21wb25lbnQpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkZGIpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbWV0YW1vZGVsKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goZXhwb3J0cyk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRiZWhhdmlvcik7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRzdGF0ZSk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRsb2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KGFjdGlvbi5hY3Rpb24sIFtjb21wb25lbnRdLmNvbmNhdChpbmplY3RlZFBhcmFtcykpLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgUnVudGltZUVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuZ2V0UnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGxvZy5hY3Rpb25JbnZva2VFcnJvcihzdGF0ZSwgY29tcG9uZW50LmlkKCksIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGFjdGlvbiBoYXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXIuXG4gKiBAbWV0aG9kIHZhbGlkUGFyYW1OdW1iZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiBhcHBsaWVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzTmFtZSwgc3RhdGUsIGFjdGlvbikge1xuICAgIHZhciBmdW5jID0gJycsXG4gICAgICAgIGJlZ2luQm9keSA9IC0xLFxuICAgICAgICBoZWFkZXIgPSAnJyxcbiAgICAgICAgZnVuY1BhcmFtcyA9ICcnLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcGFyYW1OdW1iZXIgPSAwLFxuICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gW10sXG4gICAgICAgIGlzUHJvcGVydHkgPSBmYWxzZSxcbiAgICAgICAgaXNMaW5rID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgICAgICByZXN1bHQgPSBmYWxzZTtcblxuICAgIC8vIGNoZWNrIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAgICBmdW5jID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCd7Jyk7XG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgIH1cbiAgICBwYXJhbU51bWJlciA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgICAvLyBnZXQgdGhlIG51bWJlciBtaW4gYW5kIG1heCBvZiB2YWxpZCBwYXJhbWV0ZXJzXG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NOYW1lKTtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGlzQ29sbGVjdGlvbjpcbiAgICAgICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMywgM107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzTGluazpcbiAgICAgICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMSwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBnZXRQYXJhbU51bWJlcihjbGFzc05hbWUsIHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIGNvbXBhcmVcbiAgICBpZiAobW9kZWxOdW1iZXJQYXJhbVswXSA8PSBwYXJhbU51bWJlciAmJiBwYXJhbU51bWJlciA8PSBtb2RlbE51bWJlclBhcmFtWzFdKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb24uXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUGFyYW1zKHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJyxcbiAgICAgICAgYXJncyA9IHBhcmFtcy5hcmdzIHx8ICcnLFxuICAgICAgICBwYXJhbXNOYW1lID0gW10sXG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXSxcbiAgICAgICAgcGFyYW1zTnVtYmVyID0gW10sXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICBsZW5ndGggPSBhcmdzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHBhcmFtID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24obWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaXNDb2xsZWN0aW9uOlxuICAgICAgICAgICAgcGFyYW1zVHlwZSA9IFsnbnVtYmVyJywgJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVbMF0sICdzdHJpbmcnXTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IFszLCAzXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzTGluazpcbiAgICAgICAgICAgIHBhcmFtc1R5cGUgPSBbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVdO1xuICAgICAgICAgICAgcGFyYW1zTnVtYmVyID0gWzEsIDFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gZ2V0UGFyYW1UeXBlcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgcGFyYW1zTnVtYmVyID0gZ2V0UGFyYW1OdW1iZXIoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIGNhc2Ugb2Ygb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCA8IHBhcmFtc051bWJlclswXSB8fCBwYXJhbXNOdW1iZXJbMV0gPCBsZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJhbXNOdW1iZXJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHBhcmFtLCBwYXJhbXNUeXBlW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSwgcGFyYW1zTmFtZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDYWxsIGFuIGFjdGlvbiB0aGF0IGNvbWVzIGZyb20gYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGFjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiBhY3Rpb24oYmVoYXZpb3JJZCwgcGFyYW1zKSB7XG4gICAgdmFyIGlzRXZlbnQgPSBmYWxzZSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgIGJlaGF2aW9ycyA9IFtdLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICBhY3Rpb25Gcm9tTWVtb3J5ID0gbnVsbDtcblxuICAgIGJlaGF2aW9ycyA9ICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgIFwiX2lkXCI6IGJlaGF2aW9ySWRcbiAgICB9KTtcblxuICAgIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KGJlaGF2aW9ySWQpO1xuXG4gICAgaWYgKGJlaGF2aW9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBiZWhhdmlvcnNbMF07XG5cbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoYmVoYXZpb3IuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzRXZlbnQgPSAkbWV0YW1vZGVsLmlzRXZlbnQoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgICAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICAgICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0NvbGxlY3Rpb24gfHwgaXNMaW5rKSB7XG4gICAgICAgICAgICAgICAgY2FsbEFjdGlvbihjb21wb25lbnQsIGJlaGF2aW9yLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBhY3Rpb25Gcm9tTWVtb3J5XG4gICAgICAgICAgICAgICAgfSwgcGFyYW1zLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFxuICogV29ya2xvdzo8YnI+XG4gKiA8YnI+XG4gKiAwLiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBub3QgYmVlbiBkZXN0cm95ZWQgPGJyPlxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kLCBhIHByb3BlcnR5IG9yIGFuIGV2ZW50IDxicj5cbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYWN0aW9ucyBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGlucHV0cyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDYuIElmIGEgbWV0aG9kLCBjaGVjayBpZiB0aGUgb3V0cHV0IGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgPGJyPlxuICogOC4gUmV0dXJuIHRoZSByZXN1bHQgPGJyPlxuICogXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIHN0YXRlKHBhcmFtcykge1xuXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIHBhcmFtcy5jb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8ICcnO1xuICAgIHBhcmFtcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAnJztcbiAgICBwYXJhbXMuZGF0YSA9IHBhcmFtcy5kYXRhIHx8IFtdO1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9ICcnLFxuICAgICAgICBhY3Rpb25zID0gW10sXG4gICAgICAgIGFjdGlvbiA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBmYWxzZSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgIGlzRXZlbnQgPSBmYWxzZTtcblxuICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgICBpZiAoY3VycmVudFN0YXRlID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkVXNlT2ZDb21wb25lbnQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24ocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICBhY3Rpb25zID0gZ2V0QWN0aW9ucyhjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgaXNFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbnMubGVuZ3RoKSB7XG5cbiAgICAgICAgaWYgKGNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICBcImFyZ3NcIjogcGFyYW1zLmRhdGFcbiAgICAgICAgfSkpIHtcblxuICAgICAgICAgICAgaWYgKCFpc0V2ZW50ICYmXG4gICAgICAgICAgICAgICAgIWlzUHJvcGVydHkgJiZcbiAgICAgICAgICAgICAgICAhaXNMaW5rICYmXG4gICAgICAgICAgICAgICAgIWlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbMF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbEFjdGlvbihjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgYWN0aW9uLCBwYXJhbXMuZGF0YSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFwibWV0aG9kUmVzdWx0XCI6IHJlc3VsdFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSwgcGFyYW1zLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCAmJiAoaXNFdmVudCB8fCBpc1Byb3BlcnR5IHx8IGlzTGluayB8fCBpc0NvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnMgPGJyPlxuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSkgPGJyPlxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqL1xuZnVuY3Rpb24gc3RvcChwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5lcnJvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyYW1zLmVycm9yID0gZmFsc2U7XG4gICAgfVxuICAgIHBhcmFtcy5tZXNzYWdlID0gcGFyYW1zLm1lc3NhZ2UgfHwgJyc7XG5cbiAgICBleHBvcnRzLnN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLmVycm9yKSB7XG4gICAgICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcigncnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoJ3J1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIG9mIGFuIHVua25vd24gZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncnVudGltZTogcnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6IHJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcbiAgICAkbG9nLndvcmtmbG93UmVzdGFydGVkKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgUnVudGltZS4gSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLiA8YnI+XG4gKiBJdCBjaGVja3MgaWYgdGhlIGNoYW5nZSBvZiBzdGF0dXMgb2YgYSBjb21wb25lbnQgaXMgdmFsaWQgdG8gYmUgZXhlY3V0ZWQuIEJ5IHZhbGlkLCBpdCBtZWFucyB0aGF0Ojxicj5cbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LCA8YnI+XG4gKiAtIHRoZSBpbnB1dCAoaS5lLiBwYXJhbWV0ZXJzKSBvZiBhbGwgYWN0aW9ucyBmb3IgdGhlIHN0YXRlIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsIGFuZCA8YnI+XG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuIDxicj5cbiAqIFxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBvZiBSdW50aW1lIGluc3RhbmNlLiA8YnI+XG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY2hhbm5lbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtc3RhdGVcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtd29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBcbiAqIFdvcmtsb3c6PGJyPlxuICogPGJyPlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkIDxicj5cbiAqIDEuIENoZWNrIGlmIHRoZSBzdGF0ZSBpcyBhIG1ldGhvZCBvciBhbiBldmVudCA8YnI+XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFuIGFjdGlvbiBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA1LiBDYWxsIHRoZSBhY3Rpb24ocykgPGJyPlxuICogNi4gSWYgbm90IGFuIG9mIGV2ZW50LCBjaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCA8YnI+XG4gKiA4LiBSZXR1cm4gdGhlIHJlc3VsdCA8YnI+XG4gKiBcbiAqIEBtZXRob2Qgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIGNoYW5nZSB0aGUgc3RhdGUgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqL1xuZXhwb3J0cy5zdGF0ZSA9IHN0YXRlO1xuXG5cbi8qKlxuICogU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnMgPGJyPlxuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSkgPGJyPlxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqL1xuZXhwb3J0cy5zdG9wID0gc3RvcDtcblxuXG4vKipcbiAqIFJlc3RhcnQgdGhlIHdvcmtmbG93IGVuZ2luZSBmcm9tIHRoZSBsYXN0IHN0YXRlLlxuICogQG1ldGhvZCByZXN0YXJ0XG4gKi9cbmV4cG9ydHMucmVzdGFydCA9IHJlc3RhcnQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja1BhcmFtcyA9IGNoZWNrUGFyYW1zO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYWN0aW9uIGhhcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlci5cbiAqIEBtZXRob2QgdmFsaWRQYXJhbU51bWJlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIGFwcGxpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGFjdGlvbiBpcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0cy52YWxpZFBhcmFtTnVtYmVycyA9IHZhbGlkUGFyYW1OdW1iZXJzO1xuXG5cbi8qKlxuICogQ2FsbCBhbiBhY3Rpb24gdGhhdCBjb21lcyBmcm9tIGFuIGV2ZW50LlxuICogQG1ldGhvZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0cy5hY3Rpb24gPSBhY3Rpb247Il19
