const details = {
  user: 'suna',
  password: '123456',
  "first-name": 'mohsen',
  address: {
    street: 'Dobbinton',
    city: 'Oshawa',
  }
}

const {'first-name': firstName} = details


console.log(firstName)
