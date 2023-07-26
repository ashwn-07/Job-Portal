import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
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
import ResponseView from "./ResponseView";

const ResponseTable = () => {
    const [Data, setData] = useState([]);
    const [currid, setCurrid]= useState([]);
    const [getres, setGetres] = useState(false)

    const getdetails = async () => {
        axios.get("http://localhost:7000/api/getresponses")
            .then((response) => {
                setData(response.data.data);
            })

            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getdetails();
    }, []);
   


    const handleViewResponses = (jobid) =>{
      setCurrid(jobid)
      setGetres(true)
      }
         
        //mui table functions start


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
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage -   Data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    //mui table functions end

   let finaljsx = (<>
    <AdminNav />

  
        

    <Container maxWidth="lg" sx={{ marginTop: "5%" }}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#4F709C" }}>
                        <TableCell sx={{ color: "white" }}>Job Title</TableCell>
                        <TableCell sx={{ color: "white" }}>Company Name</TableCell>
                        <TableCell sx={{ color: "white" }} align="center">
                            Resposnes
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? Data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : Data
                    ).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell sx={{ fontWeight: "500" }} scope="">
                                {row.jobtitle}
                            </TableCell>
                            <TableCell sx={{ fontWeight: "500" }} align="left">
                                {row.companyname}
                            </TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ width: "100px" }}
                                    onClick={() => handleViewResponses(row._id)}
                                >
                                    view
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
                            count={Data.length}
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
   
</>)
if(getres) finaljsx = <ResponseView jobid={currid}/>
    return (
      finaljsx
    );
};

export default ResponseTable;