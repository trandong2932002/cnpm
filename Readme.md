# Ngân Hàng Số

## Giới thiệu

Trong quá trình phát triển của xã hội loài người, khi sản xuất hàng hoá phát triển thì kéo theo sự hình thành và phát triển của các quan hệ thương mại giữa các khu vực, giữa các quốc gia sử dụng các đồng tiền khác nhau. Việc mua, bán, trao đổi hàng hoá giữa các khu vực, giữa các quốc gia sử dụng đồng tiền khác nhau làm nảy sinh nhu cầu đổi tiền. Cùng với sự phát triển của nền văn minh nhân loại, nghề đổi tiền và các dịch vụ kinh doanh tiền tệ cũng phát triển trở thành một nghề kinh doanh và được gọi là nghề ngân hàng. Chúng tôi, ngân hàng số CON MÈO, luôn đi đầu trong ngành về độ tin cậy với các dịch vụ chăm sóc khách hàng tận tình tận tâm. Chúng tôi chuyên cung cấp các dịch vụ gửi tiền; tín dụng có hạn mức cao; thanh toán thẻ và thanh toán online nhanh chóng; cho vay với lãi suất hấp dẫn…

## Đặc tả

### Chú thích

- *Người dùng* là *khách vãng lai* đã đăng nhập.
- *Khách hàng* là tên gọi chung *người dùng* và *khách vãng lai*.

### Phần dành cho khách vãng lai

- Khách vãng lai có thể xem các thông tin về ngân hàng như: các thông tin khi đăng ký tài khoản, các dịch vụ ưu đãi, thông tin về lãi suất.
- Khách vãng lai phải đăng ký tài khoản để sử dụng các tính năng của ngân hàng. Sau khi đăng ký, khách vãng lai trở thành người dùng.
- Khi có thắc mắc, khách vãng lai có thể bấm vô nút **Chăm sóc khách hàng** để liên hệ với bộ phận chăm sóc khách hàng thông quan ô chat, hoặc nguời dùng vãng lai gọi điện trực tiếp tới số diện thoại được ghi trên trang.

### Phần dành cho người dùng

- Người dùng được xem mọi thông tin mà khách vãng lai xem được, và có thể liên hệ với bộ phân chăm sóc khách hàng.
- Người dùng được cấp mọt dãy số gọi là số tài khoản. Mọi giao dịch đều dựa trên số tài khoản này.
- Người dùng có thể chỉnh sửa thông tin tài khoản, đăng xuất.
- Để nạp tiền, người dùng mang tiền đến cho nhân viên ngân hàng nhờ nạp hộ.
- Để chuyển tiền cho người khác, người dùng bấm vô phần **Chuyển khoản** và thực hiện các yêu cầu.
- Đẻ thanh toán hoá dơn điện nước của các công ty có liên kết, người dùng bấm vô phần **Thanh toán hoá đơn** và thực hiện các yêu cầu.
- Để gửi tiết kiệm, người dùng bấm vô phần **Gửi tiết kiệm** và thực hiện các yêu cầu.
- Để vay tiền, người dùng bấm vô phần **Tạo khoản vay** và thực hiện các yêu cầu.
- Để xem lịch sử giao dịch, người dùng bấm vô phần **Lịch sử giao dịch**.
- Để sao kê tài khoản, người dùng bấm vô phần **Lịch sử giao dịch**, bấm vô phần **Sao kê** và thực hiện các yêu cầu.

### Phần dành cho nhân viên

- Nhân viên phải đăng nhập vô trang của nhân viên để sử dụng. Tài khoản của nhân viên được cấp bởi chủ ngân hàng.
- Nhân viên được xem các thông tin cá nhân của người dùng và thông tin số dư, nợ, lịch sử giao dịch; và có thể sửa các thông tin cá nhân của người dùng hoặc sao kê nếu được người dùng cho phép.
- Nhân viên nạp tiền hộ người dùng.
- Nhân viên có thể thực hiện giao dịch hộ người dùng (chuyển khoản, thanh toán hoá đơn, gửi tiết kiệm) nếu được người dùng cho phép.
- Nhân viên tạo khoản vay hộ người dùng nếu phù hợp với các điều kiện của ngân hàng.
- Nhân viên sẽ thấy được các tin nhắn của khách hàng gửi tới, hoặc cuộc gọi của khách hàng gọi (chăm sóc khách hàng).

