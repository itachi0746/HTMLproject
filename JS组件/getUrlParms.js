// 获得url中的参数,放在对象中,然后返回这个对象
function getUrlParms() {
  let args = {};
  let query = location.search.substring(1);//获取查询串
  let pairs = query.split("&");//在逗号处断开
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf('=');//查找name=value
    if (pos === -1) continue;//如果没有找到就跳过
    let argname = pairs[i].substring(0, pos);//提取name
    let value = pairs[i].substring(pos + 1);//提取value
    args[argname] = decodeURIComponent(value);//存为属性
  }
  return args;
}

export default getUrlParms
