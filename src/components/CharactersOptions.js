import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Characters from './Characters'
import {frenchSymbols} from '../constants/frenchSymbols'
import {symbols} from '../constants/equations'
import { Calculate,SortByAlpha } from "@mui/icons-material"


class CharactersOptions extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };

  render() {
    return (

     <>
      <Characters editorState={this.props.editorState} onChange={this.props.onChange} IconName={Calculate} content={symbols} />
      <Characters editorState={this.props.editorState} onChange={this.props.onChange} IconName={SortByAlpha} content={frenchSymbols} />


     </>
    );
  }
}

export default CharactersOptions
