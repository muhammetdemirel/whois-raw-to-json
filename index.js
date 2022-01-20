const util = require('util')
const whois = require('whois')
const servers = require('./servers')
const rawToJson = require('./raw-to-json')

let lookup = util.promisify(whois.lookup)

module.exports = {
  lookup: async function (domain, options = false) {
    try {
      if (!options) {
        options = { follow: 0, verbose: false }

        Object.keys(servers).map((tld) => {
          if (domain.endsWith('.' + tld)) {
            options.server = servers[tld]
          }
        })
      }

      let result = {}
      let raw = await lookup(domain, options)

      if (typeof raw === 'object') {
        result = raw.map(function (data) {
          data.data = rawToJson(data.data, domain)
          return data
        })
      } else {
        result = { ...result, ...rawToJson(raw, domain) }
      }

      return result
    } catch (error) {
      return {
        statusCode: 404,
        message: error.message
      }
    }
  }
}
