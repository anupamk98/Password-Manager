import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const Ref = useRef();
  const [PasswordArray, setPasswordArray] = useState([]);
  const [show, setshow] = useState("py-2 text");
  const [form, setform] = useState({ website: "", username: "", password: "", id:"" });
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const EyeHandler = () => {
    if (Ref.current.src.includes("https://www.svgrepo.com/show/393103/eye.svg")) {
      Ref.current.src = "https://www.svgrepo.com/show/488930/eye-closed.svg";
      setshow("password");
    } else {
      Ref.current.src = "https://www.svgrepo.com/show/393103/eye.svg";
      setshow("py-2 text");
    }
  };
  const SavePassword = () => {
    if(form.password.length>3 && form.username.length>3 && form.website.length>3) {
    setPasswordArray([...PasswordArray, {...form, id : uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...PasswordArray,{...form , id :uuidv4()}]));
    console.log([...PasswordArray, {...form,id:uuidv4()}]);
    setform({ website: "", username: "", password: "",id:"" });
    toast('Information Saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }
    else {
      toast('Information not valid', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };
  const DeletePassword = (id) => {
    toast('Information Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
 setPasswordArray(PasswordArray.filter(item=>item.id!==id))
 localStorage.setItem("passwords",JSON.stringify(PasswordArray.filter(item=>item.id!==id)))
  };
  const EditPassword = (id) => {
  setform(PasswordArray.filter(item=>item.id===id)[0])
  setPasswordArray(PasswordArray.filter(item=>item.id!==id))

  toast('Information is being edited', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const copyText = (text) => { 
    toast('Information Copied to Clipboard', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    navigator.clipboard.writeText(text)
  }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
      <div className="container my-5 mx-auto w-[70vw] rounded-xl">
        <div className="flex flex-col">
          <div className="logo font-bold py-2 text-2xl text-green-800 flex justify-center">
            &lt;
            <span className=" text-green-800">Pass</span>
            <span className=" text-slate-800">Saver</span>/&gt;
          </div>
          <div className="flex justify-center">Your own Password Manager</div>
          <div className="Website flex justify-center my-5">
            <input
              placeholder="Website"
              name="website"
              onChange={handleChange}
              value={form.website}
              type="py-2 text"
              className="w-full rounded-full border border-green-500 px-4 py-1 outline-none"
            />
          </div>
          <div className="userPass flex justify-betweem w-full my-7 gap-10 md:gap-5 sm:gap-1">
            <input
              value={form.username}
              name="username"
              placeholder="Username"
              onChange={handleChange}
              type="py-2 text"
              className="w-full rounded-full border border-green-500 px-4 py-1 outline-none"
            />
            <div className="w-full rounded-full border border-green-500 px-4 py-1 bg-white flex relative">
              <input
                value={form.password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                type={show}
                className="w-[80%] outline-none"
              />
              <img
                src="https://www.svgrepo.com/show/393103/eye.svg"
                ref={Ref}
                className="w-6 absolute right-5 cursor-pointer"
                alt=""
                onClick={EyeHandler}
              />
            </div>
          </div>
          <div className="submit flex justify-center">
            <button
              onClick={SavePassword}
              className="bg-green-500 hover:bg-green-400 p-2 px-5 border border-green-900 rounded-full py-2 text-white flex justify-center items-center gap-2"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
        <div className="passwordss w-[70vw]">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {PasswordArray.length === 0 && (
            <div>You haven't saved any passwords yet</div>
          )}
          {PasswordArray.length !== 0 && (
            <div className="">
              <table className="table-auto w-full rounded-md overflow-hidden">
                <thead className="bg-green-800 py-2 text-white">
                  <tr>
                    <th className="py-2">Website</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {PasswordArray.map((item) => {
                    return (
                      <tr>
                        <td className="py-2 text-center ">
                          <div className="w-[100%] flex flex-wrap justify-center align-middle gap-2">
                            {item.website}
                            <div onClick={()=>copyText(item.website)}><lord-icon
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon></div>
                          </div>
                        </td>
                        <td className="py-2 text-center ">
                          <div className="w-[100%] flex flex-wrap justify-center align-middle gap-2">
                            {item.username}
                            <div onClick={()=>copyText(item.username)} ><lord-icon
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon></div>
                          </div>
                        </td>
                        <td className="py-2 text-center ">
                          <div className="w-[100%] flex flex-wrap justify-center align-middle gap-2">
                            {item.password}
                            <div onClick={()=>copyText(item.password)} ><lord-icon
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon></div>
                          </div>
                        </td>
                        <td>
                        <div className="w-[100%] flex flex-wrap justify-center align-middle gap-2">
                        <div onClick={()=>{DeletePassword(item.id)}}><lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon></div>
                            <div onClick={()=>{EditPassword(item.id)}}><lord-icon
                              src="https://cdn.lordicon.com/ogkflacg.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon></div>
                            </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
