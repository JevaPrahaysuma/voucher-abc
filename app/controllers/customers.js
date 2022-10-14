// Import model Product
import Response from "../models/response.js";
import VoucherTransaction from "../models/voucher_transaction.js"
import DB from "../config/db.js";
import moment from "moment";
import { Op } from "sequelize";


// Get semua product
export const checkEligible = async (req, res) => {
    let customer
    try {
        customer = await DB.query(`SELECT pt.customer_id, sum(pt.total_spent) as total_spent FROM customers c 
        left join purchase_transaction pt on c.id = pt.customer_id
        where DATEDIFF(SYSDATE(), pt.transaction_at) <= 30
        group by pt.customer_id
        HAVING sum(pt.total_spent)  >= 100 and count(pt.id) >= 3
        `, { type: DB.QueryTypes.SELECT, plain: false, });

        if (customer.length != 0) {
             // set status get voucher
            await Promise.all(customer.map(async (temp) => {
                let request = {
                    customer_id: temp.customer_id,
                    expired_at: moment().add(10, 'm').format('YYYY-MM-DD HH:mm:ss')
                }
                let result = ''
                const aa = await updateVoucherTransactionUnlock(temp.customer_id, request)
                    .then(r => {

                        if (r != 0) {
                            result = "Get voucher"
                        } else {
                            result = "Can't get voucher"
                        }
                        temp["status"] = result
                    })
                //temp["status"] = result


            }))

            Response.status = 200
            Response.message = 'Success to get voucher'
            Response.data = customer
            res.send(Response);
       
        } else {
            Response.status = 405
            Response.message = 'No eligible customers'
            res.send(Response);
        }
    } catch (err) {
        Response.status = 500
        Response.message = err
        res.send(Response);
    }
       
}

export const validatePhoto = async (req, res) => {
    //faking process image recognation
    let r = true
    if (Math.random() < 0.9) {
        r = true
    }
    if ((req.body.cutomer_id == undefined || req.body.cutomer_id == null) || (req.body.image == undefined || req.body.image == null)) {
        Response.status = 403
        Response.message = 'cutomer_id and image is mandatory!'
        Response.data = {}
        res.send(Response)
    } else {
        // get expired 
        let expired
        let temp = {}
        try {
            expired = await DB.query(`select vt.expired_at, vt.voucher_code from voucher_transactions vt 
        where vt.customer_id = `+ req.body.cutomer_id + ` and vt.status != 'T'`, { type: DB.QueryTypes.SELECT, plain: false, });
            if (expired.length != 0) {
                if (r === true && expired[0].expired_at >= moment()) {
                    temp = {
                        status: 'T'
                    }
                    updateVoucherTransactionLock(req.body.cutomer_id, temp).then(r => {
                        let result = {
                            voucher_code: expired[0].voucher_code,
                            status_image: true
                        }
                        Response.status = 200
                        Response.message = 'Successfully data update'
                        Response.data = result
                        res.send(Response);
                    })
                } else {
                    temp = {
                        customer_id: null,
                        expired_at: null
                    }

                    updateVoucherTransactionLock(req.body.cutomer_id, temp).then(r => {
                        let result = {
                            status_image: false
                        }
                        Response.status = 200
                        Response.message = 'Successfully data update'
                        Response.data = result
                        res.send(Response);
                    })
                }
            } else {
                Response.status = 402
                Response.message = 'Voucher transaction not found'
                Response.data = {}
                res.send(Response);
            }

        } catch (err) {
            Response.status = 500
            Response.message = err
            res.send(Response);
        }
    }


}

const updateVoucherTransactionUnlock = async (id, req) => {
    try {
        const voucher = await VoucherTransaction.update(
            req
            , {
                where: {
                    status: 'F',
                    [Op.or]: [
                        {
                            customer_id:
                            {
                                [Op.notLike]: id
                            },
                        },
                        { customer_id: null }
                    ],
                    expired_at: null

                }
        });
        return voucher[0]
    } catch (err) {
        Response.status = 500
        Response.message = err
        res.send(Response);
    }
}
const updateVoucherTransactionLock = async (id, req) => {
    try {
        const voucher = await VoucherTransaction.update(
            req, {
                where: {
                    // status: 'F',
                    customer_id: id,

                }
        });
        return voucher[0]
    } catch (err) {
        Response.status = 500
        Response.message = err
        res.send(Response);
    }
}
