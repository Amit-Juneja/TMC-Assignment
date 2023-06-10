import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Video from "../public/video.svg";

export default function VideoCard() {
  return <Image src={Video} alt="video_card" style={{ width: "90%" }} />;
}
