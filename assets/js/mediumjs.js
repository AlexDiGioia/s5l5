const mList = document.querySelectorAll("#mRefer g"); //su html ho assegnato la classe mRefer al g padre di tutti gli altri g
console.log(mList);
const mListOperable=[];
//mList[118].style.opacity="0";

//let prova = mList[0].style.opacity.toString();

//console.log(style.opacity);
mList.forEach(element => {
    let style = getComputedStyle(element);
    if(style.opacity==1 && element.parentElement.id){
        mListOperable.push(element);
    }
});
console.log(mListOperable);

const opacityInterval=setInterval(function(){

    let cont=Math.floor(Math.random() * mListOperable.length)
    let styleOp = getComputedStyle(mListOperable[cont]);
    if(styleOp.opacity==0){
        mListOperable[cont].style.opacity=1;
    }
    else if(styleOp.opacity==1){
        mListOperable[cont].style.opacity=0;
    }
    
    //console.log("sas");
    
},100)



scrollNavbar = () => {
    const navBar = document.getElementsByTagName("nav")[0];
    const navBtn=document.getElementsByClassName("blackBtn")[0];
    console.log("scroll")
  if (document.documentElement.scrollTop > 50) {
    navBar.style.backgroundColor="white";
    navBtn.style.backgroundColor="green"
    console.log("scroll")

  } 
}

window.onscroll = () => {scrollNavbar()};
