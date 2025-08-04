import React from 'react';
import { Document, Page, View, Text, StyleSheet, Link } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        padding: 30
    },
    heading: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
        color: 'black',
        textAlign: 'center'
    },
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
    margin: {
        marginTop: 5
    },
    text: {
        fontSize: 9,
        marginBottom: 4,
        color: 'black'
    },
    boldText: {
        fontWeight: 'bold'
    },
    jobTitle: {
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: 8,
        color: 'black',
    },
    techskill: {
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
    flex: {
        flexDirection: "row",
        justifyContent: "space-center",
        marginBottom: 4,
        marginHorizontal: 10,
    },

});

function ResumeContent() {
    const savedData = JSON.parse(localStorage.getItem("resumeData"));

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* Header */}
                <View>
                    <Text style={styles.heading}>{savedData?.personalinfo?.fullName || 'Your Name'}</Text>
                    <Text style={[styles.subheading, styles.margin, styles.textAlign]}>{savedData?.personalinfo?.jobtitle || 'Job Title'}</Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.text}>Email: {savedData?.personalinfo?.email}</Text>
                    <Text style={styles.text}>Phone: {savedData?.personalinfo?.phone}</Text>

                    <Link src={savedData?.personalinfo?.github} style={styles.link}>
                        GitHub: {savedData?.personalinfo?.github}
                    </Link>

                    <Link src={savedData?.personalinfo?.linkedin} style={styles.link}>
                        LinkedIn: {savedData?.personalinfo?.linkedin}
                    </Link>

                    <Link src={savedData?.personalinfo?.portfolio} style={styles.link}>
                        Portfolio: {savedData?.personalinfo?.portfolio}
                    </Link>

                    <Text style={styles.text}>Address: {savedData?.personalinfo?.address}</Text>
                </View>
                {/* Professional Summary */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>PROFESSIONAL SUMMARY</Text>
                    <Text style={styles.text}>
                        {savedData?.personalinfo?.summary || 'Add your summary here.'}
                    </Text>
                </View>

                {/* Work Experience */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>WORK EXPERIENCE</Text>
                    {savedData?.experience?.length > 0 ? savedData.experience.map((exp, idx) => (
                        <View key={idx}>
                            <Text style={styles.jobTitle}>{exp.role} – {exp.company}</Text>
                            <Text style={styles.techskill}>{exp.start} – {exp.end} | {exp.location}</Text>
                            {exp.description?.map((desc, i) => (
                                <Text key={i} style={styles.jobDesc}>• {desc}</Text>
                            ))}
                        </View>
                    )) : (
                        <Text style={styles.text}>No experience added yet.</Text>
                    )}
                </View>

                {/* Education */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>EDUCATION</Text>
                    {savedData?.education?.length > 0 ? savedData.education.map((edu, idx) => (
                        <View key={idx}>
                            <Text style={styles.text}>{edu.collegename}</Text>
                            <Text style={styles.text}>{edu.stream} ({edu.startdate} – {edu.enddate})</Text>
                        </View>
                    )) : (
                        <Text style={styles.text}>No education data provided.</Text>
                    )}
                </View>

                {/* Projects */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>PROJECTS</Text>
                    {savedData?.projects?.length > 0 ? savedData.projects.map((proj, idx) => (
                        <View key={idx}>
                            <Text style={styles.jobTitle}>{proj.projectTitle}</Text>
                            <Text style={styles.techskill}>{proj.techSkills}</Text>
                            <View style={styles.flex}>
                                <Text style={styles.text}>Live Link: {proj.liveLink || 'N/A'}</Text>
                                <Text style={styles.text}>GitHub: {proj.githubLink || 'N/A'}</Text>
                            </View>
                            <Text style={styles.jobDesc}>• {proj.projectDescription || 'Project description not added.'}</Text>
                        </View>
                    )) : (
                        <Text style={styles.text}>No projects listed.</Text>
                    )}
                </View>


                {/* Technical Skills */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>TECHNICAL SKILLS</Text>
                    <Text style={styles.text}>
                        {savedData?.skills?.length > 0
                            ? savedData.skills.join(', ')
                            : 'No skills listed.'}
                    </Text>
                </View>

            </Page>
        </Document>
    );
}

export default ResumeContent;
