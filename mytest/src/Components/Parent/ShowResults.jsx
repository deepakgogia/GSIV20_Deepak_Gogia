import React, { Component } from 'react';
import '../../styles/showResults.css';
export class ShowResults extends Component {
    clickEvent = () => {

    }

    render() {
        const { results } = this.props.data;
        return (
            <>
                <h3 className="headingLogo"></h3>

                {results && results.map((z, i) =>
                    <div className="movieShowMainDiv" key={i}
                    >

                        <div className="moviePosterImg">
                            <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + z.poster_path} alt="Image Not Found..."></img>
                        </div>

                    </div>
                )
                }
            </>
        );
    }
}