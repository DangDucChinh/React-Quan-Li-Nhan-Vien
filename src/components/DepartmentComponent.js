import React from 'react';
import { Card,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';





function RenderMenuItem({ departments }) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.25) translateY(-50%)'
            }}>
            <Card style={{ margin: '10px' }}>
                <Link to={`/department/${departments.name}`}>
                    <CardTitle style={{ color: "black", marginTop: '5px', marginLeft: '5px' }}>{departments.name}</CardTitle>
                    <CardText style={{ margin: '20px' }}>Số lượng nhân viên: {departments.numberOfStaff}</CardText>
                </Link>
            </Card>
        </FadeTransform>
    );
}
const Department = (props) => {
    const menu = props.department.map((department) => {
        return (
            <div className="col-12 col-md-4 col-lg-3 m-1">
                <RenderMenuItem departments={department} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb style={{ marginTop: "5px" }}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                </Breadcrumb>
                <hr />
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

}
export default Department;