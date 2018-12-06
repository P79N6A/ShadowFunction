const getObjectType = (object) => {
  let typeStr = '' + object
  let objectType = (/\s*\[(\w+) (\w+)\]\s*/.exec(typeStr) || [])

  switch (objectType[1]) {
    case 'object':
      return objectType[2]
    case 'native':
      return 'native'
  }

  return 'unknow'
}

export { getObjectType }