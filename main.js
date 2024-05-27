// Bài tập 1
// Mở rộng để xem thêm
// Điểm chuẩn của hội đồng các bạn tự nhập thêm.Điểm chuẩn của 3 môn thường tối đa 30đ.
// Nên có thể lấy các điểm chuẩn như sau: 30, 25, 29
// Ô nhập khu vực, đối tượng có thể tạo bằng input, dropdown hoặc radio.
// Nếu không thuộc khu vực hoặc đối tượng trong danh sách thì điểm khu vực và điểm đối tượng sẽ là 0
// Nếu có 1 trong 3 môn bị điểm 0 thì lặp tức cho rớt không cần kiểm tra tổng điểm có lớn hơn hoặc bằng điểm chuẩn hay không


function ketQua1() {
    let diemChuan = document.getElementById('diem-chuan').value * 1;

    let diem1 = document.getElementById('diem-1').value * 1;
    let diem2 = document.getElementById('diem-2').value * 1;
    let diem3 = document.getElementById('diem-3').value * 1;
    let khuVuc = document.getElementById('khu-vuc').value;
    let doiTuong = document.getElementById('doi-tuong').value * 1;

    let diemUuTien = 0;
    if (khuVuc === 'A') {
        diemUuTien += 2;
    } else if (khuVuc === 'B') {
        diemUuTien += 1;
    } else if (khuVuc === 'C') {
        diemUuTien += 0.5;
    }
    let diemDoiTuong = 0;
    if (doiTuong === 1) {
        diemDoiTuong += 2.5;
    } else if (doiTuong === 2) {
        diemDoiTuong += 1.5;
    } else if (doiTuong === 3) {
        diemDoiTuong += 1
    }
    diemUuTien += diemDoiTuong;

    let diemTongKet = diem1 + diem2 + diem3 + diemUuTien;

    let ketQua = 0;
    if (diemTongKet >= diemChuan && diem1 !== 0 && diem2 !== 0 && diem3 !== 0) {
        ketQua = "Thí sinh đậu với tổng số điểm là: " + diemTongKet;
    } else {
        ketQua = "Thí sinh rớt";
    }

    document.querySelector('.alert').innerHTML = ketQua;
}

// Bài tập 2


function tienDien(e) {
    let soKW = document.getElementById('soKW').value;
    let tienDien = 0;

    if (soKW <= 50) {
        tienDien = soKW * 500;
    } else if (soKW <= 100) {
        tienDien = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }

    document.getElementById('baiTap2').innerText = `Số tiền phải trả là ${tienDien.toLocaleString
        ('vi', {
            style: 'currency',
            currency: 'VND',
        })
        }`
}

//Bài tập 3

// Tổng thu nhập năm các bạn tự nhập thêm.Giả sử 1 tháng thu nhập 10tr thì 1 năm sẽ là 10 x 12 = 120tr => các bạn sẽ nhập 120000000
// Demo hiện tại đang tính % thuế theo điều kiện mà thu nhập chịu thuế rơi vào.Vd: thu nhập chịu thuế là 110tr thì tính 10 % của 110tr => 110tr * 0.1
// Do đề bài không ghi rõ yêu cầu tính thuế nên cũng có thể tính theo cách chia ra từng đoạn thuế giống bài tính tiền grab.Vd: 110tr => 60tr * 0.05 + (110tr - 60tr) * 0.1
// Sử dụng input có type number thì khi nhập 120000000, có thể nhập ngắn gọn thành 120e+6
// Đối với các con số hàng triệu có nhiều số 0, có thể viết ngắn gọn trong code như sau:
// 4tr => 4000000 => 4e+6
// Dùng NumberFormat để số tiền hiển thị đẹp hơn: NumberFormat


function tinhTienThue() {
    let hoTen = document.getElementById('hoTen').value;
    let thuNhap = +document.getElementById('thuNhap').value;
    let phuThuoc = +document.getElementById('phuThuoc').value;

    thuNhapChiuThue = thuNhap - 4000000 - phuThuoc * 1600000;
    let thueSuat = 0;

    if (thuNhapChiuThue < 60000000) {
        thueSuat = 0.05;
    } else if (thuNhapChiuThue >= 60000000 && thuNhapChiuThue < 120000000) {
        thueSuat = 0.1;
    } else if (thuNhapChiuThue >= 120000000 && thuNhapChiuThue < 210000000) {
        thueSuat = 0.15;
    } else if (thuNhapChiuThue >= 210000000 && thuNhapChiuThue < 384000000) {
        thueSuat = 0.2;
    } else if (thuNhapChiuThue >= 384000000 && thuNhapChiuThue < 624000000) {
        thueSuat = 0.25;
    } else if (thuNhapChiuThue >= 624000000 && thuNhapChiuThue < 960000000) {
        thueSuat = 0.3;
    } else if (thuNhapChiuThue >= 960000000) {
        thueSuat = 0.35;
    }

    thuePhaiTra = thuNhapChiuThue * thueSuat;
    document.getElementById('baitap3').innerHTML = `Họ tên: ${hoTen}, Thuế thu nhập cá nhân phải trả: ${thuePhaiTra.toLocaleString
        ('vi', {
            style: 'currency',
            currency: 'VND',
        })
        }`;
}

// Bài tập 4

// Mở rộng để xem thêm
// Sử dụng event onchange của dropdown để xử lý ẩn hiện cho ô nhập số kết nối khi chọn loại khách hàng: Onchange
// Đối với loại khách hàng Doanh Nghiệp, tổng 10 kết nối đầu là 75$
//     => đây là giá trọn gói, nếu doanh nghiệp lắp đặt số kết nối nhỏ hơn 10 thì vẫn phải đóng 75$.
//         Vd: 6 kết nối thì vẫn sẽ cộng 75$ vào tổng tiền.
// => Nếu lắp trên 10 kết nối thì kết nối thứ 11 trở đi sẽ tính 5$ / kết nối.

function tinhTienCap() {
    let loaiKhachHang = document.getElementById("khachHang").value;
    let maKhachHang = document.getElementById("maKhachHang").value;
    let soKenh = parseInt(document.getElementById("soKenh").value);
    let soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
    let tongTien = 0;

    if (loaiKhachHang === "nhaDan") {
        tongTien = 4.5 + 20.5 + (7.5 * soKenh);
    } else if (loaiKhachHang === "doanhNghiep") {
        if (soKetNoi <= 10) {
            tongTien = 15 + 75 + (50 * soKenh);
        } else {
            tongTien = 15 + 75 + ((soKetNoi - 10) * 5) + (50 * soKenh);
        }
    } else {
        alert("Vui lòng chọn loại khách hàng.");
        return;
    }

    document.getElementById("baiTap4").innerText = "Mã khách hàng: " + maKhachHang + " - Tổng tiền cáp: $" + tongTien.toFixed(2);
}

function toggleSoKetNoi() {
    let loaiKhachHang = document.getElementById("khachHang").value;
    let soKetNoiContainer = document.getElementById("soKetNoiContainer");

    if (loaiKhachHang === "doanhNghiep") {
        soKetNoiContainer.style.display = "block";
    } else {
        soKetNoiContainer.style.display = "none";
    }
}