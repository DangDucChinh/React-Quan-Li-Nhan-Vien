import React from "react";
import { Card, CardImg } from 'reactstrap';
const Home = () => {
    return (
        <div className="container">
            <div className="row" style={{padding:'10px',marginTop:'10px'}}>
                <h4>Giới thiệu về ứng dụng nhân sự : </h4>
                <hr />
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-3 p-5">
                    <Card>
                        <CardImg src='assets/images/anh_the.png' alt='Admin_img' />
                    </Card>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-9 p-5">
                    <Card style={{padding: '20px'}}>
                        <h4>Nguyễn Trần Thủy Tiên</h4>
                        <i> - HR assistant - </i>
                        <p>Bạn Nguyễn Trần Thủy Tiên hiện đang là phó phòng nhân sự của công ty và có những bước phát triển rất vượt bậc và vô cùng đáng ngưỡng mộ. Bạn ấy có khả 
                            năng học tập và giao tiếp tốt với tất cả mọi người, đặc biệt là khả năng nói tiếng anh siêu đỉnh của bản thân.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home; 