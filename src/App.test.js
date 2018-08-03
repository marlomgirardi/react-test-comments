import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from './App'

import './setupTests.js'

describe('<App />', () => {
  const base = {
    syncState: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.length).toBe(1)
  })

  it('should have ".container" class', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('shows Comments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('shows NewComment', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('NewComment').length).toBe(0)

    wrapper.setState({
      isLoggedIn: true,
      user: {
        photoURL: '',
        displayName: 'User Test',
        uid: 'uid...123',
        email: 'email@email.com'
      }
    })

    expect(wrapper.find('NewComment').length).toBe(1)
  })

  it('Adds a new comment to state when postNewComment is called', () => {
    const wrapper = mount(<App base={base} />)
    wrapper.instance().postNewComment({ comment: 'test' })
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(1)
  })
})
