/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    Box,
    TableRow,
    Pagination,
    Typography,
    Skeleton,
    Checkbox,
} from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { employeesList } from "../../redux/action/Employees";
import { EnhancedTableHead } from "../Custom/Table/TableHeader";
import TopBox from "../Custom/Boxes/TopBox";

const AdminEmployeesList = ({ employeesList }) => {
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("");
    const [selected, setSelected] = React.useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = React.useState(1);
    const [start, setStart] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [perv_search_val, setPerv_Search_val] = React.useState("");
    const [search_val, setSearch_val] = React.useState("");
    const [Empty, setEmpty] = useState(false);
    const [sortby, setsortby] = React.useState("");
    let length = 2;
    let data = {
        page: page,
        limit: length,
        sort: "",
        search: ""
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        getuserData();
    }, []);
    const getuserData = () => {
        employeesList(data).then((res) => {
            setLoading(false);
            //   if (res?.data?.data?.total_records === 0) {
            //     setRows(res.data.data.orders_list);
            //     setPages(1);
            //     setEmpty(true);
            //     setLoading(false);
            //   }
            if (res.data.status) {
                setEmpty(false);
                setPages(res.data.pages);
                setRows(res.data.employeeList);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    };
    const handlePageChange = (event, value) => {
        setLoading(true);
        setPage(value);
        data = {
            page:value,
            limit: length,
            sort:"",
            search:""
        };
        // if (order && orderBy) {
        //     let sort_column = { sort_column: orderBy };
        //     let sort = { sort_by: order };
        //     Object.assign(data, sort_column, sort);
        // }
        // if (sortby) {
        //     let sort = { order_status: sortby };
        //     Object.assign(data, sort);
        // }
        if (search_val) {
            let searchVal = { search: search_val };
            Object.assign(data, searchVal);
        }
        setSelected([]);
        getuserData();
    };
    const onSubmit = () => {
        if (
            (search_val !== "" && search_val.trim().length !== 0) ||
            perv_search_val !== ""
        ) {
            setPerv_Search_val(search_val);
            setLoading(true);
            setStart(0);
            setPage(1);
            data = {
                page:page,
                limit: length,
                sort:"",
                search:search_val
            };
    
            // if (order && orderBy) {
            //     let sort_column = { sort_column: orderBy };
            //     let sort = { sort_by: order };
            //     Object.assign(data, sort_column, sort);
            // }
            // if (sortby) {
            //     let sort = { order_status: sortby };
            //     Object.assign(data, sort);
            // }
            getuserData();
            setSelected([]);
        }
    };

    const handleRequestSort = (event, property) => {
        setLoading(true);
        let sort, sort_column;
        let isAsc = orderBy === property && order === "asc";
        if (orderBy !== property) {
            setOrder("desc");
            sort = { sort_by: "asc" };
            sort_column = { sort_column: property };
            setOrderBy(property);
        } else {
            setOrder(isAsc ? "desc" : "asc");
            setOrderBy(property);
            sort_column = { sort_column: property };
            sort = { sort_by: order };
        }
        Object.assign(data, sort_column, sort);
        if (search_val) {
            let searchVal = { search_val: search_val };
            Object.assign(data, searchVal);
        }
        if (sortby) {
            let sort = { order_status: sortby };
            Object.assign(data, sort);
        }
        getuserData();
        setSelected([]);
    };
    const handleClick = (event, title) => {
        const selectedIndex = selected.indexOf(title);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, title);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
    }
    const handleChange = (event) => {
        setLoading(true);
        setsortby(event?.target?.value);
        let sort = { order_status: event.target.value };
        setStart(0);
        setPage(1);
        data = {
            start: 0,
            length: length,
        };
        if (order && orderBy) {
            let sort_column = { sort_column: orderBy };
            let sort = { sort_by: order };
            Object.assign(data, sort_column, sort);
        }
        if (event.target.value === "") {
        } else {
            Object.assign(data, sort);
        }
        if (search_val) {
            let searchVal = { search_val: search_val };
            Object.assign(data, searchVal, sort);
        }
        setSelected([]);
        getuserData();
    };
    const isSelected = (title) => selected.indexOf(title) !== -1;

    return (
        <>
            <TopBox
                button_one={"Search"}
                button_two={"Delete"}
                button_three={"Add new"}
                onClick="/employees/addnew"
                numSelected={selected.length}
                onSubmit={onSubmit}
                perv_search_val={perv_search_val}
                search_val={search_val}
                setSearch_val={setSearch_val}
                // deleteAPI={() => {
                //     if (deleteData !== undefined || selected === []) {
                //         setModal(true);
                //     }
                // }}
            />
            <Box
                sx={{
                    overflow: "auto"
                }}
            >

                <Table
                    sx={{
                        width: { lg: "100%", xs: "1000px" },
                    }}
                    aria-labelledby="tableTitle"
                >
                    <EnhancedTableHead
                        totalColumn={[
                            "First Name",
                            "Last Name",
                            "Email",
                            "Action",
                        ]}
                        numSelected={selected.length}
                        //   order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {rows.map((row, index) => {
                            const isItemSelected = isSelected(row.card_id);
                            const labelId = `enhanced-table-checkbox-${index}`;
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={index}
                                    sx={{ bgcolor: index % 2 === 0 ? "#FFFFFF" : "#FFFAF3" }}
                                >
                                    <TableCell style={Style.tableCell}>
                                        <Checkbox
                                            onClick={(event) => handleClick(event, row.card_id)}
                                            color="primary"
                                            checked={isItemSelected}
                                            inputProps={{
                                                "aria-labelledby": labelId,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        id={labelId}
                                        scope="row"
                                        padding="none"
                                        sx={{ width: "200px", pl: 2.5 }}
                                        style={Style.tableCell1}
                                    >
                                        {loading && (
                                            <Skeleton
                                                variant="rectangular"
                                                height={50}
                                                width={100}
                                            />
                                        )}
                                        {!loading && row.firstName}
                                    </TableCell>
                                    <TableCell style={Style.tableCell1}>
                                        {loading && (
                                            <Skeleton
                                                variant="rectangular"
                                                height={50}
                                                width={100}
                                            />
                                        )}
                                        {!loading && row.lastName}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        id={labelId}
                                        scope="row"
                                        padding="none"
                                        sx={{ width: "200px", pl: 2.5 }}
                                        style={Style.tableCell1}
                                    >
                                        {loading && (
                                            <Skeleton
                                                variant="rectangular"
                                                height={50}
                                                width={100}
                                            />
                                        )}
                                        {!loading && row.email}
                                    </TableCell>
                                    <TableCell style={Style.tableCell}>
                                        <img
                                            alt="logo"
                                            src={require("../../assets/edit.png")}
                                            style={{
                                                width: "18px",
                                                height: "18px",
                                                cursor: "pointer",
                                            }}
                                        // onClick={() => {
                                        // //   handleEdit(row.card_id);
                                        // }}
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    p: { xs: 0, md: 3 },
                }}
            >
                {pages > 1 && (
                    <Pagination
                        count={pages}
                        page={page}
                        boundaryCount={1}
                        onChange={handlePageChange}
                        sx={{
                            button: { fontSize: "16px" },
                            "&.root.Mui-disabled": {
                                fontSize: "28px",
                            },
                        }}
                        siblingCount={1}
                    />
                )}
                {/* </Paper> */}
            </Box>
        </>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        employeesList: (data) => dispatch(employeesList(data)),
    };
}
export default connect(null, mapDispatchToProps)(AdminEmployeesList);

const Style = {
    tableCell1: {
        fontFamily: "Effra",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        // flex:'wrap',
        lineHeight: "19px",
        color: "#000000",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        maxWidth: "200px",
        border: "none",
    },
    tableCell2: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "19px",
        border: "none",
    },
    tableCell: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "19px",
        color: "#000000",
        border: "none",
    },
};
