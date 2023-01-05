module.exports = (req, res, next) => { // next() sert à passer le relai au middleware suivant
    try {
        console.log('Logger')

        const winston = require('winston');

        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [
                //
                // - Write all logs with importance level of `error` or less to `error.log`
                // - Write all logs with importance level of `info` or less to `combined.log`
                //
                new winston.transports.File({filename: 'error.log', level: 'error'}),
                new winston.transports.File({filename: 'combined.log'}),
            ],
        });

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
        if (process.env.NODE_ENV !== 'production') {
            logger.add(new winston.transports.Console({
                format: winston.format.simple(),
            }));
        }

        let url = req.protocol + '://' + req.get('host') + req.originalUrl

        let mySelf = req.get('email');

        let date = new Date();

        let dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
            + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


        logger.info(dateString + " : " + url + " " + "call by : " + mySelf);


        next();
    } catch {
        res.status(501).json({message: 'Erreur au niveau du middleware : logger'})
    }
};
