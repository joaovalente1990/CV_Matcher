<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Languages
            </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#parentAccordion">
            <div class="accordion-body" id="accordionLanguages">
                <div class="row mb-3">
                    <div class="col-sm-2 text-left">
                        <label>Number of items:</label>
                    </div>
                    <div class="col-sm-2">
                        <input id="languageFieldsNo" type="text" class="form-control" >
                    </div>
                    <div class="col-sm-2">
                        <button id="languageBtn" type="button" class="btn btn-primary float-end text-white" onclick="generateExperienceFields(event)">Generate Fields</button>
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