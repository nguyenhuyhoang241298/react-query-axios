import ProxyBase from '../proxy-base'

const DemoApi = new ProxyBase()

export const getPosts = () =>
  DemoApi.get({
    requestConfig: {
      url: '/posts',
    },
  })
