<template>
    <main class="login__main">
        <h1>Login page</h1>
        <form @submit.prevent="submitHandler">
            <section>
                <article>
                    <label for="email"></label>
                    <input 
                        v-model="email"
                        id="email"
                        type="email"
                        placeholder="Entrez votre email"
                        class="input"
                    >
                </article>
                <article>
                    <label for="password"></label>
                    <input 
                        v-model="password"
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
import { ref, watch } from 'vue';
import inputValidator from '../utils/input-validator';
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref('')
const password = ref('')

watch(email, (val) => {
    console.log(val, inputValidator(val, 'email'))
})

watch(password, (val) => {
    console.log(val, inputValidator(val, 'password'))
})

// const isUserInputValid = (input:string): boolean => {
//     const pattern = new RegExp(".{1,30}@.{1,10}\..{1,5}$")
//     return pattern.test(input)
// }

const submitHandler = async () => {
    const result = await fetch('users.json')
    const users = await result.json()
    console.log(users)

    const user = users.find((user) => user.email == email.value)
    if(!user){
        alert('Utilisateur non trouvé')
        return
    }
    if(!(user.password == password.value)){
        alert('Mot de passe incorrect')
        return
    }
    router.push('session/' + user.id)
}
    
</script>

<style lang="scss" scoped>
.login__main{

}
</style>