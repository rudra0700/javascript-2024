const user = {
    'name': "rudra",
    'age': 25,
    'isMarried': false,
}

user['name'] = "rudra barua"
user['profession'] = "programmar"
delete user['isMarried']

// console.log(Object.isExtensible(user))

Object.defineProperty(user, 'isAdmin', {
    value : true,
    writable: true,
    enumerable: true
})

// we can immute an object in three ways
// 1. prevent extension
// 2. using the seal() method
// 3. using the freeze() method


// 1. prevent extension. Its useful but we still can update or delete existing property. but our motto is fullly freeze the object
// Object.preventExtensions(user)
// console.log(Object.isExtensible(user))

user['phone'] = "123-123-123"
user['name'] = 'jill'
delete user['profession']
// console.log(user)

// 2. using the seal() method. in seal method we cannot create or delete any property but update existing property
Object.seal(user)
delete user['name']
user['country'] = "USA"
user['phone'] = '456-456-456'
// console.log(user)

// 3. using the freeze() method. In freeze method we cannot either detele or create or update the property. However this method wont work with nested property
const frozenObject = Object.freeze(user)
// console.log(frozenObject === user)

// console.log(Object.isFrozen(frozenObject))

{
    const config = {
        'db': 'postgresql',
        'host': 'acme-ind.com',
        'password': 'fake-password',
        'port': 512,
        'admin': {
            'name': 'rudra',
            'rights': ['create', 'update', 'delete']
        }
    }

    Object.freeze(config)
    config['db'] = 'mongo-db'
    config.admin.name = "Alex"
    console.log(config)
}