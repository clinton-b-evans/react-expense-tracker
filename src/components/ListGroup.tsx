const ListGroup = () => {
  const items = ['USA', 'Canada', 'Germany', 'Japan', 'Australia']

  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => console.log('Clicked on ' + item)}
            className="list-group-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
