import React from "react";
import "./AsidePhoto.css";

const AsidePhoto = (props) => {
  return (
    <div>
      {props.albumsNames.map((album) => {
        return (
          <div
            className={`albumName ${album.id} ${
              album.id == props.curentAlbumId && "selected"
            }`}
            onClick={(event) => {
              props.choseCurentAlbum(album.id);
              props.onAlbumChange(album.id);
            }}
          >
            {album.name}
          </div>
        );
      })}
    </div>
  );
};
export default AsidePhoto;
