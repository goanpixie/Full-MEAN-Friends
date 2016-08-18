console.log('friends controller');

var Friend = mongoose.model('Friend')
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController() {
    this.index = function(req, res) {
        Friend.find({}, function(err, friends) {
            if (err) {
                console.log('Could not find friends')
            } else {
                res.json(friends)
            }
        })
    };

    this.create = function(req, res) {
        console.log(req);
        console.log("reached createUser in friends.js")
        var friend = Friend({ firstName: req.body.firstName, lastName: req.body.lastName, birthDate: req.body.birthDate })
        friend.save(function(err) {
            if (err) {
                console.log('Error')
            }
            res.json(friend)
        })
    };

    this.update = function(req, res) {
        //your code here
        res.json({ placeholder: 'update' });
    };
    this.delete = function(req, res) {
        //your code here
        res.json({ placeholder: 'delete' });
    };
    this.show = function(req, res) {
        //your code here
        res.json({ placeholder: 'show' });
    };
}

module.exports = new FriendsController();
