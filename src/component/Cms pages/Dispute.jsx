// import React, { useState } from "react";
// import Topbar from "../Topbar";
// import Navbar from "../homepage/Navbar";
// import Footer from "../homepage/Footer";
// import image from "../../assestss/custom.jpg";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function Dispute() {
//   const [data, setData] = useState({
//     name: "",
//     phone_no: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const naviagte = useNavigate();
//   const handlechnage = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const postdata = () => {
//     const data1 = {
//       name: data.name,
//       freight_no: data.phone_no,
//       nature_of_Heading: data.email,
//       subject: data.subject,
//       message: data.message,
//       user_id: JSON.parse(localStorage.getItem("data"))?.id,
//     };
//     axios
//       .post(`${process.env.REACT_APP_BASE_URL}addQueries`, data1)
//       .then((response) => {
//         console.log(response.data.message);
//         toast.success(response.data.message);
//         setTimeout(() => {
//           naviagte("/");
//         }, [1000]);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };
//   //  call
//   const phoneNumber = "+27104480733";

//   const handleCall = () => {
//     if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
//       window.location.href = `tel:${phoneNumber}`;
//     } else {
//       alert("Phone calling works only on mobile devices.");
//     }
//   };
//   // email
//   const openGmail = () => {
//     const email = "sa@asiadirect.africa";
//     const subject = "Inquiry";
//     const body = "Hello, I would like to know more...";
//     window.open(
//       `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
//       "_blank"
//     );
//   };
//   return (
//     <div>
//       <div>
//         <Topbar />
//         <Navbar />
//         <>
//           <section>
//             <div class="container my-5">
//               <div class="row justify-content-center mt-5 align-items-center">
//                 <div class="col-md-9">
//                   <div class="div1 mb-4 d-flex justify-content-between">
//                     <h2 class="heading_1">Get in touch</h2>
//                     <div>
//                       <button className="btn btn_add_web">View Dispute</button>
//                     </div>
//                   </div>
//                   <form method="post">
//                     <div class="row">
//                       <div class="col-md-6">
//                         <label class="div_label">Name<span class="redStar">*</span></label>
//                         <input
//                           type="text"
//                           class="box1 form-control "
//                           name="name"
//                           placeholder="Name"
//                           onChange={handlechnage}
//                           required
//                         />
//                       </div>
//                       <div class="col-md-6">
//                         <label class="div_label">Freight Number.<span class="redStar">*</span></label>
//                         <input
//                           type="text"
//                           class="box1 form-control "
//                           name="phone_no"
//                           placeholder="Phone no."
//                           onChange={handlechnage}
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <label class="div_label">Nature of Heading<span class="redStar">*</span></label>
//                         {/<span class="redStar">*</span> <input
//                           type="email"
//                           name="email"
//                           class="box1 form-control"
//                           placeholder="Email"
//                           onChange={handlechnage}
//                           required
//                         /> <span class="redStar">*</span>/}
//                         <select onChange={handlechnage} name="email" class="box1 form-control">
//                           <option>Select...</option>
//                           <option value="Invoicing">Invoicing</option>
//                           <option value="service support">Service Support</option>
//                           <option value="Pricing">Pricing</option>
//                         </select>
//                       </div>
//                       <div className="col-md-6">
//                         <label class="div_label">Subject<span class="redStar">*</span></label>
//                         <input
//                           type="text"
//                           name="subject"
//                           class="box1 form-control"
//                           placeholder="Subject"
//                           onChange={handlechnage}
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-12">
//                         <label class="div_label">Message<span class="redStar">*</span></label>
//                         <textarea
//                           class="box2 form-control "
//                           name="message"
//                           onChange={handlechnage}
//                           required
//                         ></textarea>
//                       </div>
//                     </div>

//                     <Button className="btn_add_web" onClick={postdata}>
//                       Add Query
//                     </Button>
//                   </form>
//                 </div>
//                 <div class="col-md-3">
//                   <div class="main3">
//                     <div class="">
//                       <div
//                         class="d-flex mb-3"
//                         style={{ cursor: "pointer" }}
//                         onClick={() =>
//                           window.open(
//                             "https://www.google.com/maps?q=Johannesburg, South+Africa",
//                             "_blank"
//                           )
//                         }
//                       >
//                         <div class="">
//                           <i class="fi fi-rr-marker icon1"></i>
//                         </div>
//                         <div class="">
//                           <h6 class="call_heading">Address:</h6>
//                           <p class="para1">Johannesburg, South Africa</p>
//                         </div>
//                       </div>
//                       <div class="d-flex mb-3">
//                         <div class="">
//                           <i class="fi fi-rr-phone-call icon1"></i>
//                         </div>
//                         <div onClick={handleCall} style={{ cursor: "pointer" }}>
//                           <h6 className="call_heading">Phone Number:</h6>