### Phần dành cho chủ ngân hàng

- Chủ ngân hàng có thể đăng nhập vô trang của nhân viên (chủ ngân hàng có toàn quyền của nhân viên) hoặc trang của của ngân hàng để sử dụng.
- Chủ ngân hàng có toàn quyền quản lý nhân viên và người dùng.
- Chủ ngân hàng được xem các hoạt động của ngân hàng như tổng tiền gửi, tổng tiền cho vay.
- Chủ ngân hàng được chỉnh sửa các thông tin về lãi suất của ngân hàng.

## Use Case Modelling

![alt](./diagrams/use_case.svg)

## Mô tả Use Case

### Phần của khách vãng lai

<details><summary>Bảng mô tả</summary>

| **Use Case** | Đăng ký tài khoản |
|---|---|
| **Actors** | Khách vãng lai |
| **Description** | Khách vãng lai đăng ký tài khoản để sử dụng những dịch vụ của ngân hàng |
| **Pre-Conditions** | Không có |
| **Post-Conditions** | Tài khoản được tạo, chuyển đến **Trang đăng nhập** |
| **Main Flow** | 1. Bấm vào nút **Đăng ký**<br>2. Nhập đầy đủ thông tin, bấm **Tạo** [A1]<br> 3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1] [E2] |
| **Alternative Flows** | [A1] Bấm vào nút **Hủy**<br> Post-Condition: Tài khoản không được tạo, chuyển đến **Trang chủ** |
| **Exception Flows** | [E1] Nhập các thông tin định danh cá nhân (Vd: email) không hợp lệ hoặc đã tồn tại trên hệ thống<br>[E2] Xác thực không hoàn tất |

| **Use Case** | Đăng nhập |
|---|---|
| **Actors** | Khách vãng lai |
| **Description** | Khách đã đăng ký tài khoản đăng nhập để sử dụng tài khoản ngân hàng của mình |
| **Pre-Conditions** | Đã đăng ký tài khoản |
| **Post-Conditions** | Đăng nhập thành công và chuyển đến **Trang chủ của người dùng** |
| **Main Flow** | 1. Bấm vào nút **Đăng nhập**<br>2. Nhập tài khoản, mật khẩu, bấm **Đăng nhập** [A1][E1]<br>3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E2] |
| **Alternative Flows** | [A1] Người dùng bấm **Hủy**<br> Post-Condition: Đăng nhập không hoàn tất, chuyển đến **Trang chủ** |
| **Exception Flows** | 1. Người dùng thoát ra<br>2. Tài khoản không tồn tại hoặc mật khẩu không đúng<br>3. Xác thực không hoàn tất |

</details>

### Phần của khách vãng lai và người dùng

<details><summary>Bảng mô tả</summary>

| **Use Case** | Xem các thông tin về ngân hàng |
|---|---|
| **Actors** | Khách vãng lai, người dùng |
| **Description** | Khách vãng lai được xem các thông tin về ngân hàng như: các thông tin khi đăng ký tài khoản, các dịch vụ ưu đãi, thông tin về lãi suất |
| **Pre-Conditions** | Không |
| **Post-Conditions** | Không |
| **Main Flow** | Bấm **Trang chủ**, vào **Dịch vụ** để xem thông tin |
| **Alternative Flows** | Không |
| **Exception Flows** | Không |

