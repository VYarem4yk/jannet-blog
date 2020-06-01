let initialState = {
  curentAlbum: [],
  curentAlbumPhotos: [],
  curentAlbumId: "24",
  albumsNames: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS_NAMES: {
      return {
        ...state,
        albumsNames: action.albumsNames,
      };
    }
    case CHOSE_CURENT_ALBUM: {
      return {
        ...state,
        curentAlbumId: action.curentAlbumId,
      };
    }
    case SET_CURENT_ALBUM_PHOTOS: {
      debugger;
      return {
        ...state,
        curentAlbumPhotos: action.curentAlbumPhotos,
      };
    }
    default:
      return state;
  }
};

const SET_ALBUMS_NAMES = "SET_ALBUMS_NAMES";
const CHOSE_CURENT_ALBUM = "CHOSE_CURENT_ALBUM";
const SET_CURENT_ALBUM_PHOTOS = "SET_CURENT_ALBUM_PHOTOS";

export const setAlbumsNamesAC = (albumsNames) => ({
  type: SET_ALBUMS_NAMES,
  albumsNames: albumsNames,
});
export const choseCurentAlbumAC = (curentAlbumId) => ({
  type: CHOSE_CURENT_ALBUM,
  curentAlbumId: curentAlbumId,
});
export const setCurentAlbumPhotosAC = (curentAlbumPhotos) => ({
  type: SET_CURENT_ALBUM_PHOTOS,
  curentAlbumPhotos: curentAlbumPhotos,
});
export default photoReducer;
