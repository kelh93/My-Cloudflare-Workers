import { handleRequest } from './handler'

addEventListener('fetch', (event) => {
  const data = {
    hello: '今日幸运数字🧐 => ' + Math.ceil(Math.random() * 100),
  };
  const json = JSON.stringify(data, null, 2);
  return event.respondWith(handleRequest(json))
})
