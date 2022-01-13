import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



export default class Reacteditor extends Component {
    state ={
        editorState : EditorState.createEmpty(),
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }
    render() {
        const {editorState} = this.state;
        //console.log(editorState.getCurrentContent());
        //console.log(convertToRaw(editorState.getCurrentContent()));
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        return (
            <div className="editor">
                 <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>
        <textarea disabled value={
            htmlToDraft(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        }></textarea>
        </div>
        )
    }
}