//                           <p className="para1">{phoneNumber}</p>
//                         </div>
//                       </div>
//                       <div class="d-flex mb-3">
//                         <div class="">
//                           <i class="fi fi-rr-envelope icon1"></i>
//                         </div>
//                         <div
//                           onClick={openGmail}
//                           style={{
//                             cursor: "pointer",
//                           }}
//                         >
//                           <h6 className="call_heading">Email Address:</h6>
//                           <p className="para1">sa@asiadirect.africa</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//         <Footer />
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }
import React, { useState } from "react";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Dispute() {
  const [data, setData] = useState({
    name: "",
    phone_no: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(true); // ✅ toggle state
  const [disputes, setDisputes] = useState([]);   // ✅ for table data

  const navigate = useNavigate();

  const handlechnage = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postdata = () => {
    const data1 = {
      name: data.name,
      freight_no: data.phone_no,
      nature_of_Heading: data.email,
      subject: data.subject,
      message: data.message,
      user_id: JSON.parse(localStorage.getItem("data"))?.id,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}addQueries`, data1)
      .then((response) => {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Error occurred");
      });
  };

  // fetch disputes for table (when clicked "View Dispute")
  const fetchDisputes = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}getQueries`)
      .then((res) => {
        setDisputes(res.data || []);
      })
      .catch((err) => {
        toast.error("Failed to fetch disputes");
      });
  };

  const toggleView = () => {
    if (showForm === false) {
      getQueriesByUs()
      // going back to form
      setShowForm(true);
    } else {
      // switching to table
      fetchDisputes();
       getQueriesByUs()
      setShowForm(false);
    }
  };

  const getQueriesByUs = ()=>{
    const userId = JSON.parse(localStorage.getItem("data"))?.id;
  const response =  axios.post(`${process.env.REACT_APP_BASE_URL}getQueriesByUserId`,{user_id:userId})
  .then((response)=>{
console.log(response.data)
    setDisputes(response.data.data || []);
  })
  .catch((err)=>{
    toast.error("Failed to fetch your disputes"); })
  }
  return (
    <div>
      <Topbar />
      <Navbar />

      <section>
        <div className="container my-5">
          <div className="row justify-content-center mt-5 align-items-center">
            <div className="col-md-12">
              <div className="div1 mb-4 d-flex justify-content-between">
                <h2 className="heading_1">  {showForm ? "Get in Touch" : "View Dispute"}</h2>
                <div>
                  <button className="btn btn_add_web" onClick={toggleView}>
                    {showForm ? "View Dispute" : "Add Dispute"}
                  </button>
                </div>
              </div>

              {showForm ? (
                <form method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="div_label">Name<span class="redStar">*</span></label>
                      <input
                        type="text"
                        className="box1 form-control "
                        name="name"
                        placeholder="Name"
                        onChange={handlechnage}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="div_label">Freight Number<span class="redStar">*</span></label>
                      <input
                        type="text"
                        className="box1 form-control "
                        name="phone_no"
                        placeholder="Phone no."
                        onChange={handlechnage}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="div_label">Nature of Heading<span class="redStar">*</span></label>
                      <select
                        onChange={handlechnage}
                        name="email"
                        className="box1 form-control"
                      >
                        <option>Select...</option>
                        <option value="Invoicing">Invoicing</option>
                        <option value="service support">Service Support</option>
                        <option value="Pricing">Pricing</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="div_label">Subject<span class="redStar">*</span></label>
                      <input
                        type="text"
                        name="subject"
                        className="box1 form-control"
                        placeholder="Subject"
                        onChange={handlechnage}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="div_label">Message<span class="redStar">*</span></label>
                      <textarea
                        className="box2 form-control "
                        name="message"
                        onChange={handlechnage}
                        required
                      ></textarea>
                    </div>
                  </div>

                 <div className="text-center">
                   <button className="btn_add_web mt-3" onClick={postdata}>
                    Add Query
                  </button>
                 </div>
                </form>
              ) : (
                // ✅ TABLE
                <div className="table-responsive col-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sr No.</th>
                        <th>Freight No.</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th> Nature of Heading</th>
                        <th>Outcomes</th>
                        <th>Resolution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disputes.length > 0 ? (
                        disputes.map((item, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.freight_no}</td>
                            <td>{item.name}</td>
                            <td>{item.subject}</td>
                            <td>{item.nature_of_Heading}</td>
                            <td>{item.outcome}</td>
                            <td>{item.resolution}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No disputes found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ToastContainer />
    </div>
  );
}
