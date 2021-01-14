import { connect } from 'react-redux';
import Navbar from '../components/Header/Navbar';

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);