var nx = require('next-js-core2');
var NxMapList = require('../src/next-map-list');

function genData() {
  var result = [];
  for (let index = 0; index < 10; index++) {
    result.push({
      sid: `s_${index + 1}`,
      value: `value___${index}`
    });
  }
  return result;
}

test('test', () => {
  var data = genData();
  console.log(data);
  // const mpList = new MapList(data, idHandler)
  // 获取数组第几项：mpList.getItem(0)
  // 设置数组第几项：mpList.setItem(0, newItem)
  // 获取具体的 item根据 id 或者 get by key: mpList.getValue('s_1')
  // 设置具体的值：mpList.setValue('s_1', newItem)

  // add 添加
  // remove 移除
  // has(传 key 进来)
  // indexOf(传具体的 item 进来)

  // get length: 获取 size
});
