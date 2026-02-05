const auth = (req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();

};

export default auth;