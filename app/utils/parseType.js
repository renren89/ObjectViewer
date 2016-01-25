const dataTypes = {
  custom:     0,
  ascii:      1,
  bigint:     2,
  blob:       3,
  boolean:    4,
  counter:    5,
  decimal:    6,
  double:     7,
  float:      8,
  int:        9,
  text:       10,
  timestamp:  11,
  uuid:       12,
  varchar:    13,
  varint:     14,
  timeuuid:   15,
  inet:       16,
  date:       17,
  time:       18,
  smallint:   19,
  tinyint:    20,
  list:       32,
  map:        33,
  set:        34,
  udt:        48,
  tuple:      49
}
export const parseType = (code) => {
  for (let key in dataTypes) {
    if (dataTypes[key] === code)
      return key;
  }
}
