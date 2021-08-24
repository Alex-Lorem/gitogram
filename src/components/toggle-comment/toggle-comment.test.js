import { mount } from '@vue/test-utils'
import togglerComments from '../toggle-comment/toggle-comment.vue'

describe('issues component', () => {
  test('request for issues', async () => {
    const wrapper = mount(togglerComments)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })

  test('show comments', async () => {
    const comments = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(togglerComments, {
      propsData: {
        comments: Array.from({ length: 6 }).map(x => comments)
      }
    })

    expect(wrapper.find('.comments').exists()).toBe(false)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.findAll('.comment').length).toBe(6)
  })

  test('Не делает повторные запросы, если внутри уже есть список Issues', async () => {
    const comments = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(togglerComments, {
      propsData: {
        comments: Array.from({ length: 6 }).map(x => comments)
      }
    })

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues).toEqual([[]])
  })
})
