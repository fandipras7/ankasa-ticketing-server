const pool = require('../../config/db')

const airlanesModule = {
    getAirlanes: (data)=>{
        return pool.query('SELECT * FROM airlines LIMIT $1 OFFSET $2', [data.limit, data.offset])
    },
    detailAirlanes: (data) =>{
        return pool.query('SELECT * FROM airlines WHERE id = $1', [data])
    },
    newAirlanesWImg: (data) => {
        return pool.query('INSERT INTO airlines (id, name, image, is_active) VALUES($1, $2, $3, $4)',[data.id, data.name, data.img, data.is_active])
    },
    newAirlanesWOImg: (data) => {
        return pool.query('INSERT INTO airlines (id, name, is_active) VALUES($1, $2, $3)',[data.id, data.name, data.is_active])
    },
    activate: (data) => {
        return pool.query('UPDATE airlines SET is_active = 1 WHERE id = $1', [data])
    },
    deactivate: (data) => {
        return pool.query('UPDATE airlines SET is_active = 0 WHERE id = $1', [data])
    },
    updateWImg: (data) => {
        return  pool.query('UPDATE airlines SET name = COALESCE ($1, name), image = COALESCE ($2, image), updated_at = $3', [data.name, data.image, data.update_at])
    },
    updateWOImg: (data) => {
        return  pool.query('UPDATE airlines SET name = COALESCE ($1, name), updated_at = $2', [data.name, data.update_at])
    },
    deleteAirlanes: (data)=> {
        return pool.query('DELETE FROM airlines WHERE id = $1', [data])
    }
}

module.exports = airlanesModule