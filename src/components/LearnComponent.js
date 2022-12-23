import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';


function RenderStaffSalary({ staff }) {
    let luong = parseFloat(staff.salaryScale * 3000000 + staff.overTime / 8 * 200000).toFixed(2) ;  
    return (
        <Card style={{padding: '10px'}}>
            <h4>{staff.name}</h4>
            <p>Mã nhân viên : {staff.id}</p>
            <p>Hệ số lương : {staff.salaryScale}</p>
            <p>Số giờ làm thêm : {staff.overTime}</p>
            <Card style={{padding:'3px',backgroundColor:'grey'}}>
                Lương : {luong} VND
            </Card>
        </Card>
    );
}

function StoreDishes(props){

    const menuStaff = props.staffs.map((staff)=>{
        return(
             <div className="col-xs-12 col-sm-6 col-lg-4 mt-3" key={staff.id}>
             <RenderStaffSalary staff={staff} />
             </div>
        );
    }); 

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <hr />
                </div>
            </div>
            <div className='row' style={{marginBottom:'100px'}}>
                {menuStaff}
            </div>
        </div>
    );
}

export default StoreDishes; 