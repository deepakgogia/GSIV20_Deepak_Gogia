import React, { Component } from 'react';
class Search extends Component {
    state = {
        inputSearch: '',
    }

    txtChange = ({ target: { value } }) => {
        this.fetchData(value)
    }

    async fetchData(value) {
        if (value) {
            // call api
        }
        else {
            //call default api
        }
        this.setState({ inputSearch: value });
    }

    render() {
        const { inputSearch } = this.state;
        return (<>
            <h3 style={{ paddingLeft: "30px" }}>GSIV Test</h3>
            <div style={{ paddingTop: "5px", paddingLeft: "30px" }} >
                <input
                    value={inputSearch}
                    onChange={this.txtChange}
                    placeholder="Search for a movie"
                    className="inputSearch"
                />

            </div>
        </>);
    }
}

export default Search;