function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}

//Writing this function will allow us to reuse it in multiple places, and one way you can use it is like this:
//someRouter.post("/some/route", requireUser, async (req, res, next) => {});

module.exports = {
  requireUser,
};
