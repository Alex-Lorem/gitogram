import { shallowMount } from '@vue/test-utils'
import toggler from '../toggler'

describe('Toggler component', () => {
  test('Изменение Show/Hide при клике', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.text').text()).toBe('Show issues')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})