const res = require("express/lib/response")

const status200 = (res,data, message = 'Request Process successfuly')=>{
    res.status(200)
    return res.send({
        status:200,
        data,
        isError:false,
        error:null,
        message
    })
}

const status400 = (res, error,message="Something went worng while processing the request") => {
    res.status(400)
    return res.send({
        status:400,
        data:null,
        isError:true,
        error,
        message
    })
}
const status501 = (res, error) => {
    res.status(501)
    return res.send({
        status:501,
        data:null,
        isError:true,
        error: 'Internal Server Error',
        message:'Internal Server Error'
    })
}

module.exports = {status200, status400, status501}