<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Education
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#parentAccordion">
            <div class="accordion-body" id="accordionEducation">
               <div class="row mb-3">
                    <div class="col-sm-2 text-left">
                        <label>Number of items:</label>
                    </div>
                    <div class="col-sm-2">
                        <input id="educationFieldsNo" type="text" class="form-control" >
                    </div>
                    <div class="col-sm-2">
                        <button id="educationBtn" type="button" class="btn btn-primary float-end text-white" onclick="generateExperienceFields(event)">Generate Fields</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data(){

    },
    computed: {

    },
    watch: {
        
    },
    components: {
    },
    created(){

    }
}

</script>

<style>

</style>