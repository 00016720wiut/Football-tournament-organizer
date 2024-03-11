const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_edit');
    },
    update: async (req, res) =>{
        res.render('home/add_edit');
    }
};
  
module.exports = home_controller;
