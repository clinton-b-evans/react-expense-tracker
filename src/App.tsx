import ListGroup from './components/ListGroup'

const App = () => {
  const items = ['USA', 'Canada', 'Germany', 'Japan', 'Australia']
  return (
    <div>
      <ListGroup items={items} heading="Countries" />
    </div>
  )
}

export default App
