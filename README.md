# 📨 Email address validator
This lightweight module facilitates precise email address validation, returning a `Boolean` value of `true` or `false`.

[![npm downloads](https://img.shields.io/npm/dm/@sefinek/email-validator)](https://www.npmjs.com/package/@sefinek/email-validator)
[![Issues](https://img.shields.io/github/issues/sefinek24/email-validator)](https://github.com/sefinek24/email-validator/issues)
[![Last commit](https://img.shields.io/github/last-commit/sefinek24/email-validator)](https://github.com/sefinek24/email-validator/commits/main)
[![Stats](https://data.jsdelivr.com/v1/package/npm/@sefinek/email-validator/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@sefinek/email-validator)

## 🟢 » Node.js
### Installation via npm
```bash
npm install @sefinek/email-validator
```

### Installation via yarn
```bash
yarn add @sefinek/email-validator
```

### Example
```js
const emailValidator = require('@sefinek/email-validator');
const testEmail = 'contact@sefinek.net';

if (emailValidator.test(testEmail)) {
    console.log(`Email ${testEmail} is valid!`);
} else {
    console.log(`Email ${testEmail} is NOT valid!`);
}
```


## 🌍 » Browser
### jsdelivr.net (recommend)
```
https://cdn.jsdelivr.net/npm/@sefinek/email-validator@1/dist/browser.min.js
```

### cdn.sefinek.net
```
https://cdn.sefinek.net/npm/email-validator/dist/browser.min.js
```

### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>email-validator</title>
    <meta charset="utf-8">
</head>
<body>
    <h1>email-validator</h1>

    <script src="https://cdn.jsdelivr.net/npm/@sefinek/email-validator@1/dist/browser.min.js"></script>
    <script>
        const email = 'contact@sefinek.net';
        
        if (emailValidator.test(email)) {
            console.log(`✔️ Email ${email} is valid.`);
        } else {
            console.log(`❎ Email ${email} is NOT valid!`);
        }
    </script>
</body>
</html>
```

### Demo
> https://cdn.sefinek.net/npm/email-validator/test/browser


## ⭐ » Thank you
If you find this module helpful, please consider giving the [repository a star](https://github.com/sefinek24/email-validator).
For any questions or issues, please create a new [Issue](https://github.com/sefinek24/email-validator/issues/new).


## 📑 » MIT License
Copyright 2023 © by [Sefinek](https://sefine.net). All Rights Reserved.