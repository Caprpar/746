const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/ticketsController");

router.get("/api/tickets", ticketsController.getTickets);
router.get("/api/tickets/:id", ticketsController.getTicket);
router.post("/api/tickets", ticketsController.createTicket);
router.delete("/api/tickets/:id", ticketsController.deleteTicket);

module.exports = router;
