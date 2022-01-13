const moment = require('moment')
const regex = require('./regex')

const rawToJson = (raw, domain) => {
  if (raw === null) {
    throw new Error('No whois data received')
  } else if (raw.length <= 10) {
    throw new Error(`Bad whois data: ${raw}`)
  } else {
    const extensions = Object.keys(regex.extensions)
    let domainRegex = regex.default
    let undefinedTLD = true
    let result = {
      statusCode: 200,
      isAvailable: false,
      domainName: domain
    }

    extensions.map((extension) => {
      if (domain.endsWith('.' + extension)) {
        domainRegex = regex.extensions[extension]
        undefinedTLD = false
      }
    })

    Object.keys(domainRegex).map((key) => {
      let regexp =
        key === 'status' || key === 'nameServers'
          ? new RegExp(domainRegex[key], 'g')
          : new RegExp(domainRegex[key])

      if (raw.match(regexp) && key !== 'dateFormat') {
        if (key === 'rateLimited') {
          throw new Error('Rate limited')
        } else if (key === 'notFound') {
          result.isAvailable = true
        } else {
          let value = raw.match(regexp).at(-1)

          if (key === 'status' || key === 'nameServers') {
            let matches = []
            while ((matches = regexp.exec(raw))) {
              result[key]
                ? result[key].push(matches[1])
                : (result[key] = [matches[1]])
            }
          } else if (
            key === 'expirationDate' ||
            key === 'creationDate' ||
            key === 'updatedDate'
          ) {
            result[key] = domainRegex.hasOwnProperty('dateFormat')
              ? moment(value, domainRegex.dateFormat).toJSON()
              : moment(value).toJSON()
          } else if (key === 'domainName') {
            result[key] = value.toLowerCase()
          } else {
            result[key] = value
          }
        }
      }
    })

    if (undefinedTLD) {
      if (!result.isAvailable) {
        if (
          !result.hasOwnProperty('creationDate') ||
          !result.hasOwnProperty('expirationDate') ||
          !result.hasOwnProperty('updatedDate') ||
          !result.hasOwnProperty('registrar')
        )
          throw new Error('TLD not supported')
      }
    }
    return {
      ...result,
      raw: raw
    }
  }
}

module.exports = rawToJson
