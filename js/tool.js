/**
 * 公共函数工具库，可独立使用
 */

/*
 * @http_build_query    将一唯数组转换成，http 请求参数
 * @sortField          二维数组，排序，这是sort排序的回调函数，arr.sort(sortField('age'));
 */


/**
 * 将一唯数组转换成，http 请求参数
 * @param [] param      参数 ['c':'11','b':'22','a':'22']
 * @returns String
 */
function http_build_query(param) {
    var _str = '';
    var _temp = '';
    for (key in param) {
        _temp = key + "=" + param[key];
        _str = _str == '' ? _temp : _str + "&" + _temp;
    }
    return encodeURI(_str);
}

/**
 * 二维数组，排序，这是sort排序的回调函数
 * arr.sort(sortField('age'));
 * @param String pro_name
 * @param String sort_type
 * @returns 1|-1
 */
function sortField(pro_name,sort_type) {
    if(typeof(sort_type) == 'undefined') {
        sort_type = 'asc';
    }
    return function(ob1,ob2){
        var val1 = ob1[pro_name];
        var val2 = ob2[pro_name];
        if(val1 == val2) { return 0; }
        if(sort_type == 'asc') {
            return val1>val2?1:-1;
        }
        return val1>val2?-1:1;
    }
}
