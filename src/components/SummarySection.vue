<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Summary
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#parentAccordion">
            <div class="accordion-body">
                <div class="row mb-3">
                    <div class="col-sm-12">
                        <textarea id="summary" name="summary" class="form-control" rows="10" cols="45">
                        </textarea>
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
    created(){

    }
}

</script>

<style scoped>
</style>