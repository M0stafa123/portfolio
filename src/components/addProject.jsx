import { useState } from "react";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../firebase";
const Addproject = () => {
  const [project, setProjects] = useState({
    name: "",
    Techs: "",
    live: "",
    github: "",
  });
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjects({ ...project, [name]: value });
  };
  const handleClick = async () => {
    const formData = new FormData();

    const imgref = ref(storage, `${Date.now()}-${preview.name}`);
    const snap = await uploadBytes(imgref, preview);
    const url = await getDownloadURL(snap.ref);
    formData.append("preview", url);
    formData.append("name", project.name);
    formData.append("Techs", project.Techs);
    formData.append("live", project.live);
    formData.append("github", project.github);
    axios
      .post(
        "https://portfolio-z8h6.onrender.com/repos/65c2774c940f12a255a51d7a",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setProjects({
          name: "",
          Techs: "",
          live: "",
          github: "",
        });
        setPreview(null);
        const inputElement = document.getElementById("preview");
        if (inputElement) {
          inputElement.value = ""; // Reset input file value to clear it
        }
      });
  };
  return (
    <div className="projects  flex flex-col gap-4 items-center justify-center h-screen">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={project.name}
          name="name"
          id="name"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="techs">Techniques</label>
        <input
          type="text"
          value={project.Techs}
          name="Techs"
          id="techs"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="live">Live link</label>
        <input
          type="text"
          value={project.live}
          name="live"
          id="live"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="github">Github link</label>
        <input
          type="text"
          name="github"
          id="github"
          value={project.github}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="preview">preview img</label>
        <input
          type="file"
          name="preview"
          id="preview"
          className="bg-white"
          accept="image/*"
          onChange={(e) => setPreview(e.target.files[0])}
        />
      </div>
      <div>
        <button
          className="bg-mainBG text-mainText w-full p-3 rounded-md mt-4"
          onClick={handleClick}
        >
          Add project
        </button>
      </div>
    </div>
  );
};

export default Addproject;
