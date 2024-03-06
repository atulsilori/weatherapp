/**
 * lodash get function
 **/
const get = (object: any, keys: any, defaultvalue: any): any => {
  const newkeys = Array.isArray(keys) ? keys : keys.split('.');
  const _newobject = object[newkeys[0]];
  const _keys = keys.slice(1);
  if (_newobject && _keys.length > 0) {
    return get(_newobject, _keys, defaultvalue);
  }
  return _newobject === undefined ? defaultvalue : _newobject;
};

export default { get };
