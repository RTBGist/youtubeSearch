import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsAuth = (state) => {
  return {
    auth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if(!this.props.auth) return <Redirect to={"/login"}/>

      return (
        <Component {...this.props} />
      )
    }
  }

const RedirectComponentContainer = connect(mapStateToPropsAuth)(RedirectComponent)

return RedirectComponentContainer;
}

