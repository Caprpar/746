const ticketsServices = require("../services/ticketsServices");

exports.getTickets = async (req, res) => {
  try {
    const tickets = await ticketsServices.getTickets();
    res.status(200).json({ tickets });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = ticketsServices.getTicket(id);
    res.status(200).json({ ticket });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTicket = async (req, res) => {
  try {
    const { partySizeId, stadiumId } = req.body;
    const newTicket = await ticketsServices.createTicket(partySizeId, stadiumId);
    res.status(200).json({ newTicket });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTicket = await ticketsServices.deleteTicket(id);
    if (!deletedTicket) {
      return res.status(401).json({ error: `There is no ticket with id: ${id}` });
    }
    res.status(200).json({ deletedTicket });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
