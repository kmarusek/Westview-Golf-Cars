import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const DEFAULT_STATE = {
  img: "",
  isOpen: false,
};

const LightboxHOCWrapper = (Child) => {
  class LightboxHOC extends Component {
    state = {
      ...DEFAULT_STATE,
    };

    showImg = (state, callback) => {
      this.setState({ isOpen: true, ...state }, () => {
        callback && callback(this.state);
      });
    };

    handleCancel = () => {
      this.setState({ isOpen: false });
    };

    lightbox = {
      show: this.showImg,
      close: this.handleCancel,
    };

    render() {
      const { img, isOpen } = this.state;
      return (
        <>
          <Child {...this.props} lightbox={this.lightbox} />
          {isOpen && (
            <Lightbox
              mainSrc={img}
              enableZoom={false}
              onCloseRequest={() => this.setState({ isOpen: false })}
              reactModalStyle={{ overlay: {zIndex: 3000} }}
            />
          )}
        </>
      );
    }
  }

  return LightboxHOC;
};

export default LightboxHOCWrapper;
