// var name_hotel = 'Cybersoft';
// var name_car = 'honda';

// var car = {
//     id:'HONDA001',
//     name: 'honda',
//     price: 10000,
//     showInfo: function () {
//         console.log('id',car.id);
//         console.log('name',car.name);
//         console.log('price',car.price);
//     }
// };
// var hotel = {
//     id: 1,
//     name: 'cybersoft',
//     showInfo: () => {
//         console.log('id',hotel.id);
//         console.log('name',hotel.name);
//     }
// }
// //Truy xuất biến trong đối tượng (biến trong đối tượng => thuộc tính)
// //Cách 1: [ten_doi_tuong].[ten_thuoc_Tinh]
// console.log('car.name',car.name );
// //Cách 2: [ten_doi_tuong]['ten_thuoc_tinh']
// console.log("car['name']",car['name']);
// //Truy xuất hàm trong đối tượng (hàm trong đối tượng => phương thức)
// //Cách 1:
// car.showInfo();
// hotel.showInfo();
// //Cách 2
// car['showInfo']();
// hotel['showInfo']();
// //=> Lập trình hướng đối tượng (OOP) => giúp đưa biến và hàm về đúng vị trí và ý nghĩa của nó. Đối tượng là nhóm các biến thông tin.


// sinhVien.maSinhVien = 'sv001';
// sinhVien.tenSinhVien = 'Nguyễn Văn A';

// var sinhVienB = new SinhVien();
// sinhVienB.maSinhVien = 'sv002';
// sinhVienB.tenSinhVien = 'Trần Thị B';

var arrSinhVien = [];
// var sinhVien = new SinhVien();
var validator = new Validation();
document.querySelector('#btnXacNhan').onclick = function () {
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;
    //Xử lý hiển thị
    document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSinhVien;
    document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
    document.querySelector('#txtDiemTrungBinh').innerHTML = sinhVien.tinhDiemTrungBinh();
    document.querySelector('#txtXepLoai').innerHTML = sinhVien.xepLoaiSinhVien();

    //Kiểm tra dữ liệu rồi mới cho thêm vào mảng
    var valid = true;
    /*Kiểm tra rổng */
    valid &= validator.kiemTraRong(sinhVien.maSinhVien,'#error_required_maSinhVien','Mã sinh viên') & validator.kiemTraRong(sinhVien.tenSinhVien,'#error_required_tenSinhVien','Tên sinh viên') & validator.kiemTraRong(sinhVien.diemRenLuyen,'#error_required_diemRenLuyen','Điểm rèn luyện') & validator.kiemTraRong(sinhVien.diemToan,'#error_required_diemToan','Điểm toán') & validator.kiemTraRong(sinhVien.diemLy,'#error_required_diemLy','Điểm lý') & validator.kiemTraRong(sinhVien.diemHoa,'#error_required_diemHoa','Điểm hoá')  & validator.kiemTraRong(sinhVien.email,'#error_required_email','Email')  & validator.kiemTraRong(sinhVien.soDienThoai,'#error_required_soDienThoai','Số điện thoại') ;
    /*Kiểm tra định dạng dữ liệu*/
    valid &= validator.kiemTraEmail(sinhVien.email,'#error_regex_email','Email') & validator.kiemTraKyTu(sinhVien.tenSinhVien,'#error_regex_letter','Tên sinh viên') ;

    /*Kiểm tra độ dài */
    valid &= validator.kiemTraDoDai(sinhVien.maSinhVien,'#error_required_min_max_length',4,6,'Mã sinh viên');

    //Kiểm tra giá trị 
    valid &= validator.kiemTraGiaTri(sinhVien.diemToan,'#error_min_max_value_diemToan',1,10,'Điểm toán') & validator.kiemTraGiaTri(sinhVien.diemLy,'#error_min_max_value_diemLy',1,10,'Điểm lý') &  validator.kiemTraGiaTri(sinhVien.diemHoa,'#error_min_max_value_diemHoa',1,10,'Điểm hoá') & validator.kiemTraGiaTri(sinhVien.diemRenLuyen,'#error_min_max_value_diemRenLuyen',1,10,'Điểm rèn luyện') ;

    if(!valid){
        return ; //Dừng hàm
    }

   
    

    //Thêm đối tượng sinh viên vào mảng mỗi lần bám nút thêm sinh viên
    arrSinhVien.push(sinhVien);
    //Gọi hàm tạo giao diện table
    renderTableSinhVien(arrSinhVien);
    //Lưu thông tin mảng sinh viên vào localstorage
    luuStorage();

    console.log('arrSinhVien', arrSinhVien)

    
}



