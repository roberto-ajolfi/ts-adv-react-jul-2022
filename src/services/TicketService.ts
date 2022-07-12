import Ticket from "../models/Ticket"

export default class TicketService {
    private readonly data: Ticket[] = [
        new Ticket(1, "Login failed", "O365"),
        new Ticket(2, "Missing Word app", "System"),
        new Ticket(3, "Unhandled Exception in app", "Development"),
    ];

    public getAllTickets = (): Promise<Ticket[]> => {
        return new Promise<Ticket[]>(resolve => {
            setTimeout(() => resolve(this.data), 1000);
        });
    }
}