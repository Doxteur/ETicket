import React from 'react'
import EditorWiz from './reactDraft/EditorWiz'

function EditorComment({ticket}) {
  return (
    <div>
      <EditorWiz ticket={ticket}/>
    </div>
  )
}

export default EditorComment
