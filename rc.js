// Remove all comment in the CSS file
const fs = require('fs')
const file = process.argv[2]
const dist = process.argv[3] || file
const sign = `/*!
vFluent Components Stylesheet v1.0.0
Copyright 2018 github.io/hjboss
Licensed under the Apache-2.0 License.
https://github.com/hjboss/vfluent-components/blob/master/README.md
*/
`

if (fs.existsSync(file)) {
        const source = fs.readFileSync(file).toString()
        const buffer = source.replace(/\/\*\!(.|\s)*?\*\//g, '').replace(/\n/g, '')
        fs.writeFileSync(dist, sign + buffer)
}