const connectionMySQL = require("../connectionMySQL");

function getTickets() {
  return new Promise((resolve, reject) => {
    let sql = `
      SELECT bT.id, pS.amount as amount_of_people, s.city as stadium
      from bookedTickets bT
      join partySize pS on bT.partySizeId = pS.id
      join stadium s on bT.stadiumId = s.id;
    `;
    connectionMySQL.query(sql, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function getTicket(id) {
  return new Promise((resolve, reject) => {
    let sql = `
      SELECT bT.id, pS.amount as amount_of_people, s.city as stadium
      from bookedTickets bT
      join partySize pS on bT.partySizeId = pS.id
      join stadium s on bT.stadiumId = s.id
      where bT.id = ?;
    `;
    const params = [id];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function createTicket(partySizeId, stadiumId) {
  return new Promise((resolve, reject) => {
    let sql = `
    INSERT INTO bookedTickets(partySizeId, stadiumId)
    VALUES (?, ?);
    `;
    const params = [partySizeId, stadiumId];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function deleteTicket(id) {
  return new Promise((resolve, reject) => {
    let sql = `
    delete from bookedTickets where id = ?;
    `;
    const params = [id];
    connectionMySQL.query(sql, params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

module.exports = { getTickets, getTicket, createTicket, deleteTicket };
