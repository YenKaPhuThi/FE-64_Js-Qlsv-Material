// Khai báo đối tượng trong Js sử dụng function
function Student(
  code,
  name,
  phone,
  type,
  mathScore,
  physicsScore,
  chemistryScore,
  attritudeScore
) {
  this.code = code;
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.type = type;
  this.mathScore = mathScore;
  this.physicsScore = physicsScore;
  this.chemistryScore = chemistryScore;
  this.attritudeScore = attritudeScore;
  this.calculateAverageScore = function () {
    // Truy xuất thuộc tính trong phương thức
    var average =
      Number(this.mathScore) +
      Number(this.physicsScore) +
      Number(this.chemistryScore) / 3;

    return average;
  };
  this.arrangeStudentLevel = function () {
    var level = "";
    var average = this.calculateAverageScore();

    if (this.attritudeScore < 5) {
      level = "Yếu";
    } else {
      if (average < 5) {
        level = "Yếu";
      } else if (average >= 5 && average < 6.5) {
        level = "Trung bình ";
      } else if (average >= 6.5 && average < 7) {
        level = "Trung bình khá";
      } else if (average >= 7 && average < 8) {
        level = "Khá";
      } else if (average >= 8 && average < 9) {
        level = "Giỏi";
      } else if (average >= 9 && average <= 10) {
        level = "Xuất sắc";
      } else {
        level = "Không hợp lệ";
      }
    }

    return level;
  };
}
