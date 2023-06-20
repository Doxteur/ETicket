import { convertToRaw, EditorState,ContentState,convertFromHTML } from "draft-js";
import React,{ useState,useEffect  } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function EditorWiz({ticket,setTicket}) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [text, setText] = useState();
  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setTicket({ ...ticket, content: text });
  };

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(ticket.content);
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
