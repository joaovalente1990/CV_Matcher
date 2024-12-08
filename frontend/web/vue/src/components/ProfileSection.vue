<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Profile Section
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#parentAccordion">
            <div class="accordion-body">
                <div class="row mb-3">
                    <div class="col-sm-3 text-left">
                        <label>Photo filename:</label>
                    </div>
                    <div class="col-sm-9">
                        <input id="photoFile" type="text" class="form-control" >
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3 text-left">
                        <label>Name:</label>
                    </div>
                    <div class="col-sm-9">
                        <input id="name" type="text" class="form-control" >
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3 text-left">
                        <label>City:</label>
                    </div>
                    <div class="col-sm-9">
                        <input id="city" type="text" class="form-control" >
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3 text-left">
                        <label>Country:</label>
                    </div>
                    <div class="col-sm-9">
                        <input id="country" type="text" class="form-control" >
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3 text-left">
                        <label>Mobile Phone:</label>
                    </div>
                    <div class="col-sm-9">
                        <input id="mobilePhone" type="text" class="form-control" >
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3 text-left">
                        <label>Email:</label>
                    </div>
                    <div class="col-sm-9">
                        <input id="email" type="text" class="form-control" >
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3 text-left">
                        <label>Github:</label>
                    </div>
                    <div class="col-sm-9">
                        <input id="github" type="text" class="form-control" >
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