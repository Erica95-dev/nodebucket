/*
Title: Nodebucket
Author: Erica Perry
Date:03/20/21
Description: base-response
*/

class BaseResponse{
    
    /* the messages I have created */

    constructor(httpCode,message,data)

    {
        this.httpCode = httpCode;
        this.message = message;
        this.data = data;
        this.timestamp = new Date().toLocalDateString('en-US');
    }
toObject()
{
/* output for my constructors*/
return{
    'httpCode': this.httpCode,
    'message': this.message,
    'data': this.data,
    'timestamp': this.timestamp
}
}


}
module.exports = BaseResponse;
