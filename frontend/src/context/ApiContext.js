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

  const newVideo = async () => {
    const uploadData = new FormData();
    uploadData.append("title", title);
    uploadData.append("video", video, video.name);
    uploadData.append("thum", thum, thum.name);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/videos/",
        uploadData,
        {
          headers: {
            "Context-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );
      setVideos([...videos, res.data]);
      setModelIsOpen(false);
      setTitle("");
      setVideo(null);
      setThum(null);
    } catch {
      console.log("error");
    }
  };

  const deleteVideo = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/videos/${selectedVideo.id}/`,
        {
          headers: {
            "Context-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );
      setSelectedVideo(null);
      setVideos(videos.filter((item) => item.id !== selectedVideo.id));
    } catch {
      console.log("error");
    }
  };

  return <div></div>;
};

export default withCookies(ApiContextProvider);
