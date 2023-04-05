import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashItems from './DashItems';
export default function DashBoardScreen() {
    return (
        <>
            <div className="container my-1 ">
                <div className="row">
                    <h1
                        className="display-2 fw-bold text-dark text-loweruppercase"
                        style={{ fontSize: 25 }}
                    >
                        Features Pakages
                        <br />
                        <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>Enter the information to access all features</span>
                    </h1>

                    <div className='container'>
                        <div className="mb-2">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                            {/* <Button variant="outlined" endIcon={<DashboardIcon />}
                                className="btn text-white"
                                style={{ backgroundColor: "#55acee", border: "none" }}
                            >
                                Dashboard
                            </Button> */}
                        </div>


                    </div>


                    <DashItems />

                </div>
            </div>

        </>
    )
}
