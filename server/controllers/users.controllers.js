const UserSchema = require('../models/user.model');

module.exports = {
    register: (req, res) => {
        UserSchema.create(req.body)
            .then(user => {
                res.join({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    }
}
