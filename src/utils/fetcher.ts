export const fetcher = (library: any) => (...args: [any, ...any[]]) => {
  const [method, ...params] = args
  // console.log(method, params)
  return library[method](...params)
}