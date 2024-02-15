const ListGroup = () => {
  const items = ['USA', 'Canada', 'Germany', 'Japan', 'Australia']

  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
