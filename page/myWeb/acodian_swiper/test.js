//const els = document.querySelectorAll('span')
//els.forEach(el => {
//   console.log(el.dataset.fruitName)
//})


//$(document).ready(function(){
//	$('li').each(function (index, ckd) {
//		$(ckd).addClass('li_0' + index);
//	});
//});
var star = '';
for (var i = 0; i < 5; i++) {
    for (var j = 3; j >= i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i); k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);