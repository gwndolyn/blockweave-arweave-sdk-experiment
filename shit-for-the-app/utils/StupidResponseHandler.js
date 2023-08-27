let currDateTimeStr = new Date().toString();

export default class StupidResponseHandler {
  constructor() {
    //  shutup
  }

  success(res, data) {
    // Handle successful responses
    res.status(200).json({
      success: true,
      timestamp: currDateTimeStr,
      data,
    });
  }

  error(res, message) {
    // Handle error responses
    res.status(400).json({
      success: false,
      timestamp: currDateTimeStr,
      message,
    });
  }

  sendResponseAndLogShitToServer(req, res, data) {
    try {
      res.send(this.success(res, data))
    } catch (error) {
      res.send(this.error(res, {
        message: "error bozo",
        stacktrace: JSON.stringify(error),
      }))
    } finally {
      console.log(`\n[${currDateTimeStr}] Response Sent to ${()=>{
        try {
          return req.ip.split(":")[3]
        } catch (error) {
          return error
        }
      }}\n${JSON.stringify(data)}\n`)
    }
  }

}