const injectionItems = [
    {
        fileName: "Popup-App.js",
        path: "./components/Popup-App.js",
        selector: "<popup-app>"
    },
    {
        fileName: "Navbar-App.js",
        path: "./components/Navbar-App.js",
        selector: "<navbar-app>"
    },
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
    {
        fileName : "Dummy-App.js",
        path: "./components/Dummy-App.js",
        selector: "<dummy-app>"
    },
    {
        fileName: "About-App.js",
        path: "./components/About-App.js",
        selector: "<about-app>"
    }
]

const router = [
    {
        path: '/',
        injectionItem: ['Popup-App.js', 'Navbar-App.js', 'Form-App.js', 'Details-App.js', 'About-App.js']
    },
    {
        path: '/about',
        injectionItem: ['Navbar-App.js', 'About-App.js']
    },
    {
        path: '/dummy',
        injectionItem: ['Navbar-App.js', 'Dummy-App.js']
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
