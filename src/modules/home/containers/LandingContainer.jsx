import * as actions from "modules/home/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import LandingComponent from "../components/LandingComponent"

const LandingContainer = (props) => <LandingComponent {...props} />

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer)