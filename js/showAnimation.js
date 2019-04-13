/**
 * Created by tembty on 2019-3-30.
 */
 
// --------------------------------------------------------------------------------------------------------------------
/* 显示数字的动画：
 * 在 x=i,y=j 的位置上 显示数字 即显示该数字的值 = randNumber
 * 设置了一个45毫秒的动画效果
 */
function showNumberWithAnimation(i, j, randNumber) {
    var numberCell = $('#number-cell-' + i + "-" + j);//获取数字格子的对象
    
    numberCell.css('background-color', getNumberBackgroundColor(randNumber));
    numberCell.css('color', getNumberColor(randNumber));
    numberCell.text(randNumber);
 
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPosition(i),
        left: getPosition(j)
    }, 45);
}
 
// --------------------------------------------------------------------------------------------------------------------
/* 移动数字的动画：
 * 从 x=fromx,y=fromy的位置 移动到  x=tox,y=toy的位置
 * 在这个显示过程中 设置了一个300毫秒的动画效果
 */
function  showMoveAnimation(fromx, fromy, tox, toy){
    var numberCell = $('#number-cell-' + fromx + '-' +fromy );
    //设置目标格子的位置的动画
    numberCell.animate({
        top:getPosition(tox),
        left:getPosition(toy)
    },300);
}
 
// --------------------------------------------------------------------------------------------------------------------
// 分数刷新显示，此处未设置动画
function  updateScore(score){
    $('#score').text(score);
}