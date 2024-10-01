let PHONES_DATA = [
    {
        id: 1,
        name: "iPhone 12",
        price: 799,
        store: "Apple Store",
        location: "Downtown",
        company: "Apple",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Black" }
        ],
        tags: ["5G", "OLED", "Dual camera"],
        pros: [
            { title: "Display", content: "Super Retina XDR" },
            { title: "Processor", content: "A14 Bionic" }
        ],
        cons: [
            { title: "Battery", content: "Average battery life" },
            { title: "Price", content: "Expensive" }
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 1199,
        store: "Samsung Experience Store",
        location: "Downtown",
        company: "Samsung",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Phantom Black" }
        ],
        tags: ["5G", "Dynamic AMOLED 2X", "Quad camera"],
        pros: [
            { title: "Display", content: "Excellent display quality" },
            { title: "Camera", content: "Powerful camera system" }
        ],
        cons: [
            { title: "Price", content: "Very expensive" },
            { title: "Size", content: "Large and heavy" }
        ]
    },
    {
        id: 3,
        name: "Google Pixel 7 Pro",
        price: 899,
        store: "Google Store",
        location: "Downtown",
        company: "Google",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Obsidian" }
        ],
        tags: ["5G", "LTPO OLED", "Triple camera"],
        pros: [
            { title: "Camera", content: "Great camera performance" },
            { title: "Software", content: "Pure Android experience" }
        ],
        cons: [
            { title: "Battery", content: "Could be better" },
            { title: "Design", content: "Somewhat plain" }
        ]
    },
    {
        id: 4,
        name: "OnePlus 11",
        price: 799,
        store: "OnePlus Store",
        location: "Downtown",
        company: "OnePlus",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Eternal Green" }
        ],
        tags: ["5G", "Fluid AMOLED", "Triple camera"],
        pros: [
            { title: "Performance", content: "Very fast and smooth" },
            { title: "Charging", content: "Super fast charging" }
        ],
        cons: [
            { title: "Software", content: "OxygenOS can be heavy" },
            { title: "Availability", content: "Limited availability in some regions" }
        ]
    },
    {
        id: 5,
        name: "Xiaomi 13 Pro",
        price: 999,
        store: "Xiaomi Store",
        location: "Downtown",
        company: "Xiaomi",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Ceramic Black" }
        ],
        tags: ["5G", "LTPO AMOLED", "Triple camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Value", content: "Great value for money" }
        ],
        cons: [
            { title: "Software", content: "MIUI can be bloated" },
            { title: "Global availability", content: "Limited global availability" }
        ]
    },
    {
        id: 6,
        name: "OPPO Find X6 Pro",
        price: 1099,
        store: "OPPO Store",
        location: "Downtown",
        company: "OPPO",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Mars Red" }
        ],
        tags: ["5G", "LTPO AMOLED", "Quad camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Design", content: "Sleek and stylish design" }
        ],
        cons: [
            { title: "Software", content: "ColorOS can be heavy" },
            { title: "Global availability", content: "Limited global availability" }
        ]
    },
    {
        id: 7,
        name: "vivo X90 Pro+",
        price: 1199,
        store: "vivo Store",
        location: "Downtown",
        company: "vivo",
        info: [
            { title: "Storage", content: "512GB" },
            { title: "Color", content: "Dark Horizon" }
        ],
        tags: ["5G", "LTPO AMOLED", "Quad camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Performance", content: "Powerful performance" }
        ],
        cons: [
            { title: "Software", content: "OriginOS can be heavy" },
            { title: "Global availability", content: "Limited global availability" }
        ]
    },
    {
        id: 8,
        name: "Motorola Edge 30 Pro",
        price: 799,
        store: "Motorola Store",
        location: "Downtown",
        company: "Motorola",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Cosmic Black" }
        ],
        tags: ["5G", "OLED", "Triple camera"],
        pros: [
            { title: "Performance", content: "Powerful performance" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Software", content: "MyUX can be heavy" },
            { title: "Design", content: "Somewhat plain" }
        ]
    },
    {
        id: 9,
        name: "Huawei P50 Pro",
        price: 999,
        store: "Huawei Store",
        location: "Downtown",
        company: "Huawei",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Cocoa Gold" }
        ],
        tags: ["5G", "OLED", "Quad camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Design", content: "Sleek and stylish design" }
        ],
        cons: [
            { title: "App availability", content: "Limited Google app availability" },
            { title: "Price", content: "Expensive" }
        ]
    },
    {
        id: 10,
        name: "Sony Xperia 1 IV",
        price: 1199,
        store: "Sony Store",
        location: "Downtown",
        company: "Sony",
        info: [
            { title: "Storage", content: "512GB" },
            { title: "Color", content: "Purple Gray" }
        ],
        tags: ["5G", "OLED", "Triple camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Display", content: "High-quality display" }
        ],
        cons: [
            { title: "Price", content: "Expensive" },
            { title: "Design", content: "Somewhat plain" }
        ]
    },
    {
        id: 21,
        name: "Nokia G50",
        price: 249,
        store: "Nokia Store",
        location: "Downtown",
        company: "Nokia",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Ocean Blue" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Battery", content: "Long battery life" },
            { title: "Durability", content: "Durable build" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 22,
        name: "Realme C35",
        price: 179,
        store: "Realme Store",
        location: "Downtown",
        company: "Realme",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Green" }
        ],
        tags: ["4G", "HD+ display", "Triple camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 23,
        name: "Tecno Spark 10 Pro",
        price: 149,
        store: "Tecno Store",
        location: "Downtown",
        company: "Tecno",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Midnight Black" }
        ],
        tags: ["4G", "HD+ display", "Triple camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 24,
        name: "Infinix Hot 30 Play",
        price: 129,
        store: "Infinix Store",
        location: "Downtown",
        company: "Infinix",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Racing Red" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 25,
        name: "Nokia C32",
        price: 119,
        store: "Nokia Store",
        location: "Downtown",
        company: "Nokia",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Dark Cyan" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Durability", content: "Durable build" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 26,
        name: "Realme C33",
        price: 159,
        store: "Realme Store",
        location: "Downtown",
        company: "Realme",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Aqua Blue" }
        ],
        tags: ["4G", "HD+ display", "Triple camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 27,
        name: "Tecno Spark 10",
        price: 139,
        store: "Tecno Store",
        location: "Downtown",
        company: "Tecno",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Iris Purple" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 28,
        name: "Infinix Hot 30",
        price: 119,
        store: "Infinix Store",
        location: "Downtown",
        company: "Infinix",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Midnight Black" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 29,
        name: "Nokia C22",
        price: 109,
        store: "Nokia Store",
        location: "Downtown",
        company: "Nokia",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Blue" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Durability", content: "Durable build" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 30,
        name: "Realme C31",
        price: 149,
        store: "Realme Store",
        location: "Downtown",
        company: "Realme",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Light Slate Grey" }
        ],
        tags: ["4G", "HD+ display", "Triple camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 31,
        name: "Tecno Spark 9 Pro",
        price: 169,
        store: "Tecno Store",
        location: "Downtown",
        company: "Tecno",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Light Blue" }
        ],
        tags: ["4G", "HD+ display", "Triple camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 32,
        name: "Infinix Hot 30 Play",
        price: 139,
        store: "Infinix Store",
        location: "Downtown",
        company: "Infinix",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Racing Red" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 33,
        name: "Nokia C21 Plus",
        price: 119,
        store: "Nokia Store",
        location: "Downtown",
        company: "Nokia",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Ocean Blue" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Durability", content: "Durable build" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 34,
        name: "Realme C30",
        price: 139,
        store: "Realme Store",
        location: "Downtown",
        company: "Realme",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Lake Blue" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 35,
        name: "Tecno Spark 9",
        price: 129,
        store: "Tecno Store",
        location: "Downtown",
        company: "Tecno",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Atlantic Blue" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 36,
        name: "Infinix Hot 30i",
        price: 119,
        store: "Infinix Store",
        location: "Downtown",
        company: "Infinix",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Racing Red" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 37,
        name: "Nokia C21",
        price: 109,
        store: "Nokia Store",
        location: "Downtown",
        company: "Nokia",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Ocean Blue" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Durability", content: "Durable build" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 38,
        name: "Realme C20",
        price: 129,
        store: "Realme Store",
        location: "Downtown",
        company: "Realme",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Lake Blue" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 39,
        name: "Tecno Spark 8 Pro",
        price: 159,
        store: "Tecno Store",
        location: "Downtown",
        company: "Tecno",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Atlantic Blue" }
        ],
        tags: ["4G", "HD+ display", "Triple camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 40,
        name: "Infinix Hot 30i",
        price: 129,
        store: "Infinix Store",
        location: "Downtown",
        company: "Infinix",
        info: [
            { title: "Storage", content: "64GB" },
            { title: "Color", content: "Racing Red" }
        ],
        tags: ["4G", "HD+ display", "Dual camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    },
    {
        id: 41,
        name: "Samsung Galaxy A54",
        price: 449,
        store: "Samsung Experience Store",
        location: "Downtown",
        company: "Samsung",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Awesome Violet" }
        ],
        tags: ["5G", "Super AMOLED", "Quad camera"],
        pros: [
            { title: "Display", content: "Excellent display quality" },
            { title: "Camera", content: "Good camera performance" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Battery", content: "Could be better" }
        ]
    },
    {
        id: 42,
        name: "Google Pixel 7a",
        price: 499,
        store: "Google Store",
        location: "Downtown",
        company: "Google",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Chalk" }
        ],
        tags: ["5G", "LTPO OLED", "Dual camera"],
        pros: [
            { title: "Camera", content: "Great camera performance" },
            { title: "Software", content: "Pure Android experience" }
        ],
        cons: [
            { title: "Display", content: "Could be better" },
            { title: "Design", content: "Somewhat plain" }
        ]
    },
    {
        id: 43,
        name: "OnePlus Nord CE 3",
        price: 399,
        store: "OnePlus Store",
        location: "Downtown",
        company: "OnePlus",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Pastel Lime" }
        ],
        tags: ["5G", "AMOLED", "Triple camera"],
        pros: [
            { title: "Performance", content: "Good performance" },
            { title: "Charging", content: "Fast charging" }
        ],
        cons: [
            { title: "Software", content: "OxygenOS can be heavy" },
            { title: "Availability", content: "Limited availability in some regions" }
        ]
    },
    {
        id: 44,
        name: "Xiaomi Redmi Note 12 Pro Plus",
        price: 349,
        store: "Xiaomi Store",
        location: "Downtown",
        company: "Xiaomi",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Cloud Mint" }
        ],
        tags: ["5G", "AMOLED", "Triple camera"],
        pros: [
            { title: "Value", content: "Great value for money" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Software", content: "MIUI can be bloated" },
            { title: "Global availability", content: "Limited global availability" }
        ]
    },
    {
        id: 45,
        name: "OPPO Reno 8 Pro+",
        price: 699,
        store: "OPPO Store",
        location: "Downtown",
        company: "OPPO",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Green" }
        ],
        tags: ["5G", "AMOLED", "Quad camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Design", content: "Sleek and stylish design" }
        ],
        cons: [
            { title: "Software", content: "ColorOS can be heavy" },
            { title: "Global availability", content: "Limited global availability" }
        ]
    },
    {
        id: 46,
        name: "vivo V27 Pro",
        price: 599,
        store: "vivo Store",
        location: "Downtown",
        company: "vivo",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Emerald Green" }
        ],
        tags: ["5G", "AMOLED", "Triple camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Design", content: "Sleek and stylish design" }
        ],
        cons: [
            { title: "Software", content: "OriginOS can be heavy" },
            { title: "Global availability", content: "Limited global availability" }
        ]
    },
    {
        id: 47,
        name: "Motorola Moto G Stylus 5G",
        price: 399,
        store: "Motorola Store",
        location: "Downtown",
        company: "Motorola",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Indigo Blue" }
        ],
        tags: ["5G", "LCD", "Quad camera"],
        pros: [
            { title: "Stylus", content: "Built-in stylus" },
            { title: "Battery", content: "Long battery life" }
        ],
        cons: [
            { title: "Display", content: "LCD display" },
            { title: "Design", content: "Somewhat bulky" }
        ]
    },
    {
        id: 48,
        name: "Huawei Nova 11 Pro",
        price: 699,
        store: "Huawei Store",
        location: "Downtown",
        company: "Huawei",
        info: [
            { title: "Storage", content: "256GB" },
            { title: "Color", content: "Starry Silver" }
        ],
        tags: ["5G", "OLED", "Quad camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Design", content: "Sleek and stylish design" }
        ],
        cons: [
            { title: "App availability", content: "Limited Google app availability" },
            { title: "Price", content: "Expensive" }
        ]
    },
    {
        id: 49,
        name: "Sony Xperia 1 V",
        price: 1299,
        store: "Sony Store",
        location: "Downtown",
        company: "Sony",
        info: [
            { title: "Storage", content: "512GB" },
            { title: "Color", content: "Black" }
        ],
        tags: ["5G", "OLED", "Triple camera"],
        pros: [
            { title: "Camera", content: "Excellent camera system" },
            { title: "Display", content: "High-quality display" }
        ],
        cons: [
            { title: "Price", content: "Expensive" },
            { title: "Design", content: "Somewhat plain" }
        ]
    },
    {
        id: 50,
        name: "LG Velvet 5G",
        price: 699,
        store: "LG Store",
        location: "Downtown",
        company: "LG",
        info: [
            { title: "Storage", content: "128GB" },
            { title: "Color", content: "Aurora Gray" }
        ],
        tags: ["5G", "P-OLED", "Dual camera"],
        pros: [
            { title: "Design", content: "Unique design" },
            { title: "Audio", content: "Good audio quality" }
        ],
        cons: [
            { title: "Performance", content: "Average performance" },
            { title: "Camera", content: "Basic camera quality" }
        ]
    }
]