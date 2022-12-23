// import dateFormat from "dateformat";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { Link } from 'react-router-dom';


// function RenderDish({ staff }) {
//     return (
//         <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
//             <div className="col-xs-12 col-sm-4 col-lg-3">
//                 <Card>
//                     <CardImg width="100%" src={staff.image} alt={staff.name} />
//                 </Card>
//             </div>
//             <div className="col-xs-12 col-sm-8 col-lg-9">
//                 <Card style={{padding:'10px'}}>
//                     <b>Họ và tên : {staff.name}</b>
//                     <p>Ngày sinh : {dateFormat(staff.doB, "mmmm dS, yyyy")}</p>
//                     <p>Ngày vào công ty : {dateFormat(staff.startDate, "mmmm dS, yyyy")}</p>
//                     <p>Phòng ban :{staff.department.name} </p>
//                     <p>Số ngày nghỉ : {staff.annualLeave}</p>
//                     <p>Số ngày đã làm thêm : {staff.overTime}</p>
//                 </Card>
//             </div>
//         </div>
//     );

// }

// const DishDetail = (props) => {
//     return (
//         <div className='container'>
//             <div className="row">
//                 <Breadcrumb>
//                     <BreadcrumbItem><Link to="/nhanvien">Nhân viên</Link></BreadcrumbItem>
//                     <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
//                 </Breadcrumb>
//                 <div className="col-12">
//                     <hr />
//                 </div>
//             </div>
//             <div className="row" style={{ marginTop: '50px' }}>
//                 <h5>Thông tin nhân viên vừa được chọn : </h5>
//             </div>
//             <RenderDish staff={props.staff} />
//         </div>
//     );
// }


// export default DishDetail;

//
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Col, Button, Row, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import dateFormat from "dateformat";
import { Loading } from './LoadingComponent';




//this.props.postStaffs(values.username,values.doB,values.startDate,values.department,values.salaryScale,values.overTime,values.annualLeave);




class StaffDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.delStaff = this.delStaff.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    delStaff() {
        //const history =  useHistory();
        this.props.deleteStaff(this.props.staff?.id);
        // history.push('/menu');
    }
    handleSubmit(values) {
        const Staff = {
            id: this.props.staff.id,
            name: values.username,
            annualLeave: values.annualLeave,
            departmentId: values.department,
            doB: values.doB,
            image: this.props.staff.image,
            overTime: values.overTime,
            salaryScale: values.salaryScale,
            startDate: values.startDate
        }
        this.props.PatchStaffs(Staff);
    }
    render() {
        const department = this.props.department?.filter((department) => department.id === this.props.staff?.departmentId)[0];
        const chuanhap = (val) => val && (val.length >= 0);
        const isNumber = (val) => !isNaN(Number(val));
        const minNum = (val) => !chuanhap(val) || !isNumber(val) || val >= 1;
        const maxNum = (val) => val <= 3 || !isNumber(val);
        const minLength = (len) => (val) => !chuanhap(val) || (val && (val.length >= len));
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const soDuong = (val) => !(isNumber(val)) || val >= 0;
        const datadoB = dateFormat(this.props.staff?.doB, 'yyyy-mm-dd');
        const startDate = dateFormat(this.props.staff?.startDate, 'yyyy-mm-dd');
        if (this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.staff != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Nhân viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.staff?.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-lg-3">
                            <Card>
                                <CardImg top src={this.props.staff?.image} alt={this.props.staff?.name} />
                            </Card>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-lg-9">
                            <Card>
                                <CardBody>
                                    <CardTitle style={{ color: "black" }}>Họ và tên:&nbsp;{this.props.staff?.name}</CardTitle>
                                    <CardText>Ngày sinh:&nbsp;{dateFormat(this.props.staff?.doB, 'dd/mm/yyyy')} </CardText>
                                    <CardText>Ngày vào công ty:&nbsp;{dateFormat(this.props.staff?.startDate, 'dd/mm/yyyy')} </CardText>
                                    <CardText>Phòng ban:&nbsp;{department?.name} </CardText>
                                    <CardText>Số ngày nghỉ còn lại:&nbsp;{this.props.staff?.annualLeave} </CardText>
                                    <CardText>Số ngày làm thêm:&nbsp;{this.props.staff?.overTime} </CardText>
                                </CardBody>
                            </Card>
                            <div>
                                <Col style={{ marginTop: "10px" }}>
                                    <Button type="submit" color="primary" onClick={this.toggleModal}
                                    >Edit</Button>
                                    <Button type="submit" color="primary" style={{ marginLeft: '10px' }} onClick={this.delStaff}
                                    >Delete</Button>
                                </Col>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Cập nhật thông tin</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="username" md={4}>Tên</Label>
                                    <Col md={8}>
                                        <Control.text model=".username" id="username" name="username"
                                            placeholder="Name"
                                            defaultValue={this.props.staff?.name}
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                minLength: minLength(3), maxLength: maxLength(30)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".username"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                minLength: 'Ít nhất 3 kí tự',
                                                maxLength: 'Tối đa 30 kí tự'

                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                    <Col md={8}>
                                        <Control.text model=".doB" id="doB" name="doB"
                                            className="form-control" type='date'
                                            defaultValue={datadoB}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                    <Col md={8}>
                                        <Control.text model=".startDate" id="startDate" name="startDate"
                                            className="form-control" type='date'
                                            defaultValue={startDate}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="department" md={4}>Phòng ban</Label>
                                    <Col md={8}>
                                        <Control.select model=".department" id="department" name="department"
                                            defaultValue={this.props.staff?.departmentId}
                                            className="form-control">
                                            <option value='Dept01'>Sale</option>
                                            <option value='Dept02'>HR</option>
                                            <option value='Dept03'>Marketing</option>
                                            <option value='Dept04'>IT </option>
                                            <option value='Dept05'>Finance</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                    <Col md={8}>
                                        <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                            placeholder="1->3"
                                            defaultValue={this.props.staff?.salaryScale}
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                isNumber,
                                                minNum,
                                                maxNum
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".salaryScale"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                isNumber: 'Phải là số ',
                                                minNum: 'Phải >= 1 ',
                                                maxNum: 'Phải <=3 '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                    <Col md={8}>
                                        <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                            defaultValue={this.props.staff?.annualLeave}
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                isNumber,
                                                soDuong
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".annualLeave"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                isNumber: 'Phải là số',
                                                soDuong: 'Phải >=0'

                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="overTime" md={4}>Số ngày làm thêm</Label>
                                    <Col md={8}>
                                        <Control.text model=".overTime" id="overTime" name="overTime"
                                            defaultValue={this.props.staff?.overTime}
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                isNumber,
                                                soDuong
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".overTime"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                isNumber: 'Phải là số',
                                                soDuong: 'Phải >=0'

                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col xs={6} md={4} style={{ margin: 'auto' }}>
                                        <Button type="submit" color="primary">
                                            Lưu lại
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        } else return (<div></div>);


    }

}
export default StaffDetail;