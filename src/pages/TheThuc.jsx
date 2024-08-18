import React from 'react';

import { Collapse } from "antd";

import '../styles/thethuc.scss';

function TheThuc() {

    const para1 = (
        <React.Fragment>
            <h3>1. FREE LEAGUE CÓ THƯỞNG</h3>
            <div>Đối tượng: Tất cả người chơi có trong group này</div>
            <div>Quy định: Đang câp nhật</div>
            <div>Số lượng thành viên: Không giới hạn</div>
            <div>Lệ phí: Free</div>
            <div>Công cụ giao tiếp: Nhóm Messenger</div>
        </React.Fragment>
    )

    const para2_1 = (
        <React.Fragment>
            <h4>2.1. AMVN CLASSIC FAN LEAGUE</h4>
            <h5>2.1.1. THỂ THỨC</h5>
            <div>/Tạo 1 league Classic cho tất cả người chơi. Tính điểm từ Gameweek 1 đến 38</div>
            <h5>2.1.2. CÔNG CỤ QUẢN LÝ</h5>
            <div>/Tính theo điểm trên hệ thống trang chủ của game</div>
            <h5>2.1.3. DANH SÁCH TRAO GIẢI</h5>
            <ul>
                <li>Nhất Gameweek: 38 giải</li>
                <li>Nhất tháng: 10 giải</li>
                <li>Top 4 classic mùa.</li>
            </ul>
            <h5>2.1.4. TÍNH ĐIỂM</h5>
            <i>2.1.4.1. Điểm để xét giải Gameweek:</i>
            <div>Điểm được tính sau khi đã trừ điểm chuyển nhượng quá lượt miễn phí.</div>
            <i>2.1.4.2. Nội dung phạm luật:</i>
            <i>2.1.4.2.1: Giải Gameweek</i>
            <ul>
                <li>Người chơi vi phạm 1 trong 3 tiêu chí dưới đây được coi là phạm luật</li>
                <li>Không chuyển nhượng ở 3 Gameweek liên tiếp (01)</li>
                <li>Không thay người ở 3 Gameweek liên tiếp: (02)</li>
                <li>Việc thay người được tính như sau:
                    <ul>
                        <li>Thay cầu thủ dự bị vào team chính và ngược lại.</li>
                        <li>Thay đổi thứ tự cầu thủ trên dự bị.</li>
                    </ul>
                </li>
                <li>Tổng chuyển nhượng âm của Gameweek được xét đến vượt quá -8 (03)</li>
                <li>Nếu người chơi được xét Giải Gameweek phạm luật, giải sẽ được chuyển sang cho người chơi không phạm luật có thứ hạng ngay phía dưới người chơi phạm luật trên BXH.</li>
            </ul>
            <i>2.1.4.2.2: Giải Tháng</i>
            <ul>
                <li>/Người chơi vi phạm 1 trong 3 tiêu chí dưới đây được coi là phạm luật:</li>
                <ul>
                    <li>Không chuyển nhượng ở 3 Gameweek liên tiếp (01)</li>
                    <li>Tiêu chí này không áp dụng cho tháng chỉ có 2 Gameweek.</li>
                    <li>Không thay người ở 3 Gameweek liên tiếp: (02)</li>
                </ul>
                <li>Việc thay người được tính như sau:</li>
                <ul>
                    <li>Thay cầu thủ dự bị vào/ra.</li>
                    <li>Thay đổi thứ tự cầu thủ trên dự bị</li>
                </ul>
                <li>Tổng chuyển nhượng âm của một Gameweek trong tháng vượt quá -8 (03)</li>
                <li>Nếu người chơi được xét Giải Tháng phạm luật, giải sẽ được chuyển sang cho người chơi không phạm luật có thứ hạng ngay phía dưới người chơi phạm luật trên BXH.</li>
            </ul>

            <i>2.1.4.2.3. Giải Classic mùa</i>
            <ul>
                <li>Không chuyển nhượng ở 3 Gameweek liên tiếp (01)</li>
                <li>Không thay người ở 3 Gameweek liên tiếp: (02)</li>
                <li>Việc thay người được tính như sau:
                    <ul>
                        <li>Thay cầu thủ dự bị vào team chính và ngược lại.</li>
                        <li>Thay đổi thứ tự cầu thủ trên dự bị.</li>
                    </ul>
                </li>
                <li>Tổng chuyển nhượng âm của một Gameweek trong mùa vượt quá -8 (03)</li>
                <li><div>{'Người chơi phạm luật khi vi phạm (01) + (02) + (03) >= 2 lần'}</div></li>
                <li>Vị trí của người chơi phạm luật trong diện được xét giải Classic mùa sẽ bị đẩy xuống 1 bậc và được thay thế bởi người chơi không phạm luật có thứ hạng ngay phía dưới trên BXH.</li>
            </ul>
            <i>2.1.4.3. Chọn người thắng khi điểm bằng nhau</i>
            <i>2.1.4.3.1. Giải Gameweek:</i>
            <div>Xét các tiêu chí phụ theo thứ tự từ ưu tiên từ trên xuống dưới:</div>
            <ul>
                <li>Tổng số ĐIỂM TRỪ ÍT HƠN BỞI CHUYỂN NHƯỢNG QUÁ LƯỢT (nếu có) tại Gameweek được xét đến</li>
                <li>Số điểm nhiều hơn của captain: Nếu người chơi dùng chip tripple captain thì tính điểm tripple captain</li>
                <li>Số bàn thắng nhiều hơn của 11 cầu thủ: có tính cả cầu thủ dự bị khi người chơi dùng chip Bench Boost</li>
                <li>Giá trị đội hình cao hơn: Lần cập nhật đầu tiên của trang chủ sau khi Gameweek được xét đến kết thúc</li>
            </ul>
            <i>2.1.4.3.2. Giải Tháng:</i>
            <div>Xét các tiêu chí phụ theo thứ tự từ ưu tiên từ trên xuống dưới:</div>
            <ul>
                <li>Tổng điểm captain nhiều hơn của tất cả các Gameweek trong tháng:</li>
                <li>Nếu người chơi dùng chip tripple captain thì tính điểm tripple captain</li>
                <li>Giá trị đội hình cao hơn: Lấy giá trị trong lần cập nhật đầu tiên của trang chủ sau khi Gameweek cuối cùng của tháng kết thúc.</li>
            </ul>
            <i>2.1.4.3.3. Giải Classic mùa</i>
            <div>Giá trị đội hình cao hơn: Lấy giá trị trong lần cập nhật đầu tiên của trang chủ sau khi Gameweek cuối cùng của mùa giải kết thúc.</div>
            <h5>2.1.5. GIÁ TRỊ GIẢI THƯỞNG (64 người đăng ký)</h5>
            <ul>
                <li>Nhất Gameweek: 100k</li>
                <li>Nhất Tháng: 100k</li>
                <li>Nhất Classic mùa: 2.500k</li>
                <li>Nhì Classic mùa: 1.500k</li>
                <li>Ba Classic mùa: 1.000k</li>
                <li>Bốn Classic mùa: 500k</li>
            </ul>
        </React.Fragment>
    )

    const para2_2 = (
        <React.Fragment>
            <h4>2.2. AMVN EUROPEAN CUP</h4>
            <h5>2.2.1. THỂ THỨC</h5>
            <div>Như link: https://www.facebook.com/groups/amvnfantasy/posts/8054642971316070</div>
            <h5>2.2.2. CÔNG CỤ QUẢN LÝ</h5>
            <div>Website: <a href="http://amvn.top">http://amvn.top</a></div>
            <h5>2.2.3. DANH SÁCH TRAO GIẢI</h5>
            <ul>
                <li>Vô địch Nhóm C1: 2 giải</li>
                <li>Vô địch Nhóm C2: 2 giải</li>
                <li>Vô địch Nhóm C3: 2 giải</li>
                <li>Vô địch Nhóm C4: 2 giải</li>
                <li>Giải nhì Nhóm C1: 2 giải</li>
                <li>Giải nhì Nhóm C2: 2 giải</li>
                <li>Giải nhì Nhóm C3: 2 giải</li>
                <li>Giải nhì Nhóm C4: 2 giải</li>
                <li>Giải ba Nhóm C1: 2 giải</li>
                <li>Giải ba Nhóm C2: 2 giải</li>
                <li>Giải ba Nhóm C3: 2 giải</li>
                <li>Giải ba Nhóm C4: 2 giải</li>
            </ul>
            <i>2.1.2.4. TÍNH ĐIỂM</i>
            <div>Điểm được tính theo website: Dữ liệu được lấy trực tiếp từ trang chủ game</div>
            <i>2.1.2.4.1. Xét thứ hạng khi điểm bằng nhau</i>
            <i>2.1.2.4.1.1 Giai đoạn 1 (giai đoạn phân nhóm)</i>
            <ul>
                <li>Xét các tiêu chí phụ theo thứ tự từ ưu tiên từ trên xuống dưới:</li>
                <li>Xét giá trị đội hình cao hơn:</li>
                <li>Lấy giá trị trong lần cập nhật đầu tiên của trang chủ sau khi Gameweek 4 (lượt đi) và Gameweek 23 (lượt về) kết thúc.</li>
                <li>Xét tổng điểm captain:</li>
                <li>Người chơi có tổng điểm captain của 4 Gameweek cộng lại cao hơn sẽ xếp trên.
                    <ul>
                        <li>Gameweek 01 đến Gameweek 04 cho lượt đi</li>
                        <li>Gameweek 20 đến Gameweek 23 cho lượt về</li>
                    </ul>
                </li>
                <li>Nếu người chơi dùng chip tripple captain thì tính điểm tripple captain</li>
            </ul>
            <i>2.1.2.4.1.2. Giai đoạn 2 (tranh vé vào tứ kết)</i>
            <ul>
                <li>Xét các tiêu chí phụ theo thứ tự từ ưu tiên từ trên xuống dưới:</li>
                <li>Xét giá trị đội hình cao hơn:</li>
                <li>Lấy giá trị trong lần cập nhật đầu tiên của trang chủ sau khi Gameweek 12 (lượt đi) và Gameweek 31 (lượt về) kết thúc.</li>
                <li>Xét tổng điểm trừ chuyển nhượng quá lượt thấp hơn:
                    <ul>
                        <li>Cộng 8 giá trị từ Gameweek 05 đến hết Gameweek 12 cho lượt đi</li>
                        <li>Cộng 8 giá trị từ Gameweek 24 đến hết Gameweek 31 cho lượt về.</li>
                    </ul>
                </li>
                <li>Xét tổng điểm captain:</li>
                <li>Người chơi có tổng điểm captain của 8 Gameweek cộng lại cao hơn sẽ xếp trên.
                    <ul>
                        <li>Gameweek 05 đến hết Gameweek 12 cho lượt đi</li>
                        <li>Gameweek 24 đến hết Gameweek 31 cho lượt về</li>
                    </ul>
                </li>
                <li>Nếu người chơi dùng chip tripple captain thì tính điểm tripple captain</li>
            </ul>
            <i>2.1.2.4.2. Nội dung phạm luật</i>
            <i>2.1.2.4.2.1. Giai đoạn 1 (giai đoạn phân nhóm)</i>
            <ul>
                <li>{'Người chơi vi phạm >= MỘT LẦN 1 trong 3 tiêu chí dưới đây được coi là phạm luật'}</li>
                <li>Không chuyển nhượng (01)</li>
                <li>Không thay người ở 3 Gameweek liên tiếp (02)</li>
                <li>Việc thay người được tính như sau:
                    <ul>
                        <li>Thay cầu thủ dự bị vào team chính và ngược lại.</li>
                        <li>Thay đổi thứ tự cầu thủ trên dự bị.</li>
                    </ul>
                </li>
                <li>Tổng chuyển nhượng âm của một Gameweek vượt quá -8 (03)</li>
                <li>Giải pháp:
                    <ul>
                        <li>Người chơi phạm luật bị đẩy xuống 1 bậc trên bảng xếp hạng sau khi giai đoạn 1 kết thúc.</li>
                        <li>Người chơi không phạm luật đứng ngay phía dưới trên bảng xếp hạng sẽ thay thế vị trí của người chơi phạm luật sau khi giai đoạn 1 kết thúc.</li>
                    </ul>
                </li>
            </ul>
            <i>2.1.2.4.2.2. Giai đoạn 2 (tranh vé vào tứ kết)</i>
            <ul>
                <li>{'Người chơi vi phạm >= MỘT LẦN 1 trong 3 tiêu chí dưới đây được coi là phạm luật'}</li>
                <li>Không chuyển nhượng ở 3 Gameweek liên tiếp (01)</li>
                <li>Không thay người ở 3 Gameweek liên tiếp: (02)</li>
                <li>Việc thay người được tính như sau:
                    <ul>
                        <li>Thay cầu thủ dự bị vào team chính và ngược lại.</li>
                        <li>Thay đổi thứ tự cầu thủ trên dự bị.</li>
                    </ul>
                </li>
                <li>Tổng chuyển nhượng âm của một Gameweek vượt quá -8 (03)</li>
                <li>Giải pháp:
                    <ul>
                        <li>Người chơi phạm luật sẽ bị đẩy xuống 1 bậc trên bảng xếp hạng sau khi giai đoạn 2 kết thúc.</li>
                        <li>Người chơi không phạm luật đứng ngay phía dưới trên bảng xếp hạng sẽ thay thế vị trí của người chơi phạm luật.</li>
                    </ul>
                </li>
            </ul>
            <i>2.1.2.4.2.3. Giai đoạn 3 (play-off)</i>
            <ul>
                <li>Người chơi vi phạm tiêu chí dưới đây được coi là phạm luật</li>
                <li>{'Tổng chuyển nhượng âm của >=1 Gameweek vượt quá -8'}</li>
                <li>Nếu 1 người chơi trong một cặp Play-off phạm luật: Người chơi còn lại sẽ là người chiến thắng.</li>
                <li>Nếu cả hai người chơi trong một cặp Play-off phạm luật: Đội có tổng điểm Classic 2 lượt cao nhất trong nhóm 3 đội thua ở 3 cặp còn lại sẽ thay thế vị trí chiến thắng của cặp đấu có cả 2 đội phạm luật.</li>
                <li>Nếu cả hai người chơi trong hai cặp Play-off phạm luật:</li>
                <li>Hai đội thua trong hai cặp Play-off còn lại sẽ thay thế vị trí chiến thắng của 2 cặp đấu có cả 2 đội phạm luật.</li>
                <li>{'Nếu có >=5 đội phạm luật: Quyết định của BTC là quyết định cuối cùng.'}</li>
            </ul>
            <i>2.1.2.4.2.4. Giai đoạn 4 (tứ kết)</i>
            <ul>
                <li>Người chơi vi phạm tiêu chí dưới đây được coi là phạm luật</li>
                <li>{'Tổng chuyển nhượng âm của >=1 Gameweek vượt quá -8'}</li>
                <li>Nếu 1 người chơi trong một cặp Play-off phạm luật: Người chơi còn lại sẽ là người chiến thắng.</li>
                <li>Nếu 1 người chơi trong một cặp tứ kết phạm luật: Đội có tổng điểm Classic 2 lượt cao nhất trong nhóm 3 đội thua ở 3 cặp còn lại sẽ thay thế vị trí chiến thắng của cặp đấu có cả 2 đội phạm luật.</li>
                <li>Nếu cả hai người chơi trong hai cặp tứ kết phạm luật: Hai đội thua trong hai cặp tứ kết còn lại sẽ thay thế vị trí chiến thắng của 2 cặp đấu có cả 2 đội phạm luật.</li>
                <li>{'Nếu có >=5 đội phạm luật: Quyết định của BTC là quyết định cuối cùng.'}</li>
            </ul>
            <i>2.1.2.4.2.5. Giai đoạn 5 (bán kết)</i>
            <ul>
                <li>Người chơi vi phạm tiêu chí dưới đây được coi là phạm luật</li>
                <li>{'Tổng chuyển nhượng âm của >=1 Gameweek vượt quá -8'}</li>
                <li>Nếu 1 người chơi trong một cặp bán kết phạm luật:
                    <ul>
                        <li>Người chơi còn lại sẽ là người chiến thắng.</li>
                        <li>Đội thua trong cặp bán kết còn lại sẽ giành giải ba</li>
                    </ul>
                </li>
                <li>Nếu cả hai người chơi trong một cặp bán kết phạm luật:
                    <ul>
                        <li>Hai đội ở cặp bán kết còn lại lọt vào Chung kết</li>
                        <li>Đội có tổng điểm Classic 2 lượt ở Giai đoạn 5 cao nhất trong nhóm các đội thua tứ kết sẽ giành giải ba</li>
                    </ul>
                </li>
                <li>{'Nếu có >=3 đội phạm luật: Quyết định của BTC là quyết định cuối cùng.'}</li>
            </ul>
            <i>2.1.2.4.2.6. Giai đoạn 6 (chung kết và tranh ¾)</i>
            <div>Người chơi vi phạm tiêu chí dưới đây được coi là phạm luật: Tổng chuyển nhượng âm vượt quá -8</div>
            <ul>
                <li>Nếu có một đội trong trận chung kết phạm luật:
                    <ul>
                        <li>Đội phạm luật sẽ giành giải ba</li>
                        <li>Đội giành giải ba nếu không phạm luật sẽ giành giải nhì.</li>
                    </ul>
                </li>
                <li>Nếu cả hai đội trong trận chung kết phạm luật: Quyết định của BTC là quyết định cuối cùng.</li>
                <li>Nếu có một đội trong trận tranh ¾ phạm luật: Đội còn lại sẽ giành giải ba</li>
                <li>Nếu cả hai đội trong trận tranh ¾ phạm luật: Đội có điểm Classic cao nhất ở Giai đoạn 6 trong nhóm các đội thua tứ kết sẽ giành giải ba.</li>
            </ul>
            <i>2.1.2.5. GIÁ TRỊ GIẢI THƯỞNG (64 người đăng ký)</i>
            <ul>
                <li>Nhóm C1: 2500k, bao gồm:
                    <ul>
                        <li>Nhất: 1.200k</li>
                        <li>Nhì: 800k</li>
                        <li>Ba: 500k</li>
                    </ul>
                </li>
                <li>Nhóm C2: 1.550k, bao gồm:
                    <ul>
                        <li>Nhất: 700k</li>
                        <li>Nhì: 500k</li>
                        <li>Ba: 350k</li>
                    </ul>
                </li>
                <li>Nhóm C3: 1.150k, bao gồm:
                    <ul>
                        <li>Nhất: 550k</li>
                        <li>Nhì: 350k</li>
                        <li>Ba: 250k</li>
                    </ul>
                </li>
                <li>Nhóm C4: 850k, bao gồm:
                    <ul>
                        <li>Nhất: 450k</li>
                        <li>Nhì: 250k</li>
                        <li>Ba: 150k</li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    )

    const para2_3 = (
        <React.Fragment>
            <h4>2.3. AMVN H2H FAN LEAGUE</h4>
            <div>Triển khai khi có đủ 50 người đăng ký.</div>
            <h5>2.3.1. THỂ THỨC</h5>
            <div>Tạo 1 league H2H cho tất cả người chơi.</div>
            <ul>
                <li>Tính điểm từ Gameweek 1, Thi đấu theo phân cặp ngẫu nhiên của trang chủ từ Gameweek 01 đến Gameweek 35</li>
                <li>Hết Gameweek 35, chọn top 8</li>
                <li>Gameweek 36: Thi đấu tứ kết theo phân cặp ngẫu nhiên của hệ thống.</li>
                <li>Gameweek 37: Thi đấu bán kết theo phân cặp ngẫu nhiên của hệ thống.</li>
                <li>Gameweek 38: Thi đấu chung kết và tranh ¾ theo phân cặp ngẫu nhiên của hệ thống.</li>
            </ul>
            <h5>2.3.2. CÔNG CỤ QUẢN LÝ</h5>
            <div>Theo hệ thống của trang chủ</div>
            <h5>2.3.3. DANH SÁCH TRAO GIẢI</h5>
            <div>Top 8 cuối mùa</div>
            <h5>2.3.4. TÍNH ĐIỂM</h5>
            <div>Nếu tổng số người chơi có số lượng là một số lẻ và xuất hiện người chơi AVERAGE trong danh sách xét thưởng: Người chơi ở vị trí ngay phía dưới người chơi AVERAGE sẽ thay thế</div>
            <h5>2.3.5. GIÁ TRỊ GIẢI THƯỞNG</h5>
            <div>Theo số lượng dự kiến 50 người chơi</div>
            <ul>
                <li>Top 8: 100k</li>
                <li>Top 7: 100k</li>
                <li>Top 6: 100k</li>
                <li>Top 5: 100k</li>
                <li>Top 4: 100k</li>
                <li>Top 3: 400k</li>
                <li>Top 2: 600k</li>
                <li>Top 1: 1.000k</li>
            </ul>
        </React.Fragment>
    )

    const para2 = (
        <React.Fragment>
            <h3>2. HỆ THỐNG FAN LEAGUE</h3>
            <div>Đối tượng: Ưu tiên người chơi cũ. Không phân biệt fan club.</div>
            <div>Danh sách các league:</div>
            <ul>
                <li>Classic (bắt buộc)</li>
                <li>European Cup (bắt buộc)</li>
                <li>H2H (không bắt buộc).</li>
            </ul>
            <div>Quy định:</div>
            <ul>
                <li>Người chơi dùng 01 tài khoản cho cả 2 league hoặc cả 3 league.</li>
                <li>Không chấp nhận người chơi CHỈ đăng ký H2H</li>
                <li>Số lượng thành viên: Tối thiểu 64 người. Tối đa 81 người.</li>
            </ul>
            <div>Lệ phí:</div>
            <ul>
                <li>350k cho 2 league.</li>
                <li>400k cho cả 3 league.</li>
            </ul>
            <div>Công cụ giao tiếp: Nhóm Messenger</div>
            <Collapse
                items={
                    [
                        {
                            key: '2_1',
                            label: '2.1. AMVN CLASSIC FAN LEAGUE',
                            children: para2_1,
                        },
                        {
                            key: '2_2',
                            label: '2.2. AMVN EUROPEAN CUP',
                            children: para2_2,
                        },
                        {
                            key: '2_3',
                            label: '2.3. AMVN H2H FAN LEAGUE',
                            children: para2_3,
                        },
                    ]
                }
            />
        </React.Fragment>
    )

    const para3_1 = (
        <React.Fragment>
            <h4>3.1. AMVN CLASSIC OPEN LEAGUE</h4>
            <div>Danh sách các league:</div>
            <ul>
                <li>Classic (bắt buộc)</li>
                <li>H2H (không bắt buộc).</li>
            </ul>
            <div>Quy định:</div>
            <ul>
                <li>Người chơi dùng 01 tài khoản cho cả 2 league</li>
                <li>Không chấp nhận người chơi CHỈ đăng ký H2H</li>
            </ul>
            <div>Lệ phí:</div>
            <ul>
                <li>100k cho Classic</li>
                <li>50k cho H2H</li>
            </ul>
            <div>Công cụ giao tiếp: Nhóm Messenger</div>
            <h5>3.1.1. THỂ THỨC</h5>
            <div>Tạo 1 league Classic cho tất cả người chơi.</div>
            <div>Tính điểm từ Gameweek 1 đến 38</div>
            <h5>3.1.2. CÔNG CỤ QUẢN LÝ</h5>
            <div>Tính theo điểm trên hệ thống trang chủ của game</div>
            <h5>3.1.3. DANH SÁCH TRAO GIẢI</h5>
            <ul>
                <li>Nhất Gameweek: 38 giải</li>
                <li>Nhất tháng: 10 giải</li>
                <li>Top 3 classic mùa.</li>
            </ul>
            <h5>3.1.4. TÍNH ĐIỂM</h5>
            <i>3.1.4.1. Điểm để xét giải Gameweek:</i>
            <div>Điểm được tính sau khi đã trừ điểm chuyển nhượng quá lượt miễn phí.</div>
            <i>3.1.4.2. Nội dung phạm luật:</i>
            <i>3.1.4.2.1: Giải Gameweek</i>
            <div>Người chơi vi phạm 1 trong 3 tiêu chí dưới đây được coi là phạm luật</div>
            <ul>
                <li>Không chuyển nhượng ở 3 Gameweek liên tiếp (01)</li>
                <li>Không thay người ở 3 Gameweek liên tiếp: (02)</li>
                <li>Tổng chuyển nhượng âm của Gameweek được xét đến vượt quá -8 (03) (Tiêu chí này không áp dụng cho Gameweek 01)</li>
            </ul>
            <div>Việc thay người được tính như sau:</div>
            <ul>
                <li>Thay cầu thủ dự bị vào team chính và ngược lại.</li>
                <li>Thay đổi thứ tự cầu thủ trên dự bị.</li>
            </ul>
            <div>Nếu người chơi được xét Giải Gameweek phạm luật, giải sẽ được chuyển sang cho người chơi không phạm luật có thứ hạng ngay phía dưới người chơi phạm luật trên BXH.</div>
            <i>3.1.4.2.2: Giải Tháng</i>
            <div>Người chơi vi phạm 1 trong 3 tiêu chí dưới đây được coi là phạm luật</div>
            <ul>
                <li>Không chuyển nhượng ở 3 Gameweek liên tiếp (01) (Tiêu chí này không áp dụng cho tháng chỉ có 2 Gameweek)</li>
                <li>Không thay người ở 3 Gameweek liên tiếp (02) (Tiêu chí này không áp dụng cho tháng chỉ có 2 Gameweek)</li>
                <li>Tổng chuyển nhượng âm của một Gameweek trong tháng vượt quá -8 (03)</li>
            </ul>
            <div>Việc thay người được tính như sau:</div>
            <ul>
                <li>Thay cầu thủ dự bị vào team chính và ngược lại.</li>
                <li>Thay đổi thứ tự cầu thủ trên dự bị.</li>
            </ul>
            <div>Nếu người chơi được xét Giải Tháng phạm luật, giải sẽ được chuyển sang cho người chơi không phạm luật có thứ hạng ngay phía dưới người chơi phạm luật trên BXH.</div>
            <i>3.1.4.2.3. Giải Classic mùa</i>
            <div>Người chơi phạm luật khi vi phạm một trong ba điều sau từ 2 lần trở lên:</div>
            <ul>
                <li>Không chuyển nhượng ở 3 Gameweek liên tiếp (01)</li>
                <li>Không thay người ở 3 Gameweek liên tiếp (02)</li>
                <li>Tổng chuyển nhượng âm của một Gameweek trong mùa vượt quá -8 (03)</li>
            </ul>
            <div>Việc thay người được tính như sau:</div>
            <ul>
                <li>Thay cầu thủ dự bị vào team chính và ngược lại.</li>
                <li>Thay đổi thứ tự cầu thủ trên dự bị.</li>
            </ul>
            <div>Vị trí của người chơi phạm luật trong diện được xét giải Classic mùa sẽ bị đẩy xuống 1 bậc và được thay thế bởi người chơi không phạm luật có thứ hạng ngay phía dưới trên BXH.</div>
            <i>3.1.4.3. Chọn người thắng khi điểm bằng nhau</i>
            <i>3.1.4.3.1. Giải Gameweek:</i>
            <div>Xét các tiêu chí phụ theo thứ tự từ ưu tiên từ trên xuống dưới:</div>
            <ul>
                <li>Tổng số ĐIỂM TRỪ ÍT HƠN BỞI CHUYỂN NHƯỢNG QUÁ LƯỢT (nếu có) tại Gameweek được xét đến</li>
                <li>Số điểm nhiều hơn của captain (Nếu người chơi dùng chip tripple captain thì tính điểm tripple captain)</li>
                <li>Số bàn thắng nhiều hơn của 11 cầu thủ (có tính cả cầu thủ dự bị khi người chơi dùng chip Bench Boost)</li>
                <li>Giá trị đội hình cao hơn (Lần cập nhật đầu tiên của trang chủ sau khi Gameweek được xét đến kết thúc)</li>
            </ul>
            <i>3.1.4.3.2. Giải Tháng:</i>
            <div>Xét các tiêu chí phụ theo thứ tự từ ưu tiên từ trên xuống dưới:</div>
            <ul>
                <li>Tổng điểm captain nhiều hơn của tất cả các Gameweek trong tháng: Nếu người chơi dùng chip tripple captain thì tính điểm tripple captain</li>
                <li>Giá trị đội hình cao hơn: Lấy giá trị trong lần cập nhật đầu tiên của trang chủ sau khi Gameweek cuối cùng của tháng kết thúc.</li>
            </ul>
            <i>3.1.4.3.3. Giải Classic mùa</i>
            <div>Giá trị đội hình cao hơn: Lấy giá trị trong lần cập nhật đầu tiên của trang chủ sau khi Gameweek cuối cùng của mùa giải kết thúc.</div>
            <h5>3.1.5. GIÁ TRỊ GIẢI THƯỞNG (90 người đăng ký)</h5>
            <ul>
                <li>Nhất Gameweek: 100k</li>
                <li>Nhất Tháng: 100k</li>
                <li>Nhất Classic mùa: 2.300k</li>
                <li>Nhì Classic mùa: 1.200k</li>
                <li>Ba Classic mùa: 700k</li>
            </ul>
        </React.Fragment>
    )

    const para3_2 = (
        <React.Fragment>
<h4>3.2. AMVN H2H OPEN LEAGUE</h4>
            <h5>3.2.1. THỂ THỨC</h5>
            <ul>
                <li>Bốc thăm chia đôi số lượng người chơi thành 2 H2H League riêng biệt</li>
                <li>Bốc thăm chia đôi số lượng người chơi thành 2 league:
                    <ul>
                        <li>- Admin sẽ ở 1 league và tạo 1 league.</li>
                        <li>- League còn lại nhờ một người chơi làm nhóm trưởng để tạo.</li>
                    </ul>
                </li>
                <li>Tính điểm từ Gameweek 1</li>
                <li>Thi đấu theo phân cặp ngẫu nhiên của trang chủ từ Gameweek 01 đến Gameweek 35</li>
                <li>Hết Gameweek 35: chọn top 8</li>
                <li>Gameweek 36: Thi đấu tứ kết theo phân cặp ngẫu nhiên của hệ thống.</li>
                <li>Gameweek 37: Thi đấu bán kết theo phân cặp ngẫu nhiên của hệ thống.</li>
                <li>Gameweek 38: Thi đấu chung kết và tranh ¾ theo phân cặp ngẫu nhiên của hệ thống.</li>
            </ul>
            <h5>3.2.2. CÔNG CỤ QUẢN LÝ</h5>
            <div>Theo hệ thống của trang chủ</div>
            <h5>3.2.3. DANH SÁCH TRAO GIẢI</h5>
            <div>Top 8 cuối mùa mỗi league</div>
            <h5>3.2.4. TÍNH ĐIỂM</h5>
            <div>Nếu tổng số người chơi có số lượng là một số lẻ và xuất hiện người chơi AVERAGE trong danh sách xét thưởng: Người chơi ở vị trí ngay phía dưới người chơi AVERAGE sẽ thay thế</div>
            <h5>3.2.5. GIÁ TRỊ GIẢI THƯỞNG</h5>
            <div>Giải thưởng mỗi league</div>
            <ul>
                <li>Top 8: 50k</li>
                <li>Top 7: 50k</li>
                <li>Top 6: 100k</li>
                <li>Top 5: 100k</li>
                <li>Top 4: 100k</li>
                <li>Top 3: 300k</li>
                <li>Top 2: 500k</li>
                <li>Top 1: 1.000k</li>
            </ul>
        </React.Fragment>
    )

    const para3 = (
        <React.Fragment>
            <h3>3. HỆ THỐNG OPEN LEAGUE</h3>
            <div>Danh sách các league:</div>
            <ul>
                <li>Classic (bắt buộc)</li>
                <li>H2H (không bắt buộc).</li>
            </ul>
            <div>Quy định:</div>
            <ul>
                <li>Người chơi dùng 01 tài khoản cho cả 2 league (nếu chơi 2 league).</li>
                <li>Không chấp nhận người chơi CHỈ đăng ký H2H</li>
            </ul>
            <div>Số lượng thành viên: Tối thiểu 90 người. Tối đa 101 người.</div>
            <div>Lệ phí:</div>
            <ul>
                <li>100k cho league CLASSIC</li>
                <li>150k cho cả 2 league</li>
            </ul>
            <div>Công cụ giao tiếp: Nhóm Messenger</div>
            <Collapse
                items={
                    [
                        {
                            key: '3_1',
                            label: '3.1. AMVN CLASSIC OPEN LEAGUE',
                            children: para3_1,
                        },
                        {
                            key: '3_2',
                            label: '3.2. AMVN H2H OPEN LEAGUE',
                            children: para3_2,
                        },
                    ]
                }
            />
        </React.Fragment>
    )

    const para4 = (
        <React.Fragment>
            <h3>4. TRAO GIẢI</h3>
            <h4>4.1. HỆ THỐNG FREE LEAGUE</h4>
            <div>Sẽ có một bài đăng riêng vào đầu tháng 8</div>
            <h4>4.2 HỆ THỐNG FAN LEAGUE</h4>
            <ul>
                <li>Giải Gameweek sẽ trao sau mỗi Gameweek sau khi đăng bài tổng kết.</li>
                <li>Các giải khác sẽ trao vào cuối mùa.</li>
            </ul>
            <h4>4.3 HỆ THỐNG OPEN LEAGUE</h4>
            <ul>
                <li>Giải Gameweek sẽ trao sau mỗi Gameweek sau khi đăng bài tổng kết.</li>
                <li>Các giải khác sẽ trao vào cuối mùa.</li>
            </ul>
        </React.Fragment>
    )

    const para5 = (
        <React.Fragment>
            <h3>5. GIẢI QUYẾT KHIẾU NẠI</h3>
            <ul>
                <li>Public lên nhóm trước 1 tuần với trường hợp khủng hoảng số lượng ở mục 2.4 và 3.3</li>
                <li>Người chơi đổi team đã đăng ký vào link: thời hạn 1 tuần trước bóng lăn.</li>
                <li>Tài khoản của người chơi bị khóa trong thời gian diễn ra giải đấu do mọi vấn đề bao gồm chủ quan và khách quan: Quyết định của BTC là Quyết định cuối cùng.</li>
                <li>Phụ trách giải quyết chung: Admin Cao Đình Đức</li>
                <li>Khiếu nại về điểm trên app bị sai: Admin Thành Bùi</li>
                <li>Tất cả các khiếu nại khác. Phụ trách giải quyết: Admin Cao Đình Đức</li>
            </ul>
        </React.Fragment>
    )

    const getCollapeItems = () => {
        const items = [
            {
                key: '1',
                label: '1. FREE LEAGUE CÓ THƯỞNG',
                children: para1,
            },
            {
                key: '2',
                label: '2. HỆ THỐNG FAN LEAGUE',
                children: para2,
            },
            {
                key: '3',
                label: '3. HỆ THỐNG OPEN LEAGUE',
                children: para3,
            },
            {
                key: '4',
                label: '4. TRAO GIẢI',
                children: para4,
            },
            {
                key: '5',
                label: '5. GIẢI QUYẾT KHIẾU NẠI',
                children: para5,
            },
        ];

        return items
    }

    const onChange = (key) => {
        console.log(key);
    }


    return (
        <div className='the-thuc'>
            <div className='tt-header'>AMVN 2024 - 2025</div>
            <h2>I - DANH SÁCH CÁC HỆ THỐNG</h2>
            <div>Mỗi hệ thống hoạt động độc lập với nhau.</div>
            <div>1. HỆ THỐNG FREE LEAGUE CÓ THƯỞNG</div>
            <div>2. HỆ THỐNG AMVN FAN LEAGUE CÓ PHÍ</div>
            <div>3. HỆ THỐNG AMVN OPEN LEAGUE CÓ PHÍ</div>
            <h2>II - CHI TIẾT CÁC GIẢI THƯỞNG</h2>
            <Collapse items={getCollapeItems()} onChange={onChange} />
        </div>
    )
}

export default TheThuc;