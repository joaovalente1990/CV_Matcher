<template>
    <div class = "container">
        <div class="row mb-3">
            <h1 class="mb-4 mt-2">CV converter v1.0</h1>
        </div>
        <div class="row mb-3 ml-1 mx-auto">
            <div class="col-sm-3 text-left">
                <label>Input file filename:</label>
            </div>
            <div class="col-sm-9">
                <input id="inputFile" type="text" class="form-control" >
            </div>
        </div>
        <div class="row mb-5 mx-auto">
            <div class="col-sm-3 text-left">
                <label>Output file filename:</label>
            </div>
            <div class="col-sm-9">
                <input id="outputFile" type="text" class="form-control" >
            </div>
        </div>
        <div class="accordion mb-4" id="parentAccordion">
            <ProfileSection/>
            <SummarySection/>
            <ExperienceSection/>
            <EducationSection/>
            <SkillsSection/>
            <LanguagesSection/>
            <CertificatesSection/>
        </div>
        <div class="row">
                <div class="col-sm-8">
                </div>
                <div class="col-sm-4">
                    <button id="generatePdfBtn" type="button" class="btn btn-primary text-white float-end">Generate PDF</button>
                </div>
        </div>
    </div>
    
</template>

<script>

import ProfileSection from "../components/ProfileSection";
import SummarySection from "../components/SummarySection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import LanguagesSection from "../components/LanguagesSection";
import CertificatesSection from "../components/CertificatesSection";

export default {
    props: {
    },
    data(){

        return {

        }

    }, 
    computed: {

    },
    watch: {

    },
    components: {
        ProfileSection,
        SkillsSection,
        SummarySection,
        ExperienceSection,
        EducationSection,
        LanguagesSection,
        CertificatesSection
    },
    created(){

    }
}

</script>

<style scoped>
.form-control{
    text-align: left;
}
</style>