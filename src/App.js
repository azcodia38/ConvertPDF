import React, { useEffect, useState } from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function App() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setDate(json);
      });
  }, [setDate]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>
              <div>
                <div>
                  <div>{item.name}</div>
                  <div>{item.email}</div>
                </div>
              </div>
            </td>
            <td>{item.phone}</td>
            <td>{item.address.street}</td>
            <td>
              <PDFDownloadLink
                document={<PDFFile data={item} />}
                filename="FORM"
              >
                {({ loading }) =>
                  data.length === 0 ? (
                    <button>
                      <i>Loading Content ...</i>
                    </button>
                  ) : (
                    <button>
                      <i>Download</i>
                    </button>
                  )
                }
              </PDFDownloadLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
