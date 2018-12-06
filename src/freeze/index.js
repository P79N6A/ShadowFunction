import { getObjectType } from '../objectType/index'

function freeze(object, deep, exclude) {
  exclude = getObjectType(exclude) == 'Object' ? exclude : {}
  if (deep) {
    let propNames = Object.getOwnPropertyNames(object)

    // Freeze properties before freezing self
    for (let name of propNames) {
      let value = object[name]
      let ignore = exclude[name]

      if (!value) break

      if (ignore) {
        freeze(value.prototype, true, exclude)
        freeze(value.__proto__, true, exclude)
        break
      }

      if (isFrozen(value)) break

      let descriptor = Object.getOwnPropertyDescriptor(object, name)

      if (!descriptor.writable) break

      object[name] = value && typeof value === "object" ?
        freeze(value, true) : value
    }
  }

  return Object.freeze(object)
}

function isFrozen(obj) {
  return Object.isFrozen(obj)
}

export { freeze, isFrozen }