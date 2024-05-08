import { connect } from 'react-redux';

import Link from '../components/Link';
import {setVisibilityFilterAC, VisibilityFilterState} from "../actions/actions";
import {Dispatch} from "redux";

const mapStateToProps = (state:VisibilityFilterState, ownProps:any) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch:Dispatch, ownProps:any) => ({
    onClick: () =>
        dispatch(setVisibilityFilterAC(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);