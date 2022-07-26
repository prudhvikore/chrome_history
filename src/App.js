import './App.css'

import {Component} from 'react'

import HistoryItem from './Component/HistoryItem/index'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    console.log('delete')
    const {historyList} = this.state
    const filteredList = historyList.filter(each => each.id !== id)
    this.setState({historyList: filteredList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let history

    if (searchResults.length > 0) {
      history = (
        <ul className="historyList">
          {searchResults.map(each => (
            <HistoryItem
              eachItem={each}
              key={each.id}
              deleteItemFunc={this.deleteItem}
            />
          ))}
        </ul>
      )
    } else {
      history = <p>There is no history to show</p>
    }

    return (
      <div className="bg-container">
        <div className="main-cont">
          <nav className="navbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="appImg"
            />
            <div className="search-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                placeholder="Search History"
                className="input"
                onChange={this.onSearch}
                value={searchInput}
              />
            </div>
          </nav>
          <div className="history-cont">{history}</div>
        </div>
      </div>
    )
  }
}

export default App
