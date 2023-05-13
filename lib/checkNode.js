const semver = require('semver')

module.exports = function checkNode(mainNodeVersion) {
    const node_version = semver.valid(semver.coerce(process.version))
    return semver.satisfies(node_version, '>=' + mainNodeVersion)
}
