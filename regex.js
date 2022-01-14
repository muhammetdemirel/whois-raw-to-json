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
    xyz: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      notFound: 'DOMAIN NOT FOUND'
    },
    io: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      notFound: 'Domain not found'
    },
    info: {
      domainName: 'Domain Name: *([^\\s]+)',
      registrar: 'Registrar: *(.+)',
      updatedDate: 'Updated Date: *(.+)',
      creationDate: 'Creation Date: *(.+)',
      expirationDate: 'Expir\\w+ Date: *(.+)',
      status: 'Status:\\s*(.+)\\s*\\n',
      nameServers: 'Name Server: *(.+)',
      notFound: 'Domain not found'
    },
    us: {
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
    ru: {
      domainName: 'domain: *([^\\s]+)',
      registrar: 'registrar: *(.+)',
      creationDate: 'created: *(.+)',
      expirationDate: 'paid-till: *(.+)',
      status: 'state: *(.+)',
      nameServers: 'server: *(.+)',
      notFound: 'No entries found'
    },
    su: {
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
    }
  }
}

module.exports = regex
