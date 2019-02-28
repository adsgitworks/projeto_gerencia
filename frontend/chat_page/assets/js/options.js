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

})()