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





function HomeText(homeData) {
        _setTittle(homeData[0].title);
        _setInner("#bio",homeData[0].bio);
        _setInner("#name",homeData[0].name);
        _setAttr("#profilePic" , 'src' ,homeData[0].profilePic);
        _setBgImg(homeData[0].bgImg);
}
function Links(linksData) {
        let x=Object.keys(linksData).length;
        let i;
        for ( i=0 ; i < x; i++){
            let _elementA = document.createElement("a");
            let _elementI = document.createElement("i");
            _elementA.setAttribute("href",linksData[i].href);
            _elementA.setAttribute("id", "headerSocialLinkA"+i);
            _elementA.setAttribute("class", "headerSocialLinkA");
            _elementA.setAttribute("target", "_blank");
            _elementI.setAttribute("class",linksData[i].icon+" headerSocialLink");
            document.getElementById("socialLink").appendChild(_elementA);
            document.getElementById("headerSocialLinkA"+i).appendChild(_elementI);
        }
}
function Skill(skillData) {
    let x=Object.keys(skillData).length;
    for ( i=0 ; i < x; i++){
        let _elementDiv = document.createElement("div");
        _elementDiv.setAttribute("class","box skillBox");
        _elementDiv.setAttribute("id","skill"+i);
        document.getElementById("skillRow").appendChild(_elementDiv);
        document.getElementById("skill"+i).innerHTML= "<svg viewbox=\"0 0 100 100\">" +
        "<path class='skillPath'  stroke-dasharray='"+257.2*skillData[i].percent  /100+",257.2' fill='none' stroke-linecap='round' "+
        " d='M50 10\n" +
        "a 40 40 0 0 1 0 80\n" +
        "40 40 0 0 1 0 -80\'/>\n" +
        "<foreignObject class='foreignObject'>" +
        "<i class='skillIcon "+skillData[i].icon+"'"+"></i>" +
        "</foreignObject>" +
        "</svg>"+
            "<p class='skillName'>"+skillData[i].title+
        "</p>"
    }

}