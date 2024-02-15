import { MouseEvent } from 'react'

const ListGroup = () => {
  const items = ['USA', 'Canada', 'Germany', 'Japan', 'Australia']

  const handleClick = (e: MouseEvent<HTMLLIElement>) =>
    console.log('Clicked on ' + e.currentTarget.textContent)

  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} onClick={handleClick} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
