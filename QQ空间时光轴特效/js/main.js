var g = function(id) {
    return document.getElementById(id);
};

var g_tpl = function (id) {
     return g('tpl_'+id).innerHTML; 
}



// var tpl_month = g('tpl_scrubber_month').innerHTML.replace(/^\s*/, '').replace(/\s*$/, '');
// var _html_month = [];

// for (var i = data.length - 1; i >= 0; i--) {
//     var d = new Date(data[i].date);
//     var year = d.getFullYear();
//     var month = d.getMonth() + 1;
//     data[i].year = year;
//     data[i].month = month;

//     var tmp_month_html = tpl_month.replace(/{month}/, data[i].month);
//     if (!(tmp_month_html in _html_month)) {
//     	debugger;
//         _html_month.push(tmp_month_html);
//     }

// };

// console.log(_html_month);

// 格式化数据
var list = {};

for (var i = data.length - 1; i >= 0; i--) {
    var date = new Date(data[i].date);
    var year = date.getFullYear();
    var month = date.getMonth()+1;

    var lunar = GetLunarDateString(date);

    if (!list[year]) {list[year]={}};
    if (!list[year][month]) {list[year][month]=[]};

    var item = data[i];
    item.lunar = lunar[0]+'<br>&nbsp;&nbsp;&nbsp;'+lunar[1];
    item.year = year;
    item.month = month;
    item.like_format = item.like < 10000? item.like : (item.like/10000).toFixed(1)+'万';

    list[year][month].push(item);


}