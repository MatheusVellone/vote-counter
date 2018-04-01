import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import {
  reduce,
  pipe,
  replace,
  prop,
  split,
  addIndex,
  modulo,
} from 'ramda'

import PersonComponent from './PersonComponent'

const properties = [
  'name',
  // 'image',
]
const reduceIndexed = addIndex(reduce)
const extractPeople = reduceIndexed((people, line, index) => {
  const personIndex = Math.floor(index / properties.length)

  const mod = modulo(index, properties.length)
  const isNewPerson = mod === 0

  if (isNewPerson) {
    people[personIndex] = {}
  }

  const propertyName = properties[mod]
  people[personIndex][propertyName] = line

  return people
}, [])

const splitLines = pipe(
  replace('\r', ''),
  split('\n')
)

class App extends Component {
  state = {
    names: [],
  }

  setNames = (names) => {
    this.setState({ names })
  }

  componentDidMount() {
    axios.get('/names.txt')
      .then(prop('data'))
      .then(splitLines)
      .then(extractPeople)
      .then(this.setNames)
  }

  render() {
    const { photos } = this.props
    const applyNameComponents = (person, index) => (
      <PersonComponent {...person} showPhoto={photos} key={index} />
    )
    const names = this.state.names.map(applyNameComponents)

    return (
      <div className="App">
        {names}
      </div>
    )
  }
}

App.propTypes = {
  photos: PropTypes.bool.isRequired,
}

App.defaultProps = {
  photos: false,
}

export default App
