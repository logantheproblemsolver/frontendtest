import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { mount, flushPromises } from '@vue/test-utils'
import ChessSquare from '@/components/ChessSquare.vue'

describe('ChessSquare', () => {
  beforeEach  (() => {
    setActivePinia(createPinia())
  })
  it('renders properly', async () => {
    const wrapper = mount(ChessSquare, {
      props: {
        squareName: 'A1',
        background: 'black',
        letter: 'A',
        number: 1,  
      }
    })
    await flushPromises();
    expect(wrapper.classes('white-background'))
    expect(wrapper).toBeDefined()
  })
})