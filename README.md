# Nghiem Tuong Diep — Academic website

Website HTML/CSS/JavaScript thuần. Không cần npm, build hoặc framework.
Toàn bộ file trong ZIP là bản hoàn chỉnh, gồm trang chủ, CV, ảnh, logo, font và PDF.

## Sửa thông tin ở đâu?

| Nội dung                                                     | File                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| Tên, giới thiệu, research interests, email, ảnh đại diện     | `index.html`, section `about`        |
| News, ngày tháng, nội dung thông báo                         | `index.html`, section `news`         |
| Paper, tác giả, hội nghị, năm, ảnh và link                   | `publications.js`                    |
| Nút lọc năm                                                  | `index.html`, section `publications` |
| General Information, Education, Experience, Honors, Services | `cv/index.html`                      |
| Giao diện trang chủ, màu, cỡ chữ, khoảng cách                | `style.css`                          |
| Giao diện CV                                                 | `cv/cv.css`                          |
| Hiển thị danh sách và lọc publication                        | `app.js`                             |
| Dark mode                                                    | `theme.js`                           |
| Highlight menu CV khi cuộn                                   | `cv/cv.js`                           |
| Font chữ local                                               | `fonts.css`, `assets/fonts/`         |
| Ảnh paper, ảnh đại diện và CV PDF                            | `assets/`                            |
| Logo trường/công ty trong CV                                 | `cv/logos/`                          |

## Thêm publication

Mở `publications.js`, copy một object trong mảng `papers`, sửa các field:

```js
{
  year: 2026,
  tag: "ICML",
  title: "Paper title",
  authors: "Author One, <b>Nghiem Tuong Diep</b>, Author Three",
  venue: "International Conference on Machine Learning (ICML), 2026",
  img: "my-paper.png",
  pdf: "https://example.com/paper.pdf",
  code: "https://github.com/username/project",
  project: "https://example.com/project/"
},
```

- Đặt ảnh ở `assets/my-paper.png`.
- `code` và `project` là tùy chọn, có thể bỏ nếu chưa có.
- Paper under review: thêm `status: "review"`, dùng `tag: "Under Review"`.
- Khi accepted: bỏ `status: "review"`, đổi `tag` thành tên hội nghị và sửa `venue`.
- Giữ dấu phẩy giữa các object và dấu nháy quanh chuỗi.
- Thứ tự trong mảng là thứ tự hiển thị; để paper mới trước.
- Số accepted works tự cập nhật. Nếu thêm năm mới, thêm nút `data-year` tương ứng trong `index.html`.
- `publications.js` phải được load trước `app.js` ở cuối trang.

## Cập nhật news

Trong `index.html`, tìm `id="news"`, copy một khối có `<time>` và `<p>`.
Sửa đồng thời `datetime="2026-10-10"` và ngày hiển thị `Oct 10, 2026`.
Dùng 🚀 cho thông báo accepted, 🔔 cho preprint hoặc bản cập nhật.
Giữ nội dung khoảng 1–2 câu, xếp tin mới lên đầu.
Ngày thông báo accepted và ngày đăng arXiv là hai mốc khác nhau.

## Cập nhật CV

Sửa trực tiếp từng section trong `cv/index.html`.
Giữ ID section để menu bên trái hoạt động. Các đường dẫn trong CV dùng `../`
để trỏ tới file chung ở thư mục gốc. Link Google Scholar tiếng Anh dùng `hl=en`.
Nếu sửa nội dung CV web, file PDF tải về không tự thay đổi; thay PDF riêng khi cần.

## Xem thử

Mở `index.html` bằng trình duyệt. Hoặc trong thư mục website chạy:

```sh
python -m http.server 8000
```

Sau đó mở http://localhost:8000/ và http://localhost:8000/cv/.

## Cập nhật GitHub Pages

1. Giải nén ZIP.
2. Copy **toàn bộ nội dung bên trong** vào thư mục gốc repository, ghi đè file trùng tên.
3. Giữ nguyên thư mục `assets/`, `cv/` và các file JavaScript, bao gồm `publications.js` mới.
4. Không copy nguyên thư mục bao ngoài vào một thư mục con của repository.
5. Chạy trong repository:

```sh
git add .
git commit -m "Update academic website"
git push
```

GitHub Pages cần được cấu hình deploy từ branch đang push và thư mục root.
Sau khi deployment hoàn tất, refresh trang; dùng Ctrl+F5 nếu trình duyệt vẫn giữ bản cũ.
