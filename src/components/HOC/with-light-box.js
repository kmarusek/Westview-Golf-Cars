import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const DEFAULT_STATE = {
  photoIndex: -1,
  isOpen: false,
  images: []
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

    setSrc = (images) => {
      this.setState({ images })
    }

    lightbox = {
      show: this.showImg,
      setSrc: this.setSrc,
      close: this.handleCancel,
    };

    render() {
      const { photoIndex, images, isOpen } = this.state;

      return (
        <>
          <Child {...this.props} lightbox={this.lightbox} />
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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
