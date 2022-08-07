function gestionTrie(a_id){
   resetAffichage()
     if(a_id=="java"){
        var tab1 = document.getElementsByClassName("PublicationSQL")
         var tab2 = document.getElementsByClassName("PublicationWeb")
         var titre = document.getElementById("headerImg").src="image/BannerJava.png"
         masquerPublication(tab1,tab2)  
     }

     if(a_id=="sql"){
       var tab1 = document.getElementsByClassName("PublicationJava")
       var tab2 = document.getElementsByClassName("PublicationWeb")
       var titre = document.getElementById("headerImg").src="image/bannerSQL.png"
       masquerPublication(tab1,tab2)
     }

     if(a_id=="web"){
        var tab1 = document.getElementsByClassName("PublicationSQL")
        var tab2 = document.getElementsByClassName("PublicationJava")
        var titre = document.getElementById("headerImg").src="image/bannerHtmlCssJs.png"
        masquerPublication(tab1,tab2)
     }
}
function masquerPublication(tab1,tab2){
    for(var i=0; i<tab1.length;i++) tab1[i].style.display ="none";
    for(var i=0; i<tab2.length;i++) tab2[i].style.display ="none";
}
function resetAffichage(){
    var tabTotal = document.getElementsByClassName("publication")
    for(var i=0; i<tabTotal.length;i++) tabTotal[i].style.display ="block";
}