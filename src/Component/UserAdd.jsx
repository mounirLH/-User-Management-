import React from 'react'

function UserAdd() {
  return (
    <>
    <h1>Add user</h1>
    
        <div className="mb-3 row">
            <label htmlFor="currentId" className="col-sm-2 col-form-label">Current id</label>
            <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="currentId"
                       value='..'/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="fullName" name="fullName" />
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
            <div className="col-sm-10">
                <select id='country' name='country' className="form-select" >
                    <option value=''>Select your country</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Algeria">Usa</option>
                    <option value="Tunisia">Spain</option>
                </select>
            </div>
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">ADD</button>
        </div>
   
    </>

  )
}

export default UserAdd