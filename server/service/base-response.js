/*
Title: baseresponse
 * Author: Erica Perry
 * Date:3/25/21
 * Description: baseresponse
 */


class BaseResponse
{
    /**
     * 
     * @param {*} httpCode string http status code
     * @param {*} What you what the users to see
     * @param {*} data you can only return an actual data object or null; this is intended to help the UI handle requests
     */

    constructor(httpCode, message, data, timestamp)

    {
        this.httpCode = httpCode;
        this.message = message;
        this.data = data;
        this.timestamp = timestamp;
    }
    /**
     * Description: toObject function, part of the BaseResponse class
     * @returns new object literal with all of the BaseResponse fields (httpcode, message, data, timestamp)
     */
toObject(){
return{

    'httpCode': this.httpCode,
    'message': this.message,
    'data': this.data,
    'timestamp': new Date().toLocaleDateString('en-US')
    }
  }
}

module.exports = BaseResponse;
