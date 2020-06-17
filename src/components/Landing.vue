<template>
    <div class="landing">

        <div v-if="isMobile" class="bg-container">
            <div class="bg-back" data-rellax-speed="-7"></div>
            <div class="bg-front" data-rellax-speed="2"></div>
        </div>

        <div v-else class="bg-container">
            <div class="bg-back" data-rellax-speed="-7"></div>
            <div class="bg-front" data-rellax-speed="2"></div>
        </div>

        <div class="landing-container">
            <div class="landing-header">
                <h1>Игра не на жизнь,<br>а на&nbsp;мерч</h1>
                <p>Не прошло и полугода от нового года. <br>Это самый свежий мерч!</p>
            </div>

            <h3>Смотрите, что&nbsp;есть</h3>
            <div class="merch">
                <div class="col">
                    <div class="merch-img"></div>
                    <div class="merch-title">Кардхолдер</div>
                    <div class="merch-description">Одёжка для карты</div>
                </div>
                <div class="col">
                    <div class="merch-img"></div>
                    <div class="merch-title">Сумка</div>
                    <div class="merch-description">На пояс</div>
                </div>
                <div class="col">
                    <div class="merch-img"></div>
                    <div class="merch-title">Носки</div>
                    <div class="merch-description">А точнее, целая пара</div>
                </div>
            </div>

            <div class="game-section">
                <div class="col">
                    <img src="@/assets/demo.gif" alt="">
                </div>
                <div class="col">
                    <h3>Конечно, подарим</h3>
                    <p>За то, что сыграете три в ряд — великий и&nbsp;красивый тайм-киллер</p>
                    <p>Зарабатывайте очки, собирая как можно больше одинаковых стрелочек подряд</p>
                    <p>Среди набравших 10&nbsp;000 очков мы разыграем 10 паков: сумка&nbsp;+ носки&nbsp;+ кардхолдер</p>
                    <p>Итоги розыгрыша объявим 29 февраля</p>

                    <div class="play-btn" @click="onCodeSent($event)">Играть</div>
<!-- 
                    <div class="stampede-placeholder">
                        <stampede @codeSent="onCodeSent($event)" :fixedutm="utm" />
                    </div> -->
                </div>
            </div>

            <div class="about-rocket">
                <h3>Рокетбанк − это:</h3>
                <div class="rocket-card"></div>
                <div class="row">
                    <div class="col">
                        <div class="about-title">Бесплатная карта</div>
                        <div class="about-text">Мы не берём комиссию за выпуск, доставку и&nbsp;обслуживание карты</div>
                    </div>
                    <div class="col">
                        <div class="about-title">Выгодный кешбэк</div>
                        <div class="about-text">Кешбэк до 20% у партнёров и 1% с&nbsp;остальных покупок</div>
                    </div>
                    <div class="col">
                        <div class="about-title">Процент на остаток</div>
                        <div class="about-text">Каждый месяц начисляем 4,5% годовых в&nbsp;рублях на&nbsp;любой остаток по&nbsp;карте</div>
                    </div>
                </div>
                <a href="https://rocketbank.ru/welcome/try-now/" target="_blank" class="get-card-btn">Заказать карту</a>
                <p class="cities"><strong>Бесплатно доставим карту в города:</strong> Москва, Санкт-Петербург, Барнаул, Волгоград, Воронеж, Екатеринбург, Ижевск, Иркутск, Казань, Калининград, Краснодар, Красноярск, Набережные Челны, Нижний Новгород, Новосибирск, Омск, Оренбург, Пермь, Ростов-на‑Дону, Самара, Саратов, Сочи, Тольятти, Томск, Тула, Тюмень, Уфа, Челябинск и&nbsp;Ярославль</p>
            </div>
            <a href="#">Узнать больше о тарифе</a>
            <p class="license">КИВИ Банк (АО), qiwi.com, лицензия Банка России № 2241 от 22.01.2015 филиал Рокетбанк.</p>
            <a href="#">Условия акции</a>
        </div>
    </div>
</template>
<script>

