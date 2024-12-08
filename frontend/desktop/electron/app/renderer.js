const setButton = document.getElementById('generatePdfBtn')

setButton.addEventListener('click', () => {
    let cv = {inputFile: null, outputFile: null, photoFile: null, name: null, city: null, country: null, mobilePhone: null, email: null, github: null, experiences: [], educations: [], skills: {}, languages: [], certificates: []};
   
    //files
    const inputFile = document.getElementById("inputFile").value;
    const outputFile = document.getElementById("outputFile").value;

    //profile
    const photoFile = document.getElementById("photoFile").value;
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const mobilePhone = document.getElementById("mobilePhone").value;
    const email = document.getElementById("email").value;
    const github = document.getElementById("github").value;
    const summary = document.getElementById("summary").value;

    //experience
    const experienceFieldsNo = document.getElementById("experienceFieldsNo");
    const jobPositionsElems = document.getElementsByClassName("jobPosition");
    const companiesElems = document.getElementsByClassName("company");
    const datesFromElems = document.getElementsByClassName("dateFrom");
    const datesToElems = document.getElementsByClassName("dateTo");
    const projectsNoElems = document.getElementsByClassName("projectsNo");

    //project
    const projectDescriptionsElems = document.getElementsByClassName("projDescription");
    const projectTechsElems = document.getElementsByClassName("projTech");

    //education
    const educationFieldsNo = document.getElementById("educationFieldsNo");
    const degrees = document.getElementsByClassName("degree");
    const courses = document.getElementsByClassName("course");
    const universities = document.getElementsByClassName("university");
    const thesis = document.getElementsByClassName("thesis");
    const edDescr = document.getElementsByClassName("edDescription");
    const edTechs = document.getElementsByClassName("educationTech");
    const edDatesFrom = document.getElementsByClassName("edDateFrom");
    const edDatesTo = document.getElementsByClassName("edDateTo");

    //skills
    const progLangs = document.getElementById("languages");
    const frameworks = document.getElementById("frameworks");
    const devops = document.getElementById("devops");
    const dbs = document.getElementById("dbs");
    const vsystems = document.getElementById("vsystems");
    const methodologies = document.getElementById("methodologies");

    //languages
    const languagesFieldsNo = document.getElementById("languagesFieldsNo");
    const languages = document.getElementsByClassName("language");

    //certificates
    const certificatesFieldsNo = document.getElementById("certificatesFieldsNo");
    const certTitles = document.getElementsByClassName("certTitle");
    const certInstructors = document.getElementsByClassName("certInstructor");
    const certPlatforms = document.getElementsByClassName("certPlatform");
    const certDates = document.getElementsByClassName("certDate");


    function setIOFiles(){
        cv.inputFile = inputFile;
        cv.outputFile = outputFile;
    }

    function setProfile(){
        cv.photoFile = photoFile;
        cv.name = name;
        cv.city = city;
        cv.country = country;
        cv.mobilePhone = mobilePhone;
        cv.email = email;
        cv.github = github;
        cv.summary = summary;
    }

    function setExperiences(){
        const expLen = jobPositionsElems.length;
        let projects = [];

        for (let i=0; i<expLen; i++){

            for(let j=0; j<Number.parseInt(projectsNoElems[i].value); j++){
                projects.push({description: projectDescriptionsElems[j].value,
                            technologies: projectTechsElems[j].value
                            })
            }

            cv.experiences.push({position: jobPositionsElems[i].value, 
                company: companiesElems[i].value, 
                dateFrom: datesFromElems[i].value,
                dateTo: datesToElems[i].value,
                projects: projects
            })
        
        }
    }

    function setEducations(){
        const edLen = courses.length;

        for (let i=0; i<edLen; i++){

            cv.educations.push({degree: degrees[i].value, 
                course: courses[i].value, 
                university: universities[i].value,
                dateFrom: edDatesfrom[i].value,
                dateTo: edDatesTo[i].value,
                thesis: thesis[i].value,
                description: edDescr[i].value,
                technologies: edTechs[i].value
            })
           
        }
    }

    function setSkills(){
        const progLangs = document.getElementById("languages");
        const frameworks = document.getElementById("frameworks");
        const devops = document.getElementById("devops");
        const dbs = document.getElementById("dbs");
        const vsystems = document.getElementById("vsystems");
        const methodologies = document.getElementById("methodologies");

        cv.skills = {languages: progLangs.value,
                        frameworks: frameworks.value,
                        devops: devops.value,
                        dbs: dbs.value,
                        vcontrol: vsystems.value,
                        methodologies: methodologies.value}
    }

    function setlanguages(){
        for(let i = 0; i < languages.length; i++){
            cv.languages.push({language: languages[i].value});
        }
    }

    function setCertifications(){
        for (let i=0; i<Number.parseInt(certificatesFieldsNo.value); i++){
            cv.certificates.push({title: certTitles[i].value,
                                  instructor: certInstructors[i].value,
                                  platform: certPlatforms[i].value,
                                  date: certDates[i].value
                                 })
        }
    }

    function run(){
        setIOFiles();
        setProfile();
        setExperiences();
        setEducations();
        setSkills();
        setlanguages();
        setCertifications();
        console.log(cv);
        window.api.setCV(cv);
    }

    run();

  });