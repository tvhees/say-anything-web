export const countKeys = (obj) => Object.keys(obj).length;

export const removeKey = (obj, key) => {
  const { [key]: _, ...newObj } = obj;
  return newObj;
}