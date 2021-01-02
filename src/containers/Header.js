import { connect } from 'react-redux'
import Header from '../components/Pages/List/TDList/Header'
import { addTodo } from '../actions'

export default connect(null, { addTodo })(Header)
