import React, { FormEvent, useEffect, useState } from 'react'
import { Movie, MovieCl, MovieMemo, PureMovie } from '../components/Movie'

export const AppMemo = () => {
    const [_, setToggle] = useState(true);
    const [title, setTitle] = useState("The Two Towers");

    const [newTitle, setNewTitle] = useState("");

    const handleNewTitle = (evt: any) => {
        setNewTitle(evt.target.value);
    };

    const save = (evt: any) => {
        evt.preventDefault();
        setTitle(newTitle);
    };

    useEffect(() => {
        const id = setInterval(() => setToggle(t => !t), 3000);
        return () => clearInterval(id)
    }, [])
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <Movie title={title} releaseDate="23-Dic-2006" memo={false} />  {/* FUNC */}
            </div>
            <div className='col-6'>
                <MovieMemo title={title} releaseDate="23-Dic-2006" memo={true}  />  {/* FUNC */}
            </div>
        </div>
        <div className='row'><div className='col-12'>&nbsp;</div></div>
        <div className='row'>
            <div className='col-6'>
                <MovieCl title={title} releaseDate="23-Dic-2006" />  {/* CLASS */}
            </div>
            <div className='col-6'>
                <PureMovie title={title} releaseDate="23-Dic-2006" />  {/* CLASS */}
            </div>
        </div>
        <div className='row'><div className='col-12'>&nbsp;</div></div>
        <div className='row'>
            <div className='col-12'>
                <input style={{ width: "80%"}} type="text" value={newTitle} onChange={handleNewTitle} />&nbsp;
                <button className='btn btn-danger' onClick={save}>Save New Title</button>
            </div>
        </div>
    </div>
  )
}
