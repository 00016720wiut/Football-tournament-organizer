const fs = require('fs')

// access global mock db file
const matches = require('../../data/thedatabase.json')

// write service method implementations
const match_service = {
    getAll() {
        return matches
    },
    create(req, res) {
        let new_id = genRandId(4)
                
        const match = req.body

        const new_match = {
            id: new_id,
            match: match
        }

        matches.push(new_match)
        
        writeToFile(matches)
        
        return new_match
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.thedatabase,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = '0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = match_service