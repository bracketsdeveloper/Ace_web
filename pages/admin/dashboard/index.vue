<template>
    <div>
        <DashboardHeader header-name="Dashboard" />
        <button @click="getUser">user</button>
    </div>
</template>

<script>
export default {
    name: 'DashboardPage',
    layout:'AdminDashboardLayout',
    methods:{
        async getUser(){
            await this.$api.get('/auth/view-profile')
        },
    }
}
</script>

<style scoped>


.main-dashboard-counters{
    padding: 10px 20px;
    width: 100%;
}

.main-dashboard-counters .main-dashboard-counters-row{
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.main-dashboard-table-data{
    padding: 10px 20px;
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 30px;
}

.main-dashboard-table-data table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;
    text-align: center;
}

.main-dashboard-table-data table th{
    border-width: 2px 1px !important;
}

.main-dashboard-table-data .editBtn{
    background-color: rgb(141, 121, 5);
    color: white !important;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
}
.main-dashboard-table-data .deleteBtn{
    background-color: rgb(141, 5, 112);
    color: white !important;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;
    outline: none;
    border:none;
    margin-left: 5px;
    transition: all 0.3s ease-in-out;
}

.main-dashboard-table-data .deleteBtn:hover, .main-dashboard-table-data .editBtn:hover{
    box-shadow:2px 2px 6px 0px #818181;
}

.main-dashboard-table-data  .page-item.active .page-link {
    background-color: #68548e;
    border-color: #68548e;
}

.page-link {
    font-size: 20px;
}


</style>