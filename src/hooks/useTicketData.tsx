import { useEffect, useState } from "react";
import Ticket from "../models/Ticket";
import TicketService from "../services/TicketService";

const useTicketData = () : [ Ticket[], boolean ] => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        // data retrival
        const svc = new TicketService();
        svc.getAllTickets().then(
            data => {
                setTickets(data);
                setLoading(false);
            });
    }, []);

    return [
        tickets,
        loading
    ];
}

export default useTicketData;