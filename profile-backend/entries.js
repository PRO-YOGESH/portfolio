const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('profile-database.json')
const db = low(adapter)
db.defaults({ entries: [] }).write()

function putEntry(entry) {
    db.get('entries').push(entry).write()

// TODO: store it locally
}

function getEntries() {
    return db.get('entries').value()
    
}

module.exports = {
    putEntry,
    getEntries,
}
