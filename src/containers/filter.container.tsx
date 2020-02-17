import FilterComponent from './../components/filter.component'
import { connect } from 'react-redux'
import * as filterAction from './../store/filter/filter.action'
import { Store } from '../store'

const mapStateToProps = (state: Store) => ({
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    setName: (name: string) => dispatch(filterAction.setName(name)),
    setMinAge: (minAge: number) => dispatch(filterAction.setMinAge(minAge)),
    setMaxAge: (maxAge: number) => dispatch(filterAction.setMaxAge(maxAge)),
    setGender: (gender: number) => dispatch(filterAction.setGender(gender)), 
    setToDefault: () => dispatch(filterAction.setDefaultValue()),
    find: (filterValues) => dispatch(filterAction.filterUserList(filterValues)),
})

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)
export default FilterContainer