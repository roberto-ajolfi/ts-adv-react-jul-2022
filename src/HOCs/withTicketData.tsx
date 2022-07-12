import React from "react";
import Ticket from "../models/Ticket";
import TicketService from "../services/TicketService";
import { getDisplayName } from "./withHeaderAndFooter";

export interface ITicketData {
    data: Ticket[];
}

export const withTicketData = <T extends ITicketData>(Component: React.ComponentType<T>) => {
    const WrappingComponent: React.FC<Omit<T, 'data'>> = 
        (props: Omit<T, 'data'>) => {
            const [tickets, setTickets] = React.useState<Ticket[]>([]);

            React.useEffect(() => {
                // data retrival ...(componentDidMount OR useEffect)
                const svc = new TicketService();
                svc.getAllTickets().then(
                    data => setTickets(data)
                );
            }, []);

            // inject data in Component ...
            return <Component { ... props as T } data={ tickets } />;
        };

    (WrappingComponent as any).displayName = `WithTicketData(${getDisplayName(Component)})`

    return WrappingComponent;
}