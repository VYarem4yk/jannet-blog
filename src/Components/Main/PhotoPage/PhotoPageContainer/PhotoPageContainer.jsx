import React, { Component } from "react";
import {
  setAlbumsNamesAC,
  choseCurentAlbumAC,
  setCurentAlbumPhotosAC,
} from "../../../../redux/reducers/photoReducer";
import { connect } from "react-redux";
import * as axios from "axios";
import AsidePhoto from "../AsidePhoto/AsidePhoto";
import "./PhotoPageContainer.css";
import SimpleSlider from "../../PhotoPage/ArticlePhoto/Slider";

let mapStateToProps = (state) => {
  return {
    curentAlbum: state.photoPage.curentAlbum,
    albumsNames: state.photoPage.albumsNames,
    curentAlbumId: state.photoPage.curentAlbumId,
    curentAlbumPhotos: state.photoPage.curentAlbumPhotos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setAlbumsNames: (albumsNames) => {
      dispatch(setAlbumsNamesAC(albumsNames));
    },
    choseCurentAlbum: (curentAlbumId) => {
      dispatch(choseCurentAlbumAC(curentAlbumId));
    },
    setCurentAlbumPhotos: (curentAlbumPhotos) => {
      dispatch(setCurentAlbumPhotosAC(curentAlbumPhotos));
    },
  };
};

class TextsPageContainer extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:5000/v1/albums?limit=0&offset=0")
      .then((response) => {
        this.props.setAlbumsNames(response.data);
      });
    }
    onAlbumChange = (curentAlbumId) => {
      axios
        .get(
          `http://localhost:5000/v1/albums/${curentAlbumId}/photos?limit=0&offset=0`
        )
        .then((response) => {
          this.props.setCurentAlbumPhotos(response.data);
        });
    };
  

  render() {
    return (
      <div className="photoPageWrapper">
        <AsidePhoto
          albumsNames={this.props.albumsNames}
          choseCurentAlbum={this.props.choseCurentAlbum}
          curentAlbumId={this.props.curentAlbumId}
          onAlbumChange={this.onAlbumChange}
        />
        <SimpleSlider
          albumsNames={this.props.albumsNames}
          curentAlbumPhotos={this.props.curentAlbumPhotos}
          curentAlbum={this.props.curentAlbum}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextsPageContainer);
