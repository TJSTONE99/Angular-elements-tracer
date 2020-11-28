const injectionItems = [
    {
        fileName: "Form-App.js",
        path: "./components/Form-App.js",
        selector: "<form-app>"
    },
    {
        fileName: "Details-App.js",
        path: "./components/Details-App.js",
        selector: "<details-app>"
    },
]

const router = [
    {
        path: '/',
        injectionItem: ['Form-App.js', 'Details-App.js']
    },
    {
        path: '/test',
        injectionItem: ['Form-App.js']
    }
]

const injectWebComponentDynamically = (route) =>{
    route.injectionItem.forEach(itm=>{
        injectionItems.filter(item=> item.fileName == itm)
            .forEach(injectitm=>{
                Array.prototype.slice.call(document.getElementsByTagName("page")).forEach(page=>{
                    const path = page.getAttribute("routerpath")
                    if (path == route.path)
                    {
                        document.getElementsByTagName("router")[0].innerHTML = page.innerHTML
                    }
                })
                import(injectitm.path)       
        })
    })
}

document.addEventListener("DOMContentLoaded",function(){
    router.filter(route=> window.location.pathname == route.path)
        .forEach(route=>{
            injectWebComponentDynamically(route)
        })
})
