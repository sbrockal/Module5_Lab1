function loggerMiddleware(req,res,next) {
    console.log('Middleware executed');
    next();
};
module.exports = loggerMiddleware;