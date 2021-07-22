function validate() {
    var _0x9903x2 = document['getElementById']('username')['value'];
    var _0x9903x3 = document['getElementById']('password-field')['value'];
    if (_0x9903x2 == 'admin' && _0x9903x3 == '31102001') {
        swal({
            title: '',
            text: 'Xin chào Nguyễn Minh Châu',
            icon: 'success',
            close: true,
            button: false
        });
        window['location'] = 'doc/index.html';
        return true
    };
    if (_0x9903x2 == '' && _0x9903x3 == '') {
        swal({
            title: '',
            text: 'Bạn chưa điền đầy đủ thông tin đăng nhập!',
            icon: 'error',
            close: true,
            button: 'Thử lại'
        });
        return false
    };
    if (_0x9903x2 == 'admin' && _0x9903x3 == '') {
        swal({
            title: '',
            text: 'Bạn chưa nhập mật khẩu!',
            icon: 'warning',
            close: true,
            button: 'Thử lại'
        });
        return false
    };
    if (_0x9903x2 == null || _0x9903x2 == '') {
        swal({
            title: '',
            text: 'Tên tài khoản đang để trống!',
            icon: 'warning',
            close: true,
            button: 'Thử lại'
        });
        return false
    };
    if (_0x9903x3 == null || _0x9903x3 == '') {
        swal({
            title: '',
            text: 'Mật khẩu đang để trống!.',
            icon: 'warning',
            close: true,
            button: 'Thử lại'
        });
        return false
    } else {
        swal({
            title: '',
            text: 'Sai thông tin đang nhập, hãy kiểm tra lại!',
            icon: 'error',
            close: true,
            button: 'Thử lại'
        });
        return true
    }
}

function RegexEmail(_0x9903x5) {
    var _0x9903x6 = document['getElementById'](_0x9903x5)['value'];
    var _0x9903x7 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var _0x9903x8 = _0x9903x7['test'](_0x9903x6);
    if (!_0x9903x8) {
        swal({
            title: '',
            text: 'Bạn vui lòng nhập đúng định dạng email!',
            icon: 'error',
            close: true,
            button: 'Thử lại'
        });
        _0x9903x5['focus']
    } else {
        swal({
            title: '',
            text: 'Chúng tôi vừa gửi cho bạn email hướng dẫn đặt lại mật khẩu vào địa chỉ cho bạn!',
            icon: 'success',
            close: true,
            button: 'Đóng'
        });
        _0x9903x5['focus'];
        window['location'] = '#'
    }
}