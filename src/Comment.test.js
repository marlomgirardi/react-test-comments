import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comment from './Comment'

import './setupTests.js'

describe('<Comment />', () => {
  it('renders without crashing', () => {
    const comment = {
      comment: 'test',
      user: {
        name: 'User test',
        uid: 'Avc...123',
        photo: 'http://resizeimage.net/myimg/bRWEGt4emrGWWJ8o-croppedQFRIE-jpg'
      }
    }
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.is('.card')).toBe(true)
    expect(wrapper.text()).toBe(comment.comment + comment.user.name)
  })
})
