const initialData = {
    items:[
        {
            id:"1",
            name:"Converse",
            price:"Rs.6000",
            description:"Black Shoes For Men",
            image:"https://static-01.daraz.com.np/p/f2c1120dee0fe7fe932707b9ec18ea3c.jpg"
        },
        {
            id:"2",
            name:"Apple iPad Pro M1",
            price:"Rs.1,99,999",
            description:"12.9 512GB WiFi SpaceGrey",
            image:" https://static-01.daraz.com.np/p/9c4db461512c87a247b158708b39607c.png"
        },
        {
            id:"3",
            name:"Dell Inspiron 3511 I5 Laptop",
            price:"Rs. 90,999",
            description:" 11 Gen Processor 8 GB RAM 512 GB SSD 2 GB Graphics ",
            image:"https://static-01.daraz.com.np/p/2c7d90405a70a166ce88783c016a3743.jpg"
        },
        {
            id:"4",
            name:"EOS 6D Mark II Kit",
            price:"Rs.3,25,000",
            description:"EF24-105mm f/4L IS II USM",
            image:"https://static-01.daraz.com.np/p/b04c8d42d7a7d35d372f48bc50f26a66.jpg"
        },
        {
            id:"5",
            name:"Dell 24 Monitor in-Plane Switching (IPS)",
            price:"Rs.25,999",
            description:"Flicker-Free Screen with Comfort View, Full HD (1080p) S2421HN Grey in Color",
            image:"https://static-01.daraz.com.np/p/91765428efeb23a0cefff6ce64685c62.jpg"
        },
        {
            id:"6",
            name:"JBL Flip 6",
            price:"Rs.17000",
            description:"Portable Waterproof Bluetooth Speaker",
            image:"https://static-01.daraz.com.np/p/2d02ac0aa2cfe7c61f81fa0472e8c351.png"
        },
        {
            id:"7",
            name:"Sony PlayStation 5",
            price:"Rs.1,05,000",
            description:"DIsc Edition",
            image:"https://static-01.daraz.com.np/p/d0949cec617a0896bde74a14e8f9de83.jpg"
        },
        {
            id:"8",
            name:"Canon Pixma ",
            price:"Rs.29,999",
            description:"G3060 3 in 1 Wireless Multi-Function Ink Tank Colour Printer",
            image:"https://static-01.daraz.com.np/p/1f3df0dd8d7126194706eadaa09c7aae.jpg"
        },
        {
            id:"9",
            name:"Amazfit GTS 4",
            price:"Rs.11,999",
            description:"Mini Smart watch for men women Alexa Built GPS Fitness Tracker",
            image:"https://static-01.daraz.com.np/p/e113798c1d097f7c251e1dd37bb0e070.jpg"
        },
        {
            id:"10",
            name:"Apple iPhone 11",
            price:"Rs.99,999",
            description:" A13 Bionic chip 128 GB - iSure",
            image:"https://static-01.daraz.com.np/p/5aa2d089f9fff1cae027ebe24fb4841a.jpg"
        },
        {
            id:"11",
            name:"Laptop HP",
            price:"Rs.1,11,111",
            description:"14-cf2221nia Intel Core i7 10th Generation / 16GB DDR4 RAM / 512GB SSD Storage / 2GB Dedicated Radeon Graphics / 14 Display Laptop / Black",
            image:"https://static-01.daraz.com.np/p/1a12341fa013a5ce6349ef47a1b8bf2a.jpg"
        },
        {
            id:"12",
            name:"HP H200",
            price:"Rs.1,999",
            description:"Gaming Headset - Headphone With - Mic",
            image:"https://static-01.daraz.com.np/p/33f6be343565f3bc8143f45c67ff805e.jpg"
        },
        {
            id:"13",
            name:"POCO X5 Pro 5G",
            price:"Rs.39,999",
            description:"  6.67 FHD+ Flow AMOLED Dot Display | 5000mAh | 67W turbo charging",
            image:"https://static-01.daraz.com.np/p/fecf46cb34e510529a21f7b7541d92f4.jpg"
        },
        {
            id:"14",
            name:"Samsung B315E",
            price:"Rs.2,999",
            description:"Keypad Phone With FM Radio & Tourch Light",
            image:"https://static-01.daraz.com.np/p/45cac5f08bb8142d643900ac524f3b8e.jpg"
        },
        {
            id:"15",
            name:"Apple MacBook Pro13",
            price:"Rs. 1,95,000",
            description:"M2 Chip with 8-Core CPU and 10-Core GPU 256GB Storage 8GB RAM",
            image:"https://static-01.daraz.com.np/p/dd717517918df156420cda9f6801490c.jpg"
        },
        {
            id:"16",
            name:"Microsoft Xbox ",
            price:"Rs.10,000",
            description:"One Wireless Controller with Bluetooth (With 3.5 mm Jack) (Black)",
            image:"https://static-01.daraz.com.np/p/bc3147d8ba96437c5c79fbe2bad0d3e4.jpg"
        }
    ]

}

const finalItemReducer = (state = initialData, action) =>{
    switch (action.type){
        default:
            return state
    }
}

export default finalItemReducer