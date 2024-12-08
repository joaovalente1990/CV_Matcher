
const fs = require('fs');
const path = require('path');
const latex = require('node-latex')
const prompt = require('prompt-sync')({sigint: true});
const { app, BrowserWindow, ipcMain  } = require('electron');
const exp = require('constants');

let inputFile, outputFile, content, summary;
let name, city, country, mobilePhone, email, github;
let win;
let experiences = [], educations = [], skills = {}, languages = [];

function createWindow() {
   win = new BrowserWindow({ width: 600, 
                             height: 650,
                             webPreferences: {
                                nodeIntegration: false,
                                contextIsolation: true, 
                                enableRemoteModule: false,
                                preload: path.join(__dirname, 'app', 'preload.js')
                            }
                        })
   win.loadFile(path.join(__dirname, 'app', 'index.html'));
   win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  })

}

function addPackages() {

    content = '\\documentclass[12pt]{article} \n' +
                          '\\usepackage{geometry} \n' +
                          '\\usepackage{graphicx} \n' + 
                          '\\usepackage{fontawesome} \n' + 
                          '\\usepackage{titlesec}';

    fs.writeFileSync(inputFile, content);
}

function addPreamble(){

    content +=  '\\geometry\{margin=1in\} \n' +
               '\\setcounter\{secnumdepth\}\{0\} \n' +
               '\\setlength\{\\parindent\}\{0pt\} \n'+
               '\\titleformat\{\\section\}\n' +
               '\{\\normalfont\\small\\bfseries\}\{\\thesection\}\{1em\}\{\}\[\{\\titlerule\[0\.8pt\]\}\]';

    fs.writeFileSync(inputFile, content);

}

function addBeginDoc(){

    content += '\\begin{document} \n';
    fs.writeFileSync(inputFile, content);
}


function addProfileSection(){
    
    content +=  '\\begin\{tabular\}\{p\{0.2\\textwidth\} p\{0.8\\textwidth\}\}\n' +
                '\\vspace\{0pt\} \\includegraphics\[width = 0.17\\textwidth\]\{' + path.join(__dirname, 'input', photoFile) + '\} \& \\vspace\{0pt\} \\huge\\textbf\{' + name + '\} \\vspace\{3pt\} \\newline \\small\\textbf\{' + city + ', ' + country + '\} \\vspace\{6pt\}\\newline \\faPhone \\hspace\{0.06em\} ' + mobilePhone + '\\newline \\faEnvelope \\hspace\{0.06em\} ' + email + '  \\faGithub \\hspace\{0.06em\}' + github + '\n' +
                '\\end{tabular} \n';

    fs.writeFileSync(inputFile, content);
}

function addSummarySection(){
   
    content +=  '\\section\*\{SUMMARY\} \n' + 
                summary;

    fs.writeFileSync(inputFile, content);
}

function addExperienceSection(){
  content +=  '\\section\*\{WORK EXPERIENCE\} \n' +
              '\\begin\{itemize\} \n';

  experiences.forEach(experience => {
    content += '\\item \\textbf\{' + experience.position + ' at ' + experience.company + '} \(' + experience.dateFrom + ' - ' + experience.dateTo + '\n' + '\\\\';

    if(experience.projects.length > 1){
      content += '\\begin\{enumerate\}' + '\n';

      experience.projects.forEach(project => {
        content += '\\item ' + project.description + '\n' +
                   '\\\\ \n' +
                   '\\textbf\{' + project.technologies + '\}';
      })

      content += '\\end\{enumerate\}';

    } else {
      experience.projects.forEach(project => {
        content += project.description + '\n' +
                   '\\\\ \n' +
                   '\\textbf\{' + project.technologies + '\}';
      });
    }

  });

  content += '\\end\{itemize\}';

fs.writeFileSync(inputFile, content);
}

function addEducationSection(){
  content +=  '\\section\*\{EDUCATION\} \n' +
              '\\begin\{itemize\} \n';

  educations.forEach(education => {
    content += '\\item \\textbf\{' + education.degree + ' in ' + education.course + ' at ' + education.university + '\(' + education.dateFrom + ' - ' + experience.dateTo + ') \n' + 
               '\\\\';

    if(education.thesis != null){
      content += '\\textbf\{Thesis : ' + education.thesis + '\n';
    }
  });

  content += '\\\\ \n' +
              education.description + '\n' +
              '\\\\' +
              '\\textbf\{Technologies used\: ' + education.technologies + '\n';


  content += '\\end\{itemize\}';

  fs.writeFileSync(inputFile, content);
}

function addSkills(){
  content +=  '\\section\*\{SKILLS\} \n' +
              '\\begin\{itemize\} \n' + 
              '\\item ' + skills.languages + '\n' +
              '\\item ' + skills.frameworks + '\n' +
              '\\item ' + skills.devops + '\n' +
              '\\item ' + skills.dbs + '\n' +
              '\\item ' + skills.vcontrol + '\n' +
              '\\item ' + skills.methodologies + '\n' +
              '\\end\{itemize\}';

  fs.writeFileSync(inputFile, content);
  
}

function addLanguages(){
  content +=  '\\section\*\{LANGUAGES\} \n' +
              '\\begin\{itemize\} \n';

  languages.forEach(language => {
    content += '\\item ' + language.language;
  })

  content += '\\end\{itemize\}';

  fs.writeFileSync(inputFile, content);
}

function addCertifications(){
  content +=  '\\section\*\{CERTIFICATIONS\} \n' +
              '\\begin\{itemize\} \n';

  certificates.forEach(certificate => {
    content += '\\textbf\{' + certificate.title + ' - ' + certificate.instructor + ' - ' + certificate.platform + '} | ' + certificate.date + '\n';
  });

  content += '\\end\{itemize\}';
  
  fs.writeFileSync(inputFile, content);
}


function addEndDoc(){

    content += '\\end{document} \n';
    fs.writeFileSync(inputFile, content);
}

function generatePdf(){
    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);
    const pdf = latex(input);

    pdf.pipe(output);
    pdf.on('error', err => console.error(err));
    pdf.on('finish', () => console.log('PDF generated!'));
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('set-cv', (event, data) => {
  handleSetCv(data);
 
  addPackages();
  addPreamble();
  addBeginDoc();
  addProfileSection();
  addSummarySection();
  addExperienceSection();
  addEducationSection();
  addSkills();
  addLanguages();
  addCertifications();
  addEndDoc();
  generatePdf();
})

function handleSetCv(data){
  inputFile = path.join(__dirname, 'input', data.inputFile);
  outputFile = path.join(__dirname, 'output', data.outputFile);
  photoFile = data.photoFile;
  name = data.name;
  city = data.city;
  country =  data.country;
  mobilePhone = data.mobilePhone;
  email = data.email;
  github = data.github;
  summary = data.summary;
  experiences = data.experiences;
  educations = data.educations;
  skills = data.skills;
  languages = data.languages;
  certificates = data.certificates;
}


