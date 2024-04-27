import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    required: true,
  });

  const [isLoading, setIsLoading] = useState(true);

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Kullanıcı adı",
      type: "text",
      placeholder: "Kullanıcı adınızı girin",
      errorMessage:
        "Kullanıcı adı 3-16 karakter arasında olmalıdır!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email girin",
      errorMessage: "Geçerli bir Email adresi girin!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      label: "Şifre",
      type: "password",
      placeholder: "Şifrenizi girin",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage:
        "Şifre 8 ile 20 karakter arasında,en az 1 harf ve en az 1 sayı içermelidir",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Şifreyi onaylayın",
      type: "password",
      placeholder: "Şifrenizi onaylayın",
      pattern: values.password,
      errorMessage: "Şifreler uyuşmuyor!",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  };

  const onChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Kaydol</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} onChange={onChange} {...input} />
        ))}
        <button>{isLoading ? "Gönder" : "Yükleniyor..."}</button>
      </form>
    </div>
  );
}

export default App;
