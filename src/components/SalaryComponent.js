import React from 'react';
import { Card,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function RenderItem({staff}){
    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.25) translateY(-50%)'
        }}>
        <Card style={{padding: '5px',margin: '10px'}}>
            <CardTitle>&nbsp;{staff.name}</CardTitle>
            <CardText>Mã nhân viên:&nbsp; {staff.id}</CardText>
            <CardText>Hệ số lương:&nbsp; {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm:&nbsp; {staff.overTime}</CardText>
            <CardText style ={{backgroundColor:"#1e7e34",height :"30px", color:"#FFFFFF"}}>&nbsp;Lương:&nbsp;{staff.salary} </CardText>
        </Card>
        </FadeTransform>
    )

} 

function Breadcrumb1({allItem, id}){
if (allItem === true ){ 
    return(
        <Breadcrumb style={{marginTop:"5px"}}>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/menu">Nhân viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
    )
}
else{
    return(
        <Breadcrumb style={{marginTop:"5px"}}>
            <BreadcrumbItem><Link to="/department">Phòng ban</Link></BreadcrumbItem>
            <BreadcrumbItem active>{id}</BreadcrumbItem>
        </Breadcrumb>
    )
}
}

const Salary= (props)=>{
    const listItem = props.staffs.map((staff,index) => {
        return (
            <div  className="col-12 col-md-6 col-lg-4" key = {index}>
              <RenderItem staff = {staff} />
            </div>
          );
      })
      if(props.staffs.length===0){
        return(
            <div></div>
        )
       }
       else{
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb1 allItem={props.allItem} id = {props.id}/>
                        <div className="col-12">
                            <hr />
                        </div>                
                    </div> 
            <div className="row">
                {listItem}
            </div>
            </div>
        )
       }
}



export default Salary;