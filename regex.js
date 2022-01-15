const regex = {
  default: {
    domainName: 'Domain Name: *([^\\s]+)',
    registrar: 'Registrar: *(.+)',
    updatedDate: 'Updated Date: *(.+)',
    creationDate: 'Creat(ed|ion) Date: *(.+)',
    expirationDate: 'Expir\\w+ Date: *(.+)',
    status: 'Status:\\s*(.+)\\s*\\n',
    nameServers: 'Name Server: *(.+)',
    notFound:
      '(No match for |Domain not found|No Data Found|DOMAIN NOT FOUND|does not exist|No entries found|No Object Found|not been registered|available for registration|^Not found|^NOT FOUND|^No Data Found|NOT FOUND\\s)'
  },
  extensions: {
    tr: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Organization Name\t: *(.+)',
      creationDate: 'Created on..............: *(.+)',
      expirationDate: 'Expires on..............: *(.+)',
      dateFormat: 'YYYY-MMM-DD',
      notFound: 'No match found'
    },
    im: {
      domainName: 'Domain Name: *([^\\s]+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      nameServers: 'Name Server: *(.+).',
      dateFormat: 'DD/MM/YYYY hh:mm:ss',
      notFound: 'was not found'
    },
    ru: {
      domainName: 'domain: *([^\\s]+)',
      registrar: 'registrar: *(.+)',
      creationDate: 'created: *(.+)',
      expirationDate: 'paid-till: *(.+)',
      status: 'state: *(.+)',
      nameServers: 'server: *(.+)',
      notFound: 'No entries found'
    },
    uk: {
      domainName: 'Domain name:\\s*([^\\s]+)',
      registrar: 'Registrar:\\s*(.+)',
      updatedDate: 'Last updated:\\s*(.+)',
      creationDate: 'Registered on:\\s*(.+)',
      expirationDate: 'Expiry date:\\s*(.+)',
      status: 'Registration status:\\s*(.+)',
      nameServers: 'Name servers:\\s*(.+)',
      dateFormat: 'DD-MMM-YYYY',
      notFound: 'No match for '
    },
    ai: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      nameServers: 'Name Server: *(.+)',
      notFound: 'No Object Found'
    },
    de: {
      domainName: 'Domain: *([^\\s]+)',
      updatedDate: 'Changed: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Nserver: *(.+)',
      dateFormat: 'YYYY-MM-DDThh:mm:ss',
      notFound: 'Status: free'
    },
    at: {
      domainName: 'domain: *([^\\s]+)',
      registrar: 'registrar: *(.+)',
      updatedDate: 'changed: *(.+)',
      nameServers: 'nserver: *(.+)',
      dateFormat: 'YYYYMMDD hh:mm:ss',
      notFound: 'nothing found'
    },
    pm: {
      domainName: 'domain: *([^\\s]+)',
      registrar: 'registrar: *(.+)',
      updatedDate: 'last-update: *(.+)',
      creationDate: 'created: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      nameServers: 'nserver: *(.+)',
      notFound: 'No entries found'
    },
    cn: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      creationDate: 'Registration Time: *(.+)',
      expirationDate: 'Expiration Time: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      notFound: 'No matching record'
    }
  }
}

regex.extensions = {
  ...regex.extensions,
  com: regex.default,
  net: regex.default,
  org: regex.default,
  co: regex.default,
  xyz: regex.default,
  io: regex.default,
  me: regex.default,
  info: regex.default,
  top: regex.default,
  in: regex.default,
  online: regex.default,
  us: regex.default,
  biz: regex.default,
  tv: regex.default,
  tech: regex.default,
  cc: regex.default,
  club: regex.default,
  dev: regex.default,
  mobi: regex.default,
  name: regex.default,
  tc: regex.default,
  pw: regex.default,
  pro: regex.default,
  app: regex.default,
  site: regex.default,
  download: regex.default,
  shop: regex.default,
  store: regex.default,
  cloud: regex.default,
  ws: regex.default,
  ie: regex.default,
  ist: regex.default,
  istanbul: regex.default,
  link: regex.default,
  kim: regex.default,
  vip: regex.default,
  red: regex.default,
  men: regex.default,
  wtf: regex.default,
  art: regex.default,
  one: regex.default,
  news: regex.default,
  live: regex.default,
  life: regex.default,
  works: regex.default,
  email: regex.default,
  design: regex.default,
  global: regex.default,
  network: regex.default,
  su: regex.extensions.ru,
  re: regex.extensions.pm
}

module.exports = regex
