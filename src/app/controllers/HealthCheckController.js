const moment = require('moment');
class HealthCheckController {

    index(_, res){
        const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            date: moment()
        };
        try {
            res.status(200).json(healthcheck);
        } catch (error) {
            healthcheck.message = error;
            res.status(503).json();
        }
    }

}

module.exports =  new HealthCheckController()