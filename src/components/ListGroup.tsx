import { useState } from 'react'

interface Props {
  items: string[]
  heading: string
}

const ListGroup = ({ items, heading }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
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
