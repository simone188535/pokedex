import React from 'react';
import { connect } from "react-redux";
import { fetchDetails } from '../actions/index';

// import { Navbar, InputGroup, FormControl } from 'react-bootstrap';

const Details = (props) => {

    const testing = () => {
        // console.log(match.params.name);
        // console.log(props);
        props.fetchDetails(props.match.params.name);
    }

   
        return (
            <div>
                <h1>Hello!</h1>
                <div>{testing()}</div>
            </div>

        );
   
}
const mapDispatchToProps = (dispatch) => ({
    fetchDetails: (payload) => dispatch(fetchDetails(payload))
});
// const mapStateToProps = (state) => {
//     // console.log('state',state);
//     return { listItems: state.DisplayListReducer.listItems };

// };

export default connect(
    null,
    mapDispatchToProps,
)(Details);
