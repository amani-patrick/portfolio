export const useMenuActivation =(tabsParentClass, tabsClassPath) =>{
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll(tabsClassPath) || [];
    if(menuItems.length){
        menuItems[0].classList.add("text__gradient");
        window.onscroll = () =>{
            sections.forEach(sec=>{
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute("id");
                if(top >= offset && top < offset + height){
                    menuItems.forEach((link)=>{
                        link.classList.remove("text__gradient");
                        document.querySelector(tabsParentClass+ ' a[href*='+id+']').classList.add("text__gradient");
                    })
                }
            })
        }
    }
}