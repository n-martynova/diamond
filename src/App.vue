<template>
    <div id="app" :class="current">
        <div class="header">
            <div class="logo" @click="current === 'match3' ? current = 'landing' : ''"></div>
            <div v-if="!faqVisible" class="faq-btn" @click="showFaq">FAQ</div>
        </div>

        <div class="main">
                <landing v-show="current === 'landing'" @codeSent="onCodeSent($event)"/>
                <match3 v-show="current === 'match3'" :token="token" />
        </div>

        <b-modal id="faq-modal" centered scrollable hide-header hide-footer no-fade>
            <div class="close-btn" @click="hideFaq"></div>
            <div class="faq">
                <div class="faq-container">
                    <div class="col">
                        <p class="faq-question">Сколько можно получить очков за игру?</p>
                        <p class="faq-answer">За одиночные цепочки<br>
                            3 в ряд — 100 очков, 4 — 250 очков, 5 — 500 очков 
                            <br><br>
                            За комбо<br>
                            3 по горизонтали и 3 по вертикали — 500 очков<br>
                            3 по горизонтали и 4 по вертикали — 1000
                        </p>

                        <p class="faq-question">А сколько у меня попыток?</p>
                        <p class="faq-answer">Одна, но можно пригласить в игру друга и получить ещё одну попытку. За каждого друга — дополнительная попытка
                        </p>

                        <p class="faq-question">Можно ли сыграть больше раз и получить за это больше призов?</p>
                        <p class="faq-answer">Нет, количество призов ограничено. В розыгрыше будет засчитана попытка, за которую вы набрали больше всего очков
                        </p>
                    </div>
                    <div class="col">
                        <p class="faq-question">Могу ли я участвовать, если у меня Рокет Виртуалка?</p>
                        <p class="faq-answer">Нет, сначала нужно выпустить пластиковую карту. После этого можно участвовать
                        </p>

                        <p class="faq-question">Как я узнаю о победе?</p>
                        <p class="faq-answer">В случае выигрыша мы напишем вам в чат приложения, а также опубликуем ваше имя и почту на этой страничке до 23:59 ХХ&nbsp;февраля
                        </p>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import fancyLog from '@/utils/fancyLog'
import Match3 from '@/components/Match3.vue'
import Landing from '@/components/Landing.vue'
import axios from 'axios'

export default {
    name: 'app',
    components: {
        'match3': Match3,
        'landing': Landing
    },
    data () {
        return {
            token: '',
            // current: 'match3',
            current: 'landing',
            faqVisible: false,
            isClient: false,
            signupUrl: '',
            targetElement: null
        }
    },
    computed: {
        utm() {
            return window.location.search
        }
    },
    created() {
        fancyLog()
    },
    mounted() {
    },
    methods: {
        onCodeSent(res) {
            this.isClient = res.client
            if (!res.client) {
                this.signupUrl = this.utm ? res.signupUrl + this.utm : res.signupUrl
            }
            this.token = res.token
            this.current = 'match3'
        },
        showFaq() {
            this.faqVisible = true
            this.$bvModal.show('faq-modal')
        },
        hideFaq() {
            this.faqVisible = false
            this.$nextTick(() => {
                this.$bvModal.hide('faq-modal')
            })
        }
    }
}
</script>
<style lang="scss">
@import 'styles/fonts.scss';
@import 'styles/main.scss';
@import 'styles/animations.scss';

html {
    background-color: #000;
}

#app {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    padding-bottom: 1px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    overflow-x: hidden;
    &.match3 {
        user-select: none;
    }
}

.logo {
    position: absolute;
    width: 143px;
    height: 16px;
    background: url('~@/assets/logo.svg') no-repeat;
    background-size: contain;
    z-index: 2;
    cursor: pointer;
    @media (min-width: 1250px) {
        top: 50px;
        left: 43px;
    }
    @media (max-width: 1249px) {
        top: 32px;
        left: 23px;
    }
}

.faq-btn {
    position: absolute;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: -0.62px;
    text-align: right;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    text-shadow: -4px 4px 21px #000;
    z-index: 2;

    @media (min-width: 1250px) {
        position: fixed;
        top: 35px;
        right: 43px;
    }
    @media (max-width: 1249px) {
        position: fixed;
        top: 23px;
        right: 22px;
    }
}

.close-btn {
    position: fixed;
    width: 26px;
    height: 34px;
    background: url('~@/assets/close.svg') no-repeat;
    background-size: contain;
    z-index: 2;
    cursor: pointer;
    @media (min-width: 1250px) {
        top: 40px;
        right: 54px;
    }
    @media (max-width: 1249px) {
        top: 28px;
        right: 26px;
    }
}

.play-btn {
    display: block;
    height: 60px;
    background: #01F185;
    box-shadow: 0 0 13px 0 rgba(64,253,1,0.46);
    border-radius: 5px;
    font-size: 20px;
    color: #000;
    letter-spacing: -0.56px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
}

.message {
    @media (max-width: 1249px) {
        padding: 0 20px;
    }
    p {
        max-width: 500px;
        width: 100%;
        margin-bottom: 20px;
        font-family: 'pragmatica';
        line-height: 24px;
        font-size: 18px;
        @media (max-width: 1249px) {
            font-size: 17px;
        }
    }
    .send-btn {
        font-weight: 600;
        &:nth-of-type(2) {
            margin-top: 20px;
        }
    }
}

.faq {
    color: #fff;
}

@media (min-width: 1250px) {
    .landing {
        padding-top: 1px;
    }
    .header {
        position: absolute;
        top: 0;
        width: 100%;
        height: 67px;
        z-index: 2;
    }
    .faq {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-height: -webkit-fill-available;

        .col:nth-of-type(1) {
            margin-right: 50px;
        }
        .faq-container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
        }
        .faq-question {
            margin-bottom: 20px;
            font-size: 30px;
            line-height: 34px;
            letter-spacing: -.87px;
            font-weight: 600;
        }
        .faq-answer {
            margin-bottom: 70px;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: -.52px;
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
}

@media (max-width: 1249px) {
    .header {
        position: absolute;
        top: 0;
        width: 100%;
        height: 67px;
        z-index: 2;
    }
    .faq {
        display: flex;
    }
    .faq-container {
        padding: 98px 24px 0;
        .col {
            width: 100%;
        }
        .faq-question {
            margin-bottom: 20px;
            font-size: 30px;
            line-height: 34px;
            letter-spacing: -.87px;
            font-weight: 600;
        }
        .faq-answer {
            margin-bottom: 70px;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: -.52px;
        }
    }
}
</style>
