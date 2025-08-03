import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 30 },
    heading: { fontSize: 16, fontWeight: 'bold', marginBottom: 6, color: "black" },
    subheading: {
        fontSize: 12,
        marginBottom: 6,
        color: "black",
        fontWeight: 'bold',
    },
    border: {
        borderBottom: 1,
        borderColor: "#000",
        paddingBottom: 4,
    },
    margin: {
        marginTop: 10
    },
    text: { fontSize: 12, marginBottom: 4, color: "black" },
    boldText: {
        fontWeight: 'bold',
    },
});

    function ResumeContent({ data }) {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.heading}>Joni Halder</Text>
                    <Text style={styles.subheading}>Frontend Developer</Text>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>
                        PROFESSIONAL SUMMARY
                    </Text>
                    <Text style={styles.text}>
                        Highly motivated and detail-oriented frontend developer with 2+ years of experience in building scalable and user-friendly web applications using modern JavaScript frameworks.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>Education</Text>
                    <Text style={styles.text}>Gangarampur College</Text>
                    <Text style={styles.text}>B.A in Arts (2022 - 2025)</Text>
                </View>

                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>TECHNICAL SKILLS</Text>

                    <Text style={styles.text}>
                        <Text style={styles.boldText}>
                            Frontend:
                        </Text>
                        React.js, Redux Toolkit, Tailwind CSS, GSAP, Bootstrap, Shery.js
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.boldText}>State Management & API:</Text>  Context API, useState, useEffect, Axios, React Router
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.boldText}>
                            Backend & Storage:
                        </Text>
                        json-server, Firebase Auth, Firebase Storage
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.boldText}>
                            Tools:
                        </Text>
                        Git, GitHub, Netlify, Vercel, Formik, Yup, Canva
                    </Text>
                </View>
            </Page>
        </Document>
    );
}

export default ResumeContent;