function renderTableSinhVien(arrSV) {
    var contentTable = '';
    for (var i = 0; i < arrSV.length; i++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên từ trong mảng
        var sv = arrSV[i];
        var sinhVien = new SinhVien(sv.maSinhVien,sv.tenSinhVien,sv.diemLy,sv.diemHoa,sv.diemToan,sv.diemRenLuyen,sv.email,sv.soDienThoai);

        //Từ đối tượng tạo ra 1 chuỗi tr
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh()}</td>
                <td>${sinhVien.xepLoaiSinhVien()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xoá</button>
                    <button class="btn btn-primary ml-2" onclick="suaSinhVien('${sinhVien.maSinhVien}')">Sửa</button>
                </td>
            </tr>
        `
    }
    //dom đến thẻ body gán innerHTML của body = chuỗi content
    document.querySelector('#tblSinhVien').innerHTML = contentTable;
    // console.log(contentTable)
}

function xoaSinhVien(maSV) {
    console.log('Xoá sinh viên', maSV);

    for (var i = arrSinhVien.length - 1; i >= 0; i--) {
        var sv = arrSinhVien[i];
        if (sv.maSinhVien == maSV) { //Tìm thấy sinh viên trong mảng
            arrSinhVien.splice(i, 1);
        }
    }
    renderTableSinhVien(arrSinhVien);

}


function suaSinhVien(maSV) {

    //Tìm ra sinh viên được click nút sửa trong mảng
    console.log('maSinhVienSua', maSV);

    for (var i = 0; i < arrSinhVien.length; i++) {
        var sv = arrSinhVien[i];
        if (sv.maSinhVien === maSV) {
            //Gán giá trị của sinh viên tìm thấy lên giao diện
            document.getElementById('maSinhVien').value = sv.maSinhVien;
            document.getElementById('tenSinhVien').value = sv.tenSinhVien;
            document.getElementById('email').value = sv.email;
            document.getElementById('soDienThoai').value = sv.soDienThoai;
            document.getElementById('diemRenLuyen').value = sv.diemRenLuyen;
            document.getElementById('diemToan').value = sv.diemToan;
            document.getElementById('diemLy').value = sv.diemLy;
            document.getElementById('diemHoa').value = sv.diemHoa;
        }
    }
    // document.getElementById('btnXacNhan').disabled = true;
    // document.getElementById('btnLuuThongTin').disabled = false;
}
document.getElementById('btnLuuThongTin').onclick = function () {
    //Khi người dùng đã thay đổi dữ liệu và bấm nút lưu thông tin
    //Lấy thông tin người dùng
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;
    for (var i = 0; i < arrSinhVien.length; i++) {
        var svUpdate = arrSinhVien[i];
        if (svUpdate.maSinhVien === sinhVien.maSinhVien) { //Lấy ra sinh viên trong mảng so sánh với mã sinh viên người dùng đang chỉnh sửa
            svUpdate.tenSinhVien = sinhVien.tenSinhVien;
            svUpdate.email = sinhVien.tenSinhVien;
            svUpdate.soDienThoai = sinhVien.soDienThoai;
            svUpdate.diemRenLuyen = sinhVien.diemRenLuyen;
            svUpdate.diemToan = sinhVien.diemToan;
            svUpdate.diemLy = sinhVien.diemLy;
            svUpdate.diemHoa = sinhVien.diemHoa;
            svUpdate.loaiSinhVien = sinhVien.loaiSinhVien;
        }
    }

    //Gọi lại hàm tạo bảng sau khi chỉnh sửa dữ liệu trong mảng
    renderTableSinhVien(arrSinhVien);
    // document.getElementById('btnXacNhan').disabled = false;
    // document.getElementById('btnLuuThongTin').disabled = true;
}



//Lưu dữ liệu vào localstorage

function luuStorage () {
    //Lưu mảng sinh viên vào storage
    //TRước khi lưu biến mảng sinh viên thành chuỗi
    var sArrSinhVien = JSON.stringify(arrSinhVien);
    localStorage.setItem('arrSinhVien',sArrSinhVien);
}

function layStorage () {

    //Kiểm tra có storage đó hay không
    if(localStorage.getItem('arrSinhVien')) {
        //Lấy dữ liệu từ localstorage
        var sArrSinhVien = localStorage.getItem('arrSinhVien');
        //Bién dữ liệu về mảng và gán cho đối tượng arrSinhVien
        arrSinhVien = JSON.parse(sArrSinhVien);
        //Gọi hàm tạo lại bảng sinh viên
        renderTableSinhVien(arrSinhVien);
    }
}
//Gọi ham lấy storage khi giao diện vừa load
layStorage();