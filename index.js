'use strict';

var path = require('path');
module.exports = function (context, callback) {
    context.srcPath = path.join(context.srcRoot, 'templates', context.name);
    context.name = 'templates/' + context.name ;
    callback(null, context);
};