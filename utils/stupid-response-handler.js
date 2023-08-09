export default class StupidResponseHandler {
  constructor() {
    //  shutup
  }

  success(res, data) {
    // Handle successful responses
    res.status(200).json({
      status: 'success',
      data,
    });
  }

  error(res, message) {
    // Handle error responses
    res.status(400).json({
      status: 'error',
      message,
    });
  }

  sendResponseAndLogShitToServer(req, res, data) {
    let throwMsg = `${this.sendResponseAndLogShitToServer}'s 'res' passed param value was poorly pass, the garbage passed does not allow .send() to occur`
    try {
      res.send(data)
    } catch (error) {
      console.log(error)
      throw throwMsg
    } finally {
      console.log(`[${new Date().toString()}] Response Sent to ${req.ip.split(":")[3]}\nwhere data: \n${JSON.stringify(data)}\n`)
    }
  }

}