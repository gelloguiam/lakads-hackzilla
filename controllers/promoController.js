exports.add = (req, res, next) => {
    // var body = JSON.parse(req.body);
    console.log(req.body);
    res.send('Export.add');
};


exports.edit = (req, res, next) => {

    let id;

    if(req.params.id) {
        id = req.params.id
    }
    res.send(`Export.put ${id}`);
};


exports.find = (req, res, next) => {
    res.send('Export.find');

};


exports.findOne = (req, res, next) => {
    res.send('Export.add');
};
