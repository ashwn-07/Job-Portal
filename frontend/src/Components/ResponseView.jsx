import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import HeaderEmp from "./HeaderEmp";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Button, Container, TableHead } from "@mui/material";
import DownloadButton from "./DownloadButton";
import LinkViewButton from "./LinkViewButton";

const ResponseView = (props) => {
    const [responses, setResponses] = useState([]);
    const [adid] = useState(sessionStorage.getItem("ad.id"));
    const [verify, setVerify] = useState(false);
    const [display, setDisplay]= useState("")

             //fetching the responses 
            const fetchresponse = () => {


                if(adid){
                //gets all the added responses
                const id =  props.jobid;

                axios.get(`http://localhost:7000/api/viewresponses/${id}`)
                    .then((response) => {
                        console.log(response.data.data[0].responses);
                        setResponses(response.data.data[0].responses);
                    })
                    .catch((err) => console.log(err));
                }

                else{
                    //gets only the verified responses
                    setDisplay("none")
                    axios.get(`http://localhost:7000/api/verifiedres/${props.jobid}`)

                    .then((response)=>setResponses(response.data.data[0].responses))
                    
                    .catch(error=>console.log(error))
                }
            };

    useEffect(() => {
        fetchresponse();
    }, []);

    //rerendering once verified
    useEffect(() => {
        
        if (verify) {
          fetchresponse();
          setVerify(false)
        }
      }, [verify]);

    //fucntion to verify the response
    const HandleVerify = (resid) => {
        console.log(resid);
        axios.put(`http://localhost:7000/api/verifyres/${resid}`)
            .then((response) => {
                
                setVerify(true);
            })

            .catch((error) => console.log(error));
    };

    //tablefunctions
    function TablePaginationActions(props) {
        const theme = useTheme();
        const { count, page, rowsPerPage, onPageChange } = props;

        const handleFirstPageButtonClick = (event) => {
            onPageChange(event, 0);
        };

        const handleBackButtonClick = (event) => {
            onPageChange(event, page - 1);
        };

        const handleNextButtonClick = (event) => {
            onPageChange(event, page + 1);
        };

        const handleLastPageButtonClick = (event) => {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };

        return (
            <Box sx={{ flexShrink: 0, ml: 2.5 }}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="previous page"
                >
                    {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </Box>
        );
    }

    TablePaginationActions.propTypes = {
        count: PropTypes.number.isRequired,
        onPageChange: PropTypes.func.isRequired,
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired,
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - responses.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    //mui
    return (
        <>
            {adid ? <AdminNav /> : <HeaderEmp />}

         

            <Container maxWidth="lg" sx={{ marginTop: "5%" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#4F709C" }}>
                                <TableCell sx={{ color: "white" }}>Applicant Name</TableCell>
                                <TableCell sx={{ color: "white" }}>Email ID</TableCell>
                                <TableCell sx={{ color: "white" }}>Response Type</TableCell>
                                
                                <TableCell sx={{ color: "white" }} align="center">
                                    Action
                                </TableCell>
                                <TableCell sx={{ color: "white", display:{display} }} align="center">
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? responses.slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                  )
                                : responses
                            ).map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontWeight: "500", textTransform:"uppercase" }} scope="">
                                        {row.username}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "500" }} scope="">
                                        {row.emailid}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "500" }} align="left">
                                        {row.responsetype}
                                    </TableCell>
                                    <TableCell align="center">
                                        
                                           {(row.responsetype==="pdf")?<DownloadButton  path={row.path} resid={row._id}/>:<LinkViewButton path={row.path}/>}
                                        
                                    </TableCell>
                                    {/* verifictaion table cell */}
                                    <TableCell align="center" sx={{display:{display}}}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: "100px",
                                                backgroundColor: row.Verified ? "green" : "red",
                                                '&:hover':{ backgroundColor: row.Verified ? "green" : "red"}
                                            }}
                                            
                                            onClick={() => HandleVerify(row._id)}
                                        >
                                            {row.Verified ? "Verified" : "verify"}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                                    colSpan={3}
                                    count={responses.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            "aria-label": "rows per page",
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default ResponseView;
