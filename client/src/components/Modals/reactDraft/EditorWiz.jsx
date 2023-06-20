import { convertToRaw, EditorState,ContentState,convertFromHTML } from "draft-js";
import React,{ useState,useEffect  } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function EditorWiz({ticket}) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [text, setText] = useState();
  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    console.log(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    let text = editorState.getCurrentContent().getPlainText("\u0001");
          {/*<div>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</div>*/}

    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setText(text);
  };

  useEffect(() => {
    console.log("useffect");
    console.log(ticket.content);
    const blocksFromHTML = convertFromHTML(ticket.content);
    console.log(blocksFromHTML);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, []);
  

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        // default
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
          ],
        }}
        // default value 
        value={ticket.content}
      />
    </>
  );
}
