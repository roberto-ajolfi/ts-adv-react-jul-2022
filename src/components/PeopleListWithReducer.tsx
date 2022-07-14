import React, { useReducer } from 'react'

export interface Person {
    name: string;
    alive: boolean;
}

const people: Person[] = [
    { name: "Luigi", alive: true },
    { name: "Mario", alive: true },
    { name: "Peach", alive: false },
    { name: "Yoshi", alive: true }
];

// ammazzare / resuscitare (ACTION)
enum ActionType { DIE = "die", REVIVE = "revive" }

interface Die {
    type: ActionType.DIE,
    payload: string;
}

interface Revive {
    type: ActionType.REVIVE,
    payload: string;
}

type PersonAction = Die | Revive;

// PURE FUNCTION (REDUCER)
const peopleReducer = 
        (currentState: Person[], action: PersonAction): Person[] => {
    switch(action.type) {
        case ActionType.DIE:
            return people.map(p => {
                if(p.name === action.payload)
                    p.alive = false;
                return p;
            });
            break;
        case ActionType.REVIVE:
            return people.map(p => {
                if(p.name === action.payload)
                    p.alive = true;
                return p;
            });
            break;
        default:
            return currentState;
    }
}

export const PeopleListWithReducer = () => {
    const [state, dispatch] = useReducer(peopleReducer, people);

    const toggleLife = (p: Person) => {
        p.alive ? 
            dispatch({ type: ActionType.DIE, payload: p.name }) :
            dispatch({ type: ActionType.REVIVE, payload: p.name });
    };

    const data = state.map((p: Person) => (
        <tr key={p.name}>
            <td>{p.name}</td>
            <td>{p.alive ? ":)" : ":("}</td>
            <td><button onClick={() => toggleLife(p)}>Toggle life</button></td>
        </tr>
    ));

    return (
        <table className='table table-stripped'>
            <thead>
                <th>Nome</th>
                <th>Vivo?</th>
                <th>&nbsp;</th>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table>
    );
}
