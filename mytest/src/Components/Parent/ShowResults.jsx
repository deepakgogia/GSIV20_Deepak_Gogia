import React, { Component } from 'react';
import '../../styles/showResults.css';
export class ShowResults extends Component {
    clickEvent = (val, id) => {
        const { data: { history } } = this.props;
        history.push(history.location.pathname + "movie?query=" + val + '&id=' + id);
    }

    render() {
        const { results } = this.props.data;
        return (
            <>
                <h3 className="headingLogo"></h3>

                {results && results.map((z, i) =>
                    <div className="movieShowMainDiv" key={i}
                        onClick={() => this.clickEvent(z.original_title, z.id)}>

                        <div className="moviePosterImg">
                            <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + z.poster_path} alt="Image Not Found..."></img>
                        </div>

                        <div style={{ float: 'left', display: 'block', width: '160px' }}>
                            <h5 className="movieTitle">{z.original_title}</h5>
                        </div>

                        <div style={{ float: 'right', display: 'block' }}>
                            <span >{z.vote_average}</span>
                        </div>

                        <div style={{ fontSize: '9px', display: 'block', float: 'left', height: '50px' }}>{z.overview.substring(0, 100)}</div>
                    </div>
                )
                }
            </>
        );
    }
}