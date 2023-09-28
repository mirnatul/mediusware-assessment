import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Problem-2.css'

const Problem2 = () => {

    const [modalT, setModalT] = useState('')
    const [allContacts, setAllContacts] = useState([])
    const [even, setEven] = useState(false)



    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/?page_size=50')
            .then(res => res.json())
            .then(data => setAllContacts(data.results))
    }, [])


    const evenContacts = allContacts.filter(each => each.id % 2 === 0)

    const usContacts = allContacts.filter(each => each.country.name === 'United States')
    const evenAndUS = usContacts.filter(each => each.id % 2 === 0)


    return (
        <div className="container">
            {/* modal start */}

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal {modalT === 'all' ? 'A' : 'B'}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex gap-4 justify-content-center my-3'>
                                <button onClick={() => setModalT('all')} type="button" class="btn-a">All Contacts</button>
                                <button onClick={() => setModalT('us')} type="button" class="btn-b">US Contacts</button>
                                <button type="button" className="btn-c" data-bs-dismiss="modal">Close</button>
                            </div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modalT === 'all' && even === false &&
                                        allContacts?.map((eachContact, index) => <tr key={index}>
                                            <th scope="row">{eachContact?.id}</th>
                                            <td>{eachContact?.phone}</td>
                                            <td>{eachContact?.country.name}</td>
                                        </tr>)
                                    }
                                    {modalT === 'all' && even === true &&
                                        evenContacts?.map((eachContact, index) => <tr key={index}>
                                            <th scope="row">{eachContact?.id}</th>
                                            <td>{eachContact?.phone}</td>
                                            <td>{eachContact?.country.name}</td>
                                        </tr>)
                                    }
                                    {modalT === 'us' && even === false &&
                                        usContacts?.map((eachContact, index) => <tr key={index}>
                                            <th scope="row">{eachContact?.id}</th>
                                            <td>{eachContact?.phone}</td>
                                            <td>{eachContact?.country.name}</td>
                                        </tr>)
                                    }
                                    {modalT === 'us' && even === true &&
                                        evenAndUS?.map((eachContact, index) => <tr key={index}>
                                            <th scope="row">{eachContact?.id}</th>
                                            <td>{eachContact?.phone}</td>
                                            <td>{eachContact?.country.name}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <div class="input-group mb-3">
                                <div className="input-group-text">
                                    <input onChange={() => setEven(!even)} className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                    <p>Even Only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal end */}




            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button onClick={() => setModalT('all')} type="button" className="btn-a" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        All Contacts
                    </button>
                    <button onClick={() => setModalT('us')} type="button" className="btn-b" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        US Contacts
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Problem2;