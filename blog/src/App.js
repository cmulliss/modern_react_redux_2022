import React from 'react'

import faker from 'faker'
import './App.css'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.image()} author='Sam' timeAgo={new Date().toLocaleTimeString()} text='one' />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.image()} author='Alex' timeAgo={new Date().toLocaleTimeString()} text='two' />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.image()} author='Jane' timeAgo={new Date().toLocaleTimeString()} text='three' />
      </ApprovalCard>
    </div>
  )
}

export default App
