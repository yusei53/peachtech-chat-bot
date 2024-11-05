import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chat = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          width={"60%"}
          height={"85vh"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box
            height={"20vh"}
            display={"flex"}
            justifyContent={"right"}
            alignItems={"center"}
          >
            <Box bgcolor={"#F4F4F4"} padding={1} borderRadius={20}>
              <Typography>どんなサークルですか？</Typography>
            </Box>
          </Box>

          <Box height={"65vh"}>
            <Box padding={1} display={"flex"} alignItems={"flex-start"} gap={3}>
              <IconButton>
                <SendIcon />
              </IconButton>
              <Typography>
                どんなサークルですかああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ？
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        height={"15vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TextField
          variant="outlined"
          placeholder="メッセージを送信"
          size="small"
          sx={{ width: "60%" }}
          InputProps={{
            style: { borderRadius: "20px", paddingLeft: 8 },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default Chat;
