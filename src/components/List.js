import ListItem from './ListItem'
import {useState, useEffect} from 'react'

function List (props) {
  const [items, setItems] = useState([])
  const [text, setText] = useState('Sort by: Least to Most Recent')

  useEffect(() => {
    setItems(props.items)
  }, [])

  function sortItems() {
    const sortedItems = [...items].reverse()
    setItems(sortedItems)
  }

  function changeText() {
    if (text !== 'Sort by: Least to Most Recent') {
      setText('Sort by: Least to Most Recent');
    } else {
      setText('Sort by: Most to Least Recent');
    }
  }

  function changeButton() {
    sortItems();
    changeText();
  }

  const listItems = items.map((object) => {
    return <ListItem interest={object.interest} />
  })
  return(
    <ul>
      {listItems}
      <button onClick={changeButton}>{text}</button>
    </ul>

  )
}

export default List