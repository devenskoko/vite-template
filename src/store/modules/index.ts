// 这种方式ts提示无效
const modules: any = {}
const files = import.meta.globEager('./**/index.ts')
Object.keys(files).forEach((key: string) => {
  modules[key.replace(/(\.\/|\.ts|index|\/)/g, '')] = files[key].default
})
export default modules
