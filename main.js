//把code写到 code 和style 里面
function writeCode(prefix, code, fn) {
    let n = 0
    let domCode = document.querySelector('#code')
    let id = setInterval(() => {
        n += 1
        //代码高亮
        domCode.innerHTML = prefix + code.substring(0, n)
        domCode.innerHTML = Prism.highlight(domCode.innerHTML + prefix, Prism.languages.css)
        //确保代码看得见
        domCode.scrollTop = domCode.scrollHeight
        styletag.innerHTML = prefix + code.substring(0, n)
        if (n >= code.length) {
            window.clearInterval(id)
            //fn如果是假的，后面就不运行了
            fn && fn.call()
        }
    }, 50)
}
function writeMarkdown(markdown, fn) {
    let n = 0
    let domPaper = document.querySelector('#paper>.content')
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 30)
}
function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = "content"
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}
function convertMarkdownToHtml(fn) {
    var div = document.createElement('div')
    div.className = "html markdown-body"
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}
var css1 = `
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
#code-wrapper{
    
    position:fixed;
    left:0;
    width:50%；
    height:100%;
}

#paper>.content{
    
  
    display:block;
}
/* 准备在右边白纸上面写字 */

`
var css2 = `
/* 接下来用一个库 marked.js
*把markdown 变为html 
*/
`
var md = `
# 自我介绍

我叫黄笑

1994年8月出生

北京科技大学毕业

自学前端半年

希望应聘前端岗位

# 技能介绍

熟悉JS CSS HTML

# 项目介绍

1. CANVAS小画板
2. 搜索导航栏
3. 仿网易云音乐

# 联系方式

-QQ 1694623679

-Email  s20160185@xs.ustb.edu.cn

-WeChat 黄笑233

-cellphone 18611395195
`
let css3 = `
/*感谢观看
这就是我的简历*/
`
writeCode('', css1, () => {
    createPaper(() => {
        writeMarkdown(md, () => {
            writeCode(css1, css2, () => {
                convertMarkdownToHtml(() => {
                    writeCode(css1 + css2, css3, () => {
                        console.log('finish')
                    })
                })
            })
        })
    })
})




