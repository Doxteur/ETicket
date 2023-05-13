import { Router as router } from "express";
import {
  getTickets,
  addTicket,
  assignTicket,
  changeStatus,
  deleteTicket
} from "../Controllers/TicketController.js";

export default router()
  .get("/", async (req, res) => {
    const tickets = await getTickets(req, res);

    res.json(tickets);
  })
  .post("/", async (req, res) => {
    const ticket = await addTicket(req, res);
    res.json(ticket);
  }).delete("/", async (req, res) => {
    const status = await deleteTicket(req, res);
    res.json(status);
  })
  .post("/assign", async (req, res) => {
    const ticket = await assignTicket(req, res);
    res.json(ticket);
  })
  .post("/status", async (req, res) => {
    const status = await changeStatus(req, res);
    res.json(status);
  })


