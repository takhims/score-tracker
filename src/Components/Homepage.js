import { useState } from "react";
import ProgressBar from "./ProgressBar";

const Homepage = ({ data }) => {
  const [student, setStudent] = useState(null);
  const [subject, setSubject] = useState(null);
  const [marks, setMarks] = useState(null);
  const selectedStudentInfo = data.find((i) => i.id === student);

  return (
    <div className="homepage">
      <div className="container">
        <h1 style={{ margin: 0 }}>Score Tracker</h1>
        <div className="content">
          <p>Please select the name of the student below:</p>
          <select
            className="dropdown"
            value={student ? student : "SelectStudent"}
            onChange={(e) => {
              setStudent(e.target.value);
              setSubject(null);
              setMarks(null);
            }}
          >
            <option value="SelectStudent" disabled>
              Select Student
            </option>
            {data.map((o) => (
              <option key={o.name} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>

          {student ? (
            <>
              <p>Select the subject whose marks you want to see: </p>
              <select
                className="dropdown subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                  setMarks(
                    selectedStudentInfo.subjectsWithMarks[e.target.value]
                  );
                }}
                value={subject ? subject : "SelectSubject"}
              >
                <option value="SelectSubject" disabled>
                  Select Subject
                </option>
                {selectedStudentInfo && selectedStudentInfo.subjectsWithMarks
                  ? Object.keys(selectedStudentInfo.subjectsWithMarks).map(
                      (i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      )
                    )
                  : null}
              </select>
            </>
          ) : null}
          <div>{marks ? <ProgressBar percentage={marks} /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
