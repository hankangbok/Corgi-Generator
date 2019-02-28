const pool = require('../../databasePool');
class CorgiTable {
  static storeCorgi(corgi) {
    const {birthdate, nickname, generationId } = corgi;
    

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO corgi(birthdate, nickname, "generationId") 
         VALUES($1,$2,$3) RETURNING id`, 
         [birthdate, nickname, generationId],
         (error, response) => {
           if (error) return reject(error);
           const corgiId = response.rows[0].id;
           resolve({corgiId});
         }
      )
    });
  }

}

module.exports = CorgiTable;