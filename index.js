#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var program = require('commander');
var ncp = require('ncp').ncp;

program
.command('build')
.usage('<config> <css> [options]', 'Build style guide for the given tailwind config and generated tailwind styles css paths.')
.option('--name [name]', 'Set friendly, unique name for the config file.', 'site')
.option('--output [path]', 'Set output path for the generated docs.', './twsg')
.action(function(configPath, cssPath, cmd) {
    build({
        configPath: configPath,
        cssPath: cssPath,
        output: cmd.output,
        name: cmd.name
    });
});

function copyDocs(options, cb)
{
    ncp(path.resolve(__dirname, 'dist'), path.resolve(options.output), cb);
}

function syncConfig(options)
{
    var tailwindConfig = require(path.resolve(options.configPath));

    var configPath = path.resolve(options.output, 'configs');

    if (! fs.existsSync(configPath)) {
        fs.mkdir(configPath);
    }

    fs.writeFileSync(path.resolve(configPath, options.name + '.js'), 'window.tailwindConfig = ' + JSON.stringify(tailwindConfig));
    
    var configFiles = fs.readdirSync(configPath).filter(function(path) {
        return path.match(/\.js$/);
    });

    fs.writeFileSync(path.resolve(options.output, 'manifest.js'), `
        window.configFiles = ${JSON.stringify(configFiles)};
    `);

    console.log('Successfully generated docs and wrote config to path: ' + path.resolve(options.output));
    console.log('Launch the index.html file in that folder to see the generated docs.');
}

function build(options)
{   
    copyDocs(options, function() {
        ncp(path.resolve(options.cssPath), path.resolve(options.output, 'configs', options.name + '.css'));
        syncConfig(options);
    });
}

program.parse(process.argv);

if (program.args.length === 0) {
    program.help()
    process.exit()
}

module.exports = {
    build: build
};
