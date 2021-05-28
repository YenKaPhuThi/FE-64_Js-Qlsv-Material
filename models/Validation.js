function Validation() {

    //value: đại diện cho giá trị người dùng nhập
    //selectorError: selector hiển thị lỗi
    this.kiemTraRong = function (value, selectorError, name) {

        if (value.trim() !== '') {
            document.querySelector(selectorError).style.display = 'none';
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống !';
        return false;

    }
    this.kiemTraEmail = function (value, selectorError, name) {
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (regexEmail.test(value)) {
            document.querySelector(selectorError).style.display = 'none';
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML = name + ' email không đúng định dạng !';
        return false;
    }
    this.kiemTraKyTu = function (value, selectorError, name) {
        var regexLetter = /^[A-Z a-z]+$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).style.display = 'none';
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng !';
        return false;
    }

    this.kiemTraDoDai = function (value,selectorError, minLength,maxLength,name) {
        if(value.length < minLength || value.length > maxLength) {
            document.querySelector(selectorError).style.display = 'block';
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự`;
            return false;
        }
        document.querySelector(selectorError).style.display = 'none';
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraGiaTri = function (value,selectorError,minValue,maxValue,name) {
        if(Number(value) < minValue || Number(value) > maxValue) {
            document.querySelector(selectorError).style.display = 'block';
            document.querySelector(selectorError).innerHTML = `${name} từ ${minValue} đến ${maxValue}`;
            return false;
        }
        document.querySelector(selectorError).style.display = 'none';
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}