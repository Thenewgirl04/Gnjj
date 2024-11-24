import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faLightbulb, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [aiPanelCollapsed, setAiPanelCollapsed] = useState(true);
  const [prescriptions, setPrescriptions] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [patientData, setPatientData] = useState({
    patientName: "",
    dob: "",
    diagnosis: "",
    medicalHistory: "",
    allergies: "",
    tests: "",
  });

  const toggleAIPanel = () => {
    setAiPanelCollapsed(!aiPanelCollapsed);
  };

  const addPrescriptionField = () => {
    setPrescriptions([
      ...prescriptions,
      { medicine: "", dosage: "", frequency: "", duration: "" },
    ]);
  };

  const updatePrescriptionField = (index, key, value) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions[index][key] = value;
    setPrescriptions(updatedPrescriptions);
  };

  const saveRecord = () => {
    console.log("Medical Record:", {
      ...patientData,
      prescriptions,
    });
    alert("Record saved successfully!");
  };

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f7f9fc",
    padding: "20px",
    minHeight: "100vh",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#333",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "15px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  };

  const panelStyle = {
    position: "fixed",
    top: "0",
    right: aiPanelCollapsed ? "-300px" : "0",
    width: "300px",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    transition: "right 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
  };

  const toggleButtonStyle = {
    position: "absolute",
    left: "-50px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px 0 0 5px",
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Main Content */}
      <div style={cardStyle}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          Electronic Medical Record
        </h1>

        {/* Patient Info Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            Patient Information
          </h2>
          <label style={labelStyle}>Patient Name</label>
          <input
            type="text"
            style={inputStyle}
            value={patientData.patientName}
            onChange={(e) =>
              setPatientData({ ...patientData, patientName: e.target.value })
            }
          />
          <label style={labelStyle}>Date of Birth</label>
          <input
            type="date"
            style={inputStyle}
            value={patientData.dob}
            onChange={(e) => setPatientData({ ...patientData, dob: e.target.value })}
          />
        </div>

        {/* Diagnosis Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            Diagnosis
          </h2>
          <textarea
            style={{ ...inputStyle, height: "100px" }}
            placeholder="Enter diagnosis details..."
            value={patientData.diagnosis}
            onChange={(e) =>
              setPatientData({ ...patientData, diagnosis: e.target.value })
            }
          ></textarea>
        </div>

            {/* symptons Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            symptoms
          </h2>
          <textarea
            style={{ ...inputStyle, height: "100px" }}
            placeholder="Enter diagnosis details..."
            value={patientData.diagnosis}
            onChange={(e) =>
              setPatientData({ ...patientData, diagnosis: e.target.value })
            }
          ></textarea>
        </div>

        {/* Prescription Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            Prescription
          </h2>
          {prescriptions.map((prescription, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Medicine"
                style={{ ...inputStyle, marginRight: "10px", width: "48%" }}
                value={prescription.medicine}
                onChange={(e) =>
                  updatePrescriptionField(index, "medicine", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Dosage"
                style={{ ...inputStyle, width: "48%" }}
                value={prescription.dosage}
                onChange={(e) =>
                  updatePrescriptionField(index, "dosage", e.target.value)
                }
              />
            </div>
          ))}
          <button style={buttonStyle} onClick={addPrescriptionField}>
            Add Medicine
          </button>
        </div>

        {/* Save Button */}
        <div style={{ textAlign: "right" }}>
          <button style={buttonStyle} onClick={saveRecord}>
            Save Record
          </button>
        </div>
      </div>

      {/* AI Assistant Panel */}
      <div style={panelStyle}>
        <button style={toggleButtonStyle} onClick={toggleAIPanel}>
          <FontAwesomeIcon icon={faRobot} />
        </button>
        <div style={{ padding: "20px", flex: "1" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            AI Assistant
          </h2>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: "#ffc107", marginRight: "10px" }} />
          <FontAwesomeIcon icon={faClipboardCheck} style={{ color: "#28a745" }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;







// import React, { useState } from "react";
// import axios from "axios";  // Add Axios for HTTP requests
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRobot, faLightbulb, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

// const Dashboard = () => {
//   const [aiPanelCollapsed, setAiPanelCollapsed] = useState(true);
//   const [prescriptions, setPrescriptions] = useState([]);
//   const [chatMessages, setChatMessages] = useState([]);
//   const [patientData, setPatientData] = useState({
//     patientName: "",
//     dob: "",
//     diagnosis: "",
//     symptoms: "",
//     medicalHistory: "",
//     allergies: "",
//     tests: "",
//   });

//   const [aiResponse, setAiResponse] = useState("");

//   const toggleAIPanel = () => {
//     setAiPanelCollapsed(!aiPanelCollapsed);
//   };

//   const addPrescriptionField = () => {
//     setPrescriptions([...prescriptions, { medicine: "", dosage: "", frequency: "", duration: "" }]);
//   };

//   const updatePrescriptionField = (index, key, value) => {
//     const updatedPrescriptions = [...prescriptions];
//     updatedPrescriptions[index][key] = value;
//     setPrescriptions(updatedPrescriptions);
//   };

//   const sendToAI = async () => {
//     const data = {
//       symptoms: patientData.symptoms,
//       prescriptions: prescriptions,
//     };

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/process", data);
//       setAiResponse(response.data.message);
//     } catch (error) {
//       console.error("Error sending data to AI:", error);
//       alert("Failed to connect to the AI agent.");
//     }
//   };

//   const saveRecord = () => {
//     console.log("Medical Record:", { ...patientData, prescriptions });
//     sendToAI(); // Send data to AI backend
//   };

//   const containerStyle = {
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f7f9fc",
//     padding: "20px",
//     minHeight: "100vh",
//   };

//   const cardStyle = {
//     backgroundColor: "white",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     padding: "20px",
//     marginBottom: "20px",
//     maxWidth: "800px",
//     margin: "0 auto",
//   };

//   const sectionStyle = {
//     marginBottom: "20px",
//   };

//   const labelStyle = {
//     display: "block",
//     marginBottom: "8px",
//     fontWeight: "bold",
//     color: "#333",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     marginBottom: "15px",
//   };

//   const buttonStyle = {
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     margin: "5px",
//   };

//   const panelStyle = {
//     position: "fixed",
//     top: "0",
//     right: aiPanelCollapsed ? "-300px" : "0",
//     width: "300px",
//     height: "100%",
//     backgroundColor: "white",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//     transition: "right 0.3s ease-in-out",
//     display: "flex",
//     flexDirection: "column",
//   };

//   const toggleButtonStyle = {
//     position: "absolute",
//     left: "-50px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px 0 0 5px",
//     padding: "10px",
//     cursor: "pointer",
//   };


//   return (
//     <div style={containerStyle}>
//       <div style={cardStyle}>
//         <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
//           Electronic Medical Record
//         </h1>

//         {/* Symptoms Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
//             Symptoms
//           </h2>
//           <textarea
//             style={{ ...inputStyle, height: "100px" }}
//             placeholder="Enter symptoms..."
//             value={patientData.symptoms}
//             onChange={(e) => setPatientData({ ...patientData, symptoms: e.target.value })}
//           ></textarea>
//         </div>

//         {/* Prescription Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
//             Prescription
//           </h2>
//           {prescriptions.map((prescription, index) => (
//             <div key={index} style={{ marginBottom: "10px" }}>
//               <input
//                 type="text"
//                 placeholder="Medicine"
//                 style={{ ...inputStyle, marginRight: "10px", width: "48%" }}
//                 value={prescription.medicine}
//                 onChange={(e) =>
//                   updatePrescriptionField(index, "medicine", e.target.value)
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder="Dosage"
//                 style={{ ...inputStyle, width: "48%" }}
//                 value={prescription.dosage}
//                 onChange={(e) =>
//                   updatePrescriptionField(index, "dosage", e.target.value)
//                 }
//               />
//             </div>
//           ))}
//           <button style={buttonStyle} onClick={addPrescriptionField}>
//             Add Medicine
//           </button>
//         </div>

//         {/* Save Button */}
//         <div style={{ textAlign: "right" }}>
//           <button style={buttonStyle} onClick={saveRecord}>
//             Save Record
//           </button>
//         </div>
//       </div>

//       {/* AI Assistant Panel */}
//       <div style={panelStyle}>
//         <button style={toggleButtonStyle} onClick={toggleAIPanel}>
//           <FontAwesomeIcon icon={faRobot} />
//         </button>
//         <div style={{ padding: "20px", flex: "1" }}>
//           <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
//             AI Assistant
//           </h2>
//           <p>{aiResponse || "No response yet"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











