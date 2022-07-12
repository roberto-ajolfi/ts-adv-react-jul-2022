import React from 'react'
import { TicketList } from '../components/TicketList';
import { TicketTable } from '../components/TicketTable';
import { withHeaderAndFooter, withHeaderAndFooterClass } from '../HOCs/withHeaderAndFooter';
import { withTicketData } from '../HOCs/withTicketData';

const Cavia: React.FC<{ name: string }> = 
    (props: { name: string }) => (<h2>Sono la cavia {props.name}...</h2>);

const CaviaImballata = withHeaderAndFooter<{ name: string }>(Cavia);
const CaviaImballataInClasse = withHeaderAndFooterClass<{ name: string }>(Cavia);

const FullTicketList = withTicketData(TicketList);
const FullTicketTable = withHeaderAndFooterClass(withTicketData(TicketTable));

export const AppHOC = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <Cavia name="Pippo" />
            </div>
            <div className='col-6'>
                {/* <CaviaImballata name="Pippo Imballato" /> */}
                <CaviaImballataInClasse name="Pippo Imballato in classe" />
            </div>
        </div>
        <div className='row'><div className='col-12'>&nbsp;</div></div>
        <div className='row'>
            <div className='col-6'>
                <FullTicketList title="Tickets" />
            </div>
            <div className='col-6'>
                <FullTicketTable title="Tickets (Full Data)" />
            </div>
        </div>
    </div>
  )
}