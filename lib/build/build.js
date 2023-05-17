const Service = require('../service/Service')

module.exports = async function build(opts, cmd) {
    const arg = {
        customWebpackPath: opts.customWebpackPath || ''
    }
    process.env.NODE_ENV = 'production'
    const service = new Service('build', arg)
    await service.build()
}
