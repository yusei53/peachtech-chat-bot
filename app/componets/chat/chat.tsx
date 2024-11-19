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
          padding={1}
          width={"60%"}
          height={"85vh"}
          display={"flex"}
          flexDirection={"column"}
        >
<<<<<<< HEAD
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize="17px">Peach.Tech Bot</Typography>
          </Box>

          <Box
=======
          <Box
            height={"8vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography sx={{ fontSize: "17px" }}>Peach.Tech Bot</Typography>
          </Box>

          <Box
            height={"77vh"}
>>>>>>> 5b36bbe7db2c8b1ce7e2df071acb6a75a901c664
            overflow={"auto"}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarwidth: "none",
            }}
          >
            <Box textAlign={"right"}>
              <Typography
                bgcolor={"#F4F4F4"}
                padding={1}
                borderRadius={20}
                display={"inline-block"}
              >
                どんなサークルですか？
              </Typography>
            </Box>
            <Box padding={1} display={"flex"} alignItems={"flex-start"} gap={3}>
              <IconButton>
                <SendIcon />
              </IconButton>
              <Typography>
                どんなサークルですかああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ？あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああうめざわりょうああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああやっほーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
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
