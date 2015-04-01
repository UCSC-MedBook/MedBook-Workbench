<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [required meteor packages](#required-meteor-packages)
- [required nodejs packages](#required-nodejs-packages)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

> Written with [StackEdit](https://stackedit.io/).

install meteor before installing this package

good videos for getting started on meteor
https://www.eventedmind.com/


### required meteor packages

* accounts-password             1.0.5  Password support for accounts
* alanning:roles                1.2.13  Role-based authorization
* aldeed:autoform               4.2.1 Easily create forms with automatic insert and update, and automatic reactive validation.
* aldeed:collection2            2.3.0 Automatic validation of insert and update operations on the client and server.
* aldeed:tabular                0.2.2 Datatables for large or small datasets in Meteor
* bootstrap                     1.0.1  Front-end framework from Twitter
* cfs:filesystem                0.1.1  Filesystem storage adapter for CollectionFS
* cfs:gridfs                    0.0.27  GridFS storage adapter for CollectionFS
* cfs:standard-packages         0.5.3  Filesystem for Meteor, collectionFS
* cfs:ui                        0.1.3  CollectionFS, provides UI helpers
* email                         1.0.5  Send email messages
* insecure                      1.0.2  Allow all database writes by default
* iron:router                   1.0.6  Routing specifically designed for Meteor
* meteor-platform               1.2.1  Include a standard set of Meteor packages in your app
* meteorhacks:npm               1.2.2  Use npm modules with your Meteor App
* mrt:jquery-ui                 1.9.2  jQuery-UI - jQuery user interface
* mrt:jquery-ui-bootstrap       1.8.16  jQuery-UI-Bootstrap - custom CSS jQuery UI theme for Twitter Bootstrap
* npm-container                 1.0.0+ Contains all your npm dependencies
* observation-deck              1.0.0+ Observation Deck visualizes multiple data types for a group of samples.
* patte:mime-npm                0.0.1  Wrapper for the npm package mime
* sample-pie-charts             1.0.0+ Draw sample pie chart clinical data summaries.
* sujith3g:handsontable-latest  0.0.3  Handsontable 0.10.5 for meteor
* underscore                    1.0.2  Collection of small helpers: _.map, _.each, ...
* vsivsi:file-collection        0.3.5  Collections that efficiently store files using MongoDB GridFS, with built-in HTTP support
* zimme:iron-router-active      1.0.1  Active route/path template helpers for iron:router

### required nodejs packages
* npm install temp
* npm install toml-js

make sure to set the environment variable NODE_PATH to point to both node_module locations. (one for meteor and one for npm)