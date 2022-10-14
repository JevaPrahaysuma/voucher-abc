***Request And Response API Validate Photo***

- **Method** : GET

- **Header** : ```http://localhost:3000/validatePhoto/```

- **Params** 

| Property | Mandatory | Description |
| ----------- | ----------- | ----------- |
| cutomer_id | Yes | using check transaction voucher lockdown |
| image |  Yes | using check photo for image recognation |

- **Response Success Status Image False**

```
{
    "status": 200,
    "message": "Successfully data update",
    "data": {
        "status_image": false
    }
}
```
- **Response Success Status Image True**

```
{
    "status": 200,
    "message": "Successfully data update",
    "data": {
        "voucher_code": "BB001",
        "status_image": true
    }
}
```


- **Response Voucher Transaction Not Found**

```
{
    "status": 402,
    "message": "Voucher transaction not found",
    "data": {}
}
```