| **Use Case** | Liên hệ với bộ phận Chăm sóc khách hàng |
|---|---|
| **Actors** | Khách vãng lai, người dùng |
| **Description** | Khi người dùng hoặc khách vãng lai có thắc mắc cần liên hệ với ngân hàng để giải đáp |
| **Pre-Conditions** | Không |
| **Post-Conditions** | Trang chủ |
| **Main Flow** | 1. Bấm vào nút **Chăm sóc khách hàng** để chat với bộ phận chăm sóc khách hàng<br>2. Sau khi liên hệ hoàn tất, bấm vào **Kết thúc** và cho đánh giá [A1] |
| **Alternative Flows** | [A1] Bấm **Thoát**<br> Post-Condition: Vấn đề của khách hàng không được giải quyết, chuyển đến **Trang chủ** |
| **Exception Flows** | Không có |

</details>

### Phần của người dùng

<details><summary>Bảng mô tả</summary>

| **Use Case** | Đăng xuất |
|---|---|
| **Actors** | Người dùng |
| **Description** | Người dùng đăng xuất |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Hệ thống hủy phiên đăng nhập của người dùng và người dùng không còn trong trạng thái đăng nhập nữa |
| **Main Flow** | 1. Bám vào biểu tượng tài khoản<br>2. Chọn **Đăng xuất** <br>3. Bấm **Xác nhận** [A1]  |
| **Alternative Flows** | [A1] Người dùng bấm **Huỷ**<br> Post-Condition: Không đăng xuất và quay về trang chủ |
| **Exception Flows** | Không |

| **Use Case** | Xem/sửa thông tin cá nhân |
|---|---|
| **Actors** | Người dùng |
| **Description** | Người dùng có thể thay đổi các thông tin cá nhân của mình bằng tính năng này |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Thông tin cá nhân của người dùng được thay đổi trên hệ thống |
| **Main Flow** | 1. Bấm vào biểu tượng tài khoản<br>2. Chọn **Sửa thông tin cá nhân**<br>3. Thực hiện các thay đổi, bấm **Lưu** [A1]<br>4. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1][E2] |
| **Alternative Flows** | [A1] Người dùng bấm **Hủy**<br> Post-Condition: Thông tin cá nhân của người dùng không được thay đổi, trở về **Trang chủ** |
| **Exception Flows** | [E1] Thông tin cá nhân mới không hợp lệ hoặc trùng với thông tin cũ hoặc trùng với thông tin của tài khoản khác trong cơ sở sữ liệu<br>[E2] Xác thực không hoàn tất |

| **Use Case** | Chuyển khoản |
|---|---|
| **Actors** | Người dùng |
| **Description** | Người dùng chuyển tiền của mình cho người khác, hoặc thực hiện giao dịch như mua hàng |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu chuyển khoản được thực hiện và được hệ thống ghi lại |
| **Main Flow** | 1. Chọn **Chuyển khoản**<br>2. Nhập số tiền cần chuyển, nhập số tài khoản cần chuyển, bấm **Chuyển** [A1][E1][E2]<br>3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E3] |
| **Alternative Flows** | [A1] Người dùng bấm **Hủy**<br> Post-Condition: Giao dịch không được thực hiện |
| **Exception Flows** | [E1] Số dư không đủ<br> [E2] Tài khoản thụ hưởng không tồn tại<br> [E3] Xác thực không hoàn tất |

| **Use Case** | Thanh toán hoá đơn |
|---|---|
| **Actors** | Người dùng |
| **Description** | Người dùng có thể thanh toán hoá đơn điện, nước nếu công ty cung cấp dịch vụ tương ứng có liên kết với ngân hàng này |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu thanh toán hóa đơn được thực hiện và được hệ thống ghi lại |
| **Main Flow** | 1. Chọn **Thanh toán hoá đơn**<br>2. Chọn công ty cung cấp dịch vụ điện/nước, nhập mã khách hàng, bấm **Thanh toán** [A1][E1][E2]<br> 3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E3] |
| **Alternative Flows** | [A1] Người dùng bấm **Hủy**<br> Post-Condition: Giao dịch không được thực hiện |
| **Exception Flows** | [E1] Số dư không đủ<br> [E2] Nhà cung cấp dịch vụ thông báo không thể thanh toán (do tài khoản của dịch vụ không tồn tại, hoặc dịch vụ đã được thanh toán nên không còn đơn để thanh toán)<br> [E3] Xác thực không hoàn tất |

