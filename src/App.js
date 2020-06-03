import React from 'react'
import { Route } from 'react-router-dom'
import TodoListPage from './pages/TodoListPage'

const App = () => {
  return <Route component={TodoListPage} path={['/']} exact />
}

export default App
