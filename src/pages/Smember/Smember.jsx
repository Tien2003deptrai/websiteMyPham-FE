import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Smember.css';
const Dashboard = () => (
    <div>
        <section className="vh-100" style={{ backgroundColor: '#5f59f7' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card mb-5" style={{ borderRadius: 15 }}>
                            <div className="card-body p-4">
                                <h3 className="mb-3">Program Title</h3>
                                <p className="small mb-0"><i className="far fa-star fa-lg" /> <span className="mx-2">|</span> Created by
                                    <strong>MDBootstrap</strong> on 11 April , 2021</p>
                                <hr className="my-4" />
                                <div className="d-flex justify-content-start align-items-center">
                                    <p className="mb-0 text-uppercase"><i className="fas fa-cog me-2" /> <span className="text-muted small">settings</span></p>
                                    <p className="mb-0 text-uppercase"><i className="fas fa-link ms-4 me-2" /> <span className="text-muted small">program link</span></p>
                                    <p className="mb-0 text-uppercase"><i className="fas fa-ellipsis-h ms-4 me-2" /> <span className="text-muted small">program link</span>
                                        <span className="ms-3 me-4">|</span></p>
                                    <a href="#!">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" className="img-fluid rounded-circle me-3" width={35} />
                                    </a>
                                    <button type="button" className="btn btn-outline-dark btn-sm btn-floating">
                                        <i className="fas fa-plus" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ borderRadius: 15 }}>
                            <div className="card-body p-4">
                                <h3 className="mb-3">Company Culture</h3>
                                <p className="small mb-0"><i className="fas fa-star fa-lg text-warning" /> <span className="mx-2">|</span>
                                    Public <span className="mx-2">|</span> Updated by <strong>MDBootstrap</strong> on 11 April , 2021
                                </p>
                                <hr className="my-4" />
                                <div className="d-flex justify-content-start align-items-center">
                                    <p className="mb-0 text-uppercase"><i className="fas fa-cog me-2" /> <span className="text-muted small">settings</span></p>
                                    <p className="mb-0 text-uppercase"><i className="fas fa-link ms-4 me-2" /> <span className="text-muted small">program link</span></p>
                                    <p className="mb-0 text-uppercase"><i className="fas fa-ellipsis-h ms-4 me-2" /> <span className="text-muted small">program link</span>
                                        <span className="ms-3 me-4">|</span></p>
                                    <a href="#!">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" className="img-fluid rounded-circle me-1" width={35} />
                                    </a>
                                    <a href="#!">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar" className="img-fluid rounded-circle me-1" width={35} />
                                    </a>
                                    <a href="#!">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar" className="img-fluid rounded-circle me-1" width={35} />
                                    </a>
                                    <a href="#!">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" className="img-fluid rounded-circle me-3" width={35} />
                                    </a>
                                    <button type="button" className="btn btn-outline-dark btn-sm btn-floating">
                                        <i className="fas fa-plus" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
);

const Components = () => (
    <div>
        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt style={{ width: 45, height: 45 }} className="rounded-circle" />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Software engineer</p>
                        <p className="text-muted mb-0">IT department</p>
                    </td>
                    <td>
                        <span className="badge badge-success rounded-pill d-inline">Active</span>
                    </td>
                    <td>Senior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-sm btn-rounded">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt style={{ width: 45, height: 45 }} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Alex Ray</p>
                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                    </td>
                    <td>Junior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="rounded-circle" alt style={{ width: 45, height: 45 }} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Kate Hunington</p>
                                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Designer</p>
                        <p className="text-muted mb-0">UI/UX</p>
                    </td>
                    <td>
                        <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                    </td>
                    <td>Senior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt style={{ width: 45, height: 45 }} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Alex Ray</p>
                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                    </td>
                    <td>Junior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt style={{ width: 45, height: 45 }} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Alex Ray</p>
                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                    </td>
                    <td>Junior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt style={{ width: 45, height: 45 }} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Alex Ray</p>
                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                    </td>
                    <td>Junior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt style={{ width: 45, height: 45 }} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Alex Ray</p>
                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                    </td>
                    <td>Junior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt style={{ width: 45, height: 45 }} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Alex Ray</p>
                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                    </td>
                    <td>Junior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
);

const Bootstrap = () => (
    <div>
        <i className="fa fa-sticky-note me-2"></i> Bootstrap
    </div>
);

const Smember = () => {
    const [selectedPage, setSelectedPage] = useState("dashboard");

    const handlePageChange = (page) => {
        setSelectedPage(page);
    };

    const renderPage = () => {
        switch (selectedPage) {
            case "dashboard":
                return <Dashboard />;
            case "components":
                return <Components />;
            case "bootstrap":
                return <Bootstrap />;
            default:
                return null;
        }
    };

    return (
        <div className="container-fluid m-0 p-0" >
            <div className="row">
                <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className={`nav-link ${selectedPage === "dashboard" ? "active" : ""}`} onClick={() => handlePageChange("dashboard")}>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${selectedPage === "components" ? "active" : ""}`} onClick={() => handlePageChange("components")}>
                                    Components
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${selectedPage === "bootstrap" ? "active" : ""}`} onClick={() => handlePageChange("bootstrap")}>
                                    Bootstrap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {renderPage()}
                </main>
            </div>
        </div >
    );
};

export default Smember;
