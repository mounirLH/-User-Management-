import React, { useRef } from 'react'

function UserAdd({lastId,onAddUser}) {
const fullName=useRef(null)  
const Country=useRef(null)    
const handlesubmit=(e)=>{
    e.preventDefault()
    
   
    onAddUser({
    fullName:fullName.current.value,
    Country: Country.current.value,
    id:lastId+1
    })
}    
  return (
    <>
    <h1>Add user</h1>
    <form onSubmit={handlesubmit}>
    <div className="mb-3 row">
            <label htmlFor="currentId" className="col-sm-2 col-form-label">Current id</label>
            <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="currentId"
                       value={lastId+1} />
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="fullName" name="fullName" ref= {fullName} />
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
            <div className="col-sm-10">
                <select id='country'name='country' className="form-select"ref={Country} >
                    <option value="">Select your country</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Usa">Usa</option>
                    <option value="Spain">Spain</option>
                </select>
            </div>
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">ADD</button>
        </div>
        
        </form>
      
         </>  
   

  )
}

export default UserAdd