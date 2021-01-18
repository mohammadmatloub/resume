function setViaId(id  , data){
    document.getElementById(id).innerHTML=data;
}
function setTittle(title){
    document.title=title;
}
function HomeText(data) {
        setTittle(data[0].title);
        setViaId("bio",data[0].bio);
        setViaId("name",data[0].name);
}

