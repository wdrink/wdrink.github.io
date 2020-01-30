<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
  <title></title>
  <style>
    *{
        margin:0;
        padding:0;
    }
    .all{
        width:600px;
        height:350px;
        position:relative;
        overflow:hidden;
        margin:100px auto;
    }
    .all ul{
        z-index:1;
        position:relative;
    }
    .all ul li{
        position:absolute;
        top:0;
        left:0;
    }
    .all ol{
        position:absolute;
        right:10px;
        bottom:10px;
        z-index:2;
    }
    .all ol li{
        width:20px;
        height:20px;
        border:1px solid #fff;
        background-color:#333;
        float:left;
        overflow:hidden;
        margin-right:10px;
        text-align:center;
        line-height:20px;
        color:#fff;
        margin-top:10px;
        font-weight:bold;
    }
    .all ol .current{
        width:30px;
        height:30px;
        border:1px solid #f60;
        color:#f60;
        line-height:30px;
        margin-top:0;
        cursor:pointer;
    }
  </style>
  
  <script>
    //通过id值获得元素的函数
    function $(id){
        return document.getElementById(id);
    }
    
    //初始化函数
    function initial(){
        olLi=document.getElementsByTagName('ol')[0].getElementsByTagName('li');//获取ol下的li
        ol=$('tab');//获取ol元素
        theImg=$('theImg');
        //五张图片的地址
        addressPic=['/Users/wangjunke/Desktop/Myfirstweb/picture/111.jpg' ,'/Users/wangjunke/Desktop/Myfirstweb/picture/112.jpg','/Users/wangjunke/Desktop/Myfirstweb/picture/113.jpg','/Users/wangjunke/Desktop/Myfirstweb/picture/115.jpg','/Users/wangjunke/Desktop/Myfirstweb/picture/114.jpg'];
        
        //遍历ol下的li
        for(var i=0;i<olLi.length;i++){
            //依次给每个li绑定mouseover事件,该事件执行切换图片的函数
            olLi[i].addEventListener('mouseover',changePicture,false);
            olLi[i].index=i;//设置ol li的index序列号            
        }
    }
    

    
    //切换图片
    function changePicture(e){
        e.target.className="current";//将选中的ol下的li的class属性设置为current,e.target代表选中的li
        
        //清除ol里的空白节点
        cleanWhitespace(ol);
        
        //删除除当前选中的li外其他li的class属性值
        nextNode=e.target.nextSibling;//当前节点的下一个节点
        lastNode=e.target.previousSibling;//当前节点的前一个节点
        while(nextNode){//将当前节点后所有的兄弟节点的class属性清除
            nextNode.setAttribute('class','');
            nextNode=nextNode.nextSibling;
        }
        while(lastNode){//将当前节点前面所有的兄弟节点的class属性清除
            lastNode.className='';
            lastNode=lastNode.previousSibling;
        }
        
        //实现切换图片的功能    
        theImg.src=addressPic[this.index];
    }
    
    
    //清除ol下的空白节点
    function cleanWhitespace(oElement)
    {
        for(var i=0;i<oElement.childNodes.length;i++){
            var node=oElement.childNodes[i];
            if(node.nodeType==3 && !/\S/.test(node.nodeValue)){    
                 node.parentNode.removeChild(node)
            }
    }
}

    //给窗体绑定load事件，执行初始化函数initial()
    window.addEventListener('load',initial,false);
  </script>
 </head>

 <body>
  <div class="all">
    <ul>
        <li><img id="theImg" src="01.jpg" width="600px" height="350px"/></li>
    </ul>
    <ol id="tab">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li class="current">5</li>
    </ol>
  </div>
 </body>
</html>