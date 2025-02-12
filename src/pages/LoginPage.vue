<template>
    <main class="login__main">
        <h1>Login page</h1>
        <form @submit.prevent="submitHandler">
            <section>
                <article>
                    <label for="email"></label>
                    <input 
                        v-model="data.email"
                        id="email"
                        type="email"
                        placeholder="Entrez votre email"
                        class="input"
                    >
                    {{ error.errorEmail }}
                </article>
                <article>
                    <label for="password"></label>
                    <input 
                        v-model="data.password"
                        id="password"
                        type="password"
                        placeholder="Entrez votre mot de passe"
                        class="input"
                    >
                </article>
            </section>
            <section>
                <button
                    type="submit"
                    class="button is-primary"
                >Valider</button>
                <button
                    type="reset"
                    class="button is-danger"
                >Réinitialiser</button>
            </section>
        </form>
    </main>
</template>


<script setup lang="ts">
import { reactive, watch } from 'vue';

const data = reactive({
    email: '',
    password: ''
})

const error = reactive({
    errorEmail: '',
    errorPassword: ''
})

watch(data, (val) => {
    console.log('Changement')
})

const isUserInputValid = (input:string): boolean => {
    const pattern = new RegExp(".{1,30}@.{1,10}\..{1,5}$")
    return pattern.test(input)
}

const submitHandler = () => {
    error.errorEmail = isUserInputValid(data.email)
        ? 'Email valide'
        : 'Email incorrect'
}
    
</script>

<style lang="scss" scoped>
.login__main{

}
</style>