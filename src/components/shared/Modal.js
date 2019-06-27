import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

const portalRoot = document.getElementById('portal-root');

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      <Fragment>
        <div className="modal review-modal is-active " style={{ zIndex: '10000' }}>
          <div className="modal-background" />
          {React.cloneElement(children)}
        </div>
      </Fragment>,
      this.el,
    );
  }
}

Modal.propTypes = {
  active: propTypes.bool.isRequired,
  children: propTypes.element.isRequired,
};
