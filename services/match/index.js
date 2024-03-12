const fs = require('fs')

const matches = require(global.thedatabase)

// writing service method implementations
const match_service = {
    getAll() {
        return matches
    },
    getById(id) {
        return matches.find(t => t.id == id)
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
    },
    edit(id, editData){
        const matchIndex = matches.findIndex(t => t.id == id)

        if (matchIndex === -1) {
            return null
        }

        matches[matchIndex].match = { ...matches[matchIndex].match, ...editData }

        writeToFile(matches)

        return matches[matchIndex]
    },
    delete(id) {
        const index = matches.findIndex(u => u.id == id)
        matches.splice(index, 1)    
        writeToFile(matches)
    }
}

// creating a function for overwriting the db file Editd db content
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

// generating random id inspired by uuid
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

