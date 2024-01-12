import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import '../styles/DoctorAuth.css'
import DocRegIntro from '../components/DocRegIntro'
import DocRegContact from '../components/DocRegContact'
import DocRegAdditional from '../components/DocRegAdditional';
import DocRegCred from '../components/DocRegCred';
function DoctorAuth() {

    const componentsArray = [DocRegIntro, DocRegContact, DocRegCred, DocRegAdditional];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;
    const pageCount = Math.ceil(componentsArray.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedComponents = componentsArray.slice(startIndex, endIndex);

    return (
        <div>
            <div className="doctor-auth-top-section">
                <div className='text-div'>
                    <h1>WELCOME TO eDOC</h1>
                    <p>REGISTER NOW</p>
                </div>
            </div>
            <div className="doctor-auth-form-section">
                <div className="formdiv">
                    {displayedComponents.map((Component, index) => (
                        <Component key={index} />
                    ))}
                    <ReactPaginate
                        pageCount={pageCount}

                        onPageChange={handlePageChange}
                        containerClassName={'PaginationContainer'}
                        activeClassName={'active'}
                        previousLabel={<span className="previous-button">Previous</span>}
                        nextLabel={<span className="next-button">Next</span>}
                    />

                </div>
                <div className='image-div'>

                </div>
            </div>
        </div>
    )
}

export default DoctorAuth