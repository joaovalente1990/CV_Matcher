<template>
    <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Certificates
            </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#parentAccordion">
            <div class="accordion-body" id="accordionCertificates">
                <div class="row mb-3">
                    <div class="col-sm-2 text-left">
                        <label>Number of items:</label>
                    </div>
                    <div class="col-sm-2">
                        <input id="certificateFieldsNo" type="text" class="form-control" >
                    </div>
                    <div class="col-sm-2">
                        <button id="certificateBtn" type="button" class="btn btn-primary float-end text-white" onclick="generateExperienceFields(event)">Generate Fields</button>
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

        return {
    
        }

    },
    computed: {

    },
    watch: {

    }, 
    components: {
    },
    methods: {
        
    },
    created(){
        
    },
    mounted(){   
    }
}

</script>

<style scoped>

</style>