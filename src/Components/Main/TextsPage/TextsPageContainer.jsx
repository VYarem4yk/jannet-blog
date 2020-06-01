import {
  showTextAC,
  setTextsNamesAC,
  selectTextAC,
} from "../../../redux/reducers/textsReducer";
import { connect } from "react-redux";
import ArticleText from "./ArticleText/ArticleText";
import AsideText from "./AsideText/AsideText";
import React, { Component } from "react";
import * as axios from "axios";
import "./TextPageContainer.css";
let mapStateToProps = (state) => {
  return {
    curentText: state.textsPage.curentText,
    curentTextId: state.textsPage.curentTextId,
    textsNames: state.textsPage.textsNames,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    showText: (curentText) => {
      dispatch(showTextAC(curentText));
    },
    selectText: (curentTextId) => {
      dispatch(selectTextAC(curentTextId));
    },
    setTextsNames: (textsNames) => {
      dispatch(setTextsNamesAC(textsNames));
    },
  };
};

class TextsPageContainer extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:5000/v1/articles?limit=0&offset=0")
      .then((response) => {
        this.props.setTextsNames(response.data);
      });
  }

  render() {
    return (
      <div className="textPageWrapper">
        <AsideText
          curentTextId={this.props.curentTextId}
          textsNames={this.props.textsNames}
          selectText={this.props.selectText}
          showText={this.props.showText}
        />
        <ArticleText curentText={this.props.curentText} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextsPageContainer);
