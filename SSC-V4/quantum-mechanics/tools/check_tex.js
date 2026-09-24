#!/usr/bin/env node
/* Shim: the checker is shared, in ../../flow-library/tools/check_tex.js.
       node tools/check_tex.js           the live pool
       node tools/check_tex.js --mock    the mock pool */
'use strict';
const path = require('path');
process.argv.splice(2, 0, path.resolve(__dirname, '..'));
require(path.resolve(__dirname, '..', '..', 'flow-library', 'tools', 'check_tex.js'));
