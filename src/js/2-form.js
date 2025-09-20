const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  const parsed = JSON.parse(saved);
  formData = {
    email: parsed.email || "",
    message: parsed.message || "",
  };
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", (e) => {
  const { name, value } = e.target;
  formData[name] = value;
  const toSave = {
    email: formData.email.trim(),
    message: formData.message.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataToSubmit = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!dataToSubmit.email || !dataToSubmit.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(dataToSubmit);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});
