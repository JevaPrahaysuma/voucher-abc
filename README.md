## Documentation
# Application Voucher ABC

1. Description application

    This application cretaed 2 api for check eligible and image validation

2. Specifications Used

- **programming language** : Node v14.17.6
- **Database** : Mysql
- **Container** : Docker
- **Library** :
    - cors : 2.8.5,
    - dotenv : 8.1.0,
    - express : 4.18.2,
    - moment : 2.29.4,
    - mysql : 2.18.1,
    - sequelize: 6.24.0

3. Running Application

- Step 1:
```
cd app
npm install 
```
- Step 2:
```
cd ..
docker compose up --build
```

- Step 2:
```
cd app
npm start
```

# Design Architecture

![design architecture](/design_architecture.png)

4. List API

 - v.1.0.0
    - [check-eligible](/documentations/check-eligible.md), check eligible customer for transaction voucher
    - [validate-photo](/documentations/validate-photo.md), check validation photo for get voucher code

# Link Collection API
```
https://www.getpostman.com/collections/bd382b132c838628af10
```

