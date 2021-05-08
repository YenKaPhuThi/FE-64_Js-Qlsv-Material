var car = {
    id:"HONDA111",
    name: "honda",
    price: 1000,
    showInfo: function() {
      console.log("id:", car.id);
      console.log("name:", car.name);
      console.log("price:", car.price);
    }
  };
  
  // Truy xuất biến trong đối tượng gọi là thuộc tính
  // Cách1: ten_doi_tuong.ten_thuoc_tinh
  console.log("car name: ", car.name);
  
  // Casch2: ten_doi_tuong['ten_thuoc_tinh']
  console.log("car name: ", car["name"]);
  
  // Truy xuất hàm trong đối tượng
  // Cách 1:
  car.showInfo();
  //Cách 2:
  car["showInfo"]();
  
  // => Lập trình hướng đối tượng (OOP) => giúp đưa biến và hàm về đúng vị trí và ý nghĩa của nó. Đối tượng là nhóm các biến thông tin.
  