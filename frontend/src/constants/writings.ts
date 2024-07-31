import { getChaptersCount } from "../services/chapters.services";

export var toolbarOptions = [
  ["bold", "italic", "underline"], 
  ["image"], 
  [{ list: "ordered" }, { list: "bullet" }], 
  [{ script: "sub" }, { script: "super" }], 
  [{ indent: "-1" }, { indent: "+1" }], // Add indent buttons
  [{ direction: "rtl" }], // Add text direction button
  [{ size: ["small", false, "large", "huge"] }], 
  [{ color: [] }, { background: [] }], 
  [{ font: [] }],
  [{ align: [] }], 
  ["clean"],
];

