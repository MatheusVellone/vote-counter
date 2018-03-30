const path = require('path')
const serve = require('serve')

const directory = path.join('build')

serve(directory, { port: 1337 })
