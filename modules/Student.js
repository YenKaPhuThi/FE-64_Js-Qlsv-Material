// Khai báo lớp đối tượng
// This đại diện cho đối tượng dc tạo ra từ lớp đối tượng đó
function Student() {
  (this.code = ""),
    (this.name = ""),
    (this.email = ""),
    (this.phone = ""),
    (this.type = ""),
    (this.mathScore = ""),
    (this.phySore = ""),
    (this.bioScore = ""),
    (this.attritudeScore = ""),
    (this.calculateAverage = function () {
      // Truy xuất thuộc tính trong phương thức
      // this đại diện cho đối tượng
      var averageScore =
        (Number(this.mathScore) +
          Number(this.phySore) +
          Number(this.bioScore)) /
        3;
      return averageScore;
    }),
    (this.calculateStudentLevel = function () {
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
    });
}
