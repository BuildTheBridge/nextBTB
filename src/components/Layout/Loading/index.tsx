import { Backdrop, CircularProgress } from "@mui/material";

interface IProps {
  loading: boolean;
}

export default function Loading(props: IProps) {
  const { loading } = props;
  return (
    <Backdrop
      open={loading}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      {loading && <CircularProgress color="inherit" />}
    </Backdrop>
  );
}
