function _isId(des){
    if(des.includes("#")){return 1;}
    return 0;
}
function _isClass(des){
    if(des.includes(".")){return 1;}
    return 0;
}
function _setInner(des , data){
        if(_isClass(des)) {
            document.getElementsByClassName(des.replace(".", "")).innerHTML = data
            return 1;
        }else if(_isId(des)){
            document.getElementById(des.replace("#","")).innerHTML=data;
            return 1;
        }
        return 0;
}
function _setTittle(title){
    document.title=title;
}
function _setAttr(des , attrName , attrVal){
    if(_isClass(des)) {
        document.getElementsByClassName(des.replace(".", "")).setAttribute(attrName , attrVal);
        return 1;
    }else if(_isId(des)){
        document.getElementById(des.replace("#","")).setAttribute(attrName , attrVal);
        return 1;
    }
}
function _setBgImg(bgImgSrc){
    document.body.style.backgroundImage = "url("+bgImgSrc+")";
}
function HomeText(data) {
        _setTittle(data[0].title);
        _setInner("#bio",data[0].bio);
        _setInner("#name",data[0].name);
        _setAttr("#profilePic" , 'src' ,data[0].profilePic);
        _setBgImg(data[0].bgImg);
}

