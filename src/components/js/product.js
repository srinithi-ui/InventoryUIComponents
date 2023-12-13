import img from "@/assets/images/download.jpeg"
export default {
    data(){
    
        return {
          count : 0,
          clicked : true,
          // "logoImg" : logo,
          size : '15px',
          "Categories" : "Select the Categories",
          "products" :[
            {
              "name" : "MOTO Edge 40 (Nebula Green, 256 GB) ", 
              "img" : img,
              "price" : 10000,
            },
            {
              "name" : "MOTOROLA Edge 40 (Nebula Green, 256 GB)",
              "img" : img,
              "price" : 10000,
            },
            {
              "name" : "MOTO Edge 40 (Nebula Green, 256 GB)  (8 GB RAM",
              "img" : img,
              "price" : 10000,
            },
            {
              "name" : "MOTO Edge 40 (Nebula Green, 256 GB)  (8 GB RAM",
              "img" : img,
              "price" : 10000,
            },
            {
              "name" : "MOTO Edge 40 (Nebula Green, 256 GB)  (8 GB RAM",
              "img" : img,
              "price" : 10000,
            },
            {
              "name" : "MOTO Edge 40 (Nebula Green, 256 GB)  (8 GB RAM",
              "img" : img,
              "price" : 10000,
            },
            {
              "name" : "MOTO Edge 40 (Nebula Green, 256 GB)  (8 GB RAM",
              "img" : img,
              "price" : 10000,
            },
            {
              "name" : "MOTO Edge 40 (Nebula Green, 256 GB)  (8 GB RAM",
              "img" : img,
              "price" : 10000,
            }
          ],
          checkedCategories : []
          
        }
      },
      computed: {
        availableCount() {
          return this.products.length;
          }
        }

}