export const state = () => ({
  blogPosts: [],
  cities: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setCities(state, list) {
    state.cities = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let blogFiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let cityFiles = await require.context(
      '~/assets/content/cities/',
      false,
      /\.json$/
    )
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    let cities = cityFiles.keys().map(key => {
      let res = cityFiles(key)
      res.slug = res.cityName
      return res
    })
    await commit('setBlogPosts', blogPosts)
    await commit('setCities', cities)
  }
}
