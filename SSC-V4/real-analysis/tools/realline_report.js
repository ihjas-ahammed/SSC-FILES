#!/usr/bin/env node
/* Shim: the report is shared, in ../../flow-library/tools/realline_report.js.
       node tools/realline_report.js [--mock] [--missing|--drawn] [--id c.x.y] [--json] */
'use strict';
const path = require('path');
process.argv.splice(2, 0, path.resolve(__dirname, '..'));
require(path.resolve(__dirname, '..', '..', 'flow-library', 'tools', 'realline_report.js'));
