<template>
    <div id="nav">
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="/">BLISS</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/status">Health Status</b-nav-item>
                    <b-nav-item to="/questions">Questions List</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
    router-link{
        color: white;
        text-decoration: none; /* no underline */
    }
</style>
