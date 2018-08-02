import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comments from './Comments'

import './setupTests.js'

describe('<Comments />', () => {
  it('renders without crashing', () => {
    const comments = {
      'comm-asdasdasd': {
        comment: 'test'
      },
      'comm-asdasdasd2': {
        comment: 'test 2'
      }
    }
    const wrapper = shallow(<Comments comments={comments} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find('Comment').length).toBe(2)
  })
})
