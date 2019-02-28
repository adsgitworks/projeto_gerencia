(function(){
    const bt_user = getFromName('btopts',0)

    function div_opts(optstr,dad){
        let children = document.createElement('div')
        children.textContent = optstr
        children.className = 'children_options'
        dad.appendChild(children)
    }

    let c = 0

    function deletingThis(){
        id('float_parent').remove()
        c = 0
    }

    bt_user.onclick = function(){

        function animating(){
            let fontsize = 0;
            let speed = 8.25
            function Tamanho(alturaMax, LarguraMax,tmp){
                
                var obj=id('float_parent')
        
                if((obj.offsetHeight<=alturaMax)&&(obj.offsetWidth<=LarguraMax)){
                //setting left position
                obj.style.left = `${obj.offsetLeft - speed}px`
                //
                obj.style.width=((obj.offsetWidth+=10)+"px");
                obj.style.height=((obj.offsetHeight+=10)+"px");
                    if(obj.style.fontSize != '17px'){
                        fontsize += 1
                        obj.style.fontSize = `${fontsize}px`
                    }
                }
                else  clearInterval(tmp);
            }
            tmp= setInterval(() =>Tamanho(200,200,tmp), 5);
        }
    }

})()