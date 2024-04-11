<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Skills
            </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#parentAccordion">
            <div class="accordion-body" id="accordionSkills">
                <div class="row mb-3">
                    <div class="col-sm-12 text-left">
                        <label>Languages:</label>
                    </div>
                    <div class="col-sm-12">
                        <textarea id="languages" class="form-control" rows="3" cols="45"></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 text-left">
                        <label>Frameworks:</label>
                    </div>
                    <div class="col-sm-12">
                        <textarea id="frameworks" class="form-control" rows="3" cols="45"></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 text-left">
                        <label>Devops:</label>
                    </div>
                    <div class="col-sm-12">
                        <textarea id="devops" class="form-control" rows="3" cols="45"></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 text-left">
                        <label>DBs:</label>
                    </div>
                    <div class="col-sm-12">
                        <textarea id="dbs" class="form-control" rows="3" cols="45"></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 text-left">
                        <label>Version Control:</label>
                    </div>
                    <div class="col-sm-12">
                        <textarea id="vsystems" class="form-control" rows="3" cols="45"></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 text-left">
                        <label>Methodologies:</label>
                    </div>
                    <div class="col-sm-12">
                        <textarea id="methodologies" class="form-control" rows="3" cols="45"></textarea>
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