import Rellax from 'rellax'
export default {
    name: 'landing',
    data () {
        return {
        }
    },
    computed: {
        isMobile() {
            return window.innerWidth < 1250
        },
        utm() {
            return window.location.search
        }
    },
    mounted() {  
        let front = new Rellax('.bg-front', {
            breakpoints: [],
            vertical: true,
            horizontal: false
        })
        let back = new Rellax('.bg-back', {
            breakpoints: [],
            vertical: true,
            horizontal: false
        })
    },
    methods: {
        onCodeSent(res) {
            this.$emit('codeSent', res)
        },
    }
}
</script>
<style lang="scss">

.bg-front, .bg-back {
    position: absolute;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 0;
}
.landing-container {
    color: #B4DDE4;
}

.landing a { 
    display: block;
    color: inherit;
    text-align: center;
    text-decoration: underline;
}

.landing-header, .merch {
    z-index: 1;
}

.landing {
    .stampede-wrapper.vertical {
        @media (min-width: 1250px) {
            margin-left: -20px;
            margin-bottom: 200px;
        }
        @media (max-width: 1249px) {
            width: auto;
            max-width: unset;
            min-height: 300px;
            margin-left: -20px;
            margin-right: -20px;
            margin-bottom: 139px;
        }
        .input-container, 
        .code {
            box-shadow: none;
        }
    }
}

@media (min-width: 1250px) {
    .bg-front {
        top: -53px;
        left: 604px;
        width: 866px;
        height: 906px;
        background-image: url('~@/assets/hanged-arrows-front.png');
    }
    .bg-back {
        top: -40px;
        left: 858px;
        width: 514px;
        height: 597px;
        background-image: url('~@/assets/hanged-arrows-back.png');
    }
    .bg-container {
        position: relative;
        width: 1200px;
        margin: 0 auto 40px;
    }
    .landing-container {
        position: relative;
        width: 1200px;
        margin: 0 auto 40px;
        .landing-header {
            padding-bottom: 267px;
            h1 {
                margin-top: 272px;
                margin-bottom: 30px;
                font-size: 72px;
                line-height: 85px;
                font-weight: 600;
                letter-spacing: -2.25px;
            }
            p {
                font-size: 18px;
                line-height: 1.3;
            }
        }
        h3 {
            margin-bottom: 51px;
            text-align: center;
            letter-spacing: -1.93px;
            font-size: 50px;
            line-height: 1.25;
        }
    }
    .merch {
        width: 940px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto 162px;
        .col {
            width: 279px;
            text-align: center;
        }
        &-img {
            width: 100%;
            height: 251px;
            margin-bottom: 30px;
            background: #D8D8D8;
            border-radius: 10px;
        }
        &-title {
            font-weight: 600;
            font-size: 25px;
            margin-bottom: 10px;
            letter-spacing: -1.2px;
        }
        &-description {
            font-size: 18px;
            letter-spacing: -0.87px;
        }
    }
    .game-section {
        display: flex;
        h3 {
            margin-bottom: 25px;
            text-align: left;
            font-size: 40px;
            line-height: 1.75;
        }
        .col {
            p {
                font-size: 18px;
                margin-bottom: 20px;
            }
            &:nth-of-type(1) { 
                width: 591px;
                height: 451px;
                margin-right: 113px;
            }
            &:nth-of-type(2) { 
                width: 400px;   
            }
        }
        .play-btn {
            display: inline-block;
            width: 220px;
            height: 70px;
            margin-top: 50px;
            margin-bottom: 200px;
            background: #01F185;
            box-shadow: 0 0 13px 0 rgba(64,253,1,0.46);
            border-radius: 5px;
            font-size: 20px;
            color: #000;
            letter-spacing: -0.56px;
            text-align: center;
            line-height: 70px;
        }
    }
    .about-rocket {
        h3 {
            margin-bottom: 77px;
            text-align: center;
            font-size: 40px;
            line-height: 1.75;
        }
        .rocket-card {
            width: 502px;
            height: 319px;
            margin: 0 auto 94px;
            background-image: url('~@/assets/card.png');
            background-position: center;
            background-size: contain;
        }
        .row {
            margin-bottom: 50px;
        }
        .col {
            width: 30%;
        }
        .about-title {
            font-size: 30px;
            letter-spacing: -1.45px;
            line-height: 46px;
            font-weight: 600;
        }
        .about-text {
            font-size: 18px;
            letter-spacing: -0.47px;
            line-height: 24px;
        }
        .get-card-btn {
            display: block;
            width: 220px;
            height: 70px;
            margin: 0 auto 114px;
            background: #01F185;
            box-shadow: 0 0 13px 0 rgba(64,253,1,0.46);
            border-radius: 5px;
            font-size: 18px;
            font-weight: 600;
            color: #000;
            letter-spacing: -0.56px;
            text-align: center;
            line-height: 70px;
            text-decoration: none;
        }
    }
    .cities, .license {
        width: 860px;
        margin: 0 auto 20px;
        text-align: center;
    }
    .landing a:nth-of-type(1) {
        margin-bottom: 87px;
    }
}

