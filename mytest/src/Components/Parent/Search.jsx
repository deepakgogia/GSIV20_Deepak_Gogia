import React, { Component } from 'react';
import '../../styles/searchStyle.css';
import { connect } from 'react-redux';
import { searchMoviesData, getUpcomingMoviesData } from '../../redux/action';
import { ShowResults } from './ShowResults';
import { Home } from './Home';

class Search extends Component {
    state = {
        inputSearch: '',
    }

    componentDidMount() {
        this.getData();
    }

    txtChange = ({ target: { value } }) => {
        this.fetchData(value)
    }

    async fetchData(value) {
        if (value) {
            await this.props.dispatch(searchMoviesData(value));
        }
        else {
            this.getData();
        }
        this.setState({ inputSearch: value });
    }

    async getData() {
        await this.props.dispatch(getUpcomingMoviesData());
    }

    clickEvent = () => {
        window.location.reload();
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
                <Home clickEvent={this.clickEvent} />
                {results && <ShowResults data={this.props}></ShowResults>}
            </div>
        </>);
    }
}

const mapStateToProps = (state, props) => {
    return { ...state, ...props };
}

export default connect(mapStateToProps)(Search);