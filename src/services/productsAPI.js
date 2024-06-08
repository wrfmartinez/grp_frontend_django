// const products = [
//     {
//         title: "Oak",
//         category: "Wood",
//         desc: "Best oak wood on the planet",
//         price: 29,
//         url: "https://images.unsplash.com/photo-1524593316537-9d4f4900ff73?q=80&w=5063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Maple",
//         category: "Wood",
//         desc: "High-quality maple wood",
//         price: 35,
//         url: "https://images.unsplash.com/photo-1688274165311-15de2165d686?q=80&w=4032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Birch",
//         category: "Wood",
//         desc: "Smooth birch wood",
//         price: 22,
//         url: "https://images.unsplash.com/photo-1506968430777-bf7784a87f23?q=80&w=5071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Mahogany",
//         category: "Wood",
//         desc: "Elegant mahogany wood",
//         price: 45,
//         url: "https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Cedar",
//         category: "Wood",
//         desc: "Aromatic cedar wood",
//         price: 27,
//         url: "https://images.unsplash.com/photo-1597113366853-fea190b6cd82?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Pine",
//         category: "Wood",
//         desc: "Versatile pine wood",
//         price: 19,
//         url: "https://images.unsplash.com/photo-1546727483-398533902b75?q=80&w=5034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Walnut",
//         category: "Wood",
//         desc: "Premium walnut wood",
//         price: 50,
//         url: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Teak",
//         category: "Wood",
//         desc: "Durable teak wood",
//         price: 60,
//         url: "https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Flourescent",
//         category: "Lighting",
//         desc: "Bright, bright",
//         price: 15,
//         url: "https://images.unsplash.com/photo-1627750673386-6970a71197d2?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Fridge",
//         category: "Appliances",
//         desc: "Bright, bright",
//         price: 499,
//         url: "https://images.unsplash.com/photo-1610733374054-59454fe657cd?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Teal",
//         category: "Paint",
//         desc: "Bright, bright",
//         price: 20,
//         url: "https://images.unsplash.com/photo-1617957848811-9c07f14d7ba3?q=80&w=5064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//         title: "Lawn Mower 3000",
//         category: "Landscaping",
//         desc: "Bright, bright",
//         price: 249,
//         url: "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?q=80&w=5064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     }
// ];

const BASE_URL = `http://localhost:8000`;

const show = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default { show };
