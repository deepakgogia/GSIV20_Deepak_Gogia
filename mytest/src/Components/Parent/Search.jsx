import React, { Component } from 'react';
import '../../styles/searchStyle.css';
import { connect } from 'react-redux';
import { searchMoviesData, getUpcomingMoviesData } from '../../redux/action';
import { ShowResults } from './ShowResults';
class Search extends Component {
    state = {
        inputSearch: '',
    }

    async componentDidMount() {
        await this.props.dispatch(getUpcomingMoviesData());
    }

    txtChange = ({ target: { value } }) => {
        this.fetchData(value)
    }

    async fetchData(value) {
        if (value) {
            await this.props.dispatch(searchMoviesData(value));
        }
        else {
            await this.props.dispatch(getUpcomingMoviesData());
        }
        this.setState({ inputSearch: value });
    }

    render() {
        const { inputSearch } = this.state;
        const { results } = this.props;
        return (<>
            <h3 style={{ paddingLeft: "30px" }}>GSIV Test</h3>
            <div style={{ paddingTop: "5px", paddingLeft: "30px" }} >
                <input
                    value={inputSearch}
                    onChange={this.txtChange}
                    placeholder="Search for a movie"
                    className="inputSearch"
                />
                {results && <ShowResults data={this.props}></ShowResults>}
            </div>
        </>);
    }
}

const mapStateToProps = (state, props) => {
    return { ...state, ...props };
}

export default connect(mapStateToProps)(Search);