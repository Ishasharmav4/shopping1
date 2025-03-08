const data = {
    headerMenus:[
        {
            name:"Today's Deal",
            href:'/search?tag=todays-deal',
        },
        {
            name:'New Arrivals',
            href:'/search?tag=new-arrival',
        },
        {
            name:'Featured Products',
            href:'/search?tag=featured',
        },
        {
            name:'Beat Sellers',
            href:'/search?tag=best-seller',
        },
        {
            name:'Browsing History',
            href:'/#browsing-histpry',
        },
        {
            name:'Customer Service',
            href:'/page/customer-service',
        },
        {
           name:'About Us',
           href:'/page/about-us',
        },
        {
            name:'Help',
            href:'/page/help',
        },
 ],
 carousels:[
    {
        title:'Most Popular Shoes For Sale',
        buttonCaption:'Shop Now',
        image:'/images/banner3.jpg',
        url:'/search?category=Shoes',
        isPublished:'true',
    },
    {
        title:'Best Seller in T-Shirt',
        buttonCaption:'Shop Now',
        image:'/images/banner1.jpg',
        url:'search?category=T-Shirts',
        isPublished:'true',

    },
    {
        title:'Best Deals on Wrist Wathhes',
        buttonCaption:'See More',
        image:'/images/banner2.jpg',
        url:'/search?category Watches',
        isPublished:'true',

    }
 ]


}

export default data