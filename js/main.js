// Bước 1: Định nghĩa sự kiện click
function getMyIdEle(ele) {
  return document.getElementById(ele);
}

getMyIdEle("btnConfirm").addEventListener("click", function (e) {
  e.preventDefault();
  // Bước 2: Lấy thông tin người dùng nhập
  var studentCode = getMyIdEle("").value;
  var studentName = getMyIdEle("studentName").value;
  var studentType = getMyIdEle("studentType").value;
  var mathScore = getMyIdEle("mathScore").value;
  var phySore = getMyIdEle("phySore").value;
  var bioScore = getMyIdEle("bioScore").value;
  var attritudeScore = getMyIdEle("attritudeScore").value;

  // Bước 3: Hiển thị thông tin từ các thẻ vào span
  var studentCodeTxt = getMyIdEle("studentCodeTxt");
  var studentNameTxt = getMyIdEle("studentNameTxt");
  var studentTypeTxt = getMyIdEle("studentTypeTxt");
  var studentAverTxt = getMyIdEle("studentAverTxt");
  var studentLevelTxt = getMyIdEle("studentLevelTxt");

  studentCodeTxt.innerHTML = studentCode;
  studentNameTxt.innerHTML = studentName;
  studentTypeTxt.innerHTML = studentType;

  var averageScoreResult = CalculateAverage(
    mathScore,
    phySore,
    bioScore
  );
  studentAverTxt.innerHTML = averageScoreResult.toFixed(2); // Đối số
  studentLevelTxt.innerHTML = CalculateStudentLevel(averageScoreResult, attritudeScore); // Đối số
});

function CalculateAverage(math, physical, biology) {
  // Tham số
  var averageScore = (Number(math) + Number(physical) + Number(biology)) / 3;
  return averageScore; //Cần lấy giá trị nào trong hàm ra ngoài xử lý thì return giá trị
}

function CalculateStudentLevel(averageScore, attritudeScore) {
  var result = "";

  if (attritudeScore < 5) {
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
}
