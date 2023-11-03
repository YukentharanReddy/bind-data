export function Userlist1() 
{
    let user={name:"yukentharan", email :"yukentharan@gmail.com", phone:5678987345, gender: "Male", dob :"05/1/2001"}
    return <>
    <div className="margin-20">
        <div className="margin-10"> 
        <label>Name:</label>
        <label>{user.name} </label>
        </div>
        <div className="margin-10">    
        <label>Email:</label> 
        <label>{user.email}</label>   
        </div>  
        <div className="margin-10">
        <label>Phone:</label>
        <label>{user.phone}</label>    
        </div>
        <div className="margin-10">   
        <label>Gender:</label>
        <label>{user.gender}</label>
        </div>
        <div className="margin-10">
        <label>DOB:</label>
        <label>{user.dob}</label>
        </div>
    </div>

   </>
}    