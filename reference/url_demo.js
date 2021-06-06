import url from 'url'
const port = 8080

const myURl = new URL(`http://mywebsite.com:${port}/hello.html?id=100&status=active`)

// Serialized URL
console.log(myURl.href)

// Host {root domain}
console.log(myURl.host)

// Hostname {does not include port}
console.log(myURl.hostname)

// Pathname
console.log(myURl.pathname)

// Serialized query
console.log(myURl.search)

// Params obj
console.log(myURl.searchParams)

// Add param
myURl.searchParams.append('abc', '123')
console.log(myURl.searchParams)

// Loop through params
myURl.searchParams.forEach((value, name) => { console.log(`${name}: ${value}`) })

