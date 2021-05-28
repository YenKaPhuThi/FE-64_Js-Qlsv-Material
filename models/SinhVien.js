//Khai báo lớp đối tượng trong js sử dụng function
function SinhVien (maSV,tenSV,dLy,dHoa,dToan,dRenLuyen,email,soDienThoai,loaiSinhVien) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.diemLy =dLy;
    this.diemHoa =dHoa;
    this.diemToan = dToan;
    this.diemRenLuyen =dRenLuyen;
    this.email = email;
    this.soDienThoai = soDienThoai;
    this.loaiSinhVien = loaiSinhVien;
    this.tinhDiemTrungBinh = function () {
        //Truy xuất thuộc tính trong phương thức 
        var diemTrungBinh = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return diemTrungBinh;
    }
    this.xepLoaiSinhVien= function () {
        var ketQua = '';
        var diemTB = this.tinhDiemTrungBinh();
        if (Number(this.diemRenLuyen) < 5) {
            ketQua = 'Yếu';
        } else {
            if (diemTB < 5) {
                ketQua = 'Yếu';
            } else if (diemTB >= 5 && diemTB < 6.5) {
                ketQua = 'Trung bình ';
            } else if (diemTB >= 6.5 && diemTB < 7) {
                ketQua = 'Trung bình khá';
            } else if (diemTB >= 7 && diemTB < 8) {
                ketQua = 'Khá';
            } else if (diemTB >= 8 && diemTB < 9) {
                ketQua = 'Giỏi';
            } else if (diemTB >= 9 && diemTB <= 10) {
                ketQua = 'Xuất sắc';
            } else {
                ketQua = 'Không hợp lệ';
            }
        }
        return ketQua;
    }
}
