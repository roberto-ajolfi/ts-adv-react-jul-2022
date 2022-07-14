import React, { Component, PureComponent } from 'react'

export const Movie = (props: { title: string, releaseDate: string, memo: boolean }) => {
    console.log(`${props.memo ? "MovieMemo" : "Movie"} rendered.`);

    return (
        <div style={{ padding: "5px", border: `2px dashed ${props.memo ? "green" : "red"}`}}>
            <div>Movie Title: {props.title}</div>
            <div>Release Date: {props.releaseDate}</div>
        </div>
    )
}

export const MovieMemo = React.memo(Movie);

export class MovieCl extends Component<{ title: string, releaseDate: string }> {
    render(): JSX.Element {
        console.log("MovieCl rendered.");
        return(
            <div style={{ padding: "5px", border: "2px dashed navy"}}>
            <div>Movie Title: {this.props.title}</div>
            <div>Release Date: {this.props.releaseDate}</div>
        </div>);
    }
}

export class PureMovie extends PureComponent<{ title: string, releaseDate: string }> {
    render(): JSX.Element {
        console.log("PureMovie rendered.");
        return(
            <div style={{ padding: "5px", border: "2px dashed orange"}}>
            <div>Movie Title: {this.props.title}</div>
            <div>Release Date: {this.props.releaseDate}</div>
        </div>);
    }
}