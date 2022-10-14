***Request And Response API Check Eligible***

- **Method** : GET

- **Header** : ```http://localhost:3000/checkEligible/```

- **Params** 

| Property | Mandatory | Description |
| ----------- | ----------- | ----------- |
|  |  | |


- **Response Success**

```
{
    "status": 200,
    "message": "Success to get voucher",
    "data": [
        {
            "customer_id": 1,
            "total_spent": "520.00",
            "status": "Get voucher"
        }
    ]
}
```

- **Response Customer Eligible Not Found**

```
{
    "status": 405,
    "message": "No eligible customers",
    "data": {}
}
```