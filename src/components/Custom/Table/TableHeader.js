import React from "react";
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useLocation } from "react-router-dom";

export const EnhancedTableHead = ({
  totalColumn,
  numSelected,
  order,
  orderBy,
  onSelectAllClick,
  onRequestSort,
  rowCount,
  checkbox,
}) => {
  const headCells = totalColumn.map((item, index) => ({
    id: item === "" ? "none" : item,
    numeric: false,
    disablePadding: true,
    label: item,
  }));
  const location = useLocation();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{
        bgcolor: "#1f6abf",
      }}>
        {!checkbox && (
          <TableCell style={Style.tableHeaderCheckBox}>
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
              sx={{ mt: "10px" }}
            />
          </TableCell>
        )}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}

            style={
              (location.pathname === "/e-giftcards" ||
                location.pathname === "/giftcards") &&
                headCell.id === "Title"
                ? Style.tableHeaderTitle
                : location.pathname === "/greeting/categories" && headCell.id === "Title"
                  ? Style.tableHeadertitle
                  : Style.tableHeader
            }
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
            {headCell.id !== "none" && headCell.id !== "Action" && headCell.id !== "Image" &&
              headCell.id !== "Video" && headCell.id !== "Status" && headCell.id !== "Declined Reason" &&
              headCell.id !== "If Declined tell us why?" && (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(
                    headCell.id === "Item" ? "none" : headCell.id
                  )}
                >
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const Style = {
  tableHeader: {
    lineHeight: "22px",
    borderRadius: "2px",
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: "16px",
    fontSize: "18px",
    fontWeight: 400,
    color: "white",
    maxWidth: '100px'
  },
  tableHeadertitle: {
    lineHeight: "22px",
    borderRadius: "2px",
    paddingTop: 0,
    fontSize: "18px",
    fontWeight: 400,
  },
  tableHeaderTitle: {
    lineHeight: "22px",
    borderRadius: "2px",
    paddingTop: 0,
    width: "35%",
    fontSize: "18px",
    fontWeight: 400,
  },

  tableHeaderCheckBox: {
    lineHeight: "22px",
    width: "40px",
    borderRadius: "2px",
    paddingTop: 0,
    paddingLeft: "16px",
  },
};
