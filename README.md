[![🚀 release](https://github.com/Ani512/local-storage-auth/actions/workflows/publish.yml/badge.svg)](https://github.com/Ani512/local-storage-auth/actions/workflows/publish.yml)
# local-storage-auth
This is an [npm library](https://www.npmjs.com/package/local-storage-auth) for managing authentication for a website using localStorage and routing.

`CS 3162` - Professional Responsibility in Computer Science and Software Engineering

## Install

```bash
npm install local-storage-auth

# or

yarn add local-storage-auth
```

## Usage

```javascript
import React from 'react';
import { setAuth, checkAuth } from 'local-storage-auth';

// checkAuth() without redirection
function TestPage() {
  checkAuth();
  return (
    <h2>Test Page</h2>
  )
}

// checkAuth() with redirection
function Error() {
  checkAuth("/home"); 
  return (
    <h2>404 Page</h2>
  )
}

// setAuth()
function Login() {
  return (
    <div>
  {/* If person enters Correct Login Information */} 
      <button onClick={() => setAuth(true)}>Login Correct</button>
      
  {/* If person enters Wrong Login Information */}
      <button onClick={() => setAuth(false)}>Login Incorrect</button>
    </div>
  )
}
```

## Props

| Method                      | Type            | Default                        | Description           | Examples                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | --------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| checkAuth()                  | `string` or null        | `null`                           | checkAuth() can either have no props or accepts the page you want to redirect to as a string. | checkAuth() or checkAuth("/home")                                                                                                                                                                                                                                                                                                                                                                                            |
| setAuth()                  | `boolean`        | `false`                           |  setAuth() accepts a boolean depending on if you want the user to be logged in or not | setAuth(true)                                                                                                                                                                                                                                                                                                                                                                                            |

## Local Development

```bash
# no build scripts required since the project has no dependencies
```

## Example
An [example website](https://local-storage-auth-example.netlify.app/) has been created and deployed if you want to see the package being used in action. Happy Coding!

<img width="1420" alt="image" src="https://user-images.githubusercontent.com/55306116/192149841-2efbb69d-6be7-4ffb-8e62-4257171a4a70.png">

## Contributing

If you like this project and want to contribute, create a fork and make a ```pull request``` to the main branch. Check out some [issues](https://github.com/Ani512/local-storage-auth/issues) you can contribute to.

You can also contribute by sending me some money so I have more motivation to work on this project. 
My Venmo is [@aniumarji05](https://www.venmo.com/u/aniumarji05)

## License

MIT
