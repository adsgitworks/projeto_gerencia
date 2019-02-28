function id(id){
    return document.getElementById(id)
}
function createElement(element){
    return document.createElement(element)
}
function setID(element,id){
    element.id = id
}
function setClass(element,classname){
    element.className = classname
}
function appendin(dad,children){
    dad.appendChild(children)
}
function setCssAttribute(element,attribute,props){
    element.style[attribute] = props
}
function getPropertie(elem,propertie){
    return elem[propertie]
}
function getFromClass(classname,i){
    return document.getElementsByClassName(classname)[i]
}
function getFromName(name,i){
    return document.getElementsByName(name)[i]
}
function getFromSelector(selector){
    return document.querySelector(selector)
}