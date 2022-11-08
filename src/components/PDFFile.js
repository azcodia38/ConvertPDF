import React from "react";
import { Page, Text, Document,  } from "@react-pdf/renderer";
import { styles } from "./styles";

export default function PDFFile(props) {
  const data = props.data;
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ~ MY COMPANY {data.company.name}
        </Text>
        <Text style={styles.title}>By : {data.name}</Text>
        <Text style={styles.myID}>EMAIL: {data.email}</Text>
        <Text style={styles.myID}>My Number: {data.phone}</Text>
      </Page>
    </Document>
  );
}

