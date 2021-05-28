

//axios: hàm giúp lấy dữ liệu từ backend trả về hoặc đưa liệu người dùng lên server



// var promise = axios({
//     url:'./data/data.txt', //backend cung cấp (đường dẫn api)
//     method:'get', //backend cung cấp (phương thức)
//     responseType:'text'
// })

// //Xử lý thành công
// function xuLyThanhCong(result) {
//     console.log('ketQua',result.data);
//     document.querySelector('body').innerHTML = result.data;
// }

// promise.then(xuLyThanhCong);

// //Xử lý thất bại
// function xuLyThatBai(errors) {
//     console.log('err',errors.response.data);
// }
// promise.catch(xuLyThatBai);


// var promise = axios({
//     url:'./data/data.xml', //backend cung cấp (đường dẫn api)
//     method:'get', //backend cung cấp (phương thức)
//     responseType:'document'
// })

// promise.then(function(result) {
//     console.log(result.data);

//     console.log((result.data.querySelector('data').innerHTML))
// })






function renderTableSinhVien(arrSV) {
    var contentTable = '';
    for (var i = 0; i < arrSV.length; i++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên từ trong mảng
        var sv = arrSV[i];
        var sinhVien = new SinhVien(sv.maSinhVien,sv.tenSinhVien,sv.diemLy,sv.diemHoa,sv.diemToan,sv.diemRenLuyen,sv.email,sv.soDienThoai,sv.loaiSinhVien);

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



//Sửa dụng ajax để kết nối với backend
async function getDataSinhVienApi () {

    //Async await: Sử dụng để lấy dữ liệu từ api cho các dữ liệu phụ thuộc nhau (có thứ tự)
    
    //Promise: Sử dụng để lấy dữ liệu từ api cho các api không phụ thuộc nhau 
    //Bất đồng bộ
    try {
        var result = await axios({
            url:'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', //Backend sẽ cung cấp
            method:'get'
        });
        renderTableSinhVien(result.data);
    }catch (errors) {
        console.log(errors.response.data);
    }
    //Cách 1: Xử lý hàm bất đồng bộ bằng callback function
    // //Xử lý thành công
    // promise.then(function(result) {
    //     console.log(result.data);
    //     //result.data là mảng sinh viên do api trả về
    //     renderTableSinhVien(result.data)
    //     console.log('123');
    // });

    // //Xử lý thất bại
    // promise.catch(function(errors) {
    //     console.log(errors.response.data);
    // })

}

//Gọi hàm lấy dữ liệu từ backend về
getDataSinhVienApi();

//-------------------------------Thêm sinh viên----------------------------------

document.getElementById('btnXacNhan').onclick = async function () {
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
    console.log('sinhVien',sinhVien);

    //Gọi api
    try {
        var result = await axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien', //Backend cung cấp
            method:'POST', // Backend cung cấp
            data: sinhVien //format data do backen qui định
        });

        alert(result.data);

        getDataSinhVienApi();


    }catch(errors) {
        console.log('errors',errors.response.data);
    }
}

//----------------------------------Xoá sinh viên ---------------------

async function xoaSinhVien(maSV) {


    try {

        var result = await axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSV}`,
            method:'DELETE'
        });

        alert(result.data);
        getDataSinhVienApi();

    }catch (errors) {
        console.log(errors.response.data);

    }



    console.log('maSV',maSV)
}

//----------------------------------Chỉnh sửa sinh viên --------------------------------

async function suaSinhVien(maSV) {

    try {

        var result = await axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSV}`,
            method:'GET'
        })
        //Trong trường hợp này data trả về 1 object của sinh viên được click
        var sinhVienSua = result.data;
        //dùng DOM gán lên các control phía trên để người dùng thay đổi
        console.log('sinhVienSua',sinhVienSua);
        document.getElementById('maSinhVien').value = sinhVienSua.maSinhVien;
        document.getElementById('tenSinhVien').value = sinhVienSua.tenSinhVien;
        document.getElementById('email').value = sinhVienSua.email;
        document.getElementById('soDienThoai').value = sinhVienSua.soDienThoai;
        document.getElementById('diemRenLuyen').value = sinhVienSua.diemRenLuyen;
        document.getElementById('diemToan').value = sinhVienSua.diemToan;
        document.getElementById('diemLy').value = sinhVienSua.diemLy;
        document.getElementById('diemHoa').value = sinhVienSua.diemHoa;
    }catch (errors) {
        console.log('errors',errors.response.data)
    }
}


//---------------------------cập nhật thông tin sinh viên --------------------
document.querySelector('#btnLuuThongTin').onclick = async function () {
    //Lấy giá trị từ người dùng nhập vào đưa vào object sinhVien => gọi apicapnhat 
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
    console.log('sinhVien',sinhVien);
    try {
        //Gọi api cập nhật thông tin sinh viên
        var result = await axios({
            url:`http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${sinhVien.maSinhVien}`,
            method: 'PUT',
            data:sinhVien,
            // headers: {
            //     Authorization: 'Token'
            // }
        })
        alert(result.data);
        //Sau khi cập nhật gọi lại api get để kiểm tra thông tin
        getDataSinhVienApi();

    }catch (errors) {
        console.log(errors.response.data);
    }
}