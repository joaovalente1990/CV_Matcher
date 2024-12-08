
const fs = require('fs')
const path = require('path');
const latex = require('node-latex')
const prompt = require('prompt-sync')({sigint: true});

const projectDir = path.dirname(__filename);

let inputFile, outputFile, content, summary;
let name, city, country, mobilePhone, email, github;

const inputDir = path.join(projectDir, 'input');
const outputDir = path.join(projectDir, 'output');

function addMenu(){
    console.log("==============================================================");
    console.log("CV converter v1.0");
    console.log("==============================================================");
    inputFile = prompt('Input file filename: ');
    outputFile = prompt('Output file filename: ');
   
    inputFile = path.join(inputDir, inputFile);
    outputFile = path.join(outputDir, outputFile);
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

    console.log("==============================================================");
    console.log("<< Profile Section >>");
    photoFile = prompt('1. Photo filename: ');
    name = prompt('2. Name: ');
    city = prompt('3. City: ');
    country = prompt('4. Country: ');
    mobilePhone = prompt('5. Mobile Phone: ');
    email = prompt('6. Email: ');
    github = prompt('7. Github: ');
   
    content +=  '\\begin\{tabular\}\{p\{0.2\\textwidth\} p\{0.8\\textwidth\}\}\n' +
                '\\vspace\{0pt\} \\includegraphics\[width = 0.17\\textwidth\]\{' + path.join(projectDir, 'input', photoFile) + '\} \& \\vspace\{0pt\} \\huge\\textbf\{' + name + '\} \\vspace\{3pt\} \\newline \\small\\textbf\{' + city + ', ' + country + '\} \\vspace\{6pt\}\\newline \\faPhone \\hspace\{0.06em\} ' + mobilePhone + '\\newline \\faEnvelope \\hspace\{0.06em\} ' + email + '\\  \\faGithub \\hspace\{0.06em\}' + github + '\n' +
                '\\end{tabular} \n';

    fs.writeFileSync(inputFile, content);
}

function addSummarySection(){

    console.log("==============================================================");
    console.log("<< Summary Section >>");
    summary = prompt('Summary: ');
   
    content +=  '\\section\*\{SUMMARY\} \n' + 
                summary;

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
    
addMenu();
addPackages();
addPreamble();
addBeginDoc();
addProfileSection();
addSummarySection();
addEndDoc();
generatePdf();