@media (max-width: 1249px) {
    .bg-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: .35;
    }
    .bg-front, 
    .bg-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: top center;
    }
    .bg-front {
        background-image: url('~@/assets/hanged-arrows-front.png');
        background-size: 123%;
    }
    .bg-back {
        background-image: url('~@/assets/hanged-arrows-back.png');
        background-size: 72%;
        background-position-x: 91%;
    }
    .landing-container {
        position: relative;
        padding: 32px 34px 30px;
        .landing-header {
            text-align: center;
            h1 {
                margin-top: 144px;
                margin-bottom: 15px;
                margin-left: -40px;
                margin-right: -40px;
                font-size: 36px;
                line-height: 49px;
                font-weight: 600;
                letter-spacing: -1.6px;
            }
            p {
                margin-bottom: 119px;
                font-size: 18px;
                line-height: 1.3;
                letter-spacing: -.47px;
            }
        }
        h3 {
            padding: 0 20px;
            margin-bottom: 31px;
            text-align: center;
            letter-spacing: -1.31px;
            font-size: 34px;
            line-height: 40px;
        }
    }
    .merch {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto 20px;
        .col {
            width: auto;
            text-align: center;
        }
        &-img {
            max-width: 250px;
            height: 251px;
            margin: 0 auto 30px;
            background: #D8D8D8;
            border-radius: 10px;
        }
        &-title {
            font-weight: 600;
            font-size: 25px;
            margin-bottom: 10px;
            letter-spacing: -1.2px;
        }
        &-description {
            margin-bottom: 34px;
            font-size: 18px;
            letter-spacing: -0.87px;
        }
    }
    .game-section {
        display: flex;
        flex-direction: column;
        h3 {
            padding: 0;
            margin-bottom: 25px;
            text-align: left;
            font-size: 27px;
            line-height: 1.75;
        }
        .col {
            p {
                font-size: 18px;
                margin-bottom: 20px;
            }
            &:nth-of-type(1) { 
                width: auto;
                margin-left: -34px;
                margin-right: -34px;
                img {
                    display: block;
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                    margin-bottom: 66px;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
            &:nth-of-type(2) { 
                width: 100%;   
            }
        }
        .play-btn {
            display: inline-block;
            width: 100%;
            height: 70px;
            margin-top: 35px;
            margin-bottom: 139px;
            background: #01F185;
            box-shadow: 0 0 13px 0 rgba(64,253,1,0.46);
            border-radius: 5px;
            font-size: 20px;
            color: #000;
            letter-spacing: -0.56px;
            text-align: center;
            line-height: 70px;
        }
    }
    .about-rocket {
        h3 {
            margin-bottom: 43px;
            text-align: center;
            font-size: 34px;
        }
        .rocket-card {
            height: 177px;
            margin: 0 auto 66px;
            background-image: url('~@/assets/card.png');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .row {
            flex-direction: column;
            margin-bottom: 40px;
        }
        .col {
            width: 100%;
            margin-bottom: 29px;
        }
        .about-title {
            margin-bottom: 10px;
            font-size: 30px;
            letter-spacing: -1.45px;
            line-height: 46px;
            font-weight: 600;
        }
        .about-text {
            font-size: 18px;
            letter-spacing: -0.47px;
            line-height: 24px;
        }
        .get-card-btn {
            display: block;
            height: 70px;
            margin: 0 auto 65px;
            background: #01F185;
            box-shadow: 0 0 13px 0 rgba(64,253,1,0.46);
            border-radius: 5px;
            font-size: 18px;
            font-weight: 600;
            color: #000;
            letter-spacing: -0.56px;
            text-align: center;
            line-height: 70px;
            text-decoration: none;
        }
    }
    .cities, .license {
        margin-bottom: 18px;
        text-align: center;
    }
    .landing a:nth-of-type(1) {
        margin-bottom: 64px;
    }
}
</style>
