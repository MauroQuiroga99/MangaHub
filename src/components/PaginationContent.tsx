import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getTotalPages } from "app/store/selector/selectors";
import { setCurrentPage } from "app/store/slices/animeMangaSlice";

export default function PaginationContent() {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const totalPages = useSelector(getTotalPages);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
}