| **Use Case** | Gửi tiết kiệm |
|---|---|
| **Actors** | Người dùng |
| **Description** | Gửi tiết kiệm với lãi suất tốt |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu gửi tiết kiệm được thực hiện và được hệ thống ghi lại |
| **Main Flow** | 1. Chọn **Gửi tiết kiệm**, bấm nút **Tạo khoản gửi tiết kiệm mới**<br>2. Điền đủ thông tin, bấm **Gửi tiết kiệm** [A1][E1]<br>4. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E2] |
| **Alternative Flows** | [A1] Người dùng bấm **Hủy**<br> Post-Condition: Khoản gửi tiết kiệm không được tạo |
| **Exception Flows** | [E1] Số dư không đủ<br> [E2] Xác thực không hoàn tất |

| **Use Case** | Tạo yêu cầu vay |
|---|---|
| **Actors** | Người dùng |
| **Description** | Tạo yêu cầu vay tiền, yêu cầu sẽ được ngân hàng xem xét và đánh giá. Ngân hàng sẽ liên hệ lại và yêu cầu gặp mặt trực tiếp để kiểm tra điều kiện kinh tế, sau đó sẽ quyết định có chấp nhận yêu cầu vay tiền hay không |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu vay được thực hiện và được hệ thống ghi lại |
| **Main Flow** | 1. Chọn **Tạo khoản vay**, bấm nút **Tạo khoản gửi tiếp kiệm mới** [A1]<br>3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1] |
| **Alternative Flows** | [A1] Người dùng bấm **Hủy**<br> Post-Condition: Yêu cầu vay không được tạo |
| **Exception Flows** | [E1] Xác thực không hoàn tất |

| **Use Case** | Xem lịch sử giao dịch, sao kê |
|---|---|
| **Actors** | Người dùng |
| **Description** | Xem lịch sử các giao dịch đã tạo, sao kê lại nếu cần |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu sao kê được thực hiện và được hệ thống ghi lại |
| **Main Flow** | 1. Chọn **Khác**  <br>2. Chọn **Lịch sử giao dịch**, người dùng sẽ thấy lịch sử giao dịch<br>3. Nếu cần sao kê, người dùng bấm **Sao kê**, chọn ngày bắt đầu và kết thức để hệ thống tạo sao kê [A1]<br> 4. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1] |
| **Alternative Flows** | [A1] Người dùng bấm **Hủy**<br> Post-Condition: Yêu cầu sao kê không được thực hiện |
| **Exception Flows** |  [E1] Xác thực không hoàn tất |

</details>

### Phần của nhân viên

<details><summary>Bảng mô tả</summary>

| **Use Case** | Tiếp nhận liên hệ của khách hàng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên sẽ thấy các yêu cầu chat mà khách hàng gửi đến. Nhân viên bấm vô khách hàng cần tư vấn để tư vấn |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu liên hệ của khách hàng được chấp thuận và khách hàng được nhắn trực tiếp với nhân viên, hệ thống sẽ ghi lại hoạt động của nhân viên |
| **Main Flow** | Đối với chat, sau khi nhận được yêu cầu chat từ khách hàng<br>1. Chọn **Yêu cầu chăm sóc khách hàng** và bấm chọn khách hàng trong **Danh sách khách hàng đang chờ** được tư vấn [E1]<br>2. Sau khi tư vấn, nhân viên chọn **Kết thúc** để kết thúc phiên tư vấn |
| **Alternative Flows** | Không |
| **Exception Flows** | [E1] Khi đang tư vấn, khách hàng hủy yêu cầu tư vấn |

