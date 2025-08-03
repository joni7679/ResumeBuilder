import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 30 },
    heading: { fontSize: 12, fontWeight: 'bold', marginBottom: 3, color: 'black', textAlign: 'center' },
    subheading: {
        fontSize: 11,
        marginBottom: 3,
        color: 'black',
        fontWeight: 'bold',
    },
    border: {
        borderBottom: 1,
        borderColor: '#000',
        paddingBottom: 4,
    },
    margin: { marginTop: 5 },
    text: { fontSize: 9, marginBottom: 4, color: 'black' },
    boldText: { fontWeight: 'bold' },
    jobTitle: {
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: 8,
        color: 'black',
    },
    jobDetails: {
        fontSize: 9,
        color: '#666',
        marginBottom: 2,
    },
    jobDesc: {
        fontSize: 9,
        marginBottom: 2,
        color: 'black',
    },
    textAlign: { textAlign: 'center' },
});

function ResumeContent() {
    
    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* Header */}
                <View>
                    <Text style={styles.heading}>Joni Halder</Text>
                    <Text style={[styles.subheading, styles.margin, styles.textAlign]}>Frontend Developer</Text>
                </View>

                {/* Professional Summary */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>PROFESSIONAL SUMMARY</Text>
                    <Text style={styles.text}>
                        Highly motivated and detail-oriented frontend developer with 2+ years of experience in building responsive and scalable web applications using React.js, Tailwind CSS, and Firebase. Proven ability to reduce load times and enhance user experience through optimization techniques.
                    </Text>
                </View>

                {/* Work Experience */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>WORK EXPERIENCE</Text>

                    <Text style={styles.jobTitle}>Frontend Developer Intern – Gravity Coding School</Text>
                    <Text style={styles.jobDetails}>Feb 2025 – May 2025 | Remote</Text>
                    <Text style={styles.jobDesc}>• Built responsive UIs using Tailwind CSS and GSAP.</Text>
                    <Text style={styles.jobDesc}>• Converted Figma designs into production-ready React components.</Text>
                    <Text style={styles.jobDesc}>• Implemented scroll-based animations with AOS and ScrollTrigger.</Text>
                </View>

                {/* Education */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>EDUCATION</Text>
                    <Text style={styles.text}>Gangarampur College</Text>
                    <Text style={styles.text}>B.A in Arts (2022 – 2025)</Text>
                </View>

                {/* Projects */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>PROJECTS</Text>

                    <Text style={styles.jobTitle}>Resume Builder Web App</Text>
                    <Text style={styles.jobDetails}>React.js, Context API, Firebase Auth, Tailwind CSS</Text>
                    <Text style={styles.jobDesc}>• Built dynamic resume builder with real-time preview.</Text>
                    <Text style={styles.jobDesc}>• Integrated Firebase Auth for secure login and session handling.</Text>
                    <Text style={styles.jobDesc}>• Enabled PDF export using react-to-print and localStorage persistence.</Text>

                    <Text style={styles.jobTitle}>Learning Management System (LMS)</Text>
                    <Text style={styles.jobDetails}>React.js, Redux Toolkit, Firebase Auth, Tailwind CSS</Text>
                    <Text style={styles.jobDesc}>• Created role-based dashboards for Admin and Users.</Text>
                    <Text style={styles.jobDesc}>• Managed global state with Redux Toolkit and secured routes.</Text>
                    <Text style={styles.jobDesc}>• Built a responsive, scalable SPA with protected navigation.</Text>

                    <Text style={styles.jobTitle}>Employee Management System</Text>
                    <Text style={styles.jobDetails}>React.js, Context API, Tailwind CSS, React Router</Text>
                    <Text style={styles.jobDesc}>• Built task dashboard with dynamic filtering and routing.</Text>
                    <Text style={styles.jobDesc}>• Used Context API for state sharing across components.</Text>
                    <Text style={styles.jobDesc}>• Implemented authentication and conditional UI rendering.</Text>

                    <Text style={styles.jobTitle}>Location Search App</Text>
                    <Text style={styles.jobDetails}>HTML, CSS, JavaScript</Text>
                    <Text style={styles.jobDesc}>• Developed search interface for hotel and travel listings.</Text>
                    <Text style={styles.jobDesc}>• Filtered data using JavaScript and optimized UX with instant search.</Text>
                </View>

                {/* Technical Skills */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>TECHNICAL SKILLS</Text>

                    <Text style={styles.text}>
                        <Text style={styles.boldText}>Frontend:</Text> React.js, Redux Toolkit, Tailwind CSS, GSAP, Bootstrap, Shery.js
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.boldText}>Routing & State:</Text> React Router, Context API, useState, useEffect
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.boldText}>Backend & Auth:</Text> Firebase Auth, Firebase Storage, json-server
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.boldText}>Developer Tools:</Text> Git, GitHub, Netlify, Vercel, Formik, Yup, Canva
                    </Text>
                </View>

            </Page>
        </Document>
    );
}

export default ResumeContent;
