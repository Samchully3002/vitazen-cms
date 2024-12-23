exports.requireAuth = (req, res, next) => {
  const token = req.cookies.auth_token;
    if (!token) {
      return res.redirect('/login');
    }
    next();
  };
