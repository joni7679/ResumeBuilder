import React from 'react';
import { Document, Page, View, Text, StyleSheet, Link, Image } from '@react-pdf/renderer';
import githubIcon from '../../../assets/github.png';
import phoneIcon from '../../../assets/phone-call.png';
import linkedinIcon from '../../../assets/linkedin-logo.png';
import webbIcon from '../../../assets/world-wide-web.png';
import emailIcon from '../../../assets/mail.png';
import pinIcon from '../../../assets/pin.png'

const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    heading: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
        color: 'black',
        textAlign: 'center',
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
        marginTop: 5,
    },
    text: {
        fontSize: 9,
        marginBottom: 4,
        color: 'black',
    },
    boldText: {
        fontWeight: 'bold',
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
    textAlign: {
        textAlign: 'center',
    },
    flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        marginBottom: 4,
        marginHorizontal: 10,
    },
    itemsCcenter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    link: {
        fontSize: 9,
        textDecoration: 'underline',
        marginBottom: 4,
        color: 'black',
    },

    icon: {
        width: 12,
        height: 12,
        marginRight: 4,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 4,
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
                <View style={[styles.flex]}>

                    <View style={styles.item}>
                        <Image src={emailIcon} style={styles.icon} />
                        <Text style={styles.text}>{savedData?.personalinfo?.email}</Text>
                    </View>


                    <View style={styles.item}>
                        <Image src={phoneIcon} style={styles.icon} />
                        <Text style={styles.text}>{savedData?.personalinfo?.phone}</Text>
                    </View>


                    <View style={styles.item}>
                        <Image src={githubIcon} style={styles.icon} />
                        <Link src={savedData?.personalinfo?.github} style={styles.link}>
                            GitHub
                        </Link>
                    </View>


                    <View style={styles.item}>
                        <Image src={linkedinIcon} style={styles.icon} />
                        <Link src={savedData?.personalinfo?.linkedin} style={styles.link}>
                            LinkedIn
                        </Link>
                    </View>


                    <View style={styles.item}>
                        <Image src={webbIcon} style={styles.icon} />
                        <Link src={savedData?.personalinfo?.portfolio} style={styles.link}>
                            Portfolio
                        </Link>
                    </View>


                    <View style={styles.item}>
                        <Image src={pinIcon} style={styles.icon} />
                        <Text style={styles.text}>{savedData?.personalinfo?.address}</Text>
                    </View>
                </View>




                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>PROFESSIONAL SUMMARY</Text>
                    <Text style={styles.text}>
                        {savedData?.personalinfo?.summary || 'Add your summary here.'}
                    </Text>
                </View>

                {/* Work Experience */}   : "",

                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>
                        WORK EXPERIENCE
                    </Text>
                    {savedData?.experience?.length > 0 ? (
                        savedData.experience.map((exp, idx) => {
                            const { companyname, startDate, endDate, location, description, role } = exp;
                            return (
                                <View key={idx}>
                                    <Text style={styles.jobTitle}>
                                        {role} – {companyname}
                                    </Text>
                                    <Text style={styles.techskill}>
                                        {startDate} – {endDate} | {location}
                                    </Text>
                                    <Text style={styles.jobDesc}>{description}</Text>
                                </View>
                            );
                        })
                    ) : (
                        <Text style={styles.text}>No experience added yet.</Text>
                    )}
                </View>


                {/* Education   */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>EDUCATION</Text>
                    {savedData?.education?.length > 0 ? (
                        savedData.education.map((edu, idx) => {
                            const { collegename, stream, startdate, enddate } = edu
                            return (
                                <View key={idx}>
                                    <Text style={styles.text}>{collegename}</Text>
                                    <Text style={styles.text}>{stream} ({startdate} – {enddate})</Text>
                                </View>
                            );
                        })
                    ) : (
                        <Text style={styles.text}>No education data provided..</Text>
                    )}
                </View>

                {/* Projects */}
                <View>
                    <Text style={[styles.subheading, styles.border, styles.margin]}>PROJECTS</Text>
                    {savedData?.projects?.length > 0 ? savedData.projects.map((proj, idx) => (

                        <View key={idx}>
                            <Text style={styles.jobTitle}>{proj.projectTitle}</Text>
                            <Text style={styles.techskill}>{proj.techSkills}</Text>
                            <View style={[styles.itemsCcenter]}>
                                <View style={styles.item}>
                                    
                                    <Link src={proj?.githubRepo} style={styles.link}>
                                        GitHub
                                    </Link>
                                </View>
                                <View style={styles.item}>
                                   
                                    <Link src={proj?.projectLink} style={styles.link}>
                                        Live Demo
                                    </Link>
                                </View>
                            </View>
                            <Text style={styles.jobDesc}>{proj.projectDescription || 'Project description not added.'}</Text>
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
