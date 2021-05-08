var student = {
  code: "",
  name: "",
  type: "",
  mathScore: "",
  phySore: "",
  bioScore: "",
  attritudeScore: "",
  calculateAverage: function () {
    // Truy xuất thuộc tính trong phương thức
    // this đại diện cho đối tượng
    var averageScore =
      (Number(this.mathScore) + Number(this.phySore) + Number(this.bioScore)) /
      3;
    return averageScore;
  },
  calculateStudentLevel: function () {
    var averageScore = this.calculateAverage();
    var result = "";

    if (this.attritudeScore < 5) {
      result = "Yếu";
    } else {
      if (averageScore < 5) {
        result = "Yếu";
      } else if (5 <= averageScore && averageScore < 6.5) {
        result = "Trung Bình";
      } else if (6.5 <= averageScore && averageScore < 7) {
        result = "Trung Bình Khá";
      } else if (7 <= averageScore && averageScore < 8) {
        result = "Khá";
      } else if (8 <= averageScore && averageScore < 9) {
        result = "Giỏi";
      } else if (9 <= averageScore && averageScore < 10) {
        result = "Suất Sắc";
      } else {
        result = "Không Hợp Lệ";
      }
    }
    return result;
  },
};

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
};
