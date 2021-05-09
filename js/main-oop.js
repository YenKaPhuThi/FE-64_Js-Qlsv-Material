// var student = {
//   code: "",
//   name: "",
//   type: "",
//   mathScore: "",
//   phySore: "",
//   bioScore: "",
//   attritudeScore: "",
//   calculateAverage: function () {
//     // Truy xuất thuộc tính trong phương thức
//     // this đại diện cho đối tượng
//     var averageScore =
//       (Number(this.mathScore) + Number(this.phySore) + Number(this.bioScore)) /
//       3;
//     return averageScore;
//   },
//   calculateStudentLevel: function () {
//     var averageScore = this.calculateAverage();
//     var result = "";

//     if (this.attritudeScore < 5) {
//       result = "Yếu";
//     } else {
//       if (averageScore < 5) {
//         result = "Yếu";
//       } else if (5 <= averageScore && averageScore < 6.5) {
//         result = "Trung Bình";
//       } else if (6.5 <= averageScore && averageScore < 7) {
//         result = "Trung Bình Khá";
//       } else if (7 <= averageScore && averageScore < 8) {
//         result = "Khá";
//       } else if (8 <= averageScore && averageScore < 9) {
//         result = "Giỏi";
//       } else if (9 <= averageScore && averageScore < 10) {
//         result = "Suất Sắc";
//       } else {
//         result = "Không Hợp Lệ";
//       }
//     }
//     return result;
//   },
// };

// 1 đối tượng thể hiện lớp đối tượng
var student = new Student();
student.code = "111";
var studentB = new Student();

console.log(studentB);

document.querySelector("#btnConfirm").onclick = function (e) {
  e.preventDefault();
  student.code = document.querySelector("#studentCode").value;
  student.name = document.querySelector("#studentName").value;
  student.type = document.querySelector("#studentType").value;
  student.mathScore = document.querySelector("#mathScore").value;
  student.phySore = document.querySelector("#phySore").value;
  student.bioScore = document.querySelector("#bioScore").value;
  student.attritudeScore = document.querySelector("#attritudeScore").value;

  // Xử lý hiển thị
  document.querySelector("#studentCodeTxt").innerHTML = student.code;
  document.querySelector("#studentNameTxt").innerHTML = student.name;
  document.querySelector("#studentTypeTxt").innerHTML = student.type;
  document.querySelector(
    "#studentAverTxt"
  ).innerHTML = student.calculateAverage().toFixed(2);
  document.querySelector(
    "#studentLevelTxt"
  ).innerHTML = student.calculateStudentLevel();

  // Tạo ra thẻ td
  var studentCodeCell = document.createElement("td");
  studentCodeCell.innerHTML = student.code;

  var studentNameCell = document.createElement("td");
  studentNameCell.innerHTML = student.name;

  var studentTypeCell = document.createElement("td");
  studentTypeCell.innerHTML = student.type;

  var studentAverageCell = document.createElement("td");
  studentAverageCell.innerHTML = student.calculateAverage();

  var studentLevelCell = document.createElement("td");
  studentLevelCell.innerHTML = student.calculateStudentLevel();

  var btnDelete = document.createElement("button");
  btnDelete.innerHTML = "Xoá";
  btnDelete.className = "btn btn-danger";
  btnDelete.onclick = function () {
    // parentElement => dom từ thẻ hiện tại => ra thẻ cha
    // var cellParent = btnDelete.parentElement;
    // var rowParrent = cellParent.parentElement;
    var rowParrent = btnDelete.closest("tr");

    // Remove() là phương thức xóa thẻ
    rowParrent.remove();
  };

  var btnDeleteCell = document.createElement("td");
  btnDeleteCell.appendChild(btnDelete);

  // Tạo ra thẻ tr
  var studentRow = document.createElement("tr");
  // Chèn thẻ con vào thẻ cha => the_cha.appendChild(the_con)
  studentRow.appendChild(studentCodeCell);
  studentRow.appendChild(studentNameCell);
  studentRow.appendChild(studentTypeCell);
  studentRow.appendChild(studentAverageCell);
  studentRow.appendChild(studentLevelCell);
  studentRow.appendChild(btnDeleteCell);

  // Dom đến thẻ body có sẵn trên giao diện => đưa thẻ tr vừa tạo vào
  document.querySelector("#studentTableBody").appendChild(studentRow);
};
