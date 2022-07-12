import React from 'react'
import Ticket from '../models/Ticket';

export interface ITicketTableProps {
    title: string;
    data: Ticket[];
}

export const TicketTable: React.FC<ITicketTableProps> = (props) => {
    const tickets = props.data.map((item: Ticket) => 
        (<tr key={item.id}><td>{item.id}</td><td>{item.title}</td><td>{item.category}</td></tr>));

    return (
        <div>
            <h3>{props.title}</h3>
            <table className='table table-striped'>
                <thead>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Category</td>
                </thead>
                <tbody>
                    {tickets}
                </tbody>
            </table>
        </div>
    )
}