| **Use Case** | Xem/sửa thông tin hộ khách hàng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên được xem thông tin của người dùng và các giao dịch; được sửa thông tin của người dùng nếu được người dùng cho phép |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Thông tin của khách hàng được chỉnh sửa bởi nhân viên, hệ thống sẽ ghi hoạt động của nhân viên |
| **Main Flow** | 1. Chọn **Người dùng** để xem thông tin người dùng<br>2. Để chỉnh sửa, chọn **Yêu cầu chỉnh sửa**<br>3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1]<br>4. Sau khi xác thực hoàn tất, nhân viên được quyền sửa thông tin khách hàng, bấm **Chỉnh sửa** [A1][E2]<br> 5. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1] |
| **Alternative Flows** | [A1] Nhân viên bấm **Hủy**<br> Post-Condition: Yêu cầu chỉnh sửa thông tin khách hàng bị hủy |
| **Exception Flows** | [E1] Xác thực không hoàn tất<br> [E2] Thông tin cá nhân mới không hợp lệ hoặc trùng với thông tin cũ hoặc trùng với thông tin của tài khoản khác trong cơ sở sữ liệu |

| **Use Case** | Nạp tiền cho người dùng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên nhận tiền của người dùng và nạp tiền vô tài khoản cho người dùng (trực tiếp) |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Tài khoản của khách hàng được nạp tiền, hệ thống sẽ ghi lại giao dịch và hoạt động của nhân viên |
| **Main Flow** | 1. Chọn **Thông tin người dùng**<br>2. Chọn **Nạp tiền**<br>3. Nhập số tiền cần nạp<br>4. Bấm **Nạp** |
| **Alternative Flows** | Không |
| **Exception Flows** | Không |

| **Use Case** | Thanh toán hộ người dùng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên có thể thanh toán hộ người dùng |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu thanh toán của khách hàng được thực hiện, hệ thống sẽ ghi lại giao dịch và hoạt động của nhân viên |
| **Main Flow** | 1. Chọn **Người dùng**<br>2. Chọn **Thanh toán hộ**<br>3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1]<br>4. Sau khi xác thực hoàn tất, nhân viên bấm **Thanh toán** [A1][E2]<br>5. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1] |
| **Alternative Flows** | [A1] Nhân viên bấm **Hủy**<br> Post-Condition: Yêu cầu thanh toán hộ không được thực hiện |
| **Exception Flows** | [E1] Xác thực không hoàn tất<br> [E2] Số dư không đủ |

| **Use Case** | Gửi tiết kiệm hộ người dùng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên có thể gửi tiết kiệm hộ người dùng |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu gửi tiết kiệm của khách hàng được thực hiện, hệ thống sẽ ghi lại giao dịch và hoạt động của nhân viên |
| **Main Flow** | 1. Chọn **Người dùng**<br>2. Chọn **Gửi tiết kiệm hộ**<br>3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1]<br>4. Sau khi xác thực hoàn tất, nhân viên bấm **Gửi tiết kiệm** [A1]<br>5. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1] |
| **Alternative Flows** | [A1] Nhân viên bấm **Hủy**<br> Post-Condition: Yêu cầu gửi tiết kiệm hộ không được thực hiện |
| **Exception Flows** | [E1] Xác thực không hoàn tất<br> [E2] Số dư không đủ |

| **Use Case** | Tạo yêu cầu vay cho người dùng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên tạo yêu cầu vay cho người dùng |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu vay của khách hàng được tạo, hệ thống sẽ ghi lại hoạt động của nhân viên |
| **Main Flow** | 1. Chọn **Người dùng**<br>2. Chọn **Tạo yêu cầu vay hộ**<br> 3. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1]<br> 4. Nhập thông tin, bấm **Tạo** [A1]<br> 5. Hệ thống sẽ gửi yêu cầu xác thực, người dùng xác thực [E1] |
| **Alternative Flows** | [A1] Nhân viên bấm hủy<br> Post-Condition: Yêu cầu vay không được tạo |
| **Exception Flows** | [E1] Xác thực không hoàn tất |

