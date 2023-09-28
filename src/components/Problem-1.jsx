import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [user, setUser] = useState('')
    const [status, setStatus] = useState('')

    const [userStatus, setUserStatus] = useState([])

    const handleClick = (val) => {
        setShow(val);
    }
    console.log(show);

    const activeUserStatus = userStatus.filter((each) => each.status === 'active')
    const completedUserStatus = userStatus.filter((each) => each.status === 'completed')
    const otherStatus = userStatus.filter((each) => each.status !== 'active' && each.status !== 'completed')
    const allUserStatus = [...activeUserStatus, ...completedUserStatus, ...otherStatus]



    const handleSubmit = (e) => {
        // const allUser = []
        e.preventDefault()
        const userData = { name: user, status: status }
        setUserStatus([...userStatus, userData])
    }

    // console.log(userStatus);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input onChange={(e) => setUser(e.target.value)} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input onChange={(e) => setStatus(e.target.value)} type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {show === 'all' &&
                                allUserStatus?.map((eachPair, index) => <tr key={index}>
                                    <td>{eachPair.name}</td>
                                    <td>{eachPair.status}</td>
                                </tr>)
                            }
                            {show === 'active' &&
                                activeUserStatus?.map((eachPair, index) => <tr key={index}>
                                    <td>{eachPair.name}</td>
                                    <td>{eachPair.status}</td>
                                </tr>)
                            }
                            {show === 'completed' &&
                                completedUserStatus?.map((eachPair, index) => <tr key={index}>
                                    <td>{eachPair.name}</td>
                                    <td>{eachPair.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;