import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { EditorState, convertToRaw,ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



export default class Reacteditor extends Component {

    constructor(props){
        super(props);
        const html = '<p><span style="font-family: Georgia;"> hello <strong> editor </strong> page</span>&nbsp;</p>';
        const contentBlock = htmlToDraft(html);
        if(contentBlock){
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            this.state = {
                editorState,
              };
        }
    }
    // state ={
    //     editorState : EditorState.createEmpty(),
    // }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }
    render() {
        const {editorState} = this.state;
        //console.log(editorState.getCurrentContent());
        //console.log(convertToRaw(editorState.getCurrentContent()));
       // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
       // console.log();
       return (
            <div className="editor">
                 <Editor
  editorState={editorState}
  //toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>
        <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }></textarea>
        </div>
        )
    }
}


