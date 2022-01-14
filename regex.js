const regex = {
  default: {
    domainName: 'Domain Name: *([^\\s]+)',
    registrar: 'Registrar: *(.+)',
    updatedDate: 'Updated Date: *(.+)',
    creationDate: 'Creat(ed|ion) Date: *(.+)',
    expirationDate: 'Expir\\w+ Date: *(.+)',
    status: 'Status:\\s*(.+)\\s*\\n',
    nameServers: 'Name Server: *(.+)',
    dateFormat: 'YYYY-MM-DDThh:mm:ssZ',
    notFound: '(No match for |Domain not found|NOT FOUND\\s)'
  },
  extensions: {
    com: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      notFound: 'No match for '
    },
    net: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      notFound: 'No match for '
    },
    org: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status: *(.+)',
      nameServers: 'Name Server: *(.+)',
      notFound: '^NOT FOUND'
    },
    co: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      notFound: 'No Data Found'
    },
    tr: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Organization Name\t: *(.+)',
      creationDate: 'Created on..............: *(.+)',
      expirationDate: 'Expires on..............: *(.+)',
      dateFormat: 'YYYY-MMM-DD',
      notFound: 'No match found'
    },
    me: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status: *(.+)',
      nameServers: 'Name Server: *(.+)',
      notFound: '^NOT FOUND'
    },
    im: {
      domainName: 'Domain Name: *([^\\s]+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      nameServers: 'Name Server: *(.+).',
      dateFormat: 'DD/MM/YYYY hh:mm:ss',
      notFound: 'was not found'
    },
    in: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creat(ed|ion) Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      dateFormat: 'YYYY-MM-DDThh:mm:ssZ',
      notFound: '^No Data Found'
    },
    us: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      status: 'Domain Status: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Registry Expiry Date: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      nameServers: 'Name Server: *(.+)',
      notFound: '^No Data Found',
      dateFormat: 'YYYY-MM-DDThh:mm:ssZ'
    },
    ru: {
      domainName: 'domain: *([^\\s]+)',
      registrar: 'registrar: *(.+)',
      creationDate: 'created: *(.+)',
      expirationDate: 'paid-till: *(.+)',
      status: 'state: *(.+)',
      notFound: 'No entries found'
    },
    su: {
      domainName: 'domain: *([^\\s]+)',
      registrar: 'registrar: *(.+)',
      creationDate: 'created: *(.+)',
      expirationDate: 'paid-till: *(.+)',
      status: 'state: *(.+)',
      notFound: 'No entries found'
    },
    uk: {
      domainName: 'Domain name:\\s*([^\\s]+)',
      registrar: 'Registrar:\\s*(.+)',
      status: 'Registration status:\\s*(.+)',
      creationDate: 'Registered on:\\s*(.+)',
      expirationDate: 'Expiry date:\\s*(.+)',
      updatedDate: 'Last updated:\\s*(.+)',
      notFound: 'No match for ',
      dateFormat: 'DD-MMM-YYYY'
    },
    fr: {
      domainName: 'domain: *([^\\s]+)',
      registrar: 'registrar: *(.+)',
      creationDate: 'created: *(.+)',
      expirationDate: 'Expir\\w+ Date:\\s?(.+)',
      status: 'status: *(.+)',
      updatedDate: 'last-update: *(.+)',
      notFound: 'No entries found in ',
      dateFormat: 'YYYY-MM-DDThh:mm:ssZ'
    },
    nl: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *\\s*(.+)',
      status: 'Status: *(.+)',
      notFound: '\\.nl is free',
      rateLimited: 'maximum number of requests per second exceeded'
    },
    pl: {
      domainName: 'DOMAIN NAME: *([^\\s]+)[s]+$',
      registrar: 'REGISTRAR: *\\s*(.+)',
      status: 'Registration status:\\n\\s*(.+)',
      creationDate: 'created: *(.+)',
      expirationDate: 'renewal date: *(.+)',
      updatedDate: 'last modified: *(.+)',
      notFound: 'No information available about domain name',
      dateFormat: 'YYYY.MM.DD hh:mm:ss'
    },
    eu: {
      domainName: 'Domain: *([^\\n\\r]+)',
      registrar: 'Registrar: *\\n *Name: *([^\\n\\r]+)',
      notFound: 'Status: AVAILABLE'
    },
    mobi: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status: *(.+)',
      nameServers: 'Name Server: *(.+)',
      notFound: '^NOT FOUND'
    }
  }
}

module.exports = regex
