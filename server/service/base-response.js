class BaseResponse
{
    /**
     * 
     * @param {*} httpCode string http status code
     * @param {*} message Message you want the user to see
     * @param {*} data  you can only return an actual data object or null; this is intended to help the UI handle requests
     */

    constructor(httpCode,message,data)

    {
        
        this.httpCode = httpCode;
        this.message = message;
        this.data = data;
        this.timestamp = new Date().toLocaleDateString('en-US');
    }
    /**
     * Description: toObject function, part of the BaseResponse class
     * @returns new object literal with all of the BaseResponse fields (httpcode, message, data, timestamp)
     */
toObject()
{

return{
    'httpCode': this.httpCode,
    'message': this.message,
    'data': this.data,
    'timestamp': this.timestamp
}
}


}
module.exports = BaseResponse;