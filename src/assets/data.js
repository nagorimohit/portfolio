export const SUMMARY = {


}

export const SKILLS_TIERS = [
    {
        tier: 'Web',
        skills: [
            { name: 'Angular', versions: '2+', icon: 'angular' },
            { name: 'Vue', versions: '2.x', icon: 'vue' },
            { name: 'React', versions: '16.x', icon: 'react' },
        ]
    },
    {
        tier: 'Mobile',
        skills: [
            { name: 'React Native', versions: '', icon: 'react' },
            { name: 'Ionic', versions: '3.x/4.x', icon: 'ionic' },
            { name: 'Andorid', versions: '19+', icon: 'android' },
        ]
    },
    {
        tier: 'Backend',
        skills: [
            { name: 'Node', versions: '6/8/10/12', icon: 'node' },
            { name: 'Express', versions: '4.x', icon: 'express' },
            { name: 'Spring Boot', versions: '2.x', icon: 'spring-boot' },
        ]
    },
    {
        tier: 'Database',
        skills: [
            { name: 'MySql', versions: '7', icon: 'mysql' },
            { name: 'Mongo', versions: '3.x/4.x', icon: 'mongo' },
        ]
    },
    {
        tier: 'Cloud',
        skills: [
            { name: 'AWS', versions: 'EC2, S3, Lambda, RDS', icon: 'aws' },
            { name: 'GCP', versions: 'Cloud-function, Firestore, Docker, Authentication', icon: 'google-cloud' },
        ]
    },
    {
        tier: 'Other',
        skills: [
            { name: 'C/C++', versions: '', icon: 'c-plus-plus' },
            { name: 'Python', versions: '2/3', icon: 'python' },
            { name: 'Kotlin', versions: '', icon: 'kotlin' },
        ]
    }    
]

export const EXPERIENCE = [
    {
        company: 'Edubrite Inc.',
        role: 'Full Stack Developer',
        duration: 'Nov, 2019 - Present',
        projects: [
            {
                name: 'Frontend',
                role: 'Developing themes in a product (​Edubrite LMS) along with engaged in customizations as per customer requirements'
            }, 
            {
                name: 'Backend',
                role: 'Responsible for building the infrastructure on the backend as well as architecting and incorporating features.'
            }, 
        ]
    },
    {
        company: 'Metacube Software Pvt. Ltd.',
        role: 'Software Engineer',
        duration: 'Jan, 2017 - Nov, 2019',
        projects: [
            {
                name: 'Winsupply',
                role: 'Responsible for handling the internal warehousing of large level Winsupply warehouses My responsibilities include creating integration services which communicate with various stored procedures and views (using Spring Boot), adding features to web applications (using Angular) and mobile applications (using Ionic), maintaining admin dashboard and aggregate module common to every child module, maintaining ionic builds for picking module.'
            }, 
            {
                name: 'BillsUpNow​',
                role: 'BillsUpNow manages all the videos of government bills for a corresponding user so that he can anytime watch them along with their transcript. My responsibilities include creating UI with wireframes (using React), handling the custom wrapper of video player, extracting audio from video and converting it to text.'
            }, 
            {
                name: 'Reboot',
                role: 'Reboot provides one-on-one coaching to the employees. It is an online training for the organisational employees with the analysis of the weaknesses of each and every employee. My responsibilities include UI and functionalities implementation from scratch in mobile and web, Push Notifications using firebase, Local Calendar Sync in mobile, Loggers/Profiling and APIs in Spring-Hibernate Application'
            }, 
            {
                name: 'MotoManager​',
                role: 'MotoManager app is a new, smart way to manage vehicle’s service with individualized offers and discounts, store car maintenance history, and make appointments. My responsibilities include UI Enhancements, functionality flow alteration, centralizing Picasso Crashlytics, maintaining the latest android compatibility and builds.'
            }, 
            {
                name: 'NM Insurance​',
                role: 'TWG NM Insurance is a boat insurance where customers can log their problems and track insurance and vendors can bid and provide services to customers. My responsibilities include the whole process of building the android application from scratch to deploying it on Play Store which includes UI creation, Salesforce SDK integration, API integration, Salesforce notifications, functionalities implementation, Crashalytics, Debug support for salesforce APIs and mobile side'
            }, 
        ],
    }
]