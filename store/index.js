import json from '@/server/data.json'

export const state = () => ({
  total: 0,
  content: [],
  items: [],
  item: [],
  title: '',
  sortByDate: false,
})

export const mutations = {
  getContent(state) {
    state.content = json
    if (state.content.length > 0) {
      state.total = state.content[0].item.length
      state.title = state.content[0].title[0]

      state.items = state.content[0].item
      state.items = state.items.map((item, index) => {
        return {
          id: index + 1,
          author: item.author,
          description: item.description,
          enclosure: item.enclosure,
          guid: item.guid,
          link: item.link,
          pubDate: item.pubDate,
          title: item.title,
        }
      })
    }
  },
  sortByLow(state) {
    state.items = state.items.sort(function (a, b) {
      return new Date(a.pubDate[0]) - new Date(b.pubDate[0])
    })
    state.sortByDate = true
  },
  sortByHigh(state) {
    state.items = state.items.sort(function (a, b) {
      return new Date(b.pubDate[0]) - new Date(a.pubDate[0])
    })
    state.sortByDate = false
  },
  getItemById(state, payload) {
    state.item = state.items.filter((i) => {
      return i.id === payload
    })
  },
}

export const actions = {}

export const getters = {
  items(state) {
    return state.items
  },
  item(state) {
    return state.item
  },
}
