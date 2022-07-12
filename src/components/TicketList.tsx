import React from 'react'
import Ticket from '../models/Ticket';

export interface ITicketListProps {
    title: string;
    data: Ticket[];
}

export const TicketList: React.FC<ITicketListProps> = (props) => {
    const tickets = props.data.map((item: Ticket) => 
        (<li key={item.id}>{item.title}</li>));

    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {tickets}
            </ul>
        </div>
    )
}
