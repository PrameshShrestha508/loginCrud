import Projects from "../models/Project.js";
import axios from "axios";

export const projectAll = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (error) {
    res.json({ message: "Data is not available" });
  }
};

export const projectCreate = async (req, res) => {
  axios
    .get("https://api.github.com/users/PrameshShrestha508/repos?per_page=6")
    .then((res) => {
      //   console.log(res);
      const { data } = res;
      console.log(data);
      data.forEach((obj) => {
        new Projects({
          projectTitle: obj.name,
          projectDate: obj.pushed_at,
          projectLink: obj.html_url,
        }).save();
      });
    })
    .catch((error) => console.log(error));
};

export const projectList = async (req, res) => {
  const size = req.params.size;
  res.send(await Projects.find({}).limit(size));
};
