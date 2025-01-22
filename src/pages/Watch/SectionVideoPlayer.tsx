import { Alert, Box, Typography } from "@mui/joy";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const SectionVideoPlayer = () => {
  const currentEpisode = useSelector(
    (state: RootState) => state.watch.currentEpisode
  );

  return (
    <>
      <Alert>
        <Typography level="title-lg">{currentEpisode.filename}</Typography>
      </Alert>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          paddingTop: "56.25%", // 16:9 ratio (9 / 16 * 100 = 56.25%)
          borderRadius: "8px",
          border: "1px solid rgba(61, 71, 81, 0.3)",
          overflow: "hidden",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          src={currentEpisode.link_embed}
          frameBorder="0"
          allow="fullscreen"
        ></iframe>
      </Box>
    </>
  );
};

export default SectionVideoPlayer;
