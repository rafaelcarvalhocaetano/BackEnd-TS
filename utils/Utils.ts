class Utils {

    sendReponse = (res, statusCode, data) => {
        res.status(statusCode).json({result: data});
    }
}

export default new Utils();