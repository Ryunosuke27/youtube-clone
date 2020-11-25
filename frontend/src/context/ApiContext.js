import React, { createContext, useState, useEffect } from "react";
import { withCookies } from "react-cookies";
import axios from "axios";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const token = props.cookies.get("jwt-token");
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [thum, setThum] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modelIsOpen, setModelIsOpen] = useState(false);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/videos/", {
          headers: {
            Autorization: `JWT ${token}`,
          },
        });
        setVideos(res.data);
      } catch {
        console.log("error");
      }
    };
    getVideos();
  }, [token]);

  return <div></div>;
};

export default withCookies(ApiContextProvider);
