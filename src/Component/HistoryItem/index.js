import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteItemFunc} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const onDeleteItem = () => {
    console.log(id)
    deleteItemFunc(id)
  }
  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="info">
        <img src={logoUrl} alt="domain logo" className="logo-d" />
        <p className="title-item">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        type="button"
        testid="delete"
        className="button"
        onClick={onDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
