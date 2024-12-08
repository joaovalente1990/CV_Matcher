exports.getCVSByUser = (req, res, next) => {
    
    const userId = req.params.userId;

    User.findById(userId)
      .then(user => {
        return user.getCVs();
      })
      .catch(err => console.log(err));
  };