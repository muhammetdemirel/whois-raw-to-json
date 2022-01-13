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
    }
  }
}

module.exports = regex
