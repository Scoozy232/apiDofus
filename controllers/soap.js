const soapRequest = require('easy-soap-request');//soap requeste

exports.getDollars = (req, res, next) => {
    console.log('Méthode soap dollars');

    const url = 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso';
    const sampleHeaders = {
        'Content-Type': 'text/xml;charset=UTF-8',
    };
    const xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
        "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n" +
        "  <soap:Body>\n" +
        "    <NumberToDollars xmlns=\"http://www.dataaccess.com/webservicesserver/\">\n" +
        "      <dNum>" + req.params.number + "</dNum>\n" +
        "    </NumberToDollars>\n" +
        "  </soap:Body>\n" +
        "</soap:Envelope>";

// usage of module
    (async () => {
        const {response} = await soapRequest({url: url, headers: sampleHeaders, xml: xml, timeout: 1000}); // Optional timeout parameter(milliseconds)
        const {headers, body, statusCode} = response;

        return res.status(statusCode).json({message: body});

    })();


}
