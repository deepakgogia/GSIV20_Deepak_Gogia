import React, { Component } from 'react';
import '../../styles/showDetails.css';
import { ShowImg, ShowName, ShowOverview } from '../ShowDetailsContainer';
import { getMovieDetails, getCreditsDetails } from './../../redux/action';
import { connect } from 'react-redux';
import { Home } from './Home';
class ShowDetails extends Component {

    async componentDidMount() {
        const { location: { search }, match: { params: { id } } } = this.props;
        await this.props.dispatch(getMovieDetails(id, search.replace('?', '')));
        await this.props.dispatch(getCreditsDetails(search.split('&id=')[1]));

    }

    clickEvent = () => {
        this.props.history.push('')
    }
    render() {
        const { results, crew, cast } = this.props;
        const data = results && results[Object.keys(results)[0]];
        return (
            <>
                <h3 style={{ paddingLeft: "30px", marginTop: '5px', float: 'left' }}>Movie Details</h3>
                <div style={{ paddingTop: "5px", paddingLeft: "30px", marginTop: '10px' }} >
                    <Home clickEvent={this.clickEvent} />
                    {data &&
                        <div className='itemShowMainDiv' >
                            <ShowImg poster_path={data.poster_path} />
                            <div className='itemOtherDiv'>
                                {<ShowName name={data.original_title} rating={data.vote_average} />}

                                <br></br>
                                {data.release_date && data.release_date.split('-')[0] + '|'} {crew && crew.find(z => (z.department === 'Directing')).name}
                                <br></br>
                                {cast && 'Cast: ' + cast.map(z => ' ' + z.name)}
                                <div className='extraDiv'></div>
                                {data.overview && <ShowOverview overview={data.overview} />}
                            </div>
                        </div>
                    }
                </div>
                <h3 className="headingLogo"></h3>
            </>);
    }
}

const mapStateToProps = (state, props) => {
    return { ...state, ...props }
}
export default connect(mapStateToProps)(ShowDetails);