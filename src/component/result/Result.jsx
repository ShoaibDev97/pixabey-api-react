import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
class Result extends Component {
  state = {
    open: false,
    currentImg: "",
  };

  handlerOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };
  handlerClose = (img) => {
    this.setState({ open: false, currentImg: img });
  };

  render() {
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map((img) => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  By <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handlerOpen(img.largeImageURL)}>
                  <ZoomIn color="white"></ZoomIn>
                </IconButton>
              }
            >
              <img src={img.largeImageURL} />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handlerClose} />,
    ];
    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handlerClose}
        >
          <img src={this.state.currentImg} style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}
Result.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Result;
