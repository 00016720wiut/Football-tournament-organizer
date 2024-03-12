const match_service = require('../../../services/match')

const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_edit', { mode: 'Add' });
    },
    edit: async (req, res) =>{
        const matchData = await match_service.getById(req.params.id);
        res.render('home/add_edit', { mode: 'edit', matchData: matchData });
    }
};
  
module.exports = home_controller;