| **Use Case** | Xem xét yêu cầu vay của người dùng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên sau khi đánh giá tình trạng kinh tế của người dùng có thể chấp nhận hoặc từ chối yêu cầu vay, nếu chấp nhận, tiền sẽ được chuyển tự động theo lịch |
| **Pre-Conditions** | Đã đăng nhập, Yêu cầu vay của khách hàng đã được tạo |
| **Post-Conditions** | Yêu cầu vay của khách hàng được thay đổi trạng thái thành chấp thuận hoặc từ chối. Sau khi đổi trạng thái, yêu cầu vay biến mất ở **Yêu cầu vay** và xuất hiện ở **Các khoản vay**. Hệ thống sẽ ghi lại hoạt động của nhân viên |
| **Main Flow** | 1. Chọn **Vay**<br> 2. Chọn **Yêu cầu vay**<br>3. Chọn yêu cầu vay của khách hàng<br> 4. Thay đổi trạng thái của yêu cầu vay (chấp thuận/từ chối) [A1] |
| **Alternative Flows** | [A1] Nhân viên bấm **Hủy**<br> Post-Condition: Yêu cầu vay được giữ nguyên trạng thái |
| **Exception Flows** | Không |

| **Use Case** | Xem lịch sử giao dịch/sao kê hộ người dùng |
|---|---|
| **Actors** | Nhân viên |
| **Description** | Nhân viên được xem/sao kê lịch sử giao dịch của người dùng nếu được phép |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Yêu cầu sao kê của khách hàng được tạo, hệ thống sẽ ghi lại hoạt động của nhân viên |
| **Main Flow** | 1. Chọn **Thông tin người dùng**<br>2. Chọn **Lịch sử giao dịch**<br>3. Bấm **Sao kê**, chọn ngày bắt đầu và ngày kết thúc, bấm **Tạo** [A1] |
| **Alternative Flows** | [A1] Nhân viên bấm **Hủy**<br> Post-Condition: Yêu cầu sao kê không được thực hiện|
| **Exception Flows** | Không |

</details>

### Phần của chủ

<details><summary>Bảng mô tả</summary>

| **Use Case** | Quản lý nhân viên |
|---|---|
| **Actors** | Chủ |
| **Description** | Chủ được toàn quyền xem/sửa thông tin của nhân viên |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Thông tin của nhân viên được thay đổi trên hệ thống |
| **Main Flow** | 1. Chọn **Nhân viên**<br>2. Chọn nhân viên cần xem/sửa và xem/sửa [A1] |
| **Alternative Flows** | [A1] Chủ bấm **Hủy** |
| **Exception Flows** | Không |

| **Use Case** | Quản lý người dùng |
|---|---|
| **Actors** | Chủ |
| **Description** | Chủ được toàn quyền xem thông tin của người dùng |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Không |
| **Main Flow** | 1. Chọn **Người dùng**<br>2. Chọn người dùng và xem |
| **Alternative Flows** | Không |
| **Exception Flows** | Không |

| **Use Case** | Chỉnh sửa các thông tin về lãi suất |
|---|---|
| **Actors** | Chủ |
| **Description** | Chủ được toàn quyền sửa các loại lãi suất của ngân hàng |
| **Pre-Conditions** | Đã đăng nhập |
| **Post-Conditions** | Thông tin về lãi suất bị thay đổi, hệ thống sẽ ghi lại |
| **Main Flow** | 1. Chọn **Hệ thống ngân hàng**<br>2. Chọn **Lãi suất**<br> 3. Sau khi sửa bấm **Lưu** [A1] |
| **Alternative Flows** | [A1] Chủ bấm **Hủy** |
| **Exception Flows** | Không |

</details>

## Conceptual Modelling (Class Diagram)

![alt](./diagrams/class_diagram.svg)
