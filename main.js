var result = `
/*
 * 面试官你好，我是黄笑
 *我将以动画的形式来介绍我自己
 *只用文字太过分单调
 *那就用代码吧
 *首先准备一些样式
*/
      *{
         transition:all 1s;
}
      html{
            background:rgb(222,222,222);
            font-size:20px;
}

#code{
     border:1px red solid;
     padding:16px;
}
*/
接下来我要实现代码高亮
*/
.token.punctuation{
    color:#999;
}
.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}
/* 加点3D效果 */
#code{
    transform:rotate(360deg)
}
/*来点正式的*/
/*来一张白纸吧！*/

`

var n = 0
var time = setInterval(() => {
    n += 1
    styletag.innerHTML = result.substring(0, n)
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
    if (n >= result.length) {
        window.clearInterval(time)
        fn2()
        fn3(result)
    }
}, 20)
function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}
function fn3(preResult){
    var result = `
#paper{
    width:100px;height:100px;
    background:red;
}
    `
    var n = 0
    var id = setInterval(()=>{
        n += 1
        //代码高亮
        code.innerHTML = preResult + result.substring(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
    
        styletag.innerHTML = preResult + result.substring(0,n)
        if (n >= result.length){
            window.clearInterval(id)
        }
    },50)
}
