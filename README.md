# Web-Vegetable-AI: Nhận diện & Quản lý Rau Củ Quả bằng AI

Ứng dụng web chạy bằng HTML5, CSS3, Bootstrap 5 và Vanilla JS thuần (không cần build/compile).

## Cách khởi động ứng dụng

Vì ứng dụng có sử dụng camera (`getUserMedia`) để nhận diện AI, bạn nên khởi chạy thông qua một máy chủ HTTP cục bộ (Local HTTP Server) thay vì mở trực tiếp file HTML để tránh các lỗi bảo mật về phân quyền Camera của trình duyệt.

### Cách 1: Sử dụng VS Code Extension (Khuyên dùng)
1. Cài đặt extension **Live Server** trên VS Code.
2. Mở thư mục dự án `Web-Vegetable-AI`.
3. Nhấn nút **Go Live** ở góc dưới cùng bên phải màn hình VS Code.
4. Trình duyệt sẽ tự động mở trang: `http://127.0.0.1:5500/index.html`.

### Cách 2: Khởi động bằng Command Line (Terminal)
Nếu máy bạn đã cài NodeJS hoặc Python, bạn có thể chạy một trong các lệnh sau tại thư mục dự án:

**Dùng Python:**
```bash
python -m http.server 8000
```
Sau đó truy cập: `http://localhost:8000`

**Dùng NodeJS (npx):**
```bash
npx serve
```
Sau đó truy cập địa chỉ cổng được hiển thị trên terminal (thường là `http://localhost:3000` hoặc `http://localhost:5000`).

---
**Tài khoản đăng nhập dùng thử:**
- **Người dùng cá nhân:** `user@gmail.com` / mật khẩu: `123456`
- **Doanh nghiệp:** `enterprise@gmail.com` / mật khẩu: `123456`