<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Work Experience
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#parentAccordion">
            <div class="accordion-body" id="accordionExperience">
                <div class="row mb-3">
                    <div class="col-sm-2 text-left">
                        <label>Number of items:</label>
                    </div>
                    <div class="col-sm-2">
                        <input id="experienceFieldsNo" type="text" class="form-control" >
                    </div>
                    <div class="col-sm-2">
                        <button id="experienceBtn" type="button" class="btn btn-primary float-end text-white" onclick="generateExperienceFields(event)">Generate Fields</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props: {
    },
    data(){

    }, 
    computed: {

    },
    watch: {

    },
    created(){
    },
    mounted(){
    }

}

</script>

<style scoped>

</style>