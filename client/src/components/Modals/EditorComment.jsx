import React from 'react'
import EditorWiz from './reactDraft/EditorWiz'

function EditorComment({ticket,setTicket}) {
  return (
    <div>
      <EditorWiz ticket={ticket} setTicket={setTicket}/>
    </div>
  )
}

export default EditorComment
