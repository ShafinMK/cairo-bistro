
const foods =[
    {
        name: 'Alu Shingara',
        foodImage: 'https://i.pinimg.com/564x/ac/c8/c3/acc8c3055a7e457bbb78f6cb4a278bb1.jpg',
        price: 5,
        ingredients: ['Flour', 'Potato', 'Chilli', 'Salt', 'Oil', 'Ginger', 'Sugar', 'Beetnoon', 'Kasuri Methi', 'Garam Masala'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 340

    },
    {
        name: 'Alu Shingara',
        foodImage: 'https://i.pinimg.com/564x/ac/c8/c3/acc8c3055a7e457bbb78f6cb4a278bb1.jpg',
        price: 5,
        ingredients: ['Flour', 'Raisins', 'Chilli', 'Salt', 'Oil', 'Ginger', 'Sugar', 'Beetnoon', 'Kasuri Methi', 'Garam Masala', 'Coriander leaves'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 340

    },
    {
        name: 'Nan Roti',
        foodImage: 'https://media.istockphoto.com/photos/closeup-photograph-of-a-pile-of-plain-naan-flatbreads-picture-id183564340?k=20&m=183564340&s=612x612&w=0&h=aMCmD-sj-AT0VqV8bxICw9F7Dj7kpATdTrX7-V_qPto=',
        price: 10,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 259
    },
    {
        name: 'Special Nan Roti',
        foodImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Naan_shiva.jpg',
        price: 20,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 5,
        orderedTotal: 340
    },
    {
        name: 'Porota',
        foodImage: '',
        price: 10,
        ingredients: ['Flour', 'warm water', 'Salt', 'Oil', 'Testing-salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 541
    },
    {
        name: 'Vegetable',
        foodImage: 'https://i.ytimg.com/vi/xkjLAWjKrU0/maxresdefault.jpg',
        price: 20,
        ingredients: ['Alu', 'Gajor', 'Potol', 'Salt', 'Oil', 'Lau', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 5,
        orderedTotal: 634
    },
    {
        name: 'Mugdal',
        foodImage: 'https://media-cdn.greatbritishchefs.com/media/dpiigoaq/img85513.jpg?mode=crop&width=1426&height=713',
        price: 30,
        ingredients: ['Moong dal', 'Onion', 'chilies', 'curry-leaves', 'salt', 'ginger', 'Oil'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 340
    },
    {
        name: 'Chicken Soup',
        foodImage: 'https://static.toiimg.com/thumb/61575723.cms?imgsize=462719&width=800&height=800',
        price: 40,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 122
    },
    {
        name: 'Buter Dal',
        foodImage: 'https://img-global.cpcdn.com/recipes/547d7df6f3d52d35/680x482cq70/%E0%A6%9B%E0%A6%B2%E0%A6%B0-%E0%A6%A1%E0%A6%B2-%E0%A6%A6%E0%A6%AF-%E0%A6%9A%E0%A6%95%E0%A6%A8-%E0%A6%95%E0%A6%B0-cholar-dal-diye-chicken-curry-recipe-in-bengali-%E0%A6%B0%E0%A6%B8%E0%A6%AA%E0%A6%B0-%E0%A6%AA%E0%A6%B0%E0%A6%A7%E0%A6%A8-%E0%A6%9B%E0%A6%AC.jpg',
        price: 120,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 445
    },
    {
        name: 'Khashir Kolija',
        foodImage: 'https://i.ytimg.com/vi/Ke5v0285jdM/maxresdefault.jpg',
        price: 10,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: '',
        rating: 4,
        orderedTotal: 242
    },
    {
        name: 'Khashir Paya',
        foodImage: 'https://alkaderia.com/wp-content/uploads/2020/07/mutton-paya.png',
        price: 80,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 340
    },
    {
        name: 'Khashir Rejala',
        foodImage: 'https://static.wixstatic.com/media/05c508_16795b66a94b4ccdb8e51c7519ce28f0~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
        price: 150,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 343
    },
    {
        name: 'Chicken Jhal Fry',
        foodImage: 'https://i.ytimg.com/vi/HH7yw3L1N1k/hqdefault.jpg',
        price: 80,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 559
    },
    {
        name: 'Chicken Roast',
        foodImage: 'https://c.ndtvimg.com/2019-12/5f6fg0l8_keraal-roast-chicken_625x300_14_December_19.jpg',
        price: 80,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 4,
        orderedTotal: 234
    },
    {
        name: 'Tea (Dudh cha)',
        foodImage: 'https://i.ytimg.com/vi/ogB4Y3dmODQ/maxresdefault.jpg',
        price: 15,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: 'Breakfast',
        rating: 5,
        orderedTotal: 640
    },
    {
        name: 'Sada Bhat (rice)',
        foodImage: 'https://cdn.t.shef.com/unsafe/0x400/center/middle/https://shef-general.s3.amazonaws.com/uploads/939c9853-652d-4b18-9591-ffc19b9d9124_62c8b26e-ce05-4169-a3db-292a20cbbdca.jpg',
        price: 20,
        ingredients: ['Flour', 'low-fat yogurt', 'warm water', 'Salt', 'Oil', 'salt', 'Sugar'],
        quantity: 1,
        itemOf: '',
        rating: 3,
        orderedTotal: 144
    },
    {
        name: 'Polau',
        foodImage: 'https://i.ytimg.com/vi/sx4o52UUZ_o/maxresdefault.jpg',
        price: 50,
        ingredients: ['Polau chal', 'Ghee', 'warm water', 'Salt', 'Oil', 'Spice', 'Sugar'],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 5,
        orderedTotal: 312
    },
    {
        name: 'Dal',
        foodImage: 'https://static.toiimg.com/thumb/71661408.cms?imgsize=3499522&width=800&height=800',
        price: 10,
        ingredients: ['Toor Dal', 'Tomato', 'water', 'Salt', 'Oil', 'coriander'],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 4,
        orderedTotal: 453
    },
    {
        name: 'Korola vaji',
        foodImage: 'https://i.ytimg.com/vi/BWYzccB93x8/maxresdefault.jpg',
        price: 20,
        ingredients: ['Korola', 'Alu', 'Onion', 'Salt', 'Oil', 'Green Chili', 'Garlic'],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 4,
        orderedTotal: 124
    },
    {
        name: 'Shak',
        foodImage: 'https://i.ytimg.com/vi/X8l0ef8-AQQ/maxresdefault.jpg',
        price: 10,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 5,
        orderedTotal: 640
    },
    {
        name: 'Vorta',
        foodImage: 'https://images.deliveryhero.io/image/fd-bd/LH/s3wq-hero.jpg',
        price: 20,
        ingredients: [],
        quantity: 2,
        itemOf: 'Lunch',
        rating: 5,
        orderedTotal: 1052
    },
    {
        name: 'Pabda Mach',
        foodImage: 'https://i.ytimg.com/vi/0nbYGaoSVzo/maxresdefault.jpg',
        price: 180,
        ingredients: [],
        quantity: 2,
        itemOf: '',
        rating: 4,
        orderedTotal: 340
    },
    {
        name: 'Rui Mach',
        foodImage: 'http://notoutofthebox.in/wp-content/uploads/2013/12/rm.jpg',
        price: 80,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 4,
        orderedTotal: 212
    },
    {
        name: 'Katla Mach',
        foodImage: 'https://atmykitchen.net/wp-content/uploads/2022/01/macherjhol7245493500660438948-500x375.jpg?crop=1',
        price: 80,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 5,
        orderedTotal: 520
    },
    {
        name: 'Shing Mach',
        foodImage: 'https://i.ytimg.com/vi/SEM5qVGVifQ/maxresdefault.jpg',
        price: 120,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 4,
        orderedTotal: 340
    },
    {
        name: 'Chingri',
        foodImage: 'https://i.ytimg.com/vi/mt72nMCqZ1k/hqdefault.jpg',
        price: 150,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch',
        rating: 5,
        orderedTotal: 350
    },
    {
        name: 'Ilish Mach',
        foodImage: 'https://i.ytimg.com/vi/3ZX8bVJ00rw/maxresdefault.jpg',
        price: 10,
        ingredients: [],
        quantity: 1,
        itemOf: '',
        rating: 4,
        orderedTotal: 441
    },
    {
        name: 'Koi Mach',
        foodImage: 'https://foodpeon.com/wp-content/uploads/2018/04/IMG_4564.jpg',
        price: 100,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunh',
        rating: 4,
        orderedTotal: 334
    },
    {
        name: 'Chicken Masala',
        foodImage: 'https://ml5jqffo9xcx.i.optimole.com/ua3WCVA-UYvYLUGd/w:1920/h:1080/q:mauto/https://allchickenrecipe.com/wp-content/uploads/2020/05/Chicken-Masala.jpg',
        price: 120,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunh',
        rating: 4,
        orderedTotal: 234
    },
    {
        name: 'Hash Vuna',
        foodImage: 'https://pbs.twimg.com/media/ElW0Z8eUcAE3D2T?format=jpg&name=4096x4096',
        price: 200,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunh',
        rating: 4,
        orderedTotal: 222
    },
    {
        name: 'Koyel Pakhi vuna',
        foodImage: 'https://www.daily-bangladesh.com/media/imgAll/2021March/yy-2106040509.jpg',
        price: 100,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunh',
        rating: 4,
        orderedTotal: 140
    },
    {
        name: 'Jali Kebab',
        foodImage: 'https://khadizaskitchen.files.wordpress.com/2013/10/0041.jpg',
        price: 30,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunh',
        rating: 4,
        orderedTotal: 500
    },
    {
        name: 'Shami Kebab',
        foodImage: 'https://i.pinimg.com/originals/c6/1a/9e/c61a9e00a9807257a0bfe01c9cc71b9d.jpg',
        price: 30,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunh',
        rating: 4,
        orderedTotal: 324
    },
    {
        name: 'Tundul Roti',
        foodImage: 'https://i.ytimg.com/vi/S6VDmnh-qq4/maxresdefault.jpg',
        price: 20,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 5,
        orderedTotal: 740
    },
    {
        name: 'Muri Ghonto',
        foodImage: 'https://static.wixstatic.com/media/05c508_d769cf05b1f546ec8c4a7ea71e2910a3~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/05c508_d769cf05b1f546ec8c4a7ea71e2910a3~mv2.jpg',
        price: 20,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 112
    },
    {
        name: 'Chicken Sharma',
        foodImage: 'https://i.ytimg.com/vi/BNOYdVP4P7g/maxresdefault.jpg',
        price: 50,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 340
    },
    {
        name: 'Chicken Grill (quarter)',
        foodImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIs35ci5YJUt-tPT82XRoyKaOgCMcUibNzSw&usqp=CAU',
        price: 100,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 5,
        orderedTotal: 1040
    },
    {
        name: 'Chicken Grill(full)',
        foodImage: 'https://www.seriouseats.com/thmb/z7ZQbFHrNUbgAW1E5TZJQhT4oGw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__08__20120805-food-lab-grilled-chicken-24-6b3f49da85f5488aa29fdcaf8350ae05.jpg',
        price: 400,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 5,
        orderedTotal: 945
    },
    {
        name: 'Halim(khashi)',
        foodImage: 'https://static.hungrynaki.com/hungrynaki-v4/restaurants/dhakaiya_halim/meta/dhakaiya_halim_cover_1620111625293.jpg',
        price: 60,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 3940
    },
    {
        name: 'Halim(Beef)',
        foodImage: 'https://www.astha-bd.com/wp-content/uploads/2018/10/recette-mauricienne-halim.jpg',
        price: 60,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 2343
    },
    {
        name: 'Halim(Beef)',
        foodImage: 'https://www.astha-bd.com/wp-content/uploads/2018/10/recette-mauricienne-halim.jpg',
        price: 60,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 2343
    },
    {
        name: 'Ghila Kolija vuna',
        foodImage: 'https://i.ytimg.com/vi/7mS-Et5QCFM/maxresdefault.jpg',
        price: 80,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 2342
    },
    {
        name: 'Morog Polau',
        foodImage: 'https://www.deshcatering.com/wp-content/uploads/2020/06/motorshuti-peas-polao-chicken-roast-jali-kabab-desh-catering-service-company-dhaka.jpg',
        price: 150,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch, Dinner',
        rating: 4,
        orderedTotal: 2343
    },
    {
        name: 'Vuna Khichuri (Chicken)',
        foodImage: 'https://live.staticflickr.com/8732/16581221243_aa875a611f_b.jpg',
        price: 120,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch, Dinner',
        rating: 4,
        orderedTotal: 2234
    },
    {
        name: 'Vuna Khichuri (Beef)',
        foodImage: 'https://i.pinimg.com/originals/50/84/55/5084557e259867aefde253ebebfd0b9d.jpg',
        price: 130,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch, Dinner',
        rating: 5,
        orderedTotal: 320
    },
    {
        name: 'Vuna Khichuri (Mutton)',
        foodImage: 'https://i.ytimg.com/vi/WCDfgc7cJZI/maxresdefault.jpg',
        price: 150,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch, Dinner',
        rating: 4,
        orderedTotal: 3232
    },
    {
        name: 'Kacchi Biriyani',
        foodImage: 'https://i.ytimg.com/vi/rb_6-HVhMrk/maxresdefault.jpg',
        price: 450,
        ingredients: [],
        quantity: 1,
        itemOf: '',
        rating: 5,
        orderedTotal: 1240
    },
    {
        name: 'Faluda',
        foodImage: 'https://img-global.cpcdn.com/recipes/5517ff2bb1f920f5/751x532cq70/sabudana-royal-faluda-recipe-main-photo.jpg',
        price: 120,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening, Dinner, Lunch',
        rating: 5,
        orderedTotal: 122
    },
    {
        name: 'Lacchi',
        foodImage: 'https://www.observerbd.com/2015/04/19/1429454911.jpg',
        price: 80,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch, Evening, Dinner',
        rating: 4,
        orderedTotal: 234
    },
    {
        name: 'Cup Doi',
        foodImage: 'https://www.shodagor.com/wp-content/uploads/2020/03/75446477_568753877205592_3158168372772864000_n-600x650-1-600x600.jpg',
        price: 40,
        ingredients: [],
        quantity: 1,
        itemOf: 'Lunch, Evening, Dinner',
        rating: 5,
        orderedTotal: 682
    },
    {
        name: 'Pudding',
        foodImage: 'https://www.chileanfoodandgarden.com/wp-content/uploads/2012/01/semola-con-leche-10-2048x1388.jpg',
        price: 50,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 120
    },
    {
        name: 'Noddles',
        foodImage: 'https://3.imimg.com/data3/UP/YK/MY-17273090/hakka-noddles-500x500.jpg',
        price: 100,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 4,
        orderedTotal: 323
    },
    {
        name: 'Thai Soup',
        foodImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoUXRu-ZS26fNJXBMXfGK88PYEXmWPCvQvw&usqp=CAU',
        price: 120,
        ingredients: [],
        quantity: 1,
        itemOf: 'Evening',
        rating: 5,
        orderedTotal: 502
    },
    

];