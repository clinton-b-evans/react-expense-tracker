import { useState } from 'react'

const ListGroup = () => {
  const items = ['USA', 'Canada', 'Germany', 'Japan', 'Australia']

  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedIndex(index)
            }}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
