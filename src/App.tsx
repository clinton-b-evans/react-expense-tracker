import ListGroup from './components/ListGroup'

const App = () => {
  const items = ['USA', 'Canada', 'Germany', 'Japan', 'Australia']

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  )
}

export default